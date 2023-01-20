import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface CheckBoxProps {
  title: string
  stylesSpan: string
}

export function CheckBox(props : CheckBoxProps) {
  return (
    // A classe "group" permite que os filhos da div root consigam acessar suas propriedades para aplicarem estilos condicionais
    <Checkbox.Root className="flex items-center gap-3 group">
      <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600">
        <Checkbox.Indicator>
          <Check size={20} className="text-white" />
        </Checkbox.Indicator>
      </div>
      <span className={props.stylesSpan}> {props.title} </span>
    </Checkbox.Root>
  )
}