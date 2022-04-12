import react, { useRef, useState } from "react";
import Menu from "./components/menu"
import "./style/style.css"
import apiInfo from './getGeolocation'
import { useEffect } from "react";
import weatherInfo from "./getWeatherInfo";
import futureWeatherInfo from './getFutureWeatherInfo'
import Card from "./components/weather_card";
import Close_btn from "./components/close_btn";

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const [location, setLocation] = useState(null);
  
  const [windowLoad, setWindowLoad] = useState(true);

  useEffect(() => {
    apiInfo().then((data) => setLocation(data))
  }, []);

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherInfo().then((data) => setWeather(data))
  }, []);

  const [futureWeather, setFutureWeather] = useState(null)

  useEffect(() => {
    futureWeatherInfo().then((data) => setFutureWeather(data))
  }, []);

  /* 
   dt 1648730873
   main:
    feels_like: 271.92
    humidity: 74
    pressure: 1015
    temp: 271.92
    temp_max: 271.92
    temp_min: 271.87
  sys:
    sunrise: 1648690230
    sunset: 1648737169
  timezone: 18000
  visibility: 10000
  weather: Array(1)
    0:
      description: "clear sky"
      icon: "01d"
      id: 800
      main: "Clear"
  wind:
    deg: 0
    speed: 1
  */

  let WeatherVariables = {
    dt: 0, feels_like: 0, humidity: 0, pressure: 0, temp: 0, sunrise: '', sunset: '', timezone: 0, visibility: 0, weather_description: '', weather_icon: '', weather_main: '', wind_speed: ''
  } 

  let futureWeatherVariables = {
    first_animation: '721', first_temp: 0, first_day_of_week: '', second_animation: '721', second_temp: 0, second_day_of_week: '', third_animation: '721', third_temp: 0, third_day_of_week: '', fourth_animation: '721', fourth_temp: 0, fourth_day_of_week: ''
  }

