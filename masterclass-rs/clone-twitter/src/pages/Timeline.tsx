import Tweet from "../components/Tweet"
import Header from "../components/Header"
import { FormEvent, useState } from "react"

export default function Timeline() {
  const [tweets_list, setTweetsList] = useState([
     "Jonas de Samos não é o filósofo mais brabo da Grécia?",
     "Ser como o rio que deflui / Silecionso dentro da noite...",
     "Para crescer, e necessário ter trabalho e oração!"
  ])
  const [new_tweet, setNewTweet] = useState("")

  return (
    <main className="timeline">
      <Header title="Home"/>
      
      <form 
        className="new-tweet-form"
        onSubmit={(event) => {
          event.preventDefault()
          setTweetsList([new_tweet, ...tweets_list])
          setNewTweet("")
        }} 
      >
        <label htmlFor="tweet">
          <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
          <textarea 
            name="tweet" 
            id="tweet" 
            placeholder="O que está acontecendo?" 
            value={new_tweet}
            onChange={(event) => {setNewTweet(event.target.value)}}
          />
        </label>

        <button type="submit"> Tweet </button>
      </form>

      <div className="separator" />

      <div className="tweets-list">
        {
          tweets_list.map((tweet_content, key) => {
            return (
              <Tweet key={key}>
                {tweet_content}
              </Tweet>
            )
          })
        }
      </div>
    </main>
  )
}