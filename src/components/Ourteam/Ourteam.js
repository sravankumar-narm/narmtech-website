import React from 'react'
import "./ourteam.css"
import Logo from "../../Images/ourteam/Logo.png"

function OurTeam() {
  return (
    <div className='our-team'> 
      <header className="navbar">
        {/* logo */}
        <div className="logo">
          <img className="narm-tech-logo" src={Logo}></img>
        </div>
        {/* nav-bar */}
        <div className="Navbar-items">
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
    </div>
  )
}

export default OurTeam