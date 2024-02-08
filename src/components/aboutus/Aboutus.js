import React from "react";
import "./aboutus.css"
import Narmlogo from "../../Images/aboutus/narmtech.png";
import hand from "../../Images/aboutus/hand.png"


function Aboutus() {
  return (
    <div className="about-us">
      <header className="navbar">
        {/* logo */}
        <div className="logo">
          <img className="narm-tech-logo" src={Narmlogo}></img>
        </div>
        {/* nav-bar */}
        <div className="Navbar-items">
           <div className="menu">
            <a href="/">Home</a>
          </div>
          <div className="menu1">
            <a href="/offers">Offerings</a>
          </div>
          <div className="menu2">
            <a href="/consulting">Consulting</a>
          </div>
          <div className="menu3">
            <a href="/aboutus">About us</a>
          </div>
          <div className="menu4">
            <a href="/ourteam">Our Team</a>
          </div>
          <div className="menu5">
            <a href="/contactus">Contact us</a>
          </div>
        </div>
      </header>

      <section>
      <div className="Aboutcricle1"></div>
      <div className="Aboutcricle2"></div>
      <div className="Aboutcricle3"></div>
      <div className="Aboutcricle4"></div>
      <div className="Aboutcricle5"></div>
      <div className="Aboutcricle6"></div>
      <div className="Aboutcricle7"></div>
      <div className="Aboutcricle8"></div>
      <div className="Aboutcricle9"></div>
      <div className="Aboutpattern8"></div>
      <div className="Aboutpattern9"></div>
      <div className="about-us2">
        <div className="about-us-child" />
        <b className="about-us3">About us</b>
        <div className="narm-tech-is-container">
          <p className="our-ai-powered-products-for-bu">
            NARM Tech is a visionary start-up revolutionizing business
            operations through AI-powered software products. Our cutting-edge
            solutions enable organizations to streamline processes, optimize
            efficiency, and uncover invaluable insights.
          </p>
          <p className="our-ai-powered-products-for-bu">
            By harnessing the latest in machine learning and data analytics, we
            redefine how businesses operate in the digital age.Embrace the
            future and experience the transformative power of AI with NARM Tech.
          </p>
        </div>
        <div className="about-us-inner">
          <div className="Home-instance-child5"></div>
        </div>
        <img className="mask-group-icon" alt="" src={hand} />
      </div>
      </section>
    </div>
  );
}

export default Aboutus;
