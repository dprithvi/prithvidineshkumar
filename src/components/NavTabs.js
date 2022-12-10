// Import necessary internal and external modules  
import React from 'react';
import './styles/NavTabs.css'


// Creating the navbar  section as separate component
function NavTabs ({currentPage, handlePageChange}){
    return (
        <div className="navbar sticky-top">
        <h1> Prithvi Dineshkumar</h1>
        <ul className="nav-links">
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#work"
                    onClick={() => handlePageChange('Work')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#courses"
                    onClick={() => handlePageChange('Course')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Course' ? 'nav-link active' : 'nav-link'}
                >
                Courses
                </a>
            </li>

            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
        </div>
    );
}

export default NavTabs;