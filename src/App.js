import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <h1> Weather App </h1>
     <Weather defaultCity="New York" />
      <footer>
        This project was coded by Vera Pinheiro and is {" "}
      <a href="https://github.com/arevys/weather-react-app">
        open-sourced on Github
      </a>
      </footer>
      </div>
    </div>
  );
}
