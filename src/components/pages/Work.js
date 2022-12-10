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
            <h3 className="sidebar-heading">Projects Portfolio</h3>
            <ul className="display-work nav-links">
                <li className="card nav-item" > 
                        <img src={feetsoldier} alt="feetsoldier" />
                        <div className="text-on-card" >
                            <h4> Community Service Platform </h4>
                        </div>
       
                </li> 
            </ul>
    </div>
  );
}
