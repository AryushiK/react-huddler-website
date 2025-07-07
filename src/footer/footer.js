import React from 'react';
import './footer.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleContactClick = () => {
        window.location.href = 'mailto:support@huddler.in';
    };

    const handleLinkClick = (path) => {
        if (location.pathname === path) {
            // Force a hard reload
            window.location.reload();
        } else {
            navigate(path);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src="assets/images/huddler_logo.png"
                        alt="HUDDLER Logo"
                        className="footer-logo-img"
                        onClick={() => handleLinkClick('/')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <span onClick={() => handleLinkClick('/')}>Home</span>
                        <span onClick={() => handleLinkClick('/faqs')}>FAQs</span>
                    </div>
                    <div className="footer-column">
                        <span onClick={() => handleLinkClick('/invest')}>Invest</span>
                        <span onClick={() => handleLinkClick('/privacy-policy')}>Privacy Policy</span>
                    </div>
                    <div className="footer-column">
                        <span onClick={() => handleLinkClick('/circles')}>Circles</span>
                        <button
                            onClick={handleContactClick}
                            className="footer-link-button"
                        >
                            Contact Us
                        </button>
                    </div>
                    <div className="footer-column">
                        <span onClick={() => handleLinkClick('/aboutus')}>About Us</span>
                    </div>
                </div>
                <div className="footer-bottom-left">
                    © 2025 Poolio Pvt. Ltd.
                </div>
            </div>


        </footer>
    );
}

export default Footer;
