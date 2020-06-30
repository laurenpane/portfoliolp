import React from "react";
import "./SocialProgramming.css";
import javascript from "../Imgs/Logos/js2.png";
import programming from "../Imgs/Logos/programming.png";

export default function SocialProgramming() {
  return (
    <div className="social-programming" data-aos="fade">
      <div className="social-programming-title-grid">
        <h1 className="social-programming-title">
          <span> - </span>Social Programming<span> - </span>
        </h1>
      </div>
      <div className="social-programming-main-grid">
        <div className="social-programming-grid 1">
          <h3 className="social-programming-item title">Recursion Workshop</h3>
          <a
            className="social-programming-item"
            href="https://www.youtube.com/watch?v=RlBjCgRgrBo&t=1323s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={javascript} className="social-link-img" alt="recursion" />
          </a>
          <p className="social-programming-item">
            During the Kodiri bootcamp, I researched and presented a workshop
            about my chosen topic, Recursion, which was recorded and uploaded to
            Kodiri's YouTube channel.
          </p>
        </div>
        <div className="social-programming-grid 2">
          <h3 className="social-programming-item title">
            Live JavaScript and React Coding Event - Kodiri
          </h3>
          <a
            className="social-programming-item"
            href="https://www.kodiri.com/news/rewatch-our-social-coding-session-with-giacomo-sorbi-and-pusher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={programming}
              className="social-link-img"
              alt="kodiri-event"
            />
          </a>
          <p className="social-programming-item">
            Participated in a live JavaScript and React coding event, where
            myself and a team of students and developers, including Giacomo
            Sorbi, were livestreamed to a YouTube audience, solving questions
            faced by partipicants.
          </p>
        </div>
        <div className="social-programming-grid 3">
          <h3 className="social-programming-item title">
            Live React Coding Event - Time to React
          </h3>
          <a
            className="social-programming-item"
            href="https://www.youtube.com/watch?v=uFXJqUmmI20&list=PL8xuokhAnn4qKWYQFq012dq1aFW5fIGr4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={programming}
              className="social-link-img"
              alt="time-to-react"
            />
          </a>
          <p className="social-programming-item">
            Live React event, where myself and a small group of fellow Kodiri
            students worked together live with founder Ricardo Mallols to solve
            problems that made up the challenge. We were livestreamed to
            Pusher's YouTube channel.
          </p>
        </div>
      </div>
    </div>
  );
}
