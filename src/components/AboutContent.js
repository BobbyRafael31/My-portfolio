import "./AboutContentStyle.css"

import React from 'react'

import { Link } from 'react-router-dom';

import reactImg from "../assets/ReactJS.jpg"
import unityImg from "../assets/Unity.jpg"

const AboutContent = () => {
    return (
        <div className="about">
                <div className="left">
                        <h1>Who Am I?</h1>s
                        <p>I'm a passionate learner diving into the exciting world of Game Development and Backend Development.</p>
                        <Link to="/contact">
                            <button className="btn">Contact</button>
                        </Link>
                </div>
                <div className="right">
                    <div className="img-container">
                        <div className="img-stack top">
                            <img src={unityImg} className="img" alt="unityimg"/>
                        </div>
                        <div className="img-stack bottom">
                            <img src={reactImg} className="img" alt="reactimg"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutContent
