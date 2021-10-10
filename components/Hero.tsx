import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-text">
          <div className="hero-left-text-head1">COVID-19 Alert</div>
          <div className="hero-left-text-head2">
            Stay At Home Quarantine To Stop Corona Virus
          </div>
          <div className="hero-left-text-para">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to.
          </div>
          <button className="hero-left-text-button">Let Us Help</button>
        </div>
      </div>
      <div className="hero-right">
        <Image
          src="/hero_girl.png"
          layout="responsive"
          width={1060}
          height={817}
          className="hero-right-image"
          alt="hero_girl"
        />
      </div>
    </div>
  );
}
