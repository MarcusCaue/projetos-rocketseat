import "../styles/global.css"
import ProgressBar from "./ProgressBar"
import * as Popover from "@radix-ui/react-popover"
import clsx from "clsx"
import dayjs from "dayjs"
import { HabitsList } from "./HabitsList"
import { useState } from "react"

type HabitDayProps = {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date } : HabitDayProps) {
  const [ completed, setCompleted ] = useState(defaultCompleted)

  const percentual = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format("DD/MM")
  let dayOfWeek = dayjs(date).format("dddd")
  dayOfWeek = dayOfWeek.replace(dayOfWeek[0], dayOfWeek[0].toUpperCase())

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
   <Popover.Root>
      <Popover.Trigger 
      className={
        clsx("border-2 rounded-lg h-10 w-10 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background-page ",  { 
        // Permite a criação de classes condicionais
        // { classe a ser aplicada } : condição quando for true
        "bg-zinc-900 border-zinc-800" : percentual === 0,
        "bg-violet-200 border-violet-100": percentual > 0 && percentual < 20,
        "bg-violet-300 border-violet-200": percentual >= 20 && percentual < 40,
        "bg-violet-500 border-violet-400": percentual >= 40 && percentual < 60,
        "bg-violet-700 border-violet-500": percentual >= 60 && percentual < 80,
        "bg-violet-900 border-violet-700": percentual >= 80,
       })} />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col ">
          <span className="font-semibold text-zinc-400"> {dayOfWeek} </span>
          <span className="mt-1 font-extrabold leading-tight text-3xl"> {dayAndMonth} </span>
          <ProgressBar progress={percentual} />

          <HabitsList date={date} onCompletedChange={handleCompletedChanged}/>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}