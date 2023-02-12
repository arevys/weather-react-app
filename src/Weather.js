import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
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

    function search() {
        const apiKey="5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {

    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange} />
                    </div>
                    <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <Weatherinfo data={weatherData} />
           
        </div>
    );
} else {
    search();
    return "Loading...";
    }
}