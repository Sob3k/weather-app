import React from 'react';
import {CurrentWeather} from "./components/current-weather/current-weather.component";
import './App.css';
import {ForecastList} from "./components/forecast-list/forecast-list.component";
import {SearchForm} from "./components/search-form/search-form.component";

class App extends React.Component {
  constructor() {
    super();

      this.state = {
          cityName: undefined,
          weatherConditions: [],
          current: [],
          resolved: false,
      };
  }

    getForecast = async(event)=>{
       event.preventDefault();
        const city = event.target.city.value;
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8422f723ab81e0619da72f354ab281d4`)
            .then(response=>response.json())
            .then(response => {
                if(response.cod==="404"){return Promise.reject()}
                this.setState({
                    cityName: response.city.name,
                    weatherConditions: response.list.filter(elem => elem.dt_txt.includes("15:00:00")),
                })
            })
            .then(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8422f723ab81e0619da72f354ab281d4`)
                .then(response => response.json())
                .then(response => {
                    if(response.cod==="404"){
                        alert('No city found');
                        return Promise.reject()
                    }
                    this.setState({
                        current: response,
                        resolved: true
                    })
                }));
    }


  render() {
    const {cityName,weatherConditions,current}=this.state;
    const resolved=this.state.resolved;
    return (
        <div className="App">
            <h1>Weather App</h1>
         <SearchForm
             handleClick={this.getForecast}
         />
            {resolved? (
                [
                <CurrentWeather  key='currentW' name={cityName} weatherStatus={current}/>,
                <ForecastList key='forecastl' forecast={weatherConditions.slice(1)}/>
                ]
            ):null
            }
        </div>
    );
  }
}

export default App;
