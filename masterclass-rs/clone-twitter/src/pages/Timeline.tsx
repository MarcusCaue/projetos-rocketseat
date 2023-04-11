import Tweet from "../components/Tweet"
import Header from "../components/Header"
import { FormEvent, useState } from "react"

export default function Timeline() {
  const [tweets_list, setTweetsList] = useState([
    {
      username: "Jonas de Samos", 
      tag: "jonasfilosofo",
      avatar: "https://github.com/MarcusCaue.png",
      children: <p> Jonas de Samos não é o filósofo mais brabo da Grécia? </p>
    },
    {
      username: "Amanda de Abdera", 
      tag: "amandart",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      children: <p> <em> Ser como o rio que deflui <br /> Silecionso dentro da noite... </em> </p>
    },
    {
      username: "Kleito de Esparta", 
      tag: "warrior.kleito",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      children: <p> Para crescer, e necessário ter trabalho e oração! </p>
    }
  ])


  function createNewTweet(e: FormEvent) {
    e.preventDefault()
    
    console.log(e.currentTarget);

    // setTweetsList([...tweets_list, {username: "Pedro", avatar: "", tag: "pedrinho", children: <h1> Jonas </h1>}])

  }

  return (
    <main className="timeline">
      <Header title="Home"/>

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
          <textarea name="tweet" id="tweet" placeholder="O que está acontecendo?" />
        </label>

        <button type="submit"> Tweet </button>
      </form>

      <div className="separator" />

      <div className="tweets-list">
        {
          tweets_list.map((user_data, key) => {
            return (
              <Tweet 
                key={key} 
                username={user_data.username} 
                tag={user_data.tag} 
                avatar={user_data.avatar} 
              >
                {user_data.children}
              </Tweet>
            )
          })
        }
      </div>
    </main>
  )
}