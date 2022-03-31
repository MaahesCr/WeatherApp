import react, { useRef, useState } from "react";
import Menu from "./components/menu"
import "./style/style.css"
import apiInfo from './getGeolocation'
import { useEffect } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [menuActive, setMenuActive] = useState(false)
  
  useEffect(() => {
    apiInfo().then((data) => setLocation(data))
  }, []);

  let city = '';
  let country_code = '';
  let state = '';

  async function ApiRender () {
    city = location.city;
    country_code = location.country_code;
    state = location.state;
  }
  
  console.log('location: ', location)
  
  ApiRender();
  //console.log('location.city: ', location.city)
  let date = new Date();

  /*IPv4: "128.75.79.254"
  city: "Yekaterinburg"
  country_code: "RU"
  country_name: "Russia"
  latitude: 56.8575
  longitude: 60.6125
  postal: "620002"
  state: "Sverdlovskaya Oblast'" */

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
        <div className="topMainSection">
          <h3 className="city-and-country">{`${country_code}-${city}`}</h3>
          <h6 className="current-date">{date.toDateString()}</h6>
        </div>
        <h3 className="state">{state}</h3>
        <p>lorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhflorem hfbvhb hdsfbsdhbhds bhfbhsbhbfs hbhfs dhf</p>
        
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {"Бургер меню"} items = {items}/>
    </div> 
  )
}

export default App;
