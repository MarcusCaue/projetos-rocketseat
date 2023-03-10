import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-begining"
import { HabitDay } from "./HabitDay"

const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"]
const datesAvaliable = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7 // 18 semanas
const amountOfDaysToFill = minimumSummaryDatesSize - datesAvaliable.length 

type Summary = {
  id: string, date: string, amount: number, completed: number
}[]

export default function Main() {
  const [ summary , setSummary ] = useState<Summary>([])

  useEffect(() => {
    api.get("/summary").then(response => {  
      setSummary(response.data)
    })
  }, [])

  return (
    <main className="w-full flex">
      <header className="grid grid-rows-7 grid-flow-row gap-3">
        { diasSemana.map((day, indexOnArray) => {
            return (
              <div key={`${day}->${indexOnArray}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                {day}
              </div> 
            )
          })}
      </header>
      <main className="grid grid-rows-7 grid-flow-col gap-3">
          { 
            summary.length > 0 && datesAvaliable.map((date, indexOnArray) => {
              const dayInSummary = summary.find(day => {
                return dayjs(date).isSame(day.date, "day")
              })
              return (
                <HabitDay 
                  date={date}
                  amount={dayInSummary?.amount} 
                  defaultCompleted={dayInSummary?.completed} 
                  key={indexOnArray} 
                />
              ) 
            }) 
          }
          { 
            amountOfDaysToFill > 0 && Array.from({length : amountOfDaysToFill}).map((_, indexOnArray) => {
              return <div key={indexOnArray} className="bg-zinc-900 border-2 border-zinc-800 rounded-lg h-10 w-10 opacity-40 cursor-not-allowed" />
            })  
          }
      </main>
    </main>
  )
}