import React from 'react';
import './style.css'

//need to add headshot
//restyle about sections

function About() {
    return (
        <main class="container clear-top" id="aboutDiv">
            <div class="row">
                <div class="col-xl-12">
                    <h2>About Me</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <span><img id="headshot" src="./images/headshot.jpg" alt="Headshot" /></span>
                    <p>
                        Welcome to me. As a Quality Engineer and Web Developer, I am a highly-motivated professional
                        with over 16 years of experience testing and developing software applications. My life has
                        revolved around testing for the past 15 years, from video games to applications for the real
                        estate industry.
                    </p>
                    <p>
                        The purpose of this site is to showcase my coding skills as I learn full stack web
                        development.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About;