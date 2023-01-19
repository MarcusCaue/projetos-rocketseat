// Os estados são variáveis monitoradas pelo React que mudam o comportamento dos componentes
// Quando um estado é modificado, o React reexecuta o HTMl
// Os eventos no React são trabalhados seguindo a Programação Declarativa (dada uma condição, execute a função)

import logoImage from "../assets/logo.svg" 
import Modal from "./Modal"

export default function Header() {

  return (
    <header className="w-full max-w-3xl m-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo do NLW Setup" />

      {/* Modal and your Button */}
      <Modal />

    </header>
  )
}