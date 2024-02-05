import React from "react";
import Logo from "../Images/home/Logo.png";
import Background_top from "../Images/home/Background-image.png";
import Robo_gif from "../Images/home/robo_design.gif";
import Background_2 from "../Images/home/Union.png";
import HandImage from "../Images/home/hand.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container main-menu">
        <nav className="bg-white-800 py-5">
          <div className="main-menu-div">
            <div>
              <img src={Logo} alt="NarmTech Logo" />
              {/* <span className="text-white font-bold text-lg">Your Company Name</span> */}
            </div>
            <div className="main-nav">
              <a href="#home" className="menuItems">
                Home
              </a>
              <a href="#offerings" className="menuItems">
                Offerings
              </a>
              <a href="#consulting" className="menuItems">
                Consulting
              </a>
              <a href="#about-us" className="menuItems">
                About Us
              </a>
              <a href="#our-team" className="menuItems">
                Our Team
              </a>
              <a href="#contact-us" className="menuItems">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
        <div className="">
          <img src={Background_top} className="backgroundMainImg" />
          <img src={Robo_gif} alt="Robo GIF" className="robo_gif" />
          <div className="left-20 relative">
            <div className="mainMenuDiv1">
              Business Operations <br></br>
              Improvement with
            </div>
            <div className="mainMenuDiv2">AI & LLM Empowered</div>
            <div className="mainMenuDiv3">
              Streamline Business Operations seamlessly by <br></br> leveraging
              NARM Tech's AI Powered Products,<br></br> ensuring enhanced
              efficiency.
            </div>
          </div>
        </div>
      </div>
      <div className="mainBlock2">
        <img className="second-bg-image" src={Background_2} alt="block second image" />
        <div className="block-div">
          <div className="image-block-2">
            <img className="mainAboutUsBlock" src={HandImage} alt="handimage" />
          </div>
          <div className="sub-block-main-2">
            <div className="mainAboutContentDiv">
              <div className="block-2-about">
                <span>About Us</span>
              </div>
              <div className="block-2-about-text">
                NARM Tech Is A Visionary Start-Up Revolutionizing Business
                Operations Through AI-Powered Software Products. Our
                Cutting-Edge Solutions Enable Organizations To Streamline
                Processes, Optimize Efficiency, And Uncover Invaluable Insights.
                By Harnessing The Latest In Machine Learning And Data Analytics,
                We Redefine How Businesses Operate In The Digital Age.Embrace
                The Future And Experience The Transformative Power Of AI With
                NARM Tech.
              </div>
            </div>
            <div className="mainVisionDiv">
              <div className="block-2-vision">
                <span>Vision</span>
              </div>
              <div className="block-2-vision-text">
                To transform the landscape of business operations through
                state-of-the-art AI-powered software products. To equip
                organizations with advanced data analytics, seamless automation,
                and augmented decision-making capabilities. To drive operational
                efficiency, agility, and strategic innovation in businesses
                across diverse sectors. To be the catalyst for a new era of
                intelligent and data-driven business operations
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src={Background_2}
          alt="background Image 2"
          className="absolute backgrdImg"
        /> */}
        {/* <div className="mainDivBlock">
          <div className="mainWidth">
            <img
              className="mainAboutUsBlock"
              src={HandImage}
              alt="handimage"
            />
          </div>
          <div className="mainWidthText">
            <div className="mainAboutContentDiv">
              <div>
                <span>About Us</span>
              </div>
              <div>
                NARM Tech Is A Visionary Start-Up Revolutionizing Business
                Operations Through AI-Powered Software Products. Our
                Cutting-Edge Solutions Enable Organizations To Streamline
                Processes, Optimize Efficiency, And Uncover Invaluable Insights.
                By Harnessing The Latest In Machine Learning And Data Analytics,
                We Redefine How Businesses Operate In The Digital Age.Embrace
                The Future And Experience The Transformative Power Of AI With
                NARM Tech.
              </div>
            </div>
            <div className="mainVisionDiv">
              <div>
                <span>Vision</span>
              </div>
              <div>
                To transform the landscape of business operations through
                state-of-the-art AI-powered software products. To equip
                organizations with advanced data analytics, seamless automation,
                and augmented decision-making capabilities. To drive operational
                efficiency, agility, and strategic innovation in businesses
                across diverse sectors. To be the catalyst for a new era of
                intelligent and data-driven business operations
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
