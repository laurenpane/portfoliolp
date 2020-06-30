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
          London. Always having had a passion for language-learning, I graduated
          from the University of Warwick in 2018 with a degree in German, and my
          interest in languages has since extended into those of the programming
          variety. After practising JavaScript in my free time, spending
          lunchbreaks in cafes and evenings at my kitchen table, I quickly
          realised I wanted coding to be more than a hobby. In March 2020, I
          quit my graduate job to embark on Kodiri’s intensive Bootcamp.
          <br />
          <br />
          It was here I was able to really immerse myself in programming. The
          project-led course meant I was quickly learning the pratical
          application of JavaScript, HTML5, CSS3, ReactJs and NodeJs, and I
          could pick up new skills and technologies, such as Heroku, Vercel,
          Git, GitHub, APIs and Slack. I could also consolidate my learning with
          regular challenges and pair-programming sessions, and was even able to
          deliver my own workshop about Recursion in JavaScript!
        </p>
        <p className="hobbies" data-aos="fade in">
          Having completed the bootcamp, I’m now looking to work for a company
          who would benefit from having a disciplined, enthusiastic Junior
          Developer on the team, and who would support a fast and dedicated
          learner continue to expand their skills, ultimately enhancing the
          growth and productivity of the team and company.
          <br />
          <br />
          Aside from programming, I love spending my time getting active
          outdoors, and socialising. I love travelling, particularly when it
          involves some sort of adventure, especially mountain-climbing or
          trekking! I also enjoy getting creative with painting and drawing
          (although I'm not very good!), as well as reading, doing yoga, or
          sitting with a cup of tea and catching up with friends and family.
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
