import { View, Text, ScrollView } from "react-native"
import { Header } from "../components/Header"
import { SummaryHeader } from "../components/SummaryHeader"
import { HabitDay, DAY_SIZE } from "../components/HabitDay"
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates"

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimuSummaryDatesSize = 18 * 6
const amountOfDaysToFill = minimuSummaryDatesSize - datesFromYearStart.length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <SummaryHeader />
      <ScrollView decelerationRate={"fast"} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100  }}>
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map((day, indexOnArray) => {
              return (
                <HabitDay key={indexOnArray}/>
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
      </ScrollView>
      
    </View>
  )
}