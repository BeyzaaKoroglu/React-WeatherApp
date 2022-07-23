import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import "../styles/Container.css"
import Header from "./Header";

function Container() {
  return (
    <div className="container">
      <Search />
      <Header />
      <Weather />
    </div>
  );
}

export default Container;
