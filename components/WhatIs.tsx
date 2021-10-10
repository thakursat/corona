import React from "react";
import Image from "next/image";

export default function WhatIs() {
  return (
    <div className="whatis">
      <div className="whatis-right">
        <Image
          src="/whatis.png"
          layout="responsive"
          width={817}
          height={817}
          className="whatis-right-image"
          alt="what-is"
        />
      </div>
      <div className="whatis-left">
        <div className="whatis-left-text">
          <div className="whatis-left-text-head1">What is COVID-19</div>
          <div className="whatis-left-text-head2">Coronavirus</div>
          <div className="whatis-left-text-para">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response.
          </div>
          <button className="whatis-left-text-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}
