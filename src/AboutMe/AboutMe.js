import React from "react";
import lauren2 from "../Imgs/laurenb.JPG";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <img className="lauren2" alt="lauren2" src={lauren2} />
      <h1 className="description">
        London based Full Stack Junior Developer, proficient in JavaScript,
        ReactJS, NodeJS, HTML5 and CSS3
      </h1>
      <Link className="more" to="/interests">
        Read more about me
      </Link>
    </div>
  );
}
