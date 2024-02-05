"use client"
import React, { useCallback, useState } from "react";
import styles from "./IT.module.css";
import './it.css';

const Legal = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    console.log("toggle menu clicked");
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onMenuContainerClick = useCallback(() => {
    //  "Home"
  }, []);

  const onMenuClick = useCallback(() => {
    // "offer"
  }, []);

  const onMenuContainer1Click = useCallback(() => {
    // "Consult"
  }, []);

  const onMenuContainer2Click = useCallback(() => {
    //  "Home"
  }, []);

  const onMenu1Click = useCallback(() => {
    // "Home"
  }, []);

  const onMenu2Click = useCallback(() => {
    //  "Contact us"
  }, []);

  const onKnowMoreTextClick = useCallback(() => {
    // "Know more"
  }, []);

  const onGroupContainerClick = useCallback(() => {
    //  "Contact us"
  }, []);

  return (
    <div className="legal">
      <header
        className={`legalInner ${isMenuOpen ? menuOpen : ""}`}
      >
        <div className="narmLogoParent">
          <div className="narmLogo">
            <img
              className="narmTechLogo1"
              loading="eager"
              alt=""
              src="Images/Edu/narm-tech-logo-1@2x.png"
            />
          </div>
          <div
            className={`mobileMenuButton ${
              isMenuOpen ? open : ""
            }`}
            onClick={toggleMenu}
          >
            ☰
          </div>

          <div className="menuButton">
            <div className="menu" onClick={onMenuContainerClick}>
              <div className="home">{`Home`}</div>
            </div>

            <button className="menu1" onClick={onMenuClick}>
              <div className="offerings">Offerings</div>
            </button>
            <div className="menu2" onClick={onMenuContainer1Click}>
              <div className="consulting">{`Consulting `}</div>
            </div>
            <div className="menu3" onClick={onMenuContainer2Click}>
              <div className="aboutUs">{`About us`}</div>
            </div>
            <button className="menu4" onClick={onMenu1Click}>
              <div className="ourTeam">Our Team</div>
            </button>
            <button className="menu5" onClick={onMenu2Click}>
              <div className="contactUs">Contact us</div>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="mobileMenu">
          <div className="menuItem" onClick={closeMenu}>
            Home
          </div>
          <div className="menuItem" onClick={closeMenu}>
            Offerings
          </div>
          <div className="menuItem" onClick={closeMenu}>
            Consulting
          </div>
          <div className="menuItem" onClick={closeMenu}>
            About Us
          </div>
          <div className="menuItem" onClick={closeMenu}>
            Our team
          </div>
          <div className="menuItem" onClick={closeMenu}>
            Contact Us
          </div>
        </div>
      )}
      <section className="ourTeamButton">
        <div className="contactusButton">
          <div className="frameParent">
            <div className="frameWrapper">
              <div className="backgroundParent">
                <img
                  className="backgroundIcon"
                  alt=""
                  src="Images/IT/background@2x.png"
                />
                <div className="wrapperBackground">
                  <img
                    className="backgroundIcon1"
                    alt=""
                    src="Images/IT/Vyayah1.png"
                  />
                  
                  
                </div>
              </div>
            </div>
            <div className="frameContainer">
              <div className="legalParent">
                <h1 className="legal1">IT Infrastructure</h1>
                <div className="thisPowerfulSolutionContainer">
                  <p className="thisPowerfulSolution">
                  Leveraging AI and analytics, the product analyzes usage patterns, performance metrics, and cost data to
                   provide cost-effective recommendations. These recommendations help organizations optimize their IT spending,
                   identifycost-saving opportunities, and align their resources with business needs
                  </p>
                  
                  <ul className="intelligentDocumentsVerifica">
                    <li
                      className="intelligentDocumentsVerifica1"
                    >{`Continuous recommendations of resource optimization with respect
                    to cost and performance`}</li>
                    <li className="generatingFormsAnd">
                    Recommendation on IT investments.
                    </li>
                    <li className="lifecycleManagementOf">
                    Comprehensive insights and control over the IT infrastructure.

                    </li>
                    <li className="recommendationsWithRespect">
                    Integrated Command Center with advanced analytics and monitoring of infrastructure.
                    </li>
                    <li>Intelligent Forecasting and Alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contactusButtonInner">
            <div className="rectangleParent">
              <div className="frameChild" />
              <div className="frameDiv">
                <div className="legalGroup">
                  <h2 className="legal2">IT Infrastructure</h2>
                  <div className="thisPowerfulSolutionContainer1">
                    <p className="thisPowerfulSolution1">
                    Leveraging AI and analytics, the product analyzes usage patterns, performance metrics, 
                    and cost data to provide cost-effective recommendations. These recommendations help organizations 
                    optimize their IT spending, identify cost-saving
                     opportunities, and align their resources with business needs
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="backgroundIcon2" alt="" src="Images/IT/background-2.svg" />
      <section className="legalChild">
        <div className="frameGroup">
          <div className="frameWrapper1">
            <div className="legalContainer">
              <h2 className="legal3">IT Infrastructure</h2>
              <div className="thisPowerfulSolutionContainer2">
                <p className="thisPowerfulSolution2">
                Leveraging AI and analytics, the product analyzes usage patterns, performance metrics, 
                and cost data to provide cost-effective recommendations. These recommendations help organizations 
                optimize their IT spending,
                 identify cost-saving opportunities, and align their resources with business needs
                </p>
              
              </div>
            </div>
          </div>
          <div className="frameItem" />
        </div>
      </section>
      <section className="homeMenuFrameParent">
        <div className="homeMenuFrame" />
        <div className="offeringsMenuFrame">
          <div className="consultingMenuFrame">
            <h2 className="legal4">IT Infrastructure</h2>
            <div className="thisPowerfulSolutionContainer3">
              <p className="thisPowerfulSolution3">
              Leveraging AI and analytics, the product analyzes usage patterns, performance metrics, and cost data to
               provide cost-effective recommendations. These recommendations help organizations optimize their IT spending, 
              identify cost-saving opportunities, and align their resources with business needs
              </p>
            
            </div>
          </div>
        </div>
      </section>
      <section className="contactusFrame">
        <div className="logoFrameParent">
          <div className="logoFrame">
            <h2 className="legal5">IT Infrastructure</h2>
            <div className="thisPowerfulSolutionContainer4">
              <p className="thisPowerfulSolution4">
              Leveraging AI and analytics, the product analyzes usage patterns, performance metrics, and cost data to provide
               cost-effective recommendations. These recommendations help organizations optimize their IT spending,
               identify cost-saving opportunities, and align their resources with business needs
              </p>
  
            </div>
          </div>
          <div className="instanceFrame" />
        </div>
      </section>
      <div className="knowMoreRectangle">
        <div className="contactUsRectangle">
          <div className="contactUsRectangleInner">
            <div className="instanceChild" />
          </div>
          <b className="knowMore" onClick={onKnowMoreTextClick}>
            Know More
          </b>
        </div>
      </div>
      <footer className="contactInfoGroup">
        <div
          className="postDetailsFrameParent"
          onClick={onGroupContainerClick}
        >
          <div className="postDetailsFrame">
            <h1 className="contactUs1">Contact Us</h1>
          </div>
          <div className="framesFrame">
            <img
              className="framesFrameChild"
              loading="eager"
              alt=""
              src="Images/IT/group-27.svg"
            />
            <div className="layerFrame">
              <img
                className="backgroundIcon3"
                alt=""
                src="Images/IT/background-3.svg"
              />
              <img
                className="layer1Icon"
                loading="eager"
                alt=""
                src="Images/IT/layer-1.svg"
              />
            </div>
            <img
              className="isolationModeIcon"
              loading="eager"
              alt=""
              src="Images/IT/isolation-mode.svg"
            />
            <img
              className="frameTripletsIcon"
              loading="eager"
              alt=""
              src="Images/IT/frame.svg"
            />
            <img
              className="frameTripletsIcon1"
              alt=""
              src="Images/IT/frame-1.svg"
            />
            <img
              className="frameTripletsIcon2"
              alt=""
              src="Images/IT/frame-2.svg"
            />
          </div>
          <div className="postLocationLine">
            <div className="postInfo">
              <div className="policyTitleFrame">
                <div className="rdMainVirgoContainer">
                  <p
                    className="rdMainVirgo"
                  >{`#92, 3rd Main, Virgo Nagar, Post, `}</p>
                  <p className={styles.seegehalliBengaluruKarnata}>
                    Seegehalli, Bengaluru, Karnataka 560049
                  </p>
                </div>
                <div className="contactUsFrame">
                  <div className="infonarmtechcomHrnarmtech">
                    <p className="infonarmtechcom">info@narmtech.com</p>
                    <p className="hrnarmtechcom">hr@narmtech.com</p>
                  </div>
                </div>
                <div className="salesAndServices91Container">
                  <p className="salesAndServices">
                    +91 9611291621 - Sales and Services
                  </p>
                  <p className="hiringQueries918297902227">
                    +91 9663901621 - Hiring Queries+91 8297902227 - Whatsapp
                  </p>
                </div>
              </div>
            </div>
            <div className="lineSeparator">
              <div className="footerCopyright" />
              <div className="privacyPolicyTerms">
                <div className="copyright2023NarmTechParent">
                  <div className="copyright2023">
                    © Copyright 2023 - Narm Tech
                  </div>
                  <div className="privacyPolicyParent">
                    <div className="privacyPolicy">Privacy Policy</div>
                    <div
                      className="termsConditions"
                    >{`Terms & Conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <img className="backgroundIcon4" alt="" src="Images/IT/background-4.svg" />
    </div>
  );
};

export default Legal;