import Header from "../components/Header";
import Tweet from "../components/Tweet";
import "../assets/status.css"
import { useState } from "react";

export default function Status() {
  const [new_answer, setNewAnswer] = useState("")
  const [answers, setUpdateAnswersList] = useState([
    "Hm... Análise",
    "Interessante...",
    "De fato, faz sentido..."
  ])

  return (
    <main className="status">
      <Header title="Tweet"/>

      <Tweet>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis tempora incidunt ducimus facere, ex laboriosam corrupti mollitia magnam vel animi at, alias eos autem, ipsa nemo eum quos repellendus? </p>
      </Tweet>

      <div className="separator" />

      <form 
        className="answer-tweet-form"
        onSubmit={(event) => {
          event.preventDefault()
          setUpdateAnswersList([new_answer, ...answers])
          setNewAnswer("")
        }}
      >
        <label htmlFor="tweet">
          <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
          <textarea 
            name="tweet" 
            id="tweet" 
            placeholder="Digite a sua resposta" 
            value={new_answer}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>

        <button type="submit"> Tweet </button>
      </form>
    
      <div className="answers-list">
        {
          answers.map((data, key) => <Tweet key={key}> {data} </Tweet>)
        }
      </div>
    </main>
  )
}