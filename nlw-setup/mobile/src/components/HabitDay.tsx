import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native"
import clsx from "clsx"

// Cálculo feito para descobrir o tamanho de cada quadrado
const WEEK_DAYS = 7
const SCRENN_HORIZONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get("screen").width / WEEK_DAYS) - (SCRENN_HORIZONTAL_PADDING + 5)

interface HabitDayProps extends TouchableOpacityProps {}

export function HabitDay({...rest} : HabitDayProps ) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      className={clsx("bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"/* , {
        "bg-zinc-900 border-2 border-zinc-800" : percentual === 0,
        "bg-violet-200 border-violet-100": percentual > 0 && percentual < 20,
        "bg-violet-300 border-violet-200": percentual >= 20 && percentual < 40,
        "bg-violet-500 border-violet-400": percentual >= 40 && percentual < 60,
        "bg-violet-700 border-violet-500": percentual >= 60 && percentual < 80,
        "bg-violet-900 border-violet-700": percentual >= 80,
      } */)}
      style={{width: DAY_SIZE, height: DAY_SIZE}} 
      {...rest}
    />
  )
}