import React from "react";
import "./dummy.css";
import Logo from "../../Images/dummy/Logo.png";
import Logo1 from "../../Images/dummy/Background9.png";
import Logo2 from "../../Images/dummy/Background12.png";
import contant1 from "../../Images/dummy/location.png";
import contant2 from "../../Images/dummy/email.png";
import contant3 from "../../Images/dummy/whatapp.png";
import contant from "../../Images/dummy/Background2.png";
import F from "../../Images/dummy/F.png";
import X from "../../Images/dummy/X.png";
import I from "../../Images/dummy/I.png";

function Dummy() {
  return (
    <div className="contact-us">
    <div className="menu-button"></div>
    <img className="narm-tech-logo-1" src={Logo} />

    <div className="menu">
        <a href="#" className="home-dummy">Home</a>
      </div>
      <div className="menu1">
        <a href="#" className="offerings">Offerings</a>
      </div>
      <div className="menu2">
        <a href="#" className="home">Consulting</a>
      </div>
      <div className="menu3">
        <a href="#" className="home">About us</a>
      </div>
      <div className="menu4">
        <a href="#" className="our-team">Our Team</a>
      </div>
      <div className="menu5">
        <a href="#" className="our-team">Contact us</a>
        <div className="dropdown-content">
            <div>Home</div>
            <div>Offerings</div>
            <div>Consulting</div>
            <div>About us</div>
            <div>Our Team</div>
           
           </div>
    </div>
    <div className="background-parent">
      <img
        className="background-icon"
        alt=""
        src={Logo2}
      />

      <img
        className="background-icon1"
        alt=""
        src={Logo1}
      />
          <circle className="cricle-dummy"></circle>
     <circle className="cricle1"></circle>
     <circle className="cricle2"></circle>
    </div>
    <div className="get-in-touch-with-us-wrapper">
      <div className="get-in-touch">Our team will connect with you shortly</div>
    </div>

    <div className="contact-us-child"></div>
    <div className="rectangle-parent">
      <div className="group-child"></div>
      <input type="text" className="your-number" placeholder="Your Number"/>
    </div>
    <div className="rectangle-group">
      <div className="group-child"></div>
      <input type="text" className="your-number"placeholder="Your Name"/>
    </div>
    <div className="rectangle-container">
      <div className="group-child"></div>
      <input type="email" className="your-email-address"placeholder="Your Email address"/>
    </div>
    <div className="group-div">
      <div className="rectangle-div"></div>
      <textarea className="your-message" placeholder="Your Message"></textarea>
    </div>
      <div className="contact-us-inner">
        <div className="instance-child"></div>
      </div>
      <b className="send">Send</b>
      <div className="group-parent">
      <div className="fotter"></div>
      <div className="background-group" id="groupContainer15">
        <img className="background-icon7" alt="" src={contant} />
        <div className="contact-us-parent">
          <div className="contact-us2">Contact Us</div>
          <div className="group-container">
            <img className="group-icon" alt="" src={contant3} />

            <img className="layer-1-icon" alt="" src={contant2} />

            <img className="isolation-mode-icon" alt="" src={contant1} />

            <div className="frame-parent">
              <img className="frame-icon" alt="" src={F} />

              <img className="frame-icon" alt="" src={X} />

              <img className="frame-icon" alt="" src={I} />
            </div>
            <div className="rd-main-virgo-container">
              <p className="leveraging-ai-and">
                #92, 3rd Main, Virgo Nagar, Post,
              </p>
              <p className="leveraging-ai-and">
                Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>
            <div className="infonarmtechcom-hrnarmtech">
              <p className="leveraging-ai-and">info@narmtech.com</p>
              <p className="leveraging-ai-and">hr@narmtech.com</p>
            </div>
            <div className="sales-and-services-91-container">
              <p className="leveraging-ai-and">
                +91 9611291621 - Sales and Services
              </p>
              <p className="leveraging-ai-and">
                +91 9663901621 - Hiring Queries
              </p>
              <p className="leveraging-ai-and">+91 8297902227 - Whatsapp</p>
            </div>
          </div>
          <div className="copyright-2024-">© Copyright 2024 - Narm Tech</div>
          <div className="privacy-policy-parent">
            <div className="privacy-policy">Privacy Policy</div>
            <div className="privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <circle className="cricle3-dummy"></circle>
     <circle className="cricle4-dummy"></circle>
     <circle className="cricle5"></circle>
          <div className="line-div"></div>
        </div>
   
      </div>
    </div>
  );
}

export default Dummy;
