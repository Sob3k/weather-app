import React from "react";
import '../forecast-day/forecast-day.component';
import './forecast-list.styles.css';
import {ForecastDay} from "../forecast-day/forecast-day.component";

export const ForecastList = (props) => (
    <div className='ForecastList'>
        {props.forecast.map((day,index) =>(
            <ForecastDay key={index} weatherStatus={props.forecast[index]} />
        ))}
    </div>
)