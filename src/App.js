import react, { useRef, useState } from "react";
import Menu from "./components/menu"
import "./style/style.css"

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    {value:"Главная", href: "/main", icon: "anchor"},
    {value:"Главная2", href: "/service", icon: "api"},
    {value:"Главная3", href: "/main", icon: "verified"}]

    let lat = 35;
    let lon = 139;
    const Key = '8f14a99c167bb0e2da2199289ec32efe';

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
    
    fetch(url) 
    .then(response => response.json())
    .then(commits => console.log(commits));
    
    /*
    fetch(url)
    .then(res => {
        const Data = res.json();
        return Data;
    })
    .then( data => {
      console.log(data)
    })
    */
  return (
    <div className="App">
      <nav className = "nav-bar">
        <button className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </button> 
      </nav>
      <main>
        <div className="topMainSection">
          <h3 className="api-location-h3">Api location</h3>
          <h6 className="current-date">Current  date</h6>
        </div>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {"Бургер меню"} items = {items}/>
    </div> 
  )
}

export default App;
