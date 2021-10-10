import React from "react";
import Image from "next/image";

export default function Contagion() {
  return (
    <div className="contagion container">
      <div className="contagion-head">
        <div className="contagion-head1">COVID-19</div>
        <div className="contagion-head2">Contagion</div>
        <div className="contagion-para">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type
        </div>
      </div>
      <div className="contagion-wrapper">
        <Card
          image={"/contagion_air.png"}
          head={"Air Transmission"}
          para={
            "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
          }
        />
        <Card
          image={"/contagion_human.png"}
          head={"Human Contacts"}
          para={"Washing your hands is one of thesimplest ways you can protect"}
        />
        <Card
          image={"/contagion_contained.png"}
          head={"Containted Objects"}
          para={
            "Use the tissue while sneezing,In this way, you can protect your droplets."
          }
        />
      </div>
    </div>
  );
}

const Card = ({ image, head, para }) => {
  return (
    <div className="contagion-card">
      <div className="contagion-card-image">
        <Image
          src={image}
          layout="responsive"
          width={500}
          height={500}
          alt="hero_girl"
        />
      </div>
      <div className="contagion-card-text">
        <div className="contagion-card-text-head">{head}</div>
      </div>
      <div className="contagion-card-text-para">{para}</div>
    </div>
  );
};
