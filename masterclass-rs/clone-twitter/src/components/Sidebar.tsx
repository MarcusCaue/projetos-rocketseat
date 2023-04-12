import { Bell, BookmarkSimple, Envelope, Hash, House, FileText, User, DotsThreeCircle, Pencil } from "phosphor-react"
import { Link, NavLink } from "react-router-dom"
import "../assets/sidebar.css"

// Definindo um caminho de pastas como uma variável
import twitterLogo from "../assets/logo-twitter.svg"

export default function Sidebar() {

  return (
    <aside className="sidebar">
      <div className="logo-and-image">
        <img className="logo" src={twitterLogo} alt="Logo" /> 
        <span className="project-name">CloneTwitter <br /> MasterClass React</span>
      </div>

      <nav className="main-navigation">
        <NavLink to="/"> <House weight="fill" /> <span>Home</span> </NavLink>
        <Link to=""> <Hash /> <span>Explore</span> </Link>
        <Link to=""> <Bell /> <span>Notifications</span> </Link>
        <Link to=""> <Envelope /> <span>Messages</span> </Link>
        <Link to=""> <BookmarkSimple /> <span>Bookmarks</span> </Link>
        <Link to=""> <FileText /> <span>Lists</span> </Link>
        <Link to=""> <User /> <span>Profile</span> </Link>
        <Link to=""> <DotsThreeCircle /> <span>More</span> </Link>
      </nav>

      <button className="new-tweet">
        <Pencil className="pencil" />
        <span>Tweet</span>
      </button>
    </aside>
  )
}