import { Bell, BookmarkSimple, Envelope, Hash, House, FileText, User, DotsThreeCircle } from "phosphor-react"
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
        <NavLink to="/"> <House weight="fill" /> Home</NavLink>
        <Link to=""> <Hash /> Explore</Link>
        <Link to=""> <Bell /> Notifications</Link>
        <Link to=""> <Envelope /> Messages</Link>
        <Link to=""> <BookmarkSimple /> Bookmarks</Link>
        <Link to=""> <FileText /> Lists</Link>
        <Link to=""> <User /> Profile</Link>
        <Link to=""> <DotsThreeCircle /> More</Link>
      </nav>

      <button className="new-tweet">Tweet</button>
    </aside>
  )
}