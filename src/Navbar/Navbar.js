import React, { Component } from "react";
import "./Navbar.css";
import emailMe from "../Imgs/Logos/emailMe.png";
import linkedInMe from "../Imgs/Logos/linkedInMe.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a
          className="email"
          href="http://www.google.com"
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
      </div>
    );
  }
}
