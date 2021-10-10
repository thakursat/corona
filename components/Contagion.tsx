import React from "react";
import AirTrans from "../assets/svg/air_trans.svg";
import Contained from "../assets/svg/contained.svg";
import Human from "../assets/svg/human.svg";

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
        <div className="contagion-card">
          <div className="contagion-card-image">
            <AirTrans />
          </div>
          <div className="contagion-card-text">
            <div className="contagion-card-text-head">Air Transmission</div>
          </div>
          <div className="contagion-card-text-para">
            Objectively evolve tactical expertise before extensible initiatives.
            Efficiently simplify
          </div>
        </div>
        <div className="contagion-card">
          <div className="contagion-card-image">
            <Human />
          </div>
          <div className="contagion-card-text">
            <div className="contagion-card-text-head">Human Contacts</div>
          </div>
          <div className="contagion-card-text-para">
            Washing your hands is one of thesimplest ways you can protect
          </div>
        </div>

        <div className="contagion-card">
          <div className="contagion-card-image">
            <Contained />
          </div>
          <div className="contagion-card-text">
            <div className="contagion-card-text-head">Containted Objects</div>
          </div>
          <div className="contagion-card-text-para">
            Use the tissue while sneezing,In this way, you can protect your
            droplets.
          </div>
        </div>
      </div>
    </div>
  );
}
