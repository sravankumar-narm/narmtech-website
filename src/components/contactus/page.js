import React from "react";
import "./contact.css";
import Image from "next/image";
import "./globals.css";
import Logo from "../../public/Images/contact/Logo.png";
import Logo1 from "../../public/Images/contact/Background9.png";
import Logo2 from "../../public/Images/contact/Background12.png";
import contant1 from "../../public/Images/contact/location.png";
import contant2 from "../../public/Images/contact/email.png";
import contant3 from "../../public/Images/contact/whatapp.png";
import contant from "../../public/Images/contact/Background2.png";
import F from "../../public/Images/contact/F.png";
import X from "../../public/Images/contact/X.png";
import I from "../../public/Images/contact/I.png";

function contact() {
  return (
    <div className="contact-us">
    <div className="menu-button"></div>
    <Image className="narm-tech-logo-1" src={Logo} />


    <div className="menu">
        <a href="#" className="home">Home</a>
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
        <div class="dropdown-content">
            <div>Home</div>
            <div>Offerings</div>
            <div>Consulting</div>
            <div>About us</div>
            <div>Our Team</div>
           
           </div>
    </div>
    <div className="background-parent">
      <Image
        className="background-icon"
        alt=""
        src={Logo2}
      />

      <Image
        className="background-icon1"
        alt=""
        src={Logo1}
      />
         <circle className="cricle"></circle>
     <circle className="cricle1"></circle>
     <circle className="cricle2"></circle>
    </div>

    <div className="get-in-touch-with-us-wrapper">
      <div className="get-in-touch">Get in touch with us</div>
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
      <div class="contact-us-inner">
        <div class="instance-child"></div>
      </div>
      <b class="send">Send</b>
      <div class="group-parent">
      <div className="fotter"></div>
      <div className="background-group" id="groupContainer15">
        <Image className="background-icon7" alt="" src={contant} />
        <div className="contact-us-parent">
          <div className="contact-us2">Contact Us</div>
          <div className="group-container">
            <Image className="group-icon" alt="" src={contant3} />

            <Image className="layer-1-icon" alt="" src={contant2} />

            <Image className="isolation-mode-icon" alt="" src={contant1} />

            <div className="frame-parent">
              <Image className="frame-icon" alt="" src={F} />

              <Image className="frame-icon" alt="" src={X} />

              <Image className="frame-icon" alt="" src={I} />
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
          <div className="copyright-2023-">© Copyright 2023 - Narm Tech</div>
          <div className="privacy-policy-parent">
            <div className="privacy-policy">Privacy Policy</div>
            <div className="privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <circle className="cricle3"></circle>
     <circle className="cricle4"></circle>
     <circle className="cricle5"></circle>
          <div class="line-div"></div>
        </div>
   
      </div>
    </div>
  );
}

export default contact;
