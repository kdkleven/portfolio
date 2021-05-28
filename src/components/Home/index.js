import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Home() {
  return (
    <Container className="home">
      <Row>
          <Col sm={3}>
            <img id="headshot" src="/assets/img/headshot.jpg" alt="Headshot" />
          </Col>
          <Col sm={9}>
            <p className="welcome-body">
              Welcome to me. As a Quality Engineer and Web Developer, I am a highly-motivated professional
              with over 16 years of experience testing and developing software applications. My life has
              revolved around testing for the past 15 years, from video games to applications for the real
              estate industry.
          <br></br>
              <br></br>
            The purpose of this site is to showcase my coding skills as I learn full stack web
            development.
            </p>
          </Col>
        </Row>
    </Container>
  );
}

export default Home;