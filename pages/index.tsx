import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatIs from "../components/WhatIs";
import Contagion from "../components/Contagion";
import Symptoms from "../components/Symptoms";
import Footer from "../components/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatIs />
      <Contagion />
      <Symptoms />
      <div className="anyques container">
        <p className="anyques-text">
          Have Question in mind?
          <br /> Let us help you
        </p>
        <div className="anyques-form">
          <input
            placeholder="write your email here"
            className="anyques-input"
            type="text"
          />
          <button className="anyques-button">Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
