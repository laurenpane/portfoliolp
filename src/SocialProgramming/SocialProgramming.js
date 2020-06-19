import React from "react";
import "./SocialProgramming.css";
import javascript from "../Imgs/Logos/js2.png";

export default function SocialProgramming() {
  return (
    <div className="social-programming" data-aos="fade">
      <div className="social-programming-title-grid">
        <h1 className="social-programming-title">Social Programming</h1>
      </div>
      <div className="social-programming-grid">
        <a
          className="social-programming-item"
          href="https://www.youtube.com/watch?v=uFXJqUmmI20&list=PL8xuokhAnn4qKWYQFq012dq1aFW5fIGr4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascript} className="social-link-img" alt="recursion" />
        </a>
        <a
          className="social-programming-item"
          href="https://www.youtube.com/watch?v=9v579YUtTA8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascript} className="social-link-img" alt="recursion" />
        </a>
        <a
          className="social-programming-item"
          href="https://www.youtube.com/watch?v=RlBjCgRgrBo&t=1323s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascript} className="social-link-img" alt="recursion" />
        </a>
      </div>
    </div>
  );
}
