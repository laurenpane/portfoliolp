import React from "react";
import { Link } from "react-router-dom";
import kodflixLogo from "../Imgs/Logos/netflix.png";
import "./ProjectIntro.css";

export default function ProjectIntro() {
  return (
    <div data-aos="fade">
      <div className="projectIntro">
        <h1 className="pLinkTitle" data-aos="fade in" data-aos-delay="1000">
          My projects
        </h1>
        <a
          href="https://kodflix-lpane.herokuapp.com/"
          className="kodflixLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kodflixLogo} className="kLinkImg" alt="netflix logo" />
        </a>
        <Link className="more-projects" to="/projects">
          Read about my projects
        </Link>
      </div>
    </div>
  );
}
