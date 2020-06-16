import React from "react";
import { Link } from "react-router-dom";
import kodflixLogo from "../Imgs/Logos/kodflix.png";
import carrateLogo from "../Imgs/carrate.jpg";
import "./ProjectIntro.css";

export default function ProjectIntro() {
  return (
    <div data-aos="fade">
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <div className="projectIntro">
        <h1 className="pLinkTitle" data-aos="fade in">
          My projects
        </h1>
        <a
          href="https://kodflix-lpane.herokuapp.com/"
          className="kodflixLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kodflixLogo} className="kLinkLetter" alt="carrate logo" />
        </a>
        <a
          href="https://carrate.herokuapp.com/"
          className="carrateLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={carrateLogo} className="cLinkImg" alt="carrate logo" />
        </a>
        <Link className="more-projects" to="/projects">
          <h3>Read about my projects</h3>
        </Link>
      </div>
    </div>
  );
}
