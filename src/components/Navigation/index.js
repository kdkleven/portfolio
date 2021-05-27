import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './style.css'

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Kyle Kleven
                    </Link>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                  <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/portfolio" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navigation);


// <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className="navbar-nav">
//                             <Link className="nav-link active bg-light" aria-current="page" href="/about" id="about">About</Link>
//                             <Link className="nav-link bg-light" href="/portfolio" id="portfolio">Portfolio</Link>
//                         </div>
//                     </div>