import React, { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import cities from "../data/cities.json";

function Search() {
  const {city, setCity} = useContext(WeatherContext)
  const onChangeCity = (e) => {
    setCity(e.target.value);
};
  return (
    <div>
      <select name="city" value={city} onChange={onChangeCity}>
        {cities.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <br />
      {city}
    </div>
  );
}

export default Search;
