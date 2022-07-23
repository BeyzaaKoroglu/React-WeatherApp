import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'
import cities from "../data/cities.json";
import "../styles/Header.css"

function Header() {
    const {city} = useContext(WeatherContext)
  return (
    <div id='header'>{cities[city-1].name.toLocaleUpperCase('tr-TR')}</div>
  )
}

export default Header