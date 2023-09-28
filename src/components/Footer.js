import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Cinere</p>
                        <p>Jakarta</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    085761796844</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    bobbyrafael233133@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I'm a passionate learner diving into the exciting world of Game Development and Backend Development. I'm currently upgrading my skills to create immersive gaming experiences and robust backend systems.</p>
                <div className="social">
                    <a href="https://www.facebook.com/BobbyRafaelSembiring/?_rdc=1&_rdr">
                        <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    </a>
                    <a href="https://www.instagram.com/bobbyrafa_el/">
                        <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    </a>
                    <a href="https://github.com/BobbyRafael31">
                        <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/bobby-rafael">
                        <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer