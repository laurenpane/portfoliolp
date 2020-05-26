import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import AboutMe from "./AboutMe/AboutMe.js";
import lauren from "./Imgs/laurena.jpg";
import Skills from "./Skills/Skills.js";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <img className="lauren" alt="lauren" src={lauren} />
      <AboutMe />
      <Skills />
      <Link className="projects" to="/projects">
        See my projects
      </Link>
    </div>
  );
}
