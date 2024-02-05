import React from "react";
import Image from "next/image";
import Logo from "../../public/Images/offers/Logo.png";
import Logo1 from "../../public/Images/offers/NYAYAH.png";
import Logo2 from "../../public/Images/offers/Adhyayn.png";
import Logo3 from "../../public/Images/offers/vyayah1.png";
import Logo4 from "../../public/Images/offers/vyayah.png";
import Logo5 from "../../public/Images/offers/Quizifai.png";
import Logo6 from "../../public/Images/offers/Background1.png";
import Logo7 from "../../public/Images/offers/Background5.png";
import Vector from "../../public/Images/offers/vector14.png";
import Vector1 from "../../public/Images/offers/vector15.png";
import contant1 from "../../public/Images/offers/location.png";
import contant2 from "../../public/Images/offers/email.png";
import contant3 from "../../public/Images/offers/whatapp.png";
import contant from "../../public/Images/offers/Background2.png";
import F from "../../public/Images/offers/F.png";
import X from "../../public/Images/offers/X.png";
import I from "../../public/Images/offers/I.png";
import Link from "next/link";
import "./offers.css";
const Home = () => {
  return (
    <div className="offer">
      <div className="menu-button"></div>
      {/* <img className="narm-tech-logo-1" src={Logo} alt="NARMTECH" /> */}
      <Image className="narm-tech-logo-1" src={Logo} />

      <Image className="offer-child" alt="" src={Vector} />

      <Image className="offer-item" alt="" src={Vector1} />

      <div className="background"></div>
      <div className="leveraging-ai-and-container">
        <p className="leveraging-ai-and">
          Leveraging AI and analytics, the product analyzes usage patterns,
          performance metrics, and cost data to provide cost-effective
          recommendations. These recommendations help organizations optimize
          their IT spending, identify cost-saving opportunities, and align their
          resources with business needs.
        </p>
        <ul className="continuous-recommendations-of">
          <li className="recommendation-on-it">
            Continuous recommendations of resource optimization with respect to
            cost and performance
          </li>
          <li className="recommendation-on-it">
            Recommendation on IT investments.
          </li>
          <li className="recommendation-on-it">
            Comprehensive insights and control over the IT infrastructure.
          </li>
          <li className="recommendation-on-it">
            Integrated Command Center with advanced analytics and monitoring of
            infrastructure.
          </li>
          <li>Intelligent Forecasting and Alerts</li>
        </ul>
      </div>
      <Image className="background-icon" alt="" src={Logo6} />
      <div className="pattern"></div>
      <div className="pattern1"></div>
      <div className="background-icon2"></div>
      <div className="vyayah-logo3-11"></div>
      <div className="background-icon6"></div>
      <div className="educationc-crical"></div>
      <div className="background-icon4"></div>
      <div className="Agriculture-crical"></div>

      <b className="it-infrastructure">IT Infrastructure</b>
      <div className="background-parent">
        <div className="background1"></div>
        <div className="sub-content">
          <b className="legal">Legal</b>
          <div className="this-powerful-solution-container">
            <p className="leveraging-ai-and">
              This powerful solution revolutionizes the legal landscape by
              empowering legal practitioners and law firms with advanced
              automation and organization capabilities.
            </p>
            <p className="leveraging-ai-and">
              By seamlessly handling their day-to-day operations, streamlining
              data management, and organizing critical documentation, this
              software acts as a catalyst for enhanced efficiency in legal
              processes
            </p>
            <ul className="continuous-recommendations-of">
              <li className="recommendation-on-it">
                Intelligent Documents Verification & Creating Insights, Reports
              </li>
              <li className="recommendation-on-it">
                Generating Forms and Documents Quickly
              </li>
              <li className="recommendation-on-it">
                Lifecycle Management of Legal Cases
              </li>
              <li className="recommendation-on-it">
                Recommendations with respect to statues available
              </li>
              <li>Validations and Intelligent Citations</li>
            </ul>
          </div>
        </div>
        <Image className="background-icon1" alt="" src={Logo6} />
      </div>
      <div className="background-Agriculture"></div>
      <div className="group-parent">
        <div className="background-wrapper"></div>
        <div className="ai-powered-agriculture-life-cy-parent">
          <b className="Agriculture">Agriculture</b>
          <div className="ai-powered-agriculture-life-container">
            <p className="leveraging-ai-and">
              AI-powered Agriculture Life Cycle Operations Management
              Application empowers farmers. This AI-powered application offers a
              comprehensive suite of tools and functionalities to manage the
              entire agriculture life cycle. It covers activities such as crop
              planning, planting, irrigation, fertilization, pest control,
              harvesting, and post-harvest management., facilitates optimal
              farmer-market connections, and maximizes profitability in the
              agricultural industry.
            </p>
            <ul className="continuous-recommendations-of">
              <li className="recommendation-on-it">
                Recommendations on Crop Selection and Optimized Utilization of
                resources such as land, water, fertilizers, and labor.
              </li>
              <li className="recommendation-on-it">
                Facilitates seamless connections between farmers and agriculture
                markets.
              </li>
              <li className="recommendation-on-it">
                Informed decisions about market demand and supply.
              </li>
              <li className="recommendation-on-it">
                Facilitates seamless connections between farmers and agriculture
                markets, ensuring direct access to potential buyers,
                distributors, and retailers.
              </li>
              <li>
                Enables farmers to showcase their products, negotiate prices,
                and make informed decisions about market demand and supply.
              </li>
            </ul>
          </div>
          <Image className="background-icon3" alt="" src={Logo7} />

          <img
            className="background-icon4"
            alt=""
            src="./public/background@2x.png"
          />

          <b className="text"> </b>
        </div>
      </div>
      <Image className="background-icon5" alt="" src={Logo7} />

      <div className="background-Education"></div>
      <div className="education-parent">
        <b className="education">Education</b>
        <div className="leveraging-ai-and-container1">
          <p className="leveraging-ai-and">
            Leveraging AI and analytics, the product analyzes usage patterns,
            performance metrics, and cost data to provide cost-effective
            recommendations. These recommendations help organizations optimize
            their IT spending, identify cost-saving opportunities, and align
            their resources with business needs
          </p>
          <ul className="continuous-recommendations-of">
            <li className="recommendation-on-it">
              Intelligent, Automated, Guided Administrative Tasks: from
              Admissions to Convocations/Placements.
            </li>
            <li className="recommendation-on-it">
              Attendance tracking, Grading.
            </li>
            <li className="recommendation-on-it">
              Optimized recommendations for resource allocation, including
              classroom assignments, course scheduling, and staff deployment.
            </li>
            <li className="recommendation-on-it">
              Freeing up Staff Time for more value-added activities.
            </li>
            <li>
              Reports and Valuable insights, enabling decision-makers to make
              informed choices quickly and efficiently.
            </li>
          </ul>
        </div>
      </div>
      <div className="offer-inner">
        <div className="instance-child"></div>
      </div>
      <div className="rectangle-div">
        <div className="instance-child"></div>
      </div>
      <div className="offer-inner1">
        <div className="instance-child"></div>
      </div>
      <div className="offer-inner2">
        <div className="instance-child"></div>
      </div>
      <b className="more-details" id="moreDetailsText">
        More Details
      </b>
      <b className="more-details1" id="moreDetailsText1">
        More Details
      </b>
      <b className="more-details2" id="moreDetailsText2">
        More Details
      </b>
      <b className="more-details3" id="moreDetailsText3">
        More Details
      </b>
      <div className="image-parent">
        <Image className="image-icon" alt="" src={Logo2} />

        <div className="rectangle-parent">
          <div className="group-child"></div>
          <div className="group-item"></div>
          <div className="group-inner"></div>
          <div className="group-child1"></div>
        </div>
      </div>
      <div className="image-group">
        <Image className="image-icon1" alt="" src={Logo3} />

        <div className="rectangle-group">
          <div className="group-child2"></div>
          <div className="group-item"></div>
          <div className="group-inner"></div>
          <div className="group-child1"></div>
        </div>
      </div>
      <div className="image-container">
        <Image className="image-icon2" alt="" src={Logo1} />

        <div className="rectangle-container">
          <div className="group-child2"></div>
          <div className="group-item"></div>
          <div className="group-inner"></div>
          <div className="group-child1"></div>
        </div>
      </div>
      <div className="group-div">
        <Image className="image-icon1" alt="" src={Logo4} />

        <div className="rectangle-group">
          <div className="group-child2"></div>
          <div className="group-item"></div>
          <div className="group-inner"></div>
          <div className="group-child1"></div>
        </div>
      </div>
      <div className="fotter"></div>
      <div className="background-group" id="groupContainer15">
        <Image className="background-icon7" alt="" src={contant} />
        <div className="contact-us-parent">
          <div className="contact-us">Contact Us</div>
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
        <div className="line-div"></div>
      </div>

      <div className="menu-button"></div>
      <div className="menu">
        <Link href="/">Home</Link>
      </div>
      <div className="menu1">
        <Link href="/offers">Offerings</Link>
      </div>
      <div className="menu2">
        <Link href="/consulting">Consulting</Link>
      </div>
      <div className="menu3">
        <Link href="/aboutus">About us</Link>
      </div>
      <div className="menu4">
        <Link href="/ourteam">Our Team</Link>
      </div>
      <div className="menu5">
        <Link href="/contactus">Contact us</Link>
      </div>
      <Image
        className="quizifai-tag-v2-1-icon"
        alt=""
        src={Logo5}
        id="quizifaiTagV21Image"
      />
    </div>
  );
};

export default Home;
