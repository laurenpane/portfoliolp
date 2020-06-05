import React from "react";
import "./Skills.css";
import react from "../Imgs/Logos/react.png";
import html from "../Imgs/Logos/html.png";
import css from "../Imgs/Logos/css.png";
import nodejs from "../Imgs/Logos/nodejs.png";
import javascript from "../Imgs/Logos/js.png";

export default function Skills() {
  return (
    <div className="skillsPage">
      <div className="skills-titleGrid">
        <h1 className="skills-title">My skills</h1>
      </div>
      <div className="skills-container">
        <div className="skills-item">
          <img className="skills-item-img" src={javascript} alt="javascript" />
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={react} alt="react" />
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={nodejs} alt="nodejs" />
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={html} alt="html" />
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={css} alt="css" />
        </div>
      </div>
    </div>
  );
}
