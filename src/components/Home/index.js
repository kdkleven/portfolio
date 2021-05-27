import React from "react";
import {Container} from 'react-bootstrap'
import './style.css'

function Home() {
  return (
    <Container className="App">
      <h2 className="font-weight-light">About Me</h2>
      <span><img id="headshot" src="/assets/img/headshot.jpg" alt="Headshot" />
      <p>
        Welcome to me. As a Quality Engineer and Web Developer, I am a highly-motivated professional
        with over 16 years of experience testing and developing software applications. My life has
        revolved around testing for the past 15 years, from video games to applications for the real
        estate industry.
         <br></br>
         <br></br>
        The purpose of this site is to showcase my coding skills as I learn full stack web
        development.
                    </p>
                    </span>
    </Container>
  );
}

export default Home;