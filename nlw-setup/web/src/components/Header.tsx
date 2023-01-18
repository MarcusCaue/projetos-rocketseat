import logoImage from "../assets/logo.svg" 
import { Plus } from "phosphor-react"

export default function Header() {
  return (
    <header className="w-full max-w-3xl m-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo do NLW Setup" />
      <button type="button" className="
        font-semibold
        w-44 h-13
        py-4 px-6
        border-solid border rounded-lg border-violet-500
        flex items-center gap-1
        hover:border-violet-900
      "> <Plus size={20} className="text-violet-500"/> Novo Hábito </button>
    </header>
  )
}