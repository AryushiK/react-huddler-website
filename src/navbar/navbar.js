import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WaitlistPopup from '../components/WaitlistPopup';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLinkClick = () => {
        setIsMenuOpen(false); // close the menu after click
    };

    const location = useLocation();
    const navigate = useNavigate();
    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload(); // force hard reload
        } else {
            navigate('/');
        }
    };

    const [useWhiteLogo, setUseWhiteLogo] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll('.dark-bg-section');

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Makes sure even small sections get detected when near center
            threshold: 0.01,
        };

        const observer = new IntersectionObserver((entries) => {
            const isDarkVisible = entries.some(
                (entry) => entry.isIntersecting && entry.target.classList.contains('dark-bg-section')
            );
            setUseWhiteLogo(isDarkVisible);
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        const manualScrollCheck = () => {
            let found = false;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                if (inView) found = true;
            });
            setUseWhiteLogo(found);
        };

        window.addEventListener('scroll', manualScrollCheck);
        manualScrollCheck(); // trigger once on mount

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener('scroll', manualScrollCheck);
        };
    }, [location.pathname]);
    // 👈 important!

    return (
        <div className="navbar-wrapper">
            {/* Logo floating left */}
            <div className="detached-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img
                    src={
                        useWhiteLogo
                            ? '/assets/images/huddler-logo-white.png'
                            : '/assets/images/huddler_logo.png'
                    }
                    alt="HUDDLER Logo"
                    className={useWhiteLogo ? 'logo-white' : 'logo-default'}
                />
            </div>

            {/* Floating centered navbar bar */}
            <nav className="floating-navbar">
                <div className="navbar-links">
                    <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                        <li><Link to="/circles" onClick={handleLinkClick}>Circles</Link></li>
                        <li><Link to="/invest" onClick={handleLinkClick}>Invest</Link></li>
                        <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
                        <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
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

