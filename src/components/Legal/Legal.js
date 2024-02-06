
import { useCallback } from "react";
import './legal.css';

const Legal = () => {
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
      <header className="legalInner">
        <div className="narmLogoParent">
          <div className="narmLogo">
            <img
              className="narmTechLogo1"
              loading="eager"
              alt=""
              src="Images/legal/narm-tech-logo-1@2x.png"
            />
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
      <section className="ourTeamButton">
        <div className="contactusButton">
          <div className="frameParent">
            <div className="frameWrapper">
              <div className="backgroundParent">
                <img
                  className="backgroundIcon"
                  alt=""
                  src="Images/legal/background@2x.png"
                />
                <div className="wrapperBackground">
                  <img
                    className="backgroundIcon1"
                    alt=""
                    src="Images/legal/background-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frameContainer">
              <div className="legalParent">
                <h1 className="legal1">Legal</h1>
                <div className="thisPowerfulSolutionContainer">
                  <p className="thisPowerfulSolution">
                    This powerful solution revolutionizes the legal landscape by
                    empowering legal practitioners and law firms with advanced
                    automation and organization capabilities.
                  </p>
                  <p className="bySeamlesslyHandling">
                    By seamlessly handling their day-to-day operations,
                    streamlining data management, and organizing critical
                    documentation, this software acts as a catalyst for enhanced
                    efficiency in legal processes
                  </p>
                  <ul className="intelligentDocumentsVerifica">
                    <li
                      className="intelligentDocumentsVerifica1"
                    >{`Intelligent Documents Verification & Creating Insights, Reports`}</li>
                    <li className="generatingFormsAnd">
                      Generating Forms and Documents Quickly
                    </li>
                    <li className="lifecycleManagementOf">
                      Lifecycle Management of Legal Cases
                    </li>
                    <li className="recommendationsWithRespect">
                      Recommendations with respect to statues available
                    </li>
                    <li>Validations and Intelligent Citations</li>
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
                  <h2 className="legal2">Legal</h2>
                  <div className="thisPowerfulSolutionContainer1">
                    <p className="thisPowerfulSolution1">
                      This powerful solution revolutionizes the legal landscape
                      by empowering legal practitioners and law firms with
                      advanced automation and organization capabilities.
                    </p>
                    <p className="bySeamlesslyHandling1">
                      By seamlessly handling their day-to-day operations,
                      streamlining data management, and organizing critical
                      documentation, this software acts as a catalyst for
                      enhanced efficiency in legal processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="backgroundIcon2" alt="" src="Images/legal/background-2.svg" />
      <section className="legalChild">
        <div className="frameGroup">
          <div className="frameWrapper1">
            <div className="legalContainer">
              <h2 className="legal3">Legal</h2>
              <div className="thisPowerfulSolutionContainer2">
                <p className="thisPowerfulSolution2">
                  This powerful solution revolutionizes the legal landscape by
                  empowering legal practitioners and law firms with advanced
                  automation and organization capabilities.
                </p>
                <p className="bySeamlesslyHandling2">
                  By seamlessly handling their day-to-day operations,
                  streamlining data management, and organizing critical
                  documentation, this software acts as a catalyst for enhanced
                  efficiency in legal processes.
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
            <h2 className="legal4">Legal</h2>
            <div className="thisPowerfulSolutionContainer3">
              <p className="thisPowerfulSolution3">
                This powerful solution revolutionizes the legal landscape by
                empowering legal practitioners and law firms with advanced
                automation and organization capabilities.
              </p>
              <p className="bySeamlesslyHandling3">
                By seamlessly handling their day-to-day operations, streamlining
                data management, and organizing critical documentation, this
                software acts as a catalyst for enhanced efficiency in legal
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contactusFrame">
        <div className="logoFrameParent">
          <div className="logoFrame">
            <h2 className="legal5">Legal</h2>
            <div className="thisPowerfulSolutionContainer4">
              <p className="thisPowerfulSolution4">
                This powerful solution revolutionizes the legal landscape by
                empowering legal practitioners and law firms with advanced
                automation and organization capabilities.
              </p>
              <p className="bySeamlesslyHandling4">
                By seamlessly handling their day-to-day operations, streamlining
                data management, and organizing critical documentation, this
                software acts as a catalyst for enhanced efficiency in legal
                processes.
              </p>
            </div>
          </div>
          <div className="instanceFrame" />
        </div>
      </section>
      <div className="knowMoreRectangle">
        <div className="contactUsRectangle">
          <div className="contactUsRectangleInner">
            <div className="instanceChild"/>
          </div>
          <b className="knowMore" onClick={onKnowMoreTextClick}>
            Know More
          </b>
        </div>
      </div>
      <footer className="contactInfoGroup">
        <div
          className="postDetailsFrameParent"
          onClick="onGroupContainerClick"
        >
          <div className="postDetailsFrame">
            <h1 className="contactUs1">Contact Us</h1>
          </div>
          <div className="framesFrame">
            <img
              className="framesFrameChild"
              loading="eager"
              alt=""
              src="Images/legal/group-27.svg"
            />
            <div className="layerFrame">
              <img
                className="backgroundIcon3"
                alt=""
                src="Images/legal/background-3.svg"
              />
              <img
                className="layer1Icon"
                loading="eager"
                alt=""
                src="Images/legal/layer-1.svg"
              />
            </div>
            <img
              className="isolationModeIcon"
              loading="eager"
              alt=""
              src="Images/legal/isolation-mode.svg"
            />
            <img
              className="frameTripletsIcon"
              loading="eager"
              alt=""
              src="Images/legal/frame.svg"
            />
            <img
              className="frameTripletsIcon1"
              alt=""
              src="Images/legal/frame-1.svg"
            />
            <img
              className="frameTripletsIcon2"
              alt=""
              src="Images/legal/frame-2.svg"
            />
          </div>
          <div className="postLocationLine">
            <div className="postInfo">
              <div className="policyTitleFrame">
                <div className="rdMainVirgoContainer">
                  <p
                    className="rdMainVirgo"
                  >{`#92, 3rd Main, Virgo Nagar, Post, `}</p>
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
              <div className="footerCopyright"/>
              <div className="privacyPolicyTerms">
                <div className="copyright2023NarmTechParent">
                  <div className="copyright2023">
                    © Copyright 2024 - Narm Tech
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
      <img className="backgroundIcon4" alt="" src="Images/legal/background-4.svg" />
    </div>
  );
};

export default Legal;
