import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="#">
                        <img
                            src="assets/images/huddler_logo.png"
                            alt="HUDDLER Logo"
                            className="footer-logo-img"
                        />
                    </a>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <a href="#">Home</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-column">
                        <a href="#">FAQs</a>
                        <a href="#">Circles</a>
                    </div>
                    <div className="footer-column">
                        <a href="#">Invest</a>
                        <a href="#">About Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
