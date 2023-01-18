import { View, Text } from "react-native"
import { DAY_SIZE } from "../components/HabitDay"

export function SummaryHeader() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  return (
    <View className = "flex-row mt-6 mb-2">
    {
      weekDays.map((day, indexOnArray) => {
        return (
          <Text 
          className="text-zinc-400 text-xl font-bold text-center mx-1" 
          key={indexOnArray}
          style={{width: DAY_SIZE}}
          > {day} </Text>
        )
      })
    }
    </View>
  )
}