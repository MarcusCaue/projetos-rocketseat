import { useState, useEffect } from "react"
import { Feather } from "@expo/vector-icons"
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { BackButton } from "../components/BackButton"
import { CheckBox } from "../components/CheckBox"
import colors from "tailwindcss/colors"
import { api } from "../lib/axios"

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

export function New() {

  const [ title, setTitle ] = useState("")
  const [weekDays, setWeekDays ] = useState<number[]>([])
  
  function handleToggleWeekDays(weekDayIndex : number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim()) {
        Alert.alert("Novo Hábito", "Informe o título do Hábito")
      } else if (weekDays.length === 0) {
        Alert.alert("Novo Hábito", "Escolha a periodicidade")
      } else {
        await api.post("/habits", { title, weekDays }) 

        setTitle("")
        setWeekDays([])
  
        Alert.alert("Novo Hábito", "Hábito criado com sucesso!")
      }

    } catch (error) {
      console.log(error)
      Alert.alert("Ops", "Não foi possível criar um novo hábito")
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
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

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

        <TouchableOpacity activeOpacity={0.7} className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6" onPress={handleCreateNewHabit}>
          <Text className="font-semibold text-base text-white ml-2"> Confirmar </Text>
          <Feather name="check" size={20} color={colors.white}/>
        </TouchableOpacity>

      </ScrollView>      
    </View>
  )
}