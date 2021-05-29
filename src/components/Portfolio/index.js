import React from 'react'
import { DropdownButton, Dropdown, Card, Button, CardDeck } from 'react-bootstrap'
import './style.css'

function Portfolio() {
    return (
        <div className="container body">
            <h1 className="font-weight-light">Portfolio</h1>
            <CardDeck className="card-deck">
                <Card style={{ width: '18rem' }} bg="light" text="black" className="col mb-1">
                    <Card.Img className="card-img-top" src="assets/img/snuze.png" alt="Snuze" />
                    <Card.Body>
                        <Card.Title>Snuze</Card.Title>
                        <Card.Text className="card-text">
                            A tranquil React app, and was designed to meet the needs of users who want some extra help to fall asleep comfortably.
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://snueze.herokuapp.com/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/Snueze">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} bg="light" text="black" className="col mb-1">
                    <Card.Img className="card-img-top" src="assets/img/cupofsugar.png" alt="Cup of Sugar" />
                    <Card.Body>
                        <Card.Title>Cup of Sugar</Card.Title>
                        <Card.Text className="card-text">
                            A platform for good neighbors to be good neighbors.
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://cup-of-sugar-application.herokuapp.com/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/Cup-of-Sugar">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} bg="light" text="dark" className="col mb-1">
                    <Card.Img className="card-img-top" src="/assets/img/DailyRecreational.png" alt="Daily Recreational" />
                    <Card.Body>
                        <Card.Title>Daily Recreational</Card.Title>
                        <Card.Text className="card-text">
                            An application designed to inspire you to get out of the house and rekindle your love for outdoor activities.
                                    </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://kdkleven.github.io/dailyRecreational/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/dailyRecreational">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} bg="light" text="black" className="col mb-1">
                    <Card.Img className="card-img-top" src="/assets/img/empdirstat.JPG" alt="Employee Directory" />
                    <Card.Body>
                        <Card.Title>EmpDirStat</Card.Title>
                        <Card.Text className="card-text">An employee directory built using React.</Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://kdkleven.github.io/empDirStat/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/empDirStat">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} bg="light" text="black" className="col mb-1">
                    <Card.Img className="card-img-top" src="assets/img/iworkout.jpg" alt="iWorkout" />
                    <Card.Body>
                        <Card.Title>iWorkout</Card.Title>
                        <Card.Text className="card-text">
                            Workout tracker to help you track your daily workout routine.
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://kk-workout.herokuapp.com/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/iWorkout">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} bg="light" text="black" className="col mb-1">
                    <Card.Img className="card-img-top" src="assets/img/techblog.PNG" alt="Tech Blog" />
                    <Card.Body>
                        <Card.Title>KK Tech Blog</Card.Title>
                        <Card.Text className="card-text">
                        A tech blog for engineers to share knowledge and experiences.
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href="https://kk-tech-blog.herokuapp.com/">Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href="https://github.com/kdkleven/techBlog">Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Portfolio;

