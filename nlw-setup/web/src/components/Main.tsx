import { HabitDay } from "./HabitDay"

const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"]

export default function Main() {
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
          <HabitDay />
          <HabitDay />
          <HabitDay />
          <HabitDay />
          <HabitDay />
          <HabitDay />
          <HabitDay />
      </main>
    </main>
  )
}