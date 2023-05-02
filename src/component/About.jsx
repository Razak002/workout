import React from 'react';
import aboutimage from '../images/about.jpg';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt="" />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p> Our main aim and piority is to help you learn new exercises, techniques and training methods to meet your weight-loss, muscle building, heart health or sports performance goals.</p>
                <button> READ MORE</button>
            </div>


        </div>
    )
}

export default About
