import React, { Component } from "react";
import "./Navbar.css";
import emailMe from "../Imgs/Logos/emailMe.png";
import linkedInMe from "../Imgs/Logos/linkedInMe.png";
import gitHubMe from "../Imgs/Logos/githubMe.png";
import home from "../Imgs/Logos/home.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="home" to="/">
          <img src={home} alt="home" className="home" />
        </Link>
        <a
          className="email"
          href="mailto:lauren.pane1@googlemail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailMe} className="emailMe" alt="email" />
        </a>
        <a
          className="linkedIn"
          href="https://uk.linkedin.com/in/lauren-pane-773169169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInMe} className="linkedInMe" alt="linkedIn" />
        </a>
        <h2 className="laurenPane">
          Lauren Pane - Junior Full-Stack Software Developer
        </h2>
        <a
          className="gitHubMe"
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
