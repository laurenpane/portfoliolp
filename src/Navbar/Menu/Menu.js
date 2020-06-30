import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuLogo from "../../Imgs/Logos/menu.svg";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <img alt="menu" src={MenuLogo} className="menu-img" />
      </button>
      <div className={`menu-grid ${isOpen ? "is-open" : ""}`}>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@800&display=swap"
          rel="stylesheet"
        />
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/interests">
          About me
        </Link>
      </div>
    </div>
  );
}
