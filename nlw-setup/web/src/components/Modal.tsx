import * as Dialog from "@radix-ui/react-dialog"
import { Plus, X } from "phosphor-react"
import NewHabitFormModal from "./NewHabitFormModal"

export default function Modal() {
  return (
  <Dialog.Root>
      {/* Botão que controla o modal */}
      <Dialog.Trigger 
        type="button"
        className="
          font-semibold
          w-44 h-13
          py-4 px-6
          border-solid border rounded-lg border-violet-500
          flex items-center gap-1
          hover:border-violet-900
          transition-colors
        "> <Plus size={20} className="text-violet-500"/> 
        Novo Hábito 
      </Dialog.Trigger>

      {/* Abre o Modal fora da estrutura atual do nosso App, ou seja, fora da div root */}
      <Dialog.Portal>
        {/* Componente que escurece o fundo da página */}
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>

        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full h-min max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
            <X size={24} aria-label="Fechar"/>
          </Dialog.Close>

          <Dialog.Title className="text-3xl leading-tight font-extrabold">
            Criar Novo Hábito
          </Dialog.Title>

          <NewHabitFormModal />
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}