import React from 'react';
import './styles/HeroSplash.css'
import avatar from '../images/prithviimage.jpeg'

function HeroSplash(){
    return (
      <div className="title-yellow-splash">
          <img src={avatar} className="avatar" alt="avatar" />
        <h1 id="cool-title"> .... Aspiring Engineer</h1>
      </div>
    );
  }


export default HeroSplash;
