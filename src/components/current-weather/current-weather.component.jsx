import React from "react";
import './current-weather.styles.css';

export const CurrentWeather = (props) => (
    <div className="CurrentWeather">
        <h1>{props.name}</h1>
        <p>{props.weatherStatus.main.temp} &deg;C</p>
        <p>
            <img src={"http://openweathermap.org/img/wn/"+props.weatherStatus.weather[0].icon + "@2x.png"} alt="description"/>
        </p>
        <p>{props.weatherStatus.weather[0].description}</p>
        <p>pressure {props.weatherStatus.main.pressure} hPa</p>
        <p>wind {props.weatherStatus.wind.speed} m/s</p>
    </div>
)