const kelvinKoef = 273.15;

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

  async function setWeatherVariables () {
    WeatherVariables.dt = weather.dt;
    WeatherVariables.feels_like = Math.round( weather.main.feels_like - kelvinKoef);  //Kelvin
    WeatherVariables.humidity = weather.main.humidity;
    WeatherVariables.pressure = Math.round(weather.main.pressure * 0.750064);
    WeatherVariables.temp = Math.round(weather.main.temp - kelvinKoef);

    let a = new Date(weather.sys.sunrise * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    WeatherVariables.sunrise = `${hour}h ${min}m`;
    
    let b = new Date(weather.sys.sunset * 1000);
    let hourB = b.getHours();
    let minB = b.getMinutes();
    WeatherVariables.sunset = `${hourB}h ${minB}m`;

    WeatherVariables.timezone = new Date().toUTCString;
    WeatherVariables.visibility = weather.visibility;
    WeatherVariables.weather_description = weather.weather[0].description;
    WeatherVariables.weather_icon = weather.weather[0].icon;
    WeatherVariables.weather_main = weather.weather[0].main;
    WeatherVariables.wind_speed = weather.wind.speed;
    
    let c = new Date();

    futureWeatherVariables.first_animation = futureWeather.daily[1].weather[0].icon;
    futureWeatherVariables.first_temp = Math.round(futureWeather.daily[1].temp.day - kelvinKoef)
    futureWeatherVariables.first_day_of_week = daysOfWeek[(c.getDay()+1)%7];

    futureWeatherVariables.second_animation = futureWeather.daily[2].weather[0].icon;
    futureWeatherVariables.second_temp = Math.round(futureWeather.daily[2].temp.day - kelvinKoef)
    futureWeatherVariables.second_day_of_week = daysOfWeek[(c.getDay()+2)%7];

    futureWeatherVariables.third_animation = futureWeather.daily[3].weather[0].icon;
    futureWeatherVariables.third_temp = Math.round(futureWeather.daily[3].temp.day - kelvinKoef)
    futureWeatherVariables.third_day_of_week = daysOfWeek[(c.getDay()+3)%7];

    futureWeatherVariables.fourth_animation = futureWeather.daily[3].weather[0].icon;
    futureWeatherVariables.fourth_temp = Math.round(futureWeather.daily[3].temp.day - kelvinKoef)
    futureWeatherVariables.fourth_day_of_week = daysOfWeek[(c.getDay()+4)%7];
  }

  //console.log('Weather: ',weather)
  setWeatherVariables();
  

  let city = '';
  let country_code = '';
  let state = '';
  let postal = `the data didn't load ¯\_(ツ)_/¯`;

  async function ApiRender () {
    city = location.city;
    country_code = location.country_code;
    state = location.state;
    postal = location.postal;
    (postal == '') ? postal = `the data didn't load ¯\_(ツ)_/¯` : postal = location.postal
    //(postal == '') ? postal = `the data didn't load ¯\_(ツ)_/¯` : null;
  }
  
  //console.log('location: ', location)
  
  ApiRender();

  let date = new Date();
  let currentDateOfWeek = date.getDay();
  let currentTime = date.getSeconds();

  /*IPv4: "128.75.79.254"
  city: "Yekaterinburg"
  country_code: "RU"
  country_name: "Russia"
  latitude: 56.8575
  longitude: 60.6125
  postal: "620002"
  state: "Sverdlovskaya Oblast'" */

  async function setSrcImg () {
    document.getElementById('mane-weather-animatin').src = `image/animated/${WeatherVariables.weather_icon}.svg`;
    document.getElementById('mane-weather-animatin').alt = `${WeatherVariables.weather_description}`;
    document.getElementById('first-card-animation').src = `image/animated/${futureWeatherVariables.first_animation}.svg`;
    document.getElementById('second-card-animation').src = `image/animated/${futureWeatherVariables.second_animation}.svg`;
    document.getElementById('third-card-animation').src = `image/animated/${futureWeatherVariables.third_animation}.svg`;
    document.getElementById('fourth-card-animation').src = `image/animated/${futureWeatherVariables.fourth_animation}.svg`;
  
  }

  setSrcImg();

  window.onload = function () {
    setTimeout(() => {
    document.getElementById('loading-screen').classList.toggle("loading-screen");
  }, 1500);
  }

  /*const items = [
    {value:"Главная", href: "/main", icon: "anchor"},
    {value:"Главная2", href: "/service", icon: "api"},
    {value:"Главная3", href: "/main", icon: "verified"}
  ]*/
  
    const items =  [
      {description: "Feels like: ", value: `${WeatherVariables.feels_like}° C`},
      {description: "Humidity: ", value: `${WeatherVariables.humidity} %`},    
      {description: "Pressure:	", value: `${WeatherVariables.pressure} mmhg`},
      {description: "Postal: ", value: postal},
      {description: "Visibility: ", value: `${WeatherVariables.visibility}m`},
      {description: "Wind speed: ", value: `${WeatherVariables.wind_speed} m/s`},
      {description: "Sunrise: ", value: WeatherVariables.sunrise},
      {description: "Sunset: ", value: WeatherVariables.sunset}
    ]

  return (
    <div className="App">
        <div id="loading-screen" className="off-loading-screen loading-screen">
        <img src="./image/animated/ezgif-2-38aaf3d0b3.gif" alt="" />
        </div>
        <nav className = "nav-bar">
        <button className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </button>
        <Close_btn active = {menuActive} setActive = {setMenuActive}></Close_btn>
      </nav>
      <main>
        <div className="top-main-section">
          <h3 className="city-and-country">{`${country_code}-${city}`}</h3>
          <h6 className="current-date">{date.toLocaleDateString()}</h6>
        </div>
        <h3 className="state">{state}</h3>
        <div className="weather-animation-block">
          <h3 className="day-of-week-header">{daysOfWeek[currentDateOfWeek]}</h3>
          <img onerror="this.style.visibility = 'hidden'" id = 'mane-weather-animatin' src="./image/animated/721.svg" alt="" />
          <h3 className="current-temp">{WeatherVariables.temp}° C</h3>
          <h4 className="weather-direction">{WeatherVariables.weather_main}</h4>
        </div>
        
        <section className="other-days-weather">
          <Card id = {'first-card-animation'} scr = {futureWeatherVariables.first_animation} temp = {futureWeatherVariables.first_temp} day = {futureWeatherVariables.first_day_of_week}></Card>
          <Card id = {'second-card-animation'} scr = {futureWeatherVariables.second_animation} temp = {futureWeatherVariables.second_temp} day = {futureWeatherVariables.second_day_of_week}></Card>
          <Card id = {'third-card-animation'} scr = {futureWeatherVariables.third_animation} temp = {futureWeatherVariables.third_temp} day = {futureWeatherVariables.third_day_of_week}></Card>
          <Card id = {'fourth-card-animation'} scr = {futureWeatherVariables.fourth_animation} temp = {futureWeatherVariables.fourth_temp} day = {futureWeatherVariables.fourth_day_of_week}></Card>         
        </section>
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {currentTime} items = {items}/>
    </div>
  )
}

export default App;

/**<div className="weather-card">
            <img className="card-animation" id = 'first-card-animation' src="./image/animated/721.svg" alt="loading" />
            <h3 className="current-temp-card">{WeatherVariables.temp}° C</h3>
            <h3 className="day-of-week-header-card">{daysOfWeek[currentDateOfWeek]}</h3>
          </div>

          <div className="weather-card">
            <img className="card-animation" id = 'first-card-animation' src="./image/animated/721.svg" alt="loading" />
            <h3 className="current-temp-card">{WeatherVariables.temp}° C</h3>
            <h3 className="day-of-week-header-card">{daysOfWeek[currentDateOfWeek]}</h3>
          </div>

          <div className="weather-card">
            <img className="card-animation" id = 'first-card-animation' src="./image/animated/721.svg" alt="loading" />
            <h3 className="current-temp-card">{WeatherVariables.temp}° C</h3>
            <h3 className="day-of-week-header-card">{daysOfWeek[currentDateOfWeek]}</h3>
          </div>

          <div className="weather-card">
            <img className="card-animation" id = 'first-card-animation' src="./image/animated/721.svg" alt="loading" />
            <h3 className="current-temp-card">{WeatherVariables.temp}° C</h3>
            <h3 className="day-of-week-header-card">{daysOfWeek[currentDateOfWeek]}</h3>
          </div> */