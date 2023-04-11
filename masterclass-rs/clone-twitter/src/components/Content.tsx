import { Outlet } from "react-router-dom"
import "../assets/content.css"

export default function Content() {  
  return (
    <div className="content">
      <Outlet />
    </div>
  )
}