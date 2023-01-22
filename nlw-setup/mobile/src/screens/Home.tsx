import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { useState, useEffect, useCallback } from "react"
import { api } from "../lib/axios"
import { View, Text, ScrollView, Alert } from "react-native"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"
import { SummaryHeader } from "../components/SummaryHeader"
import { HabitDay, DAY_SIZE } from "../components/HabitDay"
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates"
import dayjs from "dayjs"

type SummaryProps = {
  id: string,
  date: Date,
  amount: number,
  completed: number
}[]

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimuSummaryDatesSize = 18 * 6
const amountOfDaysToFill = minimuSummaryDatesSize - datesFromYearStart.length

export function Home() {
  const [ loading, setLoading ] = useState(true)
  const [ summary, setSummary ] = useState<SummaryProps | null>(null)
  const { navigate } = useNavigation()

  async function fetchData() {
    setLoading(true)
    try {
      const response = await api.get("/summary")
      setSummary(response.data)
    } catch (error) {
      Alert.alert("Ops...", "Não foi possível carregar o sumário de hábitos.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <SummaryHeader />
      <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100  }}>
        {
            summary &&
            <View className="flex-row flex-wrap">
            {
              datesFromYearStart.map((date, indexOnArray) => {
                const dayWithHabits = summary.find(day => {
                  return dayjs(date).isSame(day.date, "day")
                })

                return (
                  <HabitDay 
                    key={indexOnArray}
                    date={date}
                    amountOfHabits={dayWithHabits?.amount}
                    amountCompleted={dayWithHabits?.completed}
                    onPress={() => navigate("habit", { date: date.toISOString() })}
                  />
                )
              })
            }
            {
              amountOfDaysToFill > 0 && Array.from( { length: amountOfDaysToFill } ).map((_, indexOnArray) => {
                return (
                  <View key={indexOnArray} className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{width: DAY_SIZE, height: DAY_SIZE}}/>
                )
              })
            }
          </View>
        }
      </ScrollView>
      
    </View>
  )
}