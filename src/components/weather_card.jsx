import React from "react";

const card = ({scr, temp, day, id}) => {
    
    return (
        <div className="weather-card">
            <img className="card-animation" id = {id} src="./image/animated/721.svg" alt="loading" />
            <h3 className="current-temp-card">{temp}° C</h3>
            <h3 className="day-of-week-header-card">{day}</h3>
      </div>
    );
};

export default card;