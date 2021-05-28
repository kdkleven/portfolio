import React from 'react';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'

//need to add headshot
//restyle about sections

function About() {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <h2>About Me</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <p>
                        Highly motivated QA professional with over 15 years of experience designing and executing functional and automated testing of complex software applications across multiple industries. My project work ranges from highly configurable web-based platforms to the massively popular video game: Call of Duty.

                        Freelance Full Stack Developer with experience in HTML, CSS, Javascript, NodeJS, Express, React, MongoDB, Bootstrap, Axios, Ajax, jMeter, Chartjs, first and third-party APIs, indexedDB, MySQL, Handlebars, Mongoose, Sequelize.
                        </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;