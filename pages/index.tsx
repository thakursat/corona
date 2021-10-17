import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import Image from "next/image";
import Aos from "aos";

import Logo from "../assets/svg/logo.svg";
import AirTrans from "../assets/svg/air_trans.svg";
import Contained from "../assets/svg/contained.svg";
import Human from "../assets/svg/human.svg";

export default function Index() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    width: "70%",
    height: "60vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 1,
  });

  const loadData = async () => {
    await fetch("https://corona-api.com/countries")
      .then((res) => res.json())
      .then((res) => {
        const tempData = res.data.sort(
          (a, b) => b.latest_data.confirmed - a.latest_data.confirmed
        );
        setApiData(tempData);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  const handleClick = (val) => {
    setViewport({
      ...viewport,
      latitude: val.coordinates.latitude,
      longitude: val.coordinates.longitude,
    });
  };

  useEffect(() => {
    loadData();
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div>
      <header data-aos="fade-down" className="container navbar">
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
      <div className="hero">
        <div data-aos="fade-right" className="hero-left">
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
        <div data-aos="fade-left" className="hero-right">
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
      <div className="whatis">
        <div data-aos="fade-right" className="whatis-right">
          <Image
            src="/whatis.png"
            layout="responsive"
            width={817}
            height={817}
            className="whatis-right-image"
            alt="what-is"
          />
        </div>
        <div data-aos="fade-left" className="whatis-left">
          <div className="whatis-left-text">
            <div className="whatis-left-text-head1">What is COVID-19</div>
            <div className="whatis-left-text-head2">Coronavirus</div>
            <div className="whatis-left-text-para">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called
              COVID-19.Lauren Sauer, M.S., the director of operations with the
              Johns Hopkins Office of Critical Event Preparedness and Response.
            </div>
            <button className="whatis-left-text-button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="contagion container">
        <div data-aos="fade-down" className="contagion-head">
          <div className="contagion-head1">COVID-19</div>
          <div className="contagion-head2">Contagion</div>
          <div className="contagion-para">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type
          </div>
        </div>
        <div data-aos="fade-up" className="contagion-wrapper">
          <div className="contagion-card">
            <div className="contagion-card-image">
              <AirTrans />
            </div>
            <div className="contagion-card-text">
              <div className="contagion-card-text-head">Air Transmission</div>
            </div>
            <div className="contagion-card-text-para">
              Objectively evolve tactical expertise before extensible
              initiatives. Efficiently simplify
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
      <div className="symptoms container">
        <div data-aos="fade-down" className="symptoms-head">
          <div className="symptoms-head1">COVID-19</div>
          <div className="symptoms-head2">Symptoms</div>
          <div className="symptoms-para">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory
          </div>
        </div>
        <div data-aos="fade-right" className="symptoms-image">
          <Image
            src="/symptoms.png"
            layout="responsive"
            width={1060}
            height={817}
            alt="symptoms"
          />
        </div>
      </div>
      <div className="live-report-wrapper container">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGL>
        <div className="live-report">
          <div className="live-report-head">Live Reports</div>
          <div className="live-report-body">
            {loading && <p className="live-report-loading">Loading...</p>}
            {!loading && (
              <div className="live-report-list">
                {apiData.map((ele, index) => {
                  return (
                    <div
                      key={ele.population + index}
                      onClick={() => handleClick(ele)}
                      className="live-report-list-item"
                    >
                      <div className="live-report-list-name">{ele.name}</div>
                      <div className="live-report-list-count">
                        {ele.latest_data.confirmed}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="anyques container">
        <p data-aos="fade-down" className="anyques-text">
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

      {/* footer */}
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
    </div>
  );
}
