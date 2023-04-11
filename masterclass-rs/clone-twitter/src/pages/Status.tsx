import Header from "../components/Header";
import Tweet from "../components/Tweet";
import "../assets/status.css"

const answers = [
  {
    username: "Mayk Brito",
    tag: "maykao.dev",
    avatar: "https://github.com/maykbrito.png",
    children: "Hm... Análise"
  },
  {
    username: "Diego Fernandes",
    tag: "diegof3g",
    avatar: "https://github.com/diego3g.png",
    children: "Interessante..."
  },
  {
    username: "Maggie Appleton",
    tag: "maggie.app.leton",
    avatar: "https://github.com/MaggieAppleton.png",
    children: "De fato, faz sentido..."
  },
]

export default function Status() {
  return (
    <main className="status">
      <Header title="Tweet"/>

      <Tweet 
        username="Jonas de Samos"
        tag="jonasfilosofo" 
        avatar="https://github.com/MarcusCaue.png"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis tempora incidunt ducimus facere, ex laboriosam corrupti mollitia magnam vel animi at, alias eos autem, ipsa nemo eum quos repellendus? </p>
      </Tweet>

      <div className="separator" />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
          <textarea name="tweet" id="tweet" placeholder="Digite a sua resposta" />
        </label>

        <button type="submit"> Tweet </button>
      </form>
    
      <div className="answers-list">
        {
          answers.map((data, key) => {
            return (
              <Tweet 
                key={key} 
                username={data.username} 
                tag={data.tag} 
                avatar={data.avatar} 
              >
                {data.children}
              </Tweet>
            )
          })
        }
      </div>
    </main>
  )
}