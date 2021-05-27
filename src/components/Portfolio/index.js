import React from 'react'
import { Container, Card, Button, CardColumns } from 'react-bootstrap'
import './style.css'

function Portfolio() {
    return (
        <Container>
            <div className="App">
                <h2>Portfolio</h2>
                <CardColumns>
                    <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
                        <Card.Img className="card-img-top" src="/assets/img/DailyRecreational.png" alt="Daily Recreational" />
                        <Card.Body>
                            <Card.Title>Daily Recreational</Card.Title>
                            <Card.Text className="card-text">
                                is here to inspire you to get out of the house and rekindle your love for outdoor activities. Click on the image to try it out!
                                    </Card.Text>
                            <Button variant="warning" href="https://kdkleven.github.io/dailyRecreational/index.html">Check it out!</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
                        <Card.Img className="card-img-top" src="/assets/img/03-javascript-homework-demo.png" alt="Password Generator" />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text className="card-text"> is an application that allows
                            you to generate a random password based on criteria you select. Click on the image
                                    to try it out!</Card.Text>
                            <Button variant="warning" href="https://kdkleven.github.io/passwordGenerator/index.html">Check it out!</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
                        <Card.Img className="card-img-top" src="assets/img/workdayScheduler.PNG" alt="Workday Scheduler" />
                        <Card.Body>
                            <Card.Title>Workday Scheduler</Card.Title>
                            <Card.Text className="card-text"> is a calendar application that
                            allows a user to save events for each hour of the day.calendar application that
                            allows you to plan your day and save events for each hour slot. Click on the image
                                    to try it out!</Card.Text>
                            <Button variant="warning" href="https://kdkleven.github.io/workdayScheduler/index.html">Check it out!</Button>
                        </Card.Body>
                    </Card>
                    
                </CardColumns>
            </div>
        </Container>
    )
}

export default Portfolio;

// <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
//                         <Card.Img className="card-img-top" src="" alt="" />
//                         <Card.Body>
//                             <Card.Title>Cup of Sugar</Card.Title>
//                             <Card.Text className="card-text"> is a calendar application that
//                             allows a user to save events for each hour of the day.calendar application that
//                             allows you to plan your day and save events for each hour slot. Click on the image
//                                     to try it out!</Card.Text>
//                             <Button variant="warning" href="#">Check it out!</Button>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
//                         <Card.Img className="card-img-top" src="" alt="" />
//                         <Card.Body>
//                             <Card.Title>Snuze</Card.Title>
//                             <Card.Text className="card-text"> is a calendar application that
//                             allows a user to save events for each hour of the day.calendar application that
//                             allows you to plan your day and save events for each hour slot. Click on the image
//                                     to try it out!</Card.Text>
//                             <Button variant="warning" href="#">Check it out!</Button>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }} bg="dark" text="light" className="mb-2">
//                         <Card.Img className="card-img-top" src="" alt="" />
//                         <Card.Body>
//                             <Card.Title>Tech Blog</Card.Title>
//                             <Card.Text className="card-text"> is a calendar application that
//                             allows a user to save events for each hour of the day.calendar application that
//                             allows you to plan your day and save events for each hour slot. Click on the image
//                                     to try it out!</Card.Text>
//                             <Button variant="warning" href="#">Check it out!</Button>
//                         </Card.Body>
//                     </Card>