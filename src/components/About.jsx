import React from 'react'
import WhatsAppImage from '../assets/image copy 3.png'
const About = () => {
  return (
    <div id="about" className="about-section">
       <h1 id="About">About Me</h1>
       <div className="main-about">
        <img src={WhatsAppImage} alt="About me" />
        <h3>My name is <span>Abhishek Patel</span> Currently pursuing B.Tech in <span>Electronics and Communication Engineering</span>. I am passionate about technology and eager to learn more in this field. I am intrested in<span>
         Web development and IoT</span></h3>
       </div>

    </div>
  )
}

export default About
