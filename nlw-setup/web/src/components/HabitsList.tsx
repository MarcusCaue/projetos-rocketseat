import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface HabitsListProps {
  date: Date
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string,
    title: string,
    created_at: string
  }>,
  completedHabits: string[]
}

export function HabitsList(props: HabitsListProps) {

  const [ habitsInfo, setHabitsInfo ] = useState<HabitsInfo>()
  
  const isDateOnPast = dayjs(props.date).endOf('day').isBefore(new Date())

  useEffect(() => {
    api.get("/day", {
      params: {
        date: props.date.toISOString()
      }
    }).then(response => {
      setHabitsInfo(response.data)
    })
  }, [])

  async function handleToggleHabit(habitId : string) {
    await api.patch(`/habits/${habitId}/toggle`)
    
    const habitCompleted = habitsInfo!.completedHabits.includes(habitId)

    let completedHabits : string[] = []

    if (habitCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits: completedHabits
    })
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {
        habitsInfo?.possibleHabits.map(habit => {
          return (
            <div key={habit.id}>
              <Checkbox.Root 
                className="flex items-center gap-3 group" 
                onCheckedChange={() => handleToggleHabit(habit.id)}
                checked={habitsInfo!.completedHabits.includes(habit.id)}
                disabled={isDateOnPast}
              >
                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600">
                  <Checkbox.Indicator>
                    <Check size={20} className="text-white" />
                  </Checkbox.Indicator>
                </div>
                <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"> {habit.title} </span>
              </Checkbox.Root>                 
            </div>
          )
        })
      }
  </div>
  )
}