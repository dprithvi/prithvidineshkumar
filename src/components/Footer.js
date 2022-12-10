// Import necessary internal and external modules  
import React from 'react';
import './styles/Footer.css'

//importing logos as assets
import ghlogo from '../images/GitHub_logo.png'
import lnkinlogo from '../images/linkedin_social media_icon.png'
import leetlogo from '../images/LeetCode_logo_black.png'



// Creating the footer section as separate component
const Footer = () => {
  return (
    <div className = 'fixed-bottom'>
    <footer className="w-100 footbar" >
        <ul className="nav-links">
          <li className="nav-item">
            <a href="https://github.com/dprithvi" target="_blank" rel="noreferrer">
              <img src={ghlogo} className="photo" alt="github" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/prithvi-d-683977241/" target="_blank" rel="noreferrer">
                <img src={lnkinlogo} className="photo" alt="LinkedIn" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://leetcode.com/prithvid20EC103/" target="_blank" rel="noreferrer">
                <img src={leetlogo} className="photo" alt="leetcode" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
