import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../assets/tweet.css"

interface TweetProps {
  children: ReactNode
  // username?: string,
  // tag?: string,
  // avatar?: string,
  // children?: ReactNode
}

export default function Tweet(props : TweetProps) {
  return (
    <Link to={`/status`} className="tweet">
      <img src="https://github.com/MarcusCaue.png" alt="Marcus Cauê" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong> Marcus Cauê </strong>
          <span>@marcus_caue.dev</span>
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
