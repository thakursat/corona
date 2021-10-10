import React from "react";
import Logo from "../assets/svg/logo.svg";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <Logo className="footer-logo-image" />
          <div className="footer-logo-text">COVID - 19</div>
        </div>
        <div className="footer-right">
          <div className="footer-menu">
            <li className="footer-menu-item">Overview</li>
            <li className="footer-menu-item">Contagion</li>
            <li className="footer-menu-item">Symptoms</li>
            <li className="footer-menu-item">Prevention</li>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text">
          2020 @ All rights reserved by pixelspark.co
        </div>
      </div>
    </footer>
  );
}
