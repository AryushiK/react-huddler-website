import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-wrapper">
            {/* Logo floating left */}
            <Link to="/" className="detached-logo">
                <img src="/assets/images/huddler_logo.png" alt="HUDDLER Logo" />
            </Link>

            {/* Floating centered navbar bar */}
            <nav className="floating-navbar">
                <div className="navbar-links">
                    <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                        <li><Link to="/circles">Circles</Link></li>
                        <li><Link to="/invest">Invest</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>☰</div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
