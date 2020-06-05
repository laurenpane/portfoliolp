import React, { Component } from "react";
import "./Navbar.css";
import linkedInMe from "../Imgs/Logos/linkedInMe.png";
import gitHubMe from "../Imgs/Logos/githubMe.png";
import home from "../Imgs/Logos/home.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-item" to="/">
          <img src={home} alt="home" className="home" />
        </Link>
        <p className="navbar-item">Projects</p>
        <p className="navbar-item">About me</p>
        <p className="navbar-item">Contact</p>
        <a
          className="navbar-item"
          href="https://uk.linkedin.com/in/lauren-pane-773169169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInMe} className="linkedInMe" alt="linkedIn" />
        </a>
        <a
          className="navbar-item"
          href="https://github.com/laurenpane"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubMe} className="gitHubMe" alt="gitHubMe" />
        </a>
      </div>
    );
  }
}
