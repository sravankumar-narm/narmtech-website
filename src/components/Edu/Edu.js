"use client";
import React, { useCallback, useState } from "react";
import "./edu.css";
import Logo from '../../Images/Edu/narm-tech-logo-1@2x.png'
import background from '../../Images/Edu/background@2x.png'
import Adhyayn1 from '../../Images/Edu/Adhyayn1.png'
import Quizifai1 from '../../Images/Edu/Quizifai1.png'
import background2 from '../../Images/Edu/background-2.svg'
import group2 from '../../Images/Edu/group-27.svg'
import background3 from '../../Images/Edu/background-3.svg'
import layer1 from '../../Images/Edu/layer-1.svg'
import isolation from '../../Images/Edu/isolation-mode.svg'
import frame1 from '../../Images/Edu/frame-1.svg'
import frame2 from '../../Images/Edu/frame-2.svg'
import frame from '../../Images/Edu/frame.svg'
import background4 from '../../Images/Edu/background-4.svg'




const Legal = () => {
  
  return (
    <div className="legal">
      <header className={`legalInner`}>
        <div className="narmLogoParent">
          <div className="narmLog">
            <img
              className="narmTechLogo1"
              loading="eager"
              alt=""
              src={Logo}
            />
          </div>
    
          <div className="menuButton">
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
                  src={background}
                />
                <div className="wrapperBackground">
                  <img
                    className="backgroundIcon1"
                    alt=""
                    src={Adhyayn1}
                  />
                </div>
              </div>
            </div>
            <div className="frameContainer">
              <div className="legalParent">
                <h1 className="legal1">Education</h1>
                <div className="thisPowerfulSolutionContainer">
                  <p className="thisPowerfulSolution">
                    Leveraging AI and analytics, the product analyzes usage
                    patterns, performance metrics, and cost data to provide
                    cost-effective recommendations. These recommendations help
                    organizations optimize their IT spending,
                    identifycost-saving opportunities, and align their resources
                    with business
                  </p>

                  <ul className="intelligentDocumentsVerifica">
                    <li className="intelligentDocumentsVerifica1">{`Intelligent, Automated, Guided Administrative Tasks: From Admissions to Convocations/Placements.`}</li>
                    <li className="generatingFormsAnd">
                      Attendance tracking, Grading.
                    </li>
                    <li className="lifecycleManagementOf">
                      Optimized recommendations for resource allocation,
                      including classroom assignments, course scheduling, and
                      staff deployment.
                    </li>
                    <li className="recommendationsWithRespect">
                      Freeing up Staff Time for more value-added activities.
                    </li>
                    <li>
                      Reports and Valuable insights, enabling decision-makers to
                      make informed choices quickly and efficiently.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contactusButtonInner">
            <div className="rectangleParent">
              <div className="FrameChild">
                <img
                  className="overlayImage"
                  src={Quizifai1}
                  alt=""
                />
              </div>
              <div className="frameDiv">
                <div className="legalGroup">
                  <h2 className="legal2">QuizifAI</h2>
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
        src={background2}
      />
      <section className="legalChild">
        <div className="frameGroup">
          <div className="frameWrapper1">
            <div className="legalContainer">
              <h2 className="legal3">Education</h2>
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
            <h2 className="legal4">Education</h2>
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
            <h2 className="legal5">Education</h2>
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
          <b className="knowMore">
            Know More
          </b>
        </div>
      </div>
      <footer className="contactInfoGroup">
        <div className="postDetailsFrameParent">
          <div className="postDetailsFrame">
            <h1 className="contactUs1">Contact Us</h1>
          </div>
          <div className="framesFrame">
            <img
              className="framesFrameChild"
              loading="eager"
              alt=""
              src={group2}
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
                src={layer1}
              />
            </div>
            <img
              className="isolationModeIcon"
              loading="eager"
              alt=""
              src={isolation}
            />
            <img
              className="frameTripletsIcon"
              loading="eager"
              alt=""
              src={frame}
            />
            <img
              className="frameTripletsIcon1"
              alt=""
              src={frame1}
            />
            <img
              className="frameTripletsIcon2"
              alt=""
              src={frame2}
            />
          </div>
          <div className="postLocationLine">
            <div className="postInfo">
              <div className="policyTitleFrame">
                <div className="rdMainVirgoContainer">
                  <p className="rdMainVirgo">{`#92, 3rd Main, Virgo Nagar, Post, `}</p>
                  <p className="seegehalliBengaluruKarnata">
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
        src={background4}
      />
    </div>
  );
};

export default Legal;
