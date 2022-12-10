// Import necessary internal and external modules  
import React, { Component } from 'react';
import '../styles/About.css';

// Creating the about section as separate component
export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
      Hi , I am a technology enthusiat on solving day-to-day business problems pragmatically. i am a good team player and a strong leadership skills 
        <br></br>
      </p>   
      <p>
        I am very proud to share my achievements, 
        <ul>
        <li>Won 1st price in MINI PROJECT EXPO 2022,this project is a platform connecting service providers like electricians, plumbers etc., to consumers</li>
        <li>NETSE'22 - PARTICIPATED IN PAPER PRESENTATION - Presented paper on Bionic eye at NETSE'22 at KPR institute of engineering and technology.</li>
        <li>Awarded Consolation prize in Student mobility program 2022 contucted in University of Malaya - Drone navigation project. </li>
        </ul>
      </p>
    </div>
  );
}