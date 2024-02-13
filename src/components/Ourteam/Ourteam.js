import React from 'react'
import "./ourteam.css"
import I from "../../Images/ourteam/I.png";
import photo from "../../Images/ourteam/Phtoo.png";
import Logo from "../../Images/ourteam/Logo.png"
import contant1 from "../../Images/ourteam/location.png";
import contant2 from "../../Images/ourteam/email.png"; 
import contant3 from "../../Images/ourteam/whatapp.png";
import contant from "../../Images/ourteam/Background2.png";
import F from "../../Images/ourteam/F.png";
import X from "../../Images/ourteam/X.png";



function OurTeam() {
  return (
    <div className='ourteam-narm'>
    <div className='our-team'> 
      <header className="navbar">
        {/* logo */}
        <div className="ourteam-logo">
          <img className="narm-tech-logo-2" src={Logo}></img>
        </div>
        {/* nav-bar */}
        <div className="Navbar-items">
           <div className="Ourteam-menu">
            <a href="/">Home</a>
          </div>
          <div className="Ourteam-menu1">
            <a href="/offers">Offerings</a>
          </div>
          <div className="Ourteam-menu2">
            <a href="/consulting">Consulting</a>
          </div>
          <div className="Ourteam-menu3">
            <a href="/aboutus">About us</a>
          </div>
          <div className="Ourteam-menu4">
            <a href="/ourteam">Our Team</a>
          </div>
          <div className="Ourteam-menu5">
            <a href="/contactus">Contact us</a>
          </div>
        </div>
      </header>
      <div className="Team">
        <div className="Ourteamcricle10"></div>
        <div className="Ourteamcricle11"></div>
        <div className="Ourteamcricle12"></div>
        <div className="Ourteamcricle13"></div>
        <div className="Ourteamcricle14"></div>
        <div className="Ourteamcricle15"></div>
        <div className="Ourteamcricle16"></div>
        <div className="Ourteamcricle17"></div>
        <div className="Ourteamcricle18"></div>
        <div className="Ourteamcricle19"></div>

        <b className="Our-team2">Our Team</b>
        <b className="advisory-team">Advisory Team</b>
        <div className="Ram-m-reddy-container">
          <span className="Ram-m-reddy-container1">
            <p className="our-ai-powered-products-for-bu">
              Ram M Reddy, Founder & CEO of NARM Tech Private Ltd, oversees all
              business operations of the company. With over 21 years of
              experience in the IT industry, he combines his expertise in
              technology, legal matters, and business acumen gained through
              diverse roles in multinational corporations.
            </p>
            <p className="our-ai-powered-products-for-bu">&nbsp;</p>
            <p className="our-ai-powered-products-for-bu">
              Throughout his career, he has excelled in areas such as Data &
              Analytics, Software Products Development, Portfolio Management,
              Project Management, and IT Strategy for global markets. Under his
              guidance, companies have achieved remarkable success in building
              robust product pipelines for the USA and EU markets.
            </p>
          </span>
        </div>
        <div className="ram">
          <div className="name1">Ram M Reddy</div>
          <div className="ceo-narmtech">CEO @ Narmtech</div>
          <img className="ram-child" alt="" src={photo} />
        </div>
      </div>
      <div className="Ourteam-rectangle-parent">
        <div className="Ourteam-group-inner"></div>
        <div className="Ourteam-group-child1"></div>
        <div className="Program-manager-tata-container">
          <p className="our-ai-powered-products-for-bu">Program Manager,</p>
          <p className="our-ai-powered-products-for-bu">
            TATA Consultancy Services, Chicago, USA, 25 years of IT Experience
            in Data and Analytics, AI & ML
          </p>
        </div>
        <div className="Author">
          <div className="name2">Narasimha</div>
          <div className="manager-narmtech">Manager @ Narmtech</div>
          <img className="author-child" alt="" src={photo} />
          <img className="frame-icon5" alt="" src={I} />
        </div>
        <div className="Ourteampattern2"></div>
        <div className="Ourteampattern3"></div>
      </div>
      <div className="Ourteam-rectangle-group">
        <div className="Ourteam-group-child2"></div>
        <div className="Ourteam-group-child3"></div>
        <div className="Ourteam-research-associate-ai-container">
          <p className="our-ai-powered-products-for-bu">Research Associate,</p>
          <p className="our-ai-powered-products-for-bu">
            AI Center of Excellence, TATA Consultancy Services, Bangalore,
            India, 17 years of Professional Experience in AI, Data Science & IT
            Infrastructure Management.
          </p>
        </div>
        <div className="Author1">
          <div className="name2">Sasi K</div>
          <div className="manager-narmtech">Manager @ Narmtech</div>
          <img className="author-child" alt="" src={photo} />
        </div>
      </div>
      <div className="Ourteam-rectangle-container">
        <div className="Ourteam-group-child2"></div>
        <div className="Ourteam-group-child3"></div>
        <div className="Ourteam-research-associate-ai-container1">
          <p className="our-ai-powered-products-for-bu">
            Professor and Head of Department,AITS, Rajampet,
          </p>
          <p className="our-ai-powered-products-for-bu">
            Andhra Pradesh, India 25 years of Professional Experience, Research
            and Development Experience in various subjects and technologies, and
            AI/ML.
          </p>
        </div>
        <div className="Author2">
          <div className="name4">Dr M Padma Lalitha</div>
          <div className="manager-narmtech2">Manager @ Narmtech</div>
          <img className="author-child" alt="" src={photo} />
        </div>
      </div>
      <div className="Ourteam-line-div"></div>
    </div>
    <div className="Ourteamfotter"></div>
      <div className="Ourteam-background-parent" id="groupContainer3">
        <img className="Ourteambackground-icon1" alt="" src={contant} />
        <div className="Ourteam-contact-us-parent">
          <div className="Ourteam-contact-us1">Contact Us</div>
          <div className="Ourteam-group-parent">
            <img className="Ourteam-group-child" alt="" src={contant3} />
            <img className="Ourteam-layer-1-icon1" alt="" src={contant2} />
            <img className="Ourteam-isolation-mode-icon" alt="" src={contant1} />

            <div className="Ourteam-frame-parent">
              <img className="Ourteam-frame-icon" alt="" src={F} />

              <img className="Ourteam-frame-icon" alt="" src={X} />

              <img className="Ourteam-frame-icon" alt="" src={I} />
            </div>
            <div className="Ourteam-rd-main-virgo-container">
              <p className="our-ai-powered-products-for-bu">
                #92, 3rd Main, Virgo Nagar, Post,
              </p>
              <p className="our-ai-powered-products-for-bu">
                Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>
            <div className="Ourteam-infonarmtechcom-hrnarmtech">
              <p className="our-ai-powered-products-for-bu">
                info@narmtech.com
              </p>
              <p className="our-ai-powered-products-for-bu">hr@narmtech.com</p>
            </div>
            <div className="Ourteam-sales-and-services-91-container">
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
          <div className="Ourteam-copyright-2024-">© Copyright 2024 - Narm Tech</div>
          <div className="Ourteam-privacy-policy-parent">
            <div className="Ourteam-privacy-policy">Privacy Policy</div>
            <div className="Ourteam-privacy-policy">Terms & Conditions</div>
          </div>
        </div>
        <div className="Ourteam-group-item"></div>
      </div>
    </div>
  )
}

export default OurTeam