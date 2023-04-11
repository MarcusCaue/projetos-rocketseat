import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../assets/tweet.css"

interface TweetProps {
  username?: string,
  tag?: string,
  avatar?: string,
  children?: ReactNode
}

export default function Tweet(props : TweetProps) {
  return (
    <Link to={`/status`} className="tweet">
      <img src={props.avatar} alt={props.username} />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong> {props.username} </strong>
          <span>@{props.tag}</span>
        </div>

        {props.children} 

        <div className="tweet-content-footer">
          <button> <ChatCircle /> 20 </button>
          <button> <ArrowsClockwise /> 20 </button>
          <button> <Heart /> 20 </button>
        </div>
      </div>
    </Link>
  )
} 
