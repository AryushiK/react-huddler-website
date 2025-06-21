import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <img src="/assets/images/huddler_logo.png" alt="HUDDLER Logo" />
                </Link>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <li><Link to="/circles">Circles</Link></li>
                    <li><Link to="/invest">Invest</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>

                {/* Optional Buttons Section (Commented Out) */}
                {/*
        <div className="nav-buttons">
          <Link to="/login" className="btn-outline">Log in</Link>
          <Link to="/contact" className="btn-glow">Contact sales</Link>
        </div>
        */}
            </div>
        </nav>
    );
}

export default Navbar;
