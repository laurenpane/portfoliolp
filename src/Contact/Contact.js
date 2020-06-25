import React from "react";
import "./Contact.css";
import linkedInMe from "../Imgs/Logos/linkedInMe.png";
import gitHubMe from "../Imgs/Logos/githubMe.png";

export default function Contact() {
  return (
    <div className="contact" data-aos="fade">
      <div className="contact-title-container">
        <h1 className="contact-title-item">
          <span> - </span>Contact me<span> - </span>
        </h1>
        <div className="contact-grid">
          <a
            className="contact-item linked"
            href="https://uk.linkedin.com/in/lauren-pane-773169169"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInMe} className="linkedInMe" alt="linkedIn" />
          </a>
          <a
            className="contact-item"
            href="https://github.com/laurenpane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubMe} className="gitHubMe" alt="gitHubMe" />
          </a>
        </div>
        <h3>lauren.pane1@googlemail.com</h3>
      </div>
    </div>
  );
}
