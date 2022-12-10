//import necessary iinternal and external modules
import React from 'react';
import '../styles/Internship.css'

//importing the pictures from the library
import intern from '../../images/Intern.jpg'

//Creating a separate component for portfolio 
export default function Internship() {

  return (
    <div className="w-100 container work-container">  
            <ul className="display-work nav-links">
                <li className="card nav-item" > 
                        <img src={intern} alt="internshipphoto" />
                </li> 
                <li className="cardtext nav-item" > 
                    <h3>UNIVERSITY OF MALAYA - MALASIYA</h3>
                    <br></br>
                    <p>I am very excited to share my summer venture. Went to the University of Malaya in Malaysia for a summer internship exploring Modern software projects about the uses and implementation of drones.
                        I see a lot of opportunities in the upcoming years to implement whatever I had learned. Thanks to Sri Eshwar College of Engineering and the University of Malaya for giving me and my friends this experience and exposure.</p>
                </li> 
                <li className="cardtext nav-item" > 
                    <h3>SUMMER INTERNSHIP TRAINING - BASICS OF JAVA</h3>
                    <br></br>
                    <p>In this summer Internship program i learned the basic of java especially OOP'S concept of java programming</p>
                </li> 
            </ul>
    </div>
  );
}

