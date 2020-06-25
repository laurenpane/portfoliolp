import React from "react";
import "./Skills.css";
import react from "../Imgs/Logos/react.svg";
import html from "../Imgs/Logos/html.svg";
import css from "../Imgs/Logos/css.svg";
import nodejs from "../Imgs/Logos/nodejs.svg";
import javascript from "../Imgs/Logos/js.svg";

export default function Skills() {
  return (
    <div className="skillsPage" data-aos="fade">
      <div className="skills-titleGrid">
        <h1 className="skills-title">
          <span> - </span>My skills<span> - </span>
        </h1>
      </div>
      <div className="skills-container">
        <div className="skills-item">
          <img className="skills-item-img" src={javascript} alt="javascript" />
          <h3 className="skills-item-title">JavaScript</h3>
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={react} alt="react" />
          <h3 className="skills-item-title">ReactJS</h3>
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={nodejs} alt="nodejs" />
          <h3 className="skills-item-title">NodeJS</h3>
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={html} alt="html" />
          <h3 className="skills-item-title">HTML5</h3>
        </div>
        <div className="skills-item">
          <img className="skills-item-img" src={css} alt="css" />
          <h3 className="skills-item-title">CSS3</h3>
        </div>
      </div>
    </div>
  );
}
