import axios from "axios";
import { createContext, useEffect, useState } from "react";
import cities from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState(6)
    const [weather, setWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState([]);
    
    useEffect(() => {
        axios(
          // `https://api.openweathermap.org/data/2.5/forecast?lat=${cities[city-1].latitude}&lon=${cities[city-1].longitude}&appid=e2bbad9bfe5270867d020524e4215a34`
          `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city-1].latitude}&lon=${cities[city-1].longitude}&exclude=minutely,hourly&units=metric&appid=e2bbad9bfe5270867d020524e4215a34`
        ).then((res) => setWeather(res.data))
        .catch( () => { 
          console.log("API okunamadı.")
          setWeather({"lat":39.9208,"lon":32.8541,"timezone":"Europe/Istanbul","timezone_offset":10800,"current":{"dt":1658176405,"sunrise":1658111672,"sunset":1658164479,"temp":18.52,"feels_like":17.86,"pressure":1016,"humidity":55,"dew_point":9.32,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":5.14,"wind_deg":340,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},"daily":[{"dt":1658134800,"sunrise":1658111672,"sunset":1658164479,"moonrise":1658176320,"moonset":1658130420,"moon_phase":0.67,"temp":{"day":24.78,"min":15.81,"max":25.93,"night":18.31,"eve":23.1,"morn":15.81},"feels_like":{"day":24.28,"night":17.66,"eve":22.56,"morn":15.46},"pressure":1015,"humidity":37,"dew_point":8.55,"wind_speed":7.61,"wind_deg":23,"wind_gust":9.08,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":2,"pop":0,"uvi":9.73},{"dt":1658221200,"sunrise":1658198120,"sunset":1658250840,"moonrise":1658264100,"moonset":1658220900,"moon_phase":0.71,"temp":{"day":23.51,"min":14.09,"max":26.63,"night":18.31,"eve":25.98,"morn":14.09},"feels_like":{"day":23.09,"night":17.82,"eve":25.98,"morn":13.49},"pressure":1015,"humidity":45,"dew_point":10.08,"wind_speed":7.38,"wind_deg":68,"wind_gust":9.03,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":22,"pop":0,"uvi":9.79},{"dt":1658307600,"sunrise":1658284569,"sunset":1658337199,"moonrise":0,"moonset":1658311200,"moon_phase":0.75,"temp":{"day":24.28,"min":14.48,"max":27.62,"night":19.36,"eve":26.82,"morn":14.48},"feels_like":{"day":23.68,"night":18.84,"eve":26.2,"morn":14.1},"pressure":1014,"humidity":35,"dew_point":7.26,"wind_speed":5.99,"wind_deg":47,"wind_gust":9.29,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":9.87},{"dt":1658394000,"sunrise":1658371019,"sunset":1658423556,"moonrise":1658351940,"moonset":1658401440,"moon_phase":0.77,"temp":{"day":25.26,"min":15.33,"max":27.93,"night":21.6,"eve":26.39,"morn":15.33},"feels_like":{"day":24.49,"night":20.94,"eve":26.39,"morn":14.93},"pressure":1012,"humidity":25,"dew_point":3.15,"wind_speed":6.73,"wind_deg":11,"wind_gust":7.31,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":9.69},{"dt":1658480400,"sunrise":1658457470,"sunset":1658509911,"moonrise":1658439840,"moonset":1658491620,"moon_phase":0.81,"temp":{"day":25.21,"min":15.03,"max":28.61,"night":22,"eve":28,"morn":15.03},"feels_like":{"day":24.36,"night":21.3,"eve":26.86,"morn":14.36},"pressure":1013,"humidity":22,"dew_point":1.14,"wind_speed":6.31,"wind_deg":347,"wind_gust":7.45,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":9.91},{"dt":1658566800,"sunrise":1658543922,"sunset":1658596265,"moonrise":1658527920,"moonset":1658581740,"moon_phase":0.84,"temp":{"day":26.59,"min":15.84,"max":28.58,"night":22.21,"eve":27.44,"morn":15.84},"feels_like":{"day":26.59,"night":21.53,"eve":26.55,"morn":15.18},"pressure":1014,"humidity":23,"dew_point":3.45,"wind_speed":6.31,"wind_deg":17,"wind_gust":9.11,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":10},{"dt":1658653200,"sunrise":1658630374,"sunset":1658682617,"moonrise":1658616300,"moonset":1658671800,"moon_phase":0.87,"temp":{"day":26.07,"min":15.81,"max":28.8,"night":22.29,"eve":28.02,"morn":15.81},"feels_like":{"day":26.07,"night":21.59,"eve":26.84,"morn":15.14},"pressure":1014,"humidity":24,"dew_point":3.49,"wind_speed":6.1,"wind_deg":21,"wind_gust":7.65,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":10},{"dt":1658739600,"sunrise":1658716826,"sunset":1658768967,"moonrise":1658704980,"moonset":1658761620,"moon_phase":0.9,"temp":{"day":25.91,"min":15.39,"max":28.61,"night":24.01,"eve":28.38,"morn":15.39},"feels_like":{"day":25.16,"night":23.38,"eve":27.09,"morn":14.55},"pressure":1011,"humidity":23,"dew_point":2.41,"wind_speed":5.78,"wind_deg":30,"wind_gust":8.54,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":10}]})
        })
        .finally(()=>{
          setDailyWeather([])
          weather.daily.map((d) => {
            let newObject = {
              "dt": d.dt,
              "sunrise": d.sunrise,
              "sunset": d.sunset,
              "dayTemp": d.temp.day,
              "nightTemp": d.temp.night,
              "icon": d.weather[0].icon
            }
            setDailyWeather(oldArray => [...oldArray, newObject])
          })
        })
    }, [city]);

    const values = {
        city,
        setCity,
        weather,
        dailyWeather
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext;