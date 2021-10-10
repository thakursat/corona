import React from "react";
import Image from "next/image";

export default function Symptoms() {
  return (
    <div className="symptoms container">
      <div className="symptoms-head">
        <div className="symptoms-head1">COVID-19</div>
        <div className="symptoms-head2">Symptoms</div>
        <div className="symptoms-para">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </div>
      </div>
      <div className="symptoms-image">
        <Image
          src="/symptoms.png"
          layout="responsive"
          width={1060}
          height={817}
          alt="symptoms"
        />
      </div>
    </div>
  );
}
