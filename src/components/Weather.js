import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import "../styles/Weather.css";

function Weather() {
  const { dailyWeather } = useContext(WeatherContext);

  function getDay(date) {
    date = new Date(date * 1000);
    let day = date.getDay();
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
  return (
    <div className="weather">
      {dailyWeather.map((day, index) => (
        <div className={`card ${index === 0 ? "today" : ""}`} key={index}>
          <div>{index===0 ? "Today" : getDay(day.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} />
          <span>{Math.round(day.dayTemp)}⁰</span>
          <span className="nightTemp">{Math.round(day.nightTemp)}⁰</span>
        </div>
      ))}
    </div>
  );
}

export default Weather;
