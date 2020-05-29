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
      <div className="titleGrid">
        <h1 className="title">My skills</h1>
      </div>
      <div className="skills">
        <img className="javascript" src={javascript} alt="javascript" />
        <img className="react" src={react} alt="react" />
        <img className="nodejs" src={nodejs} alt="nodejs" />
        <img className="html" src={html} alt="html" />
        <img className="css" src={css} alt="css" />
      </div>
    </div>
  );
}