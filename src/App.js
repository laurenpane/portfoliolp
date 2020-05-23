import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import AboutMe from "./AboutMe/AboutMe.js";
import lauren from "./Imgs/laurena.jpg";
import Interests from "./Interests/Interests.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <img className="lauren" alt="lauren" src={lauren} />
        <AboutMe />
        <Interests />
      </div>
    </div>
  );
}
