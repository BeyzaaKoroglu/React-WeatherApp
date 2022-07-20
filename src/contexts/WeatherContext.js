import axios from "axios";
import { createContext, useEffect, useState } from "react";
import cities from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState(6)
    const [weather, setWeather] = useState({});
    const [currentWeather, setCurrentWeather] = useState({"dt":null,"sunrise":null,"sunset":null,"temp":null,"id":null});
    const [dailyWeather, setDailyWeather] = useState([{"dt":null,"sunrise":null,"sunset":null,"dayTemp":null,"nightTemp":null,"id":null}]);

    
    useEffect(() => {
        axios(
          // `https://api.openweathermap.org/data/2.5/forecast?lat=${cities[city-1].latitude}&lon=${cities[city-1].longitude}&appid=e2bbad9bfe5270867d020524e4215a34`
          `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city-1].latitude}&lon=${cities[city-1].longitude}&exclude=minutely,hourly&units=metric&appid=e2bbad9bfe5270867d020524e4215a34`
        ).then((res) => setWeather(res.data))
        .then(()=>{
          setCurrentWeather({
            "dt": weather.current.dt,
            "sunrise": weather.current.sunrise,
            "sunset": weather.current.sunset,
            "temp": weather.current.temp,
            "id": weather.current.weather[0].id
          })

          setDailyWeather([{"dt":null,"dayTemp":null,"nightTemp":null,"id":null}])
          weather.daily.map((d) => {
            let newObject = {
              "dt": d.dt,
              "sunrise": d.sunrise,
              "sunset": d.sunset,
              "dayTemp": d.temp.day,
              "nightTemp": d.temp.night,
              "id": d.weather[0].id
            }
            setDailyWeather(oldArray => [...oldArray, newObject])
          })
        })
        .catch( () => { 
          console.log("API okunamadı.")
        })

    }, [city]);


    const values = {
        city,
        setCity,
        weather,
        currentWeather,
        dailyWeather
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext;