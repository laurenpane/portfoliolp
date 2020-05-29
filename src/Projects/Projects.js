import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflix from "../Imgs/Logos/netflix.png";

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
        <a
          className="kLink"
          href="https://kodflix-lpane.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Kodflix
        </a>
        <p className="kCaption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Link className="kHome" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
