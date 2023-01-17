import {Habit} from "./components/Habit"
import "./styles/global.css"

function App() {
  return (
    <div>      
      <h1> Olá mundo! </h1>
      <p> Eis a minha segunda aplicação React! Dessa vez usando TypeScript! ^^ </p>
      <Habit completed={3} />
      <Habit completed={2} />      
      <Habit completed={6} />
      <Habit completed={10} /> 
    </div>  
  )
}

export default App
