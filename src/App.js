import react, { useRef, useState } from "react";
import Menu from "./components/menu"
import "./style/style.css"

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    {value:"Главная", href: "/main", icon: "anchor"},
    {value:"Главная2", href: "/service", icon: "api"},
    {value:"Главная3", href: "/main", icon: "verified"}]
  return (
    <div className="App">
      <nav className = "nav-bar">
        <button className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </button> 
      </nav>
      <main>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {"Бургер меню"} items = {items}/>
    </div> 
  )
}

export default App;
