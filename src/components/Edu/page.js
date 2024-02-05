"use client";
import React, { useCallback, useState } from "react";
import styles from "./Edu.module.css";
import "./Edu.css";

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
    <div className={styles.legal}>
      <header
        className={`${styles.legalInner} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.narmLogoParent}>
          <div className={styles.narmLogo}>
            <img
              className={styles.narmTechLogo1}
              loading="eager"
              alt=""
              src="Images/Edu/narm-tech-logo-1@2x.png"
            />
          </div>
          <div
            className={`${styles.mobileMenuButton} ${
              isMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMenu}
          >
            ☰
          </div>

          <div className={styles.menuButton}>
            <div className={styles.menu} onClick={onMenuContainerClick}>
              <div className={styles.home}>{`Home`}</div>
            </div>

            <button className={styles.menu1} onClick={onMenuClick}>
              <div className={styles.offerings}>Offerings</div>
            </button>
            <div className={styles.menu2} onClick={onMenuContainer1Click}>
              <div className={styles.consulting}>{`Consulting `}</div>
            </div>
            <div className={styles.menu3} onClick={onMenuContainer2Click}>
              <div className={styles.aboutUs}>{`About us`}</div>
            </div>
            <button className={styles.menu4} onClick={onMenu1Click}>
              <div className={styles.ourTeam}>Our Team</div>
            </button>
            <button className={styles.menu5} onClick={onMenu2Click}>
              <div className={styles.contactUs}>Contact us</div>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.menuItem} onClick={closeMenu}>
            Home
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            Offerings
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            Consulting
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            About Us
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            Our team
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            Contact Us
          </div>
        </div>
      )}
      <section className={styles.ourTeamButton}>
        <div className={styles.contactusButton}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.backgroundParent}>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="Images/Edu/background@2x.png"
                />
                <div className={styles.wrapperBackground}>
                  <img
                    className={styles.backgroundIcon1}
                    alt=""
                    src="Images/Edu/Adhyayn1.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.legalParent}>
                <h1 className={styles.legal1}>Education</h1>
                <div className={styles.thisPowerfulSolutionContainer}>
                  <p className={styles.thisPowerfulSolution}>
                    Leveraging AI and analytics, the product analyzes usage
                    patterns, performance metrics, and cost data to provide
                    cost-effective recommendations. These recommendations help
                    organizations optimize their IT spending,
                    identify cost-saving opportunities, and align their
                    resources with business
                  </p>

                  <ul className={styles.intelligentDocumentsVerifica}>
                    <li
                      className={styles.intelligentDocumentsVerifica1}
                    >{`Intelligent, Automated, Guided Administrative Tasks: From Admissions to Convocations/Placements.`}</li>
                    <li className={styles.generatingFormsAnd}>
                      Attendance tracking, Grading.
                    </li>
                    <li className={styles.lifecycleManagementOf}>
                      Optimized recommendations for resource allocation,
                      including classroom assignments, course scheduling, and
                      staff deployment.
                    </li>
                    <li className={styles.recommendationsWithRespect}>
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
          <div className={styles.contactusButtonInner}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild}>
                <img
                  className={styles.overlayImage}
                  src="Images/Edu/Quizifai1.png"
                  alt=""
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.legalGroup}>
                  <h2 className={styles.legal2}>QuizifAI</h2>
                  <div className={styles.thisPowerfulSolutionContainer1}>
                    <p className={styles.thisPowerfulSolution1}>
                      Leveraging AI and analytics, the product analyzes usage
                      patterns, performance metrics, and cost data to provide
                      cost-effective recommendations. These recommendations help
                      organizations optimize their IT spending,  identify
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
        className={styles.backgroundIcon2}
        alt=""
        src="Images/Edu/background-2.svg"
      />
      <section className={styles.legalChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper1}>
            <div className={styles.legalContainer}>
              <h2 className={styles.legal3}>Education</h2>
              <div className={styles.thisPowerfulSolutionContainer2}>
                <p className={styles.thisPowerfulSolution2}>
                  Leveraging AI and analytics, the product analyzes usage
                  patterns, performance metrics, and cost data to provide
                  cost-effective recommendations. These recommendations help
                  organizations optimize their IT spending,  identify
                  cost-saving opportunities, and align their resources with
                  business needs
                </p>
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
        </div>
      </section>
      <section className={styles.homeMenuFrameParent}>
        <div className={styles.homeMenuFrame} />
        <div className={styles.offeringsMenuFrame}>
          <div className={styles.consultingMenuFrame}>
            <h2 className={styles.legal4}>Education</h2>
            <div className={styles.thisPowerfulSolutionContainer3}>
              <p className={styles.thisPowerfulSolution3}>
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending,  identify cost-saving
                opportunities, and align their resources with business needs
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactusFrame}>
        <div className={styles.logoFrameParent}>
          <div className={styles.logoFrame}>
            <h2 className={styles.legal5}>Education</h2>
            <div className={styles.thisPowerfulSolutionContainer4}>
              <p className={styles.thisPowerfulSolution4}>
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending,  identify cost-saving
                opportunities, and align their resources with business needs
              </p>
            </div>
          </div>
          <div className={styles.instanceFrame} />
        </div>
      </section>
      <div className={styles.knowMoreRectangle}>
        <div className={styles.contactUsRectangle}>
          <div className={styles.contactUsRectangleInner}>
            <div className={styles.instanceChild} />
          </div>
          <b className={styles.knowMore} onClick={onKnowMoreTextClick}>
            Know More
          </b>
        </div>
      </div>
      <footer className={styles.contactInfoGroup}>
        <div
          className={styles.postDetailsFrameParent}
          onClick={onGroupContainerClick}
        >
          <div className={styles.postDetailsFrame}>
            <h1 className={styles.contactUs1}>Contact Us</h1>
          </div>
          <div className={styles.framesFrame}>
            <img
              className={styles.framesFrameChild}
              loading="eager"
              alt=""
              src="Images/Edu/group-27.svg"
            />
            <div className={styles.layerFrame}>
              <img
                className={styles.backgroundIcon3}
                alt=""
                src="Images/Edu/background-3.svg"
              />
              <img
                className={styles.layer1Icon}
                loading="eager"
                alt=""
                src="Images/Edu/layer-1.svg"
              />
            </div>
            <img
              className={styles.isolationModeIcon}
              loading="eager"
              alt=""
              src="Images/Edu/isolation-mode.svg"
            />
            <img
              className={styles.frameTripletsIcon}
              loading="eager"
              alt=""
              src="Images/Edu/frame.svg"
            />
            <img
              className={styles.frameTripletsIcon1}
              alt=""
              src="Images/Edu/frame-1.svg"
            />
            <img
              className={styles.frameTripletsIcon2}
              alt=""
              src="Images/Edu/frame-2.svg"
            />
          </div>
          <div className={styles.postLocationLine}>
            <div className={styles.postInfo}>
              <div className={styles.policyTitleFrame}>
                <div className={styles.rdMainVirgoContainer}>
                  <p
                    className={styles.rdMainVirgo}
                  >{`#92, 3rd Main, Virgo Nagar, Post, `}</p>
                  <p className={styles.seegehalliBengaluruKarnata}>
                    Seegehalli, Bengaluru, Karnataka 560049
                  </p>
                </div>
                <div className={styles.contactUsFrame}>
                  <div className={styles.infonarmtechcomHrnarmtech}>
                    <p className={styles.infonarmtechcom}>info@narmtech.com</p>
                    <p className={styles.hrnarmtechcom}>hr@narmtech.com</p>
                  </div>
                </div>
                <div className={styles.salesAndServices91Container}>
                  <p className={styles.salesAndServices}>
                    +91 9611291621 - Sales and Services
                  </p>
                  <p className={styles.hiringQueries918297902227}>
                    +91 9663901621 - Hiring Queries+91 8297902227 - Whatsapp
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.lineSeparator}>
              <div className={styles.footerCopyright} />
              <div className={styles.privacyPolicyTerms}>
                <div className={styles.copyright2023NarmTechParent}>
                  <div className={styles.copyright2023}>
                    © Copyright 2023 - Narm Tech
                  </div>
                  <div className={styles.privacyPolicyParent}>
                    <div className={styles.privacyPolicy}>Privacy Policy</div>
                    <div
                      className={styles.termsConditions}
                    >{`Terms & Conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <img
        className={styles.backgroundIcon4}
        alt=""
        src="Images/Edu/background-4.svg"
      />
    </div>
  );
};

export default Legal;
