import React, { useCallback, useState } from "react";
import "./It.css";
import backgroundIcon2 from '../../Images/IT/background-2.svg';
import group27 from '../../Images/IT/group-27.svg'
import background3 from '../../Images/IT/background-3.svg'
import layer1Icon from '../../Images/IT/layer-1.svg'
import isolationModeIcon from '../../Images/IT/isolation-mode.svg'
import frameTripletsIcon from '../../Images/IT/frame.svg';
import frameTripletsIcon1 from '../../Images/IT/frame-1.svg';
import frameTripletsIcon2 from '../../Images/IT/frame-2.svg';
import backgroundIcon4 from '../../Images/IT/background-4.svg';
import backgroundIcon from '../../Images/IT/background@2x.png';
import backgroundIcon1 from '../../Images/IT/Vyayah1.png'

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
      <header className={`legalInner`}>
        <div className="narmLogoParent">
          <div className="narmLogo">
            <img
              className="narmTechLogo1"
              loading="eager"
              alt=""
              src="Images/Edu/narm-tech-logo-1@2x.png"
            />
          </div>

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
      
      <section className="ourTeamButton">
        <div className="contactusButton">
          <div className="frameParent">
            <div className="frameWrapper">
              <div className="backgroundParent">
                <img
                  className="backgroundIcon"
                  alt=""
                  src={backgroundIcon}
                />
                <div className="wrapperBackground">
                  <img
                    className="backgroundIcon1"
                    alt=""
                    src={backgroundIcon1}
                  />
                </div>
              </div>
            </div>
            <div className="frameContainer">
              <div className="legalParent">
                <h1 className="legal1">IT Infrastructure</h1>
                <div className="thisPowerfulSolutionContainer">
                  <p className="thisPowerfulSolution">
                    Leveraging AI and analytics, the product analyzes usage
                    patterns, performance metrics, and cost data to provide
                    cost-effective recommendations. These recommendations help
                    organizations optimize their IT spending,
                    identifycost-saving opportunities, and align their resources
                    with business needs
                  </p>

                  <ul className="intelligentDocumentsVerifica">
                    <li className="intelligentDocumentsVerifica1">{`Continuous recommendations of resource optimization with respect
                    to cost and performance`}</li>
                    <li className="generatingFormsAnd">
                      Recommendation on IT investments.
                    </li>
                    <li className="lifecycleManagementOf">
                      Comprehensive insights and control over the IT
                      infrastructure.
                    </li>
                    <li className="recommendationsWithRespect">
                      Integrated Command Center with advanced analytics and
                      monitoring of infrastructure.
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
                      Leveraging AI and analytics, the product analyzes usage
                      patterns, performance metrics, and cost data to provide
                      cost-effective recommendations. These recommendations help
                      organizations optimize their IT spending, identify
                      cost-saving opportunities, and align their resources with
                      business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className="backgroundIcon2"
        alt=""
        src={backgroundIcon2}
      />
      <section className="legalChild">
        <div className="frameGroup">
          <div className="frameWrapper1">
            <div className="legalContainer">
              <h2 className="legal3">IT Infrastructure</h2>
              <div className="thisPowerfulSolutionContainer2">
                <p className="thisPowerfulSolution2">
                  Leveraging AI and analytics, the product analyzes usage
                  patterns, performance metrics, and cost data to provide
                  cost-effective recommendations. These recommendations help
                  organizations optimize their IT spending, identify cost-saving
                  opportunities, and align their resources with business needs
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
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending, identify cost-saving
                opportunities, and align their resources with business needs
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
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending, identify cost-saving
                opportunities, and align their resources with business needs
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
        <div className="postDetailsFrameParent" onClick={onGroupContainerClick}>
          <div className="postDetailsFrame">
            <h1 className="contactUs1">Contact Us</h1>
          </div>
          <div className="framesFrame">
            <img
              className="framesFrameChild"
              loading="eager"
              alt=""
              src={group27}
            />
            <div className="layerFrame">
              <img
                className="backgroundIcon3"
                alt=""
                src={background3}
              />
              <img
                className="layer1Icon"
                loading="eager"
                alt=""
                src={layer1Icon}
              />
            </div>
            <img
              className="isolationModeIcon"
              loading="eager"
              alt=""
              src={isolationModeIcon}
            />
            <img
              className="frameTripletsIcon"
              loading="eager"
              alt=""
              src={frameTripletsIcon}
            />
            <img
              className="frameTripletsIcon1"
              alt=""
              src={frameTripletsIcon1}
            />
            <img
              className="frameTripletsIcon2"
              alt=""
              src={frameTripletsIcon2}
            />
          </div>
          <div className="postLocationLine">
            <div className="postInfo">
              <div className="policyTitleFrame">
                <div className="rdMainVirgoContainer">
                  <p className="rdMainVirgo">{`#92, 3rd Main, Virgo Nagar, Post, `}</p>
                  <p className={`seegehalliBengaluruKarnata`}>
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
                <div className="copyright2024NarmTechParent">
                  <div className="copyright2024">
                    © Copyright 2024 - Narm Tech
                  </div>
                  <div className="privacyPolicyParent">
                    <div className="privacyPolicy">Privacy Policy</div>
                    <div className="termsConditions">{`Terms & Conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <img
        className="backgroundIcon4"
        alt=""
        src={backgroundIcon4}
      />
    </div>
  );
};

export default Legal;
