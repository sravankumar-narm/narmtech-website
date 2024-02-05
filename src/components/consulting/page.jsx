"use client";

import Image from "next/image";
import './globals.css';
import Logo from "../../public/Images/consult/logo.png";
import backgoundimg2 from "../../public/Images/consult/back-img-2.png";
import img2 from "../../public/Images/consult/img-2.png";
import backgroundimg1 from "../../public/Images/consult/Back-img-2.png";
import img1 from "../../public/Images/consult/img-1.png";
import img3 from "../../public/Images/consult/img-3.png";
import vector15 from "../../public/Images/consult/Vector 15.png";
import vector14 from "../../public/Images/consult/Vector 14.png";
import robot from "../../public/Images/consult/robot.png";
import wtsapp from "../../public/Images/consult/wtsapp.png";
import mail from "../../public/Images/consult/mail.png";
import location from "../../public/Images/consult/location.png";
import fb from "../../public/Images/consult/fb.png";
import x from "../../public/Images/consult/x.png";
import li from "../../public/Images/consult/li.png";
import backgroundimg3 from "../../public/Images/consult/Back-img-3.png";
import Link from "next/link";
// import button from "../../public/Images/consult/button.png"
export default function Home() {
  return (
    <>
      {/* navigation bar */}
      <div className="nav">
        <Image className="logo" src={Logo} />
        <ul className="nav-items">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href=" #">Offerings</a>
          </li>
          <li>
            <a href=" #">Consulting</a>
          </li>
          <li>
            <a href=" #">About Us</a>
          </li>
          <li>
            <a href=" #">Our Team</a>
          </li>
          <li>
            <a href=" #">Contact us</a>
          </li>
        </ul>
      </div>

      {/* DATA-ANALYTICS */}

      <div className="data-analytics-1">
        <Image className="back-img-1" src={backgroundimg1} />
        <Image className="inner-box-1" src={img1} />
      </div>
      <div className="data-analytics-2">
        <h1>Data-Analytics</h1>
        {/* sub-box-1 */}
        <span className="analytics-sub-box1">
          <svg
            className="analytics-button-1"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="analytics-para1">
            <b>Data Strategy:</b>Providing guidance and planning <br /> for
            effective data utilization and management.
          </p>
        </span>
        {/* sub-box-2 */}
        <span className="analytics-sub-box2">
          <svg
            className="analytics-button-2"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="analytics-para2">
            <b>Data Management Capability Consulting:</b>
            <br /> Assisting organizations in improving their data
            <br /> management capabilities.
          </p>
        </span>
        {/* sub-box-3 */}
        <span className="analytics-sub-box3">
          <svg
            className="analytics-button-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="analytics-para3">
            <b>
              Data Platform Consulting, Solution Design, <br />
              And PoC:
            </b>{" "}
            offering expertise in designing and <br />
            implementing data platforms, along with <br />
            conducting Proof of Concepts.
          </p>
          <Image className="robot" src={robot} />
        </span>
        {/* sub-box-4 */}
        <span className="analytics-sub-box4">
          <svg
            className="analytics-button-4"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="analytics-para4">
            <b>BI Consulting:</b> Providing consulting services <br />
            for business intelligence, including data <br />
            visualization and reporting.
          </p>
        </span>
        {/* sub-box-5 */}
        <span className="analytics-sub-box5">
          <svg
            className="analytics-button-5"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="analytics-para5">
            <b>Data Science Consulting:</b> Offering expertise in <br />{" "}
            leveraging data science techniques and
            <br /> methodologies for business insights.
          </p>
        </span>
        <Image className="vector-1" src={vector15} />
      </div>
      {/* DATA-TRANSFORMATION */}

      <div className="data-transformation-1">
        <h1>Data-Transformation</h1>
        {/* sub-box-1 */}
        <span className="transformation-sub-box1">
          <svg
            className="transformation-button-1"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="transformation-para1">
            <b>Data Discovery and Augmentation:</b>
            <br />
            Helping organizations discover and enhance their existing data
            assets.
          </p>
        </span>
        {/* sub-box-2 */}
        <span className="transformation-sub-box-2">
          <svg
            className="transformation-button-2"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="transformation-para2">
            <b>Data Democratization: </b>Enabling broader access and usability
            of data across the organization.
          </p>
        </span>
        {/* sub-box-3 */}
        <span className="transformation-sub-box-3">
          <svg
            className="transformation-button-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="transformation-para3">
            <b>Data Analytics Modernization:</b>
            <br />
            Upgrading and optimizing data analytics <br /> processes and
            technologies.
          </p>
        </span>
      </div>
      <div className="data-transformation-2">
        <Image className="back-img-2" src={backgoundimg2} />
        <Image className="inner-box-2" src={img2} />
      </div>
      <div className="data-engineering-1">
        <Image className="back-img-3" src={backgoundimg2} />
        <Image className="inner-box-3" src={img3} />
      </div>

      <div className="data-engineering-2">
        <h1>Data-Engineering</h1>
        {/* sub-box-1 */}
        <span className="engineering-sub-box1">
          <svg
            className="engineering-button-1"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="engineering-para1">
            <b>Data Modeling, Data Integration, and Data Engineering:</b>{" "}
            Assisting with the design and
            <br /> development of data models, data integration
            <br /> solutions, and data engineering processes.
          </p>
        </span>
        {/* sub-box-2 */}
        <span className="engineering-sub-box2">
          <svg
            className="engineering-button-2"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="engineering-para2">
            <b>BI and Analytics Implementation:</b>
            <br />
            Implementing and configuring business <br /> intelligence and
            analytics tools.
          </p>
        </span>
        {/* sub-box-3 */}
        <span className="engineering-sub-box3">
          <svg
            className="engineering-button-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#0F5376"
              stroke="#1EB1E6"
            />
          </svg>
          <p className="engineering-para3">
            <b>Data Architecture Migrations and Re-platforming:</b>
            <br /> Supporting the migration and re- platforming <br />
            of data architectures for improved efficiency and scalability.
          </p>
        </span>
      </div>
      <Image className="vector-2" src={vector14} />
      {/* FOOTER-PART */}
      <div className="footer">
        <Image className="back-img-4" src={backgroundimg3} />
        <h1>Contact Us</h1>

        {/* icon-1 */}
        <Image className="location-icon" src={location} />
        <p className="para-1">
          #92, 3rd Main, Virgo Nagar, Post,
          <br />
          Seegehalli, Bengaluru, Karnataka 560049
        </p>

        <Image className="fb-icon" src={fb} />

        <Image className="x-icon" src={x} />

        <Image className="linkedin-icon" src={li} />

        {/* icon-2 */}
        <Image className="mail-icon" src={mail} />
        <p className="para-2">
          info@narmtech.com<br></br>
          hr@narmtech.com
        </p>

        {/* icon-3 */}
        <Image className="whatsapp-icon" src={wtsapp} />
        <p className="para-3">
          +91 9611291621 - Sales and Services<br></br>
          +91 9663901621 - Hiring Queries<br></br>
          +91 8297902227 - Whatsapp
        </p>
        <ul className="line">
          <li>
            <a className="info-1" href="#">
              © Copyright 2023 - Narm Tech
            </a>
          </li>
          <li>
            <a className="info-2" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="info-3" href="#">
              Terms & Conditions
            </a>
          </li>
        </ul>
        <circle className="circle-1"></circle>
        <circle className="circle-2"></circle>
        <circle className="circle-3"></circle>
      </div>
    </>
  );
}
