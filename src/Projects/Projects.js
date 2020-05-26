import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="kodflix">
        <h1 className="title">My projects</h1>
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
