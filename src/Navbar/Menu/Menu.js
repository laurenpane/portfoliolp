import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuLogo from "../../Imgs/Logos/menu.png";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <img alt="menu" src={MenuLogo} />
      </button>
      <div className={`menu-grid ${isOpen ? "is-open" : ""}`}>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/interests">
          About me
        </Link>
        <p className="navbar-item">Contact</p>
      </div>
    </div>
  );
}
