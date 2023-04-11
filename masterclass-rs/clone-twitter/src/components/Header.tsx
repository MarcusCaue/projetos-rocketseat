import { Sparkle } from "phosphor-react";
import "../assets/header.css"

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="timeline-header"> 
      {title} 
      <Sparkle /> 
    </header>
  )
}