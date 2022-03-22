import react, { useRef, useState } from "react";
import Menu from "./components/menu"
import "./style/style.css"

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    {value:"Главная", href: "/main", icon: "anchor"},
    {value:"Главная2", href: "/service", icon: "api"},
    {value:"Главная3", href: "/main", icon: "verified"}]

    let lat;
    let lon;
    let url; 
    const Key = '8f14a99c167bb0e2da2199289ec32efe';
    
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
      getApiInfo(url);
    })

    let apiLocation = async () => {
      await getApiInfo(url);
    };

   async function getApiInfo (url) {
    await fetch(url) 
    .then(response => response.json())
    .then(commits => {
      return `${commits.sys.country} ${commits.name}`;
      //apiLocation = `${commits.sys.country} ${commits.name}`;
      //console.log(apiLocation);
    });
  }
  
  console.log(apiLocation);

  return (
    <div className="App">
      <nav className = "nav-bar">
        <button className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </button> 
      </nav>
      <main>
        <div className="topMainSection">
          <h3 className="api-location-h3">{apiLocation}</h3>
          <h6 className="current-date">Current  date</h6>
        </div>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {"Бургер меню"} items = {items}/>
    </div> 
  )
}

export default App;
