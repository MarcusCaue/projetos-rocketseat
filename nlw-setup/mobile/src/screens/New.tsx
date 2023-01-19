import { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native"
import { BackButton } from "../components/BackButton"
import { CheckBox } from "../components/CheckBox"
import colors from "tailwindcss/colors"

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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }} >

        <BackButton />

        <Text className="font-extrabold mt-6 text-white text-3xl"> Criar Novo Hábito </Text>

        <Text className="font-semibold mt-6 text-white text-base"> Qual é o seu comprometimento? </Text>
        <TextInput 
        className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500 "
        placeholder="Ex: Academia, Rezar, Ler, Beber Água etc..."
        placeholderTextColor={colors.zinc[400]}/>

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

        <TouchableOpacity activeOpacity={0.7} className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6">
          <Text className="font-semibold text-base text-white ml-2"> Confirmar </Text>
          <Feather name="check" size={20} color={colors.white}/>
        </TouchableOpacity>

      </ScrollView>      
    </View>
  )
}