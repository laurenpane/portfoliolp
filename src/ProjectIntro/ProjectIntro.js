import React from "react";
import { Link } from "react-router-dom";
import kodflix from "../Imgs/Logos/netflix.png";
import "./ProjectIntro.css";

export default function ProjectIntro() {
  return (
    <div>
      <div className="projectIntro">
        <h1 className="title">My projects</h1>
        <a
          href="https://kodflix-lpane.herokuapp.com/"
          className="kodflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kodflix} alt="netflix logo" />
        </a>
        <Link className="projects" to="/projects">
          Read about my projects
        </Link>
      </div>
    </div>
  );
}
