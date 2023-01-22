import { View, Text, ScrollView, Alert } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react"

import dayjs from "dayjs"
import clsx from "clsx"

import { BackButton } from "../components/BackButton"
import { ProgressBar } from "../components/ProgressBar"
import { CheckBox } from "../components/CheckBox"
import { HabitIsEmpty } from "../components/HabitIsEmpty"
import { Loading } from "../components/Loading"

import { api } from "../lib/axios"
import { generateProgressPercentage } from "../utils/genereate-progress-percentage"

interface RouteParams {
  date: string
}

interface DayInfoProps {
  completedHabits: string[],
  possibleHabits: {
    id: string,
    title: string
  }[]
}


export function Habit() {
  const [ loading, setLoading ] = useState(true)
  const [ dayInfo, setDayInfo ] = useState<DayInfoProps | null>(null)
  const [ completedHabits, setCompletedHabits ] = useState<string[]>([])

  const route = useRoute()
  const { date } = route.params as RouteParams

  const parsedDate = dayjs(date)
  const isDateInPast = parsedDate.endOf("day").isBefore(new Date())
  const dayOfWeek = parsedDate.format("dddd")
  const dayAndMonth = parsedDate.format("DD/MM")

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get("/day", { params: { date } })
      setDayInfo(response.data)
      setCompletedHabits(response.data.completedHabits)

    } catch (error) {
      console.log(error)
      Alert.alert("Ops", "Não foi possível carregar as informações dos hábitos.")
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`)

      if (completedHabits.includes(habitId)) {
        setCompletedHabits(completedHabits.filter(id => id !== habitId))
      } else {
        setCompletedHabits([...completedHabits, habitId])
      }

    } catch (error) {
      console.log(error)
      Alert.alert("Ops", "Não foi possível atualizar o status dos hábitos.")
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    <Loading />
  }

  const progress = dayInfo?.possibleHabits.length 
  ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length)
  : 0
  
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100  }}>
        
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase ">
          {dayOfWeek}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={progress}/>

        <View className={clsx("mt-6", {
          "opacity-50" : isDateInPast
        })}>
          {
            dayInfo?.possibleHabits 
            &&
            dayInfo.possibleHabits.map(habit => {
              return (
                <CheckBox 
                  key={habit.id} 
                  title={habit.title} 
                  checked={completedHabits.includes(habit.id)} 
                  disabled={isDateInPast}
                  onPress={() => handleToggleHabit(habit.id)}
                />
              )
            })
          }
          {
            dayInfo?.possibleHabits.length === 0 && <HabitIsEmpty /> 
          }
        </View>

        {
          isDateInPast && (
            <Text className="text-white mt-10 text-center"> Não podes editar hábitos de uma data passada. </Text>
          )
        }
      </ScrollView>
    </View>
  )
}