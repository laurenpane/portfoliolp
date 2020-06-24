import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Navbar/Navbar.js";
import kodflixHomeScreenshot from "../Imgs/Logos/kodflix.JPG";
import carrateHomeScreenshot from "../Imgs/carrate.jpg";
import react from "../Imgs/Logos/react.svg";
import html from "../Imgs/Logos/html.svg";
import css from "../Imgs/Logos/css.svg";
import nodejs from "../Imgs/Logos/nodejs.svg";
import javascript from "../Imgs/Logos/js.svg";
import heroku from "../Imgs/Logos/heroku.svg";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="title-grid">
        <h1 className="projectsTitle">My projects</h1>
      </div>
      <div className="project-grid">
        <div className="kodflix">
          <h1 className="kHeader">Kodflix</h1>
          <img
            className="kodflixImg"
            src={kodflixHomeScreenshot}
            alt="kodflixHome"
          />
          <p className="kCaption">
            Full-stack web application simulating Netflix, using ReactJs, CSS,
            JavaScript and NodeJs. Users can browse television programmes from
            an animated grid, and select any of their choice to discover more
            information about that series. Data is fetched from a backend
            source, and is deployed using Heroku. This application is compatible
            with desktop and mobile. This project was built during the course of
            the Kodiri.com bootcamp, in May-June 2020.
          </p>
          {/* <a
            className="kLink"
            href="https://kodflix-lpane.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Kodflix
          </a> */}
          <div className="kTech">
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={javascript}
                alt="javascript"
              />
              <h3 className="skills-item-title">JavaScript</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={react}
                alt="react"
              />
              <h3 className="skills-item-title">ReactJS</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={nodejs}
                alt="nodejs"
              />
              <h3 className="skills-item-title">NodeJS</h3>
            </div>
            <div className="skills-item">
              <img className="skills-item-img projects" src={css} alt="css" />
              <h3 className="skills-item-title">CSS3</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={heroku}
                alt="css"
              />
              <h3 className="skills-item-title">Heroku</h3>
            </div>
          </div>
        </div>
        <div className="carrate">
          <h1 className="cHeader">Carrate</h1>
          <img
            className="carrateImg"
            src={carrateHomeScreenshot}
            alt="carrateHome"
          />
          <p className="cCaption">
            Full-stack, mobile-first recipe-finding application, built with
            ReactJs, CSS, JavaScript and NodeJs. The user enters all ingredients
            they wish to use into the searchbar, and the application returns
            recipes from an API. Recipes can be filtered by dietary
            requirements, and display nutritional information, such as calories.
            The user also has the option to select the 'Inspire Me' button,
            which generates a random recipe result. This project was built
            collaboratively during the course of the Kodiri.com bootcamp, in
            June 2020.
          </p>
          {/* <a
            className="cLink"
            href="https://carrate.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Carrate
          </a> */}
          <div className="cTech">
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={javascript}
                alt="javascript"
              />
              <h3 className="skills-item-title">JavaScript</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={react}
                alt="react"
              />
              <h3 className="skills-item-title">ReactJS</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={nodejs}
                alt="nodejs"
              />
              <h3 className="skills-item-title">NodeJS</h3>
            </div>
            <div className="skills-item">
              <img className="skills-item-img projects" src={css} alt="css" />
              <h3 className="skills-item-title">CSS3</h3>
            </div>
            <div className="skills-item">
              <img
                className="skills-item-img projects"
                src={heroku}
                alt="css"
              />
              <h3 className="skills-item-title">Heroku</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="backHomeContainer">
        <Link className="backHome" to="/" data-aos="fade">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
