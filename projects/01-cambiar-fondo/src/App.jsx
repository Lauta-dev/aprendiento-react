import { useState } from "react"
import "./body.css"

export const App = () => {
  const [ active, isActive ] = useState(false);

  const handelClick = () => isActive(!active);

  const bodyHTMLElement = document.querySelector("body");
  if(active) bodyHTMLElement.classList.add("ligth-mode");
  else bodyHTMLElement.classList.remove("ligth-mode");

  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={handelClick}>cambiar elemento</button>
    </div>
  )
}