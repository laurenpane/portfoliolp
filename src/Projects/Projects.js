import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflixHomeScreenshot from "../Imgs/Logos/netflix.png";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="title-grid">
        <h1 className="projectsTitle">My projects</h1>
      </div>
      <div className="kodflix">
        <h2 className="kHeader">Kodflix</h2>
        <img
          className="kodflixHome"
          src={kodflixHomeScreenshot}
          alt="kodflixHome"
        />
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
      </div>
      <div className="kHomeContainer">
        <Link className="kHome" to="/" data-aos="fade">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
