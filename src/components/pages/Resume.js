// Import necessary internal and external modules  
import React from 'react';
import '../styles/Resume.css';

// Creating the resume section as separate component
export default function Resume() {
  return (
    <div className="resume-container">
      <h4>
       Download my&nbsp;     
      <a id='resume' href="../images/PrithviD_resume.pdf" download rel="noopener noreferrer" target="_blank">
      resume
      </a>
      </h4>
      <br></br>
      <div>
        <h4> Technical skills</h4>
        <ul>
          <li> Java </li>
          <li> C language </li>
          <li> Python </li>
          <li> HTML </li>
          <li> Networking basics </li>
        </ul>
      </div>
      <br></br>
      <h4> Soft skills</h4>
      <ul>
        <li> Leadership </li>
        <li> Communication </li>
        <li> Problem solving </li>
      </ul>
    </div>
  );
}