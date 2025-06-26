import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import WaitlistPopup from '../components/WaitlistPopup';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [useWhiteLogo, setUseWhiteLogo] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll('.dark-bg-section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            const isInDark = entries.some(entry => entry.isIntersecting);
            setUseWhiteLogo(isInDark);
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);
    return (
        <div className="navbar-wrapper">
            {/* Logo floating left */}
            <Link to="/" className="detached-logo">
                <img
                    src={
                        useWhiteLogo
                            ? '/assets/images/huddler-logo-white.png'
                            : '/assets/images/huddler_logo.png'
                    }
                    alt="HUDDLER Logo"
                    className={useWhiteLogo ? 'logo-white' : 'logo-default'}
                />
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
            <button className="join-waitlist-btn" onClick={() => setPopupVisible(true)}>
                Join Waitlist
            </button>

            <WaitlistPopup isOpen={popupVisible} onClose={() => setPopupVisible(false)} />
        </div>
    );
}
export default Navbar;

// import WaitlistPopup from '../components/WaitlistPopup';
// const [isOpen, setIsOpen] = useState(false);

// <button onClick={() => setIsOpen(true)}>Open Waitlist</button>
// <WaitlistPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />

