import { Check } from "phosphor-react";
import { CheckBox } from "./CheckBox";

export default function NewHabitFormModal() {
  const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  
  return (
    <div>
      <form className="w-full flex flex-col mt-6" method="POST">
        <label htmlFor="title" className="font-semibold leading-tight"> Qual seu comprometimento? </label>
        <input type="text" name="title" id="title" placeholder="Ex: Academia, Ler, Estudar, Água etc... " autoFocus
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder-text-zinc-400" />

        <label htmlFor="" className="font-semibold leading-tight mt-4"> Qual a recorrência? </label>

        <div className="mt-3 flex flex-col gap-2">
          { diasSemana.map((day, indexOnArray) => {
              return (
                <CheckBox key={indexOnArray} title={day} stylesSpan="text-white leading-tight"/>
              )
            })
          }
        </div>

        <button 
          type="submit"
          className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-500"> 
          Confirmar 
          <Check size={20} weight="bold" />
        </button>
      </form>
    </div>
  )
}