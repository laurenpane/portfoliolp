import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflix from "../Imgs/Logos/netflix.png";

export default function Projects() {
  return (
    <div className="projects">
      <Navbar />
      <div className="title-grid">
        <h1 className="title">My projects</h1>
      </div>
      <div className="kodflix">
        <h2 className="kodflix-title">Kodflix</h2>
        <img className="kodflix-logo" src={kodflix} alt="netflix logo" />
        <a
          className="kodflixLink"
          href="https://kodflix-lpane.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Kodflix
        </a>
        <h2 className="kodflixCaption">A fkfkdkfdd based on kjkj</h2>
        <Link className="home" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
