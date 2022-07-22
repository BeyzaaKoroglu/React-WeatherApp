import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import "../App.css"
import Header from "./Header";

function Container() {
  return (
    <div className="Container">
      <Search />
      <Header/>
      <Weather />
    </div>
  );
}

export default Container;
