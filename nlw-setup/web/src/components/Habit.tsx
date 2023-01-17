import "../styles/global.css"

type HabitProps = {
  completed : number
}

export function Habit(props : HabitProps) {
  return (
   <div className="bg-purple-800 text-white rounded-sm flex items-center justify-center h-10 w-10 m-5">
    {props.completed}
   </div>
  )
}