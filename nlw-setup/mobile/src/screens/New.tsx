import { useState } from "react"
import { ScrollView, View, Text, TextInput } from "react-native"
import { BackButton } from "../components/BackButton"
import { CheckBox } from "../components/CheckBox"

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

export function New() {

  const [weekDays, setWeekDays ] = useState<number[]>([])
  
  function handleToggleWeekDays(weekDayIndex : number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} >

        <BackButton />

        <Text className="font-extrabold mt-6 text-white text-3xl"> Criar Novo Hábito </Text>

        <Text className="font-semibold mt-6 text-white text-base"> Qual é o seu comprometimento? </Text>
        <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-violet-500"/>

        <Text className="font-semibold mt-4 mb-3 text-white text-base"> Qual a recorrência? </Text>

        {
          diasDaSemana.map(((day, indexOnArray) => {
            return <CheckBox 
              key={day} 
              title={day} 
              checked={weekDays.includes(indexOnArray)}
              onPress={() => handleToggleWeekDays(indexOnArray)}
            />
          }))
        }

      </ScrollView>      
    </View>
  )
}