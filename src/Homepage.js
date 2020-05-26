import React from "react";
import Navbar from "./Navbar/Navbar.js";
import AboutMe from "./AboutMe/AboutMe.js";
import lauren from "./Imgs/laurena.jpg";
import Skills from "./Skills/Skills.js";
import ProjectIntro from "./ProjectIntro/ProjectIntro.js";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <img className="lauren" alt="lauren" src={lauren} />
      <AboutMe />
      <Skills />
      <ProjectIntro />
    </div>
  );
}
