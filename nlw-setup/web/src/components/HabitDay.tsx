import "../styles/global.css"
import * as Popover from "@radix-ui/react-popover"

export function HabitDay() {
  return (
   <Popover.Root>
      <Popover.Trigger className="bg-zinc-900 border-2 border-zinc-800 rounded-lg h-10 w-10" />

      <Popover.Portal>
        <Popover.Content className="">


        </Popover.Content>

      </Popover.Portal>

    </Popover.Root>
  )
}