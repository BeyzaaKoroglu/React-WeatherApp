import axios from "axios";
import { createContext, useEffect, useState } from "react";
import cities from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(6);
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        cities[city - 1].latitude
      }&lon=${
        cities[city - 1].longitude
      }&exclude=minutely,hourly&units=metric&appid=e2bbad9bfe5270867d020524e4215a34`
    )
      .then((res) => {
        setDailyWeather([]);
        res.data.daily.map((d) => {
          let newObject = {
            dt: d.dt,
            sunrise: d.sunrise,
            sunset: d.sunset,
            dayTemp: d.temp.day,
            nightTemp: d.temp.night,
            icon: d.weather[0].icon,
          };
          setDailyWeather((oldArray) => [...oldArray, newObject]);
        });
      })
      .catch(() => {
        console.log("API okunamadı.");
      });
  }, [city]);

  const values = {
    city,
    setCity,
    dailyWeather,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
