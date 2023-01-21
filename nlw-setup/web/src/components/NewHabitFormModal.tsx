import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

export default function NewHabitFormModal() {
  const [title, setTitle] = useState("")
  const [weekDays, setWeekDays] = useState<number[]>([])

  async function createNewHabit(e: FormEvent) {
    e.preventDefault()
    
    if (!title || weekDays.length === 0 ) {
      return
    }

    await api.post('habits', {
      title,
      weekDays
    })

    setTitle(""); setWeekDays([])

    alert("Hábito criado com sucesso!")
  }

  function addAndRemoveWeekDay(numberWeekDay: number) {
    if (weekDays.includes(numberWeekDay)) {
      const weekDaysRemovedOne = weekDays.filter(day => day !== numberWeekDay)
      setWeekDays(weekDaysRemovedOne)
    } else {
      const weekDaysAddOne = [...weekDays, numberWeekDay]
      setWeekDays(weekDaysAddOne)
    }
  }

  return (
    <div>
      <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight"> Qual seu comprometimento? </label>
        <input
          type="text"
          name="title" id="title"
          placeholder="Ex: Academia, Ler, Estudar, Água etc... "
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder-text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
          onChange={e => setTitle(e.target.value)}
          value={title}
          autoFocus
        />

        <label htmlFor="" className="font-semibold leading-tight mt-4"> Qual a recorrência? </label>

        <div className="mt-3 flex flex-col gap-2">
          {diasSemana.map((day, indexOnArray) => {
            return (
                <Checkbox.Root
                  key={indexOnArray} 
                  className="flex items-center gap-3 group focus:outline-none"
                  onCheckedChange={() => addAndRemoveWeekDay(indexOnArray)}
                  checked={weekDays.includes(indexOnArray)}
                >
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900">
                    <Checkbox.Indicator>
                      <Check size={20} className="text-white" />
                    </Checkbox.Indicator>
                  </div>
                  <span className="text-white leading-tight"> {day} </span>
                </Checkbox.Root>
            )
          })
          }
        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold
           bg-green-600 hover:bg-green-500
           transition-colors
           focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
          Confirmar
          <Check size={20} weight="bold" />
        </button>
      </form>
    </div>
  )
}