import React from 'react';
import './footer.css';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleContactClick = () => {
        window.location.href = 'mailto:support@huddler.in';
    };
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/">
                        <img
                            src="assets/images/huddler_logo.png"
                            alt="HUDDLER Logo"
                            className="footer-logo-img"
                        />
                    </Link>
                </div>


                <div className="footer-links">
                    <div className="footer-column">
                        <Link to="/">Home</Link>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-column">
                        <Link to="/faqs">FAQs</Link>
                        <Link to="/circles">Circles</Link>
                    </div>
                    <div className="footer-column">
                        <Link to="/invest">Invest</Link>
                        <Link to="/aboutus">About Us</Link>
                    </div>
                    <div className="footer-column">
                        <button
                            onClick={handleContactClick}
                            className="footer-link-button"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
