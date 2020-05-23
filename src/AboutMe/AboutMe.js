import React from "react";
import lauren2 from "../Imgs/laurenb.JPG";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <img className="lauren2" alt="lauren2" src={lauren2} />
      <h1 className="description">
        London based Full Stack Junior Developer, proficient in JavaScript,
        ReactJS, HTML5 and CSS3
      </h1>
      <p className="more">Find out more</p>
    </div>
  );
}
