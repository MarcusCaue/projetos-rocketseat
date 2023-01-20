import "../styles/global.css"
import ProgressBar from "./ProgressBar"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Popover from "@radix-ui/react-popover"
import clsx from "clsx"
import { Check } from "phosphor-react"

type HabitDayProps = {
  completed: number
  amount: number
}

export function HabitDay(props : HabitDayProps) {
  const percentual = Math.round((props.completed / props.amount) * 100)
  const stylesSpanCheckBox = "font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"

  return (
   <Popover.Root>
      <Popover.Trigger className={clsx("bg-zinc-900 border-2 border-zinc-800 rounded-lg h-10 w-10",  { 
        // Permite a criação de classes condicionais
        // { classe a ser aplicada } : condição quando for true
        "bg-zinc-900 border-2 border-zinc-800" : percentual === 0,
        "bg-violet-200 border-violet-100": percentual > 0 && percentual < 20,
        "bg-violet-300 border-violet-200": percentual >= 20 && percentual < 40,
        "bg-violet-500 border-violet-400": percentual >= 40 && percentual < 60,
        "bg-violet-700 border-violet-500": percentual >= 60 && percentual < 80,
        "bg-violet-900 border-violet-700": percentual >= 80,
       })} />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col ">
          <span className="font-semibold text-zinc-400"> Dia da Semana </span>
          <span className="mt-1 font-extrabold leading-tight text-3xl"> DD/MM </span>
          
          <ProgressBar progress={percentual} />
          
          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"> Beber 2L de Água </span>
            </Checkbox.Root>           
          </div>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}