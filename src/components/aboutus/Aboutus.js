import React from "react";
import "./aboutus.css"
import Narmlogo from "../../Images/aboutus/narmtech.png";
import hand from "../../Images/aboutus/hand.png"
import contant1 from "../../Images/aboutus/location.png";
import contant2 from "../../Images/aboutus/email.png"; 
import contant3 from "../../Images/aboutus/whatapp.png";
import contant from "../../Images/aboutus/Background2.png";
import F from "../../Images/aboutus/F.png";
import X from "../../Images/aboutus/X.png";
import I from "../../Images/aboutus/I.png";


function Aboutus() {
  return (
    <div className="about-contact">
      <header className="navbar">
        {/* logo */}
        <div className="logo">
          <img className="narm-tech-logo" src={Narmlogo}></img>
        </div>
        {/* nav-bar */}
        <div className="Navbar-items">
           <div className="About-menu">
            <a href="/">Home</a>
          </div>
          <div className="About-menu1">
            <a href="/offers">Offerings</a>
          </div>
          <div className="About-menu2">
            <a href="/consulting">Consulting</a>
          </div>
          <div className="About-menu3">
            <a href="/aboutus">About us</a>
          </div>
          <div className="About-menu4">
            <a href="/ourteam">Our Team</a>
          </div>
          <div className="About-menu5">
            <a href="/contactus">Contact us</a>
          </div>
        </div>
      </header>


      <section className="Aboutus-1">
      <div className="About-main">
      <div className="About-cricle-head">
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
      </div>
      <div className="About-hand">
        <div className="About-us-inner"></div>
        <img className="mask-group-icon" alt="" src={hand} />
      </div>
      </div>
      <div className="about-Container">
        <div className="about-child" />
        <b className="About-us3">About us</b>
        <div className="About-narm-tech-is-container">
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
      </div>
      <div className="About-group-div">
        <div className="About-group-wrapper">
          <div className="About-instance-parent">
            <div className="About-rectangle-parent1">
              <div className="About-component-child"></div>
              <div className="vision-to-transform-container">
                <p className="vision">Vision</p>
                <p className="to-transform-the">
                  To transform the landscape of business operations through
                  state-of-the-art AI-powered software products.
                </p>
                <p className="to-transform-the">
                  To equip organizations with advanced data analytics, seamless
                  automation, and augmented decision-making capabilities. To
                  drive operational efficiency, agility, and strategic
                  innovation in businesses across diverse sectors.
                </p>
                <p className="to-transform-the">
                  To be the catalyst for a new era of intelligent and
                  data-driven business operations
                </p>
              </div>
            </div>
            <div className="About-rectangle-group1">
              <div className="About-instance-child1"></div>
              <div className="vision-to-transform-container">
                <p className="mission">Mission</p>
                <p className="transforming-business-operatio">
                  Transforming business operations with AI-powered software,
                  enabling advanced analytics, automation, and augmented
                  decision-making. Driving operational efficiency, strategic
                  innovation, and intelligence for businesses, ushering in a new
                  era of data-driven operations.
                </p>
              </div>
            </div>
            <div className="About-rectangle-container1">
              <div className="About-instance-child1"></div>
              <div className="vision-to-transform-container">
                <p className="vision">Values</p>
                <p className="to-transform-the">
                  Excellence is our standard; the growth and
                </p>
                <p className="to-transform-the">
                  well-being of our team members is our priority.
                </p>
                <p className="to-transform-the">
                  We embrace innovation, encourage open debate, and strive for
                  big dreams while fostering teamwork to achieve success.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <div className="Aboutfotter"></div>
      <div className="About-background-parent" id="groupContainer3">
        <img className="Aboutbackground-icon1" alt="" src={contant} />
        <div className="About-contact-us-parent">
          <div className="About-contact-us1">Contact Us</div>
          <div className="About-group-parent">
            <img className="About-group-child" alt="" src={contant3} />
            <img className="About-layer-1-icon1" alt="" src={contant2} />
            <img className="About-isolation-mode-icon" alt="" src={contant1} />

            <div className="About-frame-parent">
              <img className="About-frame-icon" alt="" src={F} />

              <img className="About-frame-icon" alt="" src={X} />

              <img className="About-frame-icon" alt="" src={I} />
            </div>
            <div className="About-rd-main-virgo-container">
              <p className="our-ai-powered-products-for-bu">
                #92, 3rd Main, Virgo Nagar, Post,
              </p>
              <p className="our-ai-powered-products-for-bu">
                Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>
            <div className="About-infonarmtechcom-hrnarmtech">
              <p className="our-ai-powered-products-for-bu">
                info@narmtech.com
              </p>
              <p className="our-ai-powered-products-for-bu">hr@narmtech.com</p>
            </div>
            <div className="About-sales-and-services-91-container">
              <p className="our-ai-powered-products-for-bu">
                +91 9611291621 - Sales and Services
              </p>
              <p className="our-ai-powered-products-for-bu">
                +91 9663901621 - Hiring Queries
              </p>
              <p className="our-ai-powered-products-for-bu">
                +91 8297902227 - Whatsapp
              </p>
            </div>
          </div>
          <div className="About-copyright-2024-">© Copyright 2024 - Narm Tech</div>
          <div className="About-privacy-policy-parent">
            <div className="About-privacy-policy">Privacy Policy</div>
            <div className="About-privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <div className="About-group-item"></div>
      </div>
    </div>
  );
}

export default Aboutus;
