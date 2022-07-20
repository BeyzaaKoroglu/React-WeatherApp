import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

function Weather() {
  const { weather, city, currentWeather, dailyWeather } = useContext(WeatherContext);

  return (
      <div>
        <hr/>
        <code>{JSON.stringify(weather.current)}</code>
        <hr />
        <code>{JSON.stringify(weather.daily)}</code>
      </div>
  );
}

export default Weather;
