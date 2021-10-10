import React from "react";
import Logo from "../assets/svg/logo.svg";

export default function Navbar() {
  return (
    <header className="container navbar">
      <nav className="navbar-wrapper">
        <div className="navbar-logo">
          <Logo className="navbar-logo-image" />
          <div className="navbar-logo-text">COVID - 19</div>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            <li className="navbar-menu-item">Overview</li>
            <li className="navbar-menu-item">Contagion</li>
            <li className="navbar-menu-item">Symptoms</li>
            <li className="navbar-menu-item">Prevention</li>
          </div>
          <button className="navbar-menu-button">Contact</button>
        </div>
      </nav>
    </header>
  );
}
