import React from 'react'
import './style.css'

function Portfolio () {
    return (
        <div class="container section" id="portfolioDiv">
            <div class="row">
                <div class="col-xl-12">
                    <h2>Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-xl=12">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text"><strong>Daily Recreational</strong> is here to inspire you to get
                                    out of the house and rekindle your love for outdoor activities. Click on the image
                                    to try it out!</p>
                            </div>
                            <a href="https://kdkleven.github.io/dailyRecreational/index.html"><img class="card-img-top"
                                    src="./images/DailyRecreational.png" alt="Daily Recreational"/></a>

                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text"><strong>Password Generator</strong> is an application that allows
                                    you to generate a random password based on criteria you select. Click on the image
                                    to try it out!</p>
                            </div>
                            <a href="https://kdkleven.github.io/passwordGenerator/index.html"><img class="card-img-top"
                                    src="./images/03-javascript-homework-demo.png" alt="Password Generator"/></a>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text"><strong>Workday Scheduler</strong> is a calendar application that
                                    allows a user to save events for each hour of the day.calendar application that
                                    allows you to plan your day and save events for each hour slot. Click on the image
                                    to try it out!</p>
                            </div>
                            <a href="https://kdkleven.github.io/workdayScheduler/index.html"><img class="card-img-top"
                                    src="./images/workdayScheduler.PNG" alt="Workday Scheduler"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;