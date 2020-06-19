import React from "react";
import Navbar from "./Navbar/Navbar.js";
import AboutMe from "./AboutMe/AboutMe.js";
import lauren from "./Imgs/laurena.jpg";
import Skills from "./Skills/Skills.js";
import Contact from "./Contact/Contact.js";
import ProjectIntro from "./ProjectIntro/ProjectIntro.js";
import SocialProgramming from "./SocialProgramming/SocialProgramming.js";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <img className="lauren-image" alt="lauren" src={lauren} />
      <div className="lauren-home-overlay">
        <h1>Lauren Pane </h1>
        <h2>Junior Full-Stack Software Developer</h2>
      </div>
      <AboutMe />
      <Skills />
      <ProjectIntro />
      <SocialProgramming />
      <Contact />
    </div>
  );
}
