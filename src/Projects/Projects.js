import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflixHomeScreenshot from "../Imgs/Logos/kodflix.JPG";
import carrateHomeScreenshot from "../Imgs/carrate.jpg";

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
            JavaScript and NodeJs. Users can browse television programmes from
            an animated grid, and select any of their choice to discover more
            information about that series. Data is fetched from a backend
            source, and is deployed using Heroku. This application is compatible
            with desktop and mobile. This project was built during the course of
            the Kodiri.com bootcamp, in May-June 2020.
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
        <div className="carrate">
          <h2 className="kHeader">carrate</h2>
          <img
            className="carrateHome"
            src={carrateHomeScreenshot}
            alt="carrateHome"
          />
          <div className="kCaption">
            <p>
              Full-stack, mobile-first recipe-finding application, built with
              ReactJs, CSS, JavaScript and NodeJs. The user enters all
              ingredients they wish to use into the searchbar, and the
              application returns recipes from an API. Recipes can be filtered
              by dietary requirements, and display nutritional information, such
              as calories. The user also has the option to select the 'Inspire
              Me' button, which generates a random recipe result. This project
              was built collaboratively during the course of the Kodiri.com
              bootcamp, in June 2020.
            </p>
            <a
              className="kLink"
              href="https://carrate-lpane.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out carrate
            </a>
          </div>
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
