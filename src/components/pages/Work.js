//import necessary iinternal and external modules
import React from 'react';
import {useState} from 'react';
import '../styles/Work.css'

//importing the pictures from the library
import feetsoldier from '../../images/feet_soldier.jpeg'

//Creating a separate component for portfolio 
export default function Work() {

  return (
    <div className="w-100 container work-container">  
            <h3 className="sidebar-heading">Community Service Platform</h3>
            <ul className="display-work nav-links">
                <li className="card nav-item" > 
                        <img src={feetsoldier} alt="feetsoldier" />
                </li> 
                <li className="card nav-item" > 
                 <p>This is a service platform that connencts small workers like carpenter, electrician, plumber etc., to people who are need of these services. Currently, we are studying about software development process and applying our learning to build this application. This application process is being built using java programming.</p>
                </li> 

            </ul>
    </div>
  );
}
