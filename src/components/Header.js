import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'
import cities from "../data/cities.json";
import "../styles/Header.css"

function Header() {
    const {city,weather} = useContext(WeatherContext)
  return (
    <div id='header'>{cities[city-1].name.toUpperCase()}</div>
  )
}

export default Header