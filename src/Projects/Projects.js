import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflix from "../Imgs/Logos/netflix.png";
import kodflixHomeScreenshot from "../Imgs/kodflixHomeScreenshot.png";
import kodflixDetailsScreenshot from "../Imgs/kodflixDetailsScreenshot.png";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="title-grid">
        <h1 className="projectsTitle">My projects</h1>
      </div>
      <div className="kodflix">
        <h2 className="kHeader">Kodflix</h2>
        <img className="kLogo" src={kodflix} alt="netflix logo" />
        <div className="kCaption">
          <p>
            Full-stack web application simulating Netflix, using ReactJs, CSS,
            JavaScript and NodeJs, compatible with desktop and mobile.
          </p>
          <a
            className="kLink"
            href="https://kodflix-lpane.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Kodflix
          </a>
        </div>
        <img
          className="kodflixHomeScreenshot"
          src={kodflixHomeScreenshot}
          alt="kodflixHome"
        />
        <img
          className="kodflixDetailsScreenshot"
          src={kodflixDetailsScreenshot}
          alt="kodflixDetails"
        />
        <Link className="kHome" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
