import React from "react";
import Logo from "../../Images/offers/Logo.png";
import Logo1 from "../../Images/offers/NYAYAH.png";
import Logo2 from "../../Images/offers/Adhyayn.png";
import Logo3 from "../../Images/offers/vyayah1.png";
import Logo4 from "../../Images/offers/Vyayah.png";
import Logo5 from "../../Images/offers/Quizifai.png";
import Logo6 from "../../Images/offers/Background1.png";
import Logo7 from "../../Images/offers/Background5.png";
import Vector from "../../Images/offers/Vector14.png";
import Vector1 from "../../Images/offers/Vector15.png";
import contant1 from "../../Images/offers/location.png";
import contant2 from "../../Images/offers/email.png";
import contant3 from "../../Images/offers/whatapp.png";
import contant from "../../Images/offers/Background2.png";
import F from "../../Images/offers/F.png";
import X from "../../Images/offers/X.png";
import I from "../../Images/offers/I.png";
import "./offers.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLegal = () => {
    navigate("/legal");
  };
  const handleIt = () => {
    navigate("/it");
  };
  const handleEdu = () => {
    navigate("/adhyayn");
  };
  const handleAgri = () => {
    navigate("/agri");
  };
  return (
    <div className="offer">
      <div className="menu-button"></div>
      {/* <img className="narm-tech-logo-1" src={Logo} alt="NARMTECH" /> */}
      <img className="narm-tech-logo-1" src={Logo} />

      <img className="offer-child" alt="" src={Vector} />

      <img className="offer-item" alt="" src={Vector1} />

      <div className="offer-background"></div>
      <div className="offer-leveraging-ai-and-container">
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
      <img className="offer-background-icon" alt="" src={Logo6} />
      <div className="pattern"></div>
      <div className="pattern1"></div>
      <div className="offer-background-icon2"></div>
      <div className="vyayah-logo3-11"></div>
      <div className="offer-background-icon6"></div>
      <div className="educationc-crical"></div>
      <div className="offer-background-icon4"></div>
      <div className="Agriculture-crical"></div>

      <b className="it-infrastructure">IT Infrastructure</b>
      <div className="offer-background-parent">
        <div className="offer-background1"></div>
        <div className="offer-sub-content">
          <b className="offer-legal">NYAYAH (Launching on Nov 2024)</b>
          <div className="offer-this-powerful-solution-container">
            <p className="leveraging-ai-and">
              This powerful solution revolutionizes the legal landscape by
              empowering legal practitioners and law firms with advanced
              automation and organization capabilities.
            </p>
            <p className="leveraging-ai-and">
            AI intelligence is extensively applied in the following: 
            </p>
            <ul className="continuous-recommendations-of">
              <li className="recommendation-on-it">
              Lifecycle Management of Legal cases, handling day-to-day operations.
              </li>
              <li className="recommendation-on-it">
              	Documents Verification and Creating Insights and reports.
              </li>
              <li className="recommendation-on-it">
              	Quick and efficient generation of legal Forms and Documents.
              </li>
              <li className="recommendation-on-it">
              Recommendations concerning Statutes, also Validations, and Intelligent Citations.
              </li>
            </ul>
          </div>
        </div>
        <img className="offer-background-icon1" alt="" src={Logo6} />
      </div>
      <div className="background-Agriculture"></div>
      <div className="offer-group-parent">
        <div className="offer-background-wrapper"></div>
        <div className="offer-ai-powered-agriculture-life-cy-parent">
          <b className="Agriculture">Agriculture</b>
          <div className="offer-ai-powered-agriculture-life-container">
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
          <img className="offer-background-icon3" alt="" src={Logo7} />

          <img
            className="offer-background-icon4"
            alt=""
            src="./public/background@2x.png"
          />

          <b className="text"> </b>
        </div>
      </div>
      <img className="offer-background-icon5" alt="" src={Logo7} />

      <div className="background-Education"></div>
      <div className="education-parent">
        <b className="education">Education</b>
        <div className="offer-leveraging-ai-and-container1">
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
      <div className="offer-inner" onClick={handleLegal}>
        <div className="instance-child"></div>
      </div>
      <div className="offer-rectangle-div" onClick={handleEdu}>
        <div className="instance-child"></div>
      </div>
      <div className="offer-inner1" onClick={handleIt}>
        <div className="instance-child"></div>
      </div>
      <div className="offer-inner2" onClick={handleAgri}>
        <div className="instance-child"></div>
      </div>
      <b className="more-details" id="moreDetailsText" onClick={handleLegal}>
        More Details
      </b>
      <b className="more-details1" id="moreDetailsText1" onClick={handleEdu}>
        More Details
      </b>
      <b className="more-details2" id="moreDetailsText2" onClick={handleIt}>
        More Details
      </b>
      <b className="more-details3" id="moreDetailsText3" onClick={handleAgri}>
        More Details
      </b>
      <div className="offer-image-parent">
        <img className="offer-image-icon" alt="" src={Logo2} />

        <div className="offer-rectangle-parent">
          <div className="offer-group-child"></div>
          <div className="offer-group-item"></div>
          <div className="offer-group-inner"></div>
          <div className="offer-group-child1"></div>
        </div>
      </div>
      <div className="offer-image-group">
        <img className="offer-image-icon1" alt="" src={Logo3} />

        <div className="offer-rectangle-group">
          <div className="offer-group-child2"></div>
          <div className="offer-group-item"></div>
          <div className="offer-group-inner"></div>
          <div className="offer-group-child1"></div>
        </div>
      </div>
      <div className="offer-image-container">
        <img className="offer-image-icon2" alt="" src={Logo1} />

        <div className="offer-rectangle-container">
          <div className="offer-group-child2"></div>
          <div className="offer-group-item"></div>
          <div className="offer-group-inner"></div>
          <div className="offer-group-child1"></div>
        </div>
      </div>
      <div className="offer-group-div">
        <img className="offer-image-icon1" alt="" src={Logo4} />

        <div className="offer-rectangle-group">
          <div className="offer-group-child2"></div>
          <div className="offer-group-item"></div>
          <div className="offer-group-inner"></div>
          <div className="offer-group-child1"></div>
        </div>
      </div>
      <div className="offer-fotter"></div>
      <div className="offer-background-group" id="groupContainer15">
        <img className="offer-background-icon7" alt="" src={contant} />
        <div className="offer-contact-us-parent">
          <div className="offer-contact-us">Contact Us</div>
          <div className="offer-group-container">
            <img className="offer-group-icon" alt="" src={contant3} />

            <img className="offer-layer-1-icon" alt="" src={contant2} />

            <img className="offer-isolation-mode-icon" alt="" src={contant1} />

            <div className="offer-frame-parent">
              <img className="offer-frame-icon" alt="" src={F} />

              <img className="offer-frame-icon" alt="" src={X} />

              <img className="offer-frame-icon" alt="" src={I} />
            </div>
            <div className="offer-rd-main-virgo-container">
              <p className="leveraging-ai-and">
                #92, 3rd Main, Virgo Nagar, Post,
              </p>
              <p className="leveraging-ai-and">
                Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>
            <div className="offer-infonarmtechcom-hrnarmtech">
              <p className="leveraging-ai-and">info@narmtech.com</p>
              <p className="leveraging-ai-and">hr@narmtech.com</p>
            </div>
            <div className="offer-sales-and-services-91-container">
              <p className="leveraging-ai-and">
                +91 9611291621 - Sales and Services
              </p>
              <p className="leveraging-ai-and">
                +91 9663901621 - Hiring Queries
              </p>
              <p className="leveraging-ai-and">+91 8297902227 - Whatsapp</p>
            </div>
          </div>
          <div className="offer-copyright-2024-">© Copyright 2024 - Narm Tech</div>
          <div className="offer-privacy-policy-parent">
            <div className="offer-privacy-policy">Privacy Policy</div>
            <div className="offer-privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <div className="offer-line-div"></div>
      </div>

      <div className="menu-button"></div>
      <div className="offer-menu">
        <a href="/">Home</a>
      </div>
      <div className="offer-menu1">
        <a href="/offers">Offerings</a>
      </div>
      <div className="offer-menu2">
        <a href="/consulting">Consulting</a>
      </div>
      <div className="offer-menu3">
        <a href="/aboutus">About us</a>
      </div>
      <div className="offer-menu4">
        <a href="/ourteam">Our Team</a>
      </div>
      <div className="offer-menu5">
        <a href="/contactus">Contact us</a>
      </div>
      <img
        className="quizifai-tag-v2-1-icon"
        alt=""
        src={Logo5}
        id="quizifaiTagV21Image"
      />
    </div>
  );
};

export default Home;
