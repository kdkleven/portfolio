import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

function Header(props) {
    return (
        <Navbar className="bg-danger text-white">
            <Navbar.Brand className="navbar-brand">
                <Link className="nav-item" to="/">
                    Kyle Kleven
                    </Link>
            </Navbar.Brand>
            <Navbar.Toggle arai-controls="basic-navbar-nav" />
            <Nav>
                <Navbar.Collapse>
                    <ul className="navbar-nav">
                        <li
                            className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link" to="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                            className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li
                            className={`nav-item  ${props.location.pathname === "/portfolio" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link" to="/portfolio">
                                Portfolio
                                </Link>
                        </li>
                        <li
                            className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                }`}
                        >
                            <Link className="nav-link" to="/contact">
                                Contact
                                </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Nav>
        </Navbar>

    )
}

export default withRouter(Header);
