import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Header>
            <h1>James</h1>
            <nav>
                <ul>
                    <li><Link to="/about" className="nav-link">About me</Link></li>
                    <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/resume" className="nav-link">Resume</Link></li>
                </ul>
            </nav>
        </Header>
    );
};

export default Header;