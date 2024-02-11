import React from "react";
import "./contact.css";
import Logo from "../../Images/contact/Logo.png";
import Logo1 from "../../Images/contact/Background9.png";
import Logo2 from "../../Images/contact/Background12.png";
import contant1 from "../../Images/contact/location.png";
import contant2 from "../../Images/contact/email.png";
import contant3 from "../../Images/contact/whatapp.png";
import contant from "../../Images/contact/Background2.png";
import F from "../../Images/contact/F.png";
import X from "../../Images/contact/X.png";
import I from "../../Images/contact/I.png";

function Contactus() {
  return (
    <div className="Contact-us">
    <div className="menu-button"></div>
    <img className="narm-tech-logo-1" src={Logo} />


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
         <circle className="cricle-contact"></circle>
     <circle className="cricle1"></circle>
     <circle className="cricle2"></circle>
    </div>

    <div className="contact-get-in-touch-with-us-wrapper">
      <div className="contact-get-in-touch">Get in touch with us</div>
    </div>
    <div className="if-you-have-container">
      <p className="if-you-have-a-question-or-any">
        <span className="you-have-a">
        If you have a question or any details form us,
        </span>
      </p>
      <p className="if-you-have-a-question-or-any">
        <span className="you-have-a">
          Free to contact us using the form on the below.
        </span>
      </p>
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
      <div className="contact-background-group" id="groupContainer15">
        <img className="contact-background-icon7" alt="" src={contant} />
        <div className="contact-us-parent">
          <div className="c-contact-us2">Contact Us</div>
          <div className="contact-group-container">
            <img className="contact-group-icon" alt="" src={contant3} />

            <img className="contact-layer-1-icon" alt="" src={contant2} />

            <img className="contact-isolation-mode-icon" alt="" src={contant1} />

            <div className="contact-frame-parent">
              <img className="contact-frame-icon" alt="" src={F} />

              <img className="contact-frame-icon" alt="" src={X} />

              <img className="contact-frame-icon" alt="" src={I} />
            </div>
            <div className="contact-rd-main-virgo-container">
              <p className="leveraging-ai-and">
                #92, 3rd Main, Virgo Nagar, Post,
              </p>
              <p className="leveraging-ai-and">
                Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>
            <div className="contact-infonarmtechcom-hrnarmtech">
              <p className="leveraging-ai-and">info@narmtech.com</p>
              <p className="leveraging-ai-and">hr@narmtech.com</p>
            </div>
            <div className="contact-sales-and-services-91-container">
              <p className="leveraging-ai-and">
                +91 9611291621 - Sales and Services
              </p>
              <p className="leveraging-ai-and">
                +91 9663901621 - Hiring Queries
              </p>
              <p className="leveraging-ai-and">+91 8297902227 - Whatsapp</p>
            </div>
          </div>
          <div className="contact-copyright-2024-">© Copyright 2024 - Narm Tech</div>
          <div className="contact-privacy-policy-parent">
            <div className="contact-privacy-policy">Privacy Policy</div>
            <div className="contact-privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <circle className="cricle3"></circle>
     <circle className="cricle4"></circle>
     <circle className="cricle5"></circle>
          <div className="line-div"></div>
        </div>
   
      </div>
    </div>
  );
}

export default Contactus;
