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
    //   case 0:
    //     return "Sun";
    //   case 1:
    //     return "Mon";
    //   case 2:
    //     return "Tue";
    //   case 3:
    //     return "Wed";
    //   case 4:
    //     return "Thu";
    //   case 5:
    //     return "Fri";
    //   case 6:
    //     return "Sat";
    // }
  }
  return (
    <div className="weather">
      {dailyWeather.map((day, index) => (
        <div className={`card ${index == 0 ? "today" : ""}`} key={index}>
          <div>{getDay(day.dt)}</div>
          <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} />
          <span>{Math.round(day.dayTemp)}⁰</span>
          <span>{Math.round(day.nightTemp)}⁰</span>
        </div>
      ))}
    </div>
  );
}

export default Weather;
