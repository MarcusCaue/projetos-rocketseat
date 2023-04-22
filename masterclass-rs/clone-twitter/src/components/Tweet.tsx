import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../assets/tweet.css"

export interface TweetProps {
  children: ReactNode,
  username?: string,
  tag?: string,
  avatar?: string,
  comments?: number,
  hearts?: number,
  retweets?: number
}

export function Tweet(props : TweetProps) {
  return (
    <Link to={`/status`} className="tweet">
      <img src={props.avatar} alt={props.username} />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong> {props.username} </strong>
          <span> @{props.tag} </span>
        </div>

        {props.children} 

        <div className="tweet-content-footer">
          <button> <ChatCircle /> {props.comments} </button>
          <button> <ArrowsClockwise /> {props.retweets} </button>
          <button> <Heart /> {props.hearts} </button>
        </div>
      </div>
    </Link>
  )
} 
