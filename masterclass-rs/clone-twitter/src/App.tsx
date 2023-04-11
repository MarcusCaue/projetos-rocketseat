import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
import "./assets/global.css" 

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <Content />
    </div>  
  )
}
