import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000)
,        });
    }

    if (weatherData.ready) {

    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-2">
                    <img src={weatherData.iconUrl} alt={weatherData.description} />         
                    </div>  
                <div className="col-4">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">ºC</span>                  
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
} else {

    const apiKey="5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    }
}