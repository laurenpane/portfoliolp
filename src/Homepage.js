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
      <img className="lauren-image" alt="lauren" src={lauren} />
      <div className="lauren-home-overlay">
        <h1>Lauren Pane </h1>
        <h2>Junior Full-Stack Software Developer</h2>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </div>
      <AboutMe />
      <Skills />
      <ProjectIntro />
    </div>
  );
}
