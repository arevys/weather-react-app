import React from "react";
import "./weather.css";

export default function Weather() {
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
            <h1>New York</h1>
            <ul>
                <li>
                    Sunday 07:00
                </li>
                <li>
                    Sunny
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-2">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />         
                    </div>  
                <div className="col-4">
                <span className="temperature">5</span>
                <span className="unit">ºC</span>                  
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 0%
                        </li>
                        <li>
                            Humidity: 38%
                        </li>
                        <li>
                            Wind: 13 km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}