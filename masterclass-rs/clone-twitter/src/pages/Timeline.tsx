import data from "../data/data.json"
import {Tweet, TweetProps} from "../components/Tweet"
import Header from "../components/Header"
import { FormEvent, KeyboardEvent, useState } from "react"

export default function Timeline() {
  const [tweets_list, setTweetsList] = useState(data)
  const [new_tweet, setNewTweet] = useState()

  // function createNewTweet(event: FormEvent) {
  //   event.preventDefault()
  //   setTweetsList([new_tweet, ...tweets_list])
  //   setNewTweet("")
  // }

  // function handleHotKeySubmit(event: KeyboardEvent) {
  //   // Consegue perceber combinações de teclas, como control, shift, alt, command/metaKey etc.
  //   if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
  //     setTweetsList([new_tweet, ...tweets_list])
  //     setNewTweet("")
  //   }
  // }

  return (
    <main className="timeline">
      <Header title="Home"/>
      
      <form 
        className="new-tweet-form"
        // onSubmit={createNewTweet} 
      >
        <label htmlFor="tweet">
          <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
          <textarea 
            name="tweet" 
            id="tweet" 
            placeholder="O que está acontecendo?" 
            // value={new_tweet}
            // onChange={(event) => setNewTweet(event.target.value)}
            // onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type="submit"> Tweet </button>
      </form>

      <div className="separator" />

      <div className="tweets-list">
        {
          tweets_list.map((tweet, key) => {
            return (
              <Tweet key={key} username={tweet.username} tag={tweet.tag} avatar={tweet.avatar} comments={tweet.comments} hearts={tweet.hearts} retweets={tweet.retweets}>
                <p> {tweet.content} </p>
              </Tweet>
            )
          })
        }
      </div>
    </main>
  )
}