import React from "react";
import './forecast-day.styles.css';

let allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const ForecastDay = (props) => (
    <div className='Forecast-container'>
        <h2>{allDays[(new Date((props.weatherStatus.dt)*1000)).getDay()]}</h2>
        <img src={"http://openweathermap.org/img/wn/"+props.weatherStatus.weather[0].icon + "@2x.png"} alt="description"/>
        <p>{props.weatherStatus.main.temp} &deg;C</p>
        <p>{props.weatherStatus.weather[0].description}</p>
    </div>
)