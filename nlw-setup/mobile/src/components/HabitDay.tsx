import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native"
import { generateProgressPercentage } from "../utils/genereate-progress-percentage"
import clsx from "clsx"
import dayjs from "dayjs"

// Cálculo feito para descobrir o tamanho de cada quadrado
const WEEK_DAYS = 7
const SCRENN_HORIZONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get("screen").width / WEEK_DAYS) - (SCRENN_HORIZONTAL_PADDING + 5)

interface HabitDayProps extends TouchableOpacityProps {
  amountOfHabits?: number,
  amountCompleted?: number,
  date: Date
}

export function HabitDay({amountOfHabits = 0, amountCompleted = 0, date, ...rest} : HabitDayProps ) {
  const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0
  const today = dayjs().startOf("day").toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (  
    <TouchableOpacity 
      activeOpacity={0.7} 
      className={clsx("rounded-lg border-2 m-1", {
        "bg-zinc-900 border-2 border-zinc-800" : 
        amountAccomplishedPercentage === 0,

        "bg-violet-200 border-violet-100": 
        amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,

        "bg-violet-300 border-violet-200": 
        amountAccomplishedPercentage >= 20 && amountAccomplishedPercentage < 40,
        
        "bg-violet-500 border-violet-400": 
        amountAccomplishedPercentage >= 40 && amountAccomplishedPercentage < 60,
        
        "bg-violet-700 border-violet-500": 
        amountAccomplishedPercentage >= 60 && amountAccomplishedPercentage < 80,
        
        "bg-violet-900 border-violet-700": 
        amountAccomplishedPercentage >= 80,
        
        "border-gray-300": isCurrentDay
      })}
      style={{width: DAY_SIZE, height: DAY_SIZE}} 
      {...rest}
    />
  )
}