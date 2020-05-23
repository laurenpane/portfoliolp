import React from "react";
import "./Interests.css";
import html from "../Imgs/Logos/html.jpeg";
import javaScript from "../Imgs/Logos/javaScript.png";
import react from "../Imgs/Logos/react.png";
import css from "../Imgs/Logos/css.png";

export default function Interests() {
  return (
    <div>
      <div className="interests">
        <img src={javaScript} alt="javaScript" />
        <img src={react} alt="react" />
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <p className="info">
          Hi, I’m Lauren, a Junior Full Stack Software Developer based in
          London. I graduated from the University of Warwick in 2018 with a
          degree in German, and my passion for language-learning has since
          extended into those of the programming variety. After spending a year
          practising JavaScript in my free time, I am now enrolled on Kodiri’s
          intensive Bootcamp, learning JavaScript, HTML and CSS as well as
          ReactJs and NodeJs. <br /> <br />
          I’m looking to work for a company that would benefit from an ambitious
          Junior Developer, and who would support a fast and dedicated learner
          grow and expand their skills. Aside from programming, I enjoy spending
          my time getting active outdoors, and socialising with friends and
          family. I love travelling, particularly when it involves some sort of
          adventure, particularly mountain-climbing.
        </p>
      </div>
    </div>
  );
}
