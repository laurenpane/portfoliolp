import React from "react";
import { Link } from "react-router-dom";
import "./Interests.css";
import Navbar from "../Navbar/Navbar.js";
import grad from "../Imgs/grad.JPG";
import bali from "../Imgs/bali.JPG";

export default function Interests() {
  return (
    <div>
      <Navbar />
      <div className="interests">
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap"
          rel="stylesheet"
        />
        <h1 className="title">About me</h1>
        <img className="grad" src={grad} alt="graduation" />
        <p className="education">
          Hi, I’m Lauren, a Junior Full-Stack Software Developer based in
          London. I graduated from the University of Warwick in 2018 with a
          degree in German, and my interest in languages has since extended into
          those of the programming variety.
          <br />
          <br />
          After spending some time practising JavaScript in my free time, I am
          now enrolled on Kodiri’s intensive Bootcamp, learning JavaScript, HTML
          and CSS as well as ReactJs and NodeJs.
        </p>
        <p className="hobbies" data-aos="fade in">
          I’m looking to work for a company who would benefit from taking on an
          enthusiastic, ambitious Junior Developer, and who would support a fast
          and dedicated learner continue to expand their skills and grow within
          the team.
          <br />
          <br />
          Aside from programming, I enjoy spending my time getting active
          outdoors, and socialising with friends and family. I love travelling,
          particularly when it involves some sort of adventure, particularly
          mountain-climbing!
        </p>
        <img
          className="bali"
          src={bali}
          alt="mountain-climbing"
          data-aos="fade in"
        />
        <Link className="interests-link" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
