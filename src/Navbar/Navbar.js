import React, { Component } from "react";
import "./Navbar.css";
import home from "../Imgs/Logos/home.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu.js";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-item" to="/">
          <img src={home} alt="home" className="home" />
        </Link>
        <Menu />
      </div>
    );
  }
}
