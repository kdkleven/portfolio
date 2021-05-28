import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
//need to add icons

function Footer () {
    return (
        <footer className="footer bg-danger text-light">
            <span id="copyright">10GU &copy;2021</span>
            <span> || </span>
            <span><Link href="mailto:kylekleven8@gmail.com">kylekleven8@gmail.com</Link></span>
            <span> || </span>
            <span><Link href="tel:612-670-7837">612-670-7837</Link></span>
            <span> || </span>
            <span><Link href="https://www.linkedin.com/in/kdkleven/">GitHub</Link></span>
            <span> || </span>
            <span><Link href="https://github.com/kdkleven">LinkedIn</Link></span>
            <span> || </span>
            <Link href="" download="kk_resume">Resume</Link>
        </footer>
    )
}

export default Footer;
