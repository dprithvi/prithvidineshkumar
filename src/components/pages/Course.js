// Import necessary internal and external modules  
import React from 'react';
import '../styles/Course.css';
import cisco from '../../images/cisco.jpg'
import packettracer from '../../images/packettracer.png'
import simplilearn from '../../images/simplilearn.png'
import javatutorials from '../../images/javatutorials.jpg'



export default function Resume() {
    return ( <div className="course-container">
        <div class="cards">
    <article class="card">
        <header>
            <h3>CISCO CCNA</h3>
        </header>    
        <img src={cisco} alt="cisco ccna" />
        <div class="content">
            <p>Course Status: In progress</p>
            <p>CCNA exam covers networking fundamentals, IP services, security fundamentals, automation and programmability.</p>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h3> PACKET TRACER</h3>
        </header>    
        <img src={packettracer} alt="cisco packettracer" />
        <div class="content">
            <p>Course Status: Completed</p>
            <p>Packet tracer is a network simulation tool to practice ccna course.</p>
        </div>
    </article>
    <article class="card">
        <header>
            <h3> ETHICAL HACKING</h3>
        </header>    
        <img src={simplilearn} alt="simplilearn" />
        <div class="content">
            <p>Course Status: Completed</p>
            <p>Network packet analysis and system penetration testing techniques to build security skill-set and prevent hackers.</p>
        </div>
    </article>
    <article class="card">
        <header>
            <h3> JAVA</h3>
        </header>    
        <img src={javatutorials} alt="basics of java" />
        <div class="content">
            <p>Course Status: In Progress</p>
            <p>Learning Fundamental concepts of java.</p>
        </div>
    </article>
</div>
    </div>)
}