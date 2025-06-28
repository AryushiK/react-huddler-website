import React from 'react';
import './aboutus.css';

function Aboutus() {
    return (
        <div className="aboutus-page dark-bg-section"> {/* This wraps the whole section in black */}
            <div className="aboutus-grid-container">
                <div className="invest-hero-heading-2">
                    <h2>
                        {/* INVEST by{" "} */}
                        <img
                            src="/assets/images/huddler-logo-white.png"
                            alt="Huddler Logo"
                            className="invest-huddler-logo-2"
                        />
                    </h2>
                </div>

                <div className="aboutus-header">
                    <h1 className="aboutus-title">
                        We’re making financial growth feel less alone
                    </h1>
                    <p className="aboutus-description">
                        Huddler’s Collaborative Finance Platform gives you the tools, structure, and support to
                        <strong> grow</strong>, <strong> save</strong>, and
                        <strong> invest together</strong> securely, seamlessly, and on your terms.
                    </p>
                </div>
                <div className="aboutus-why">
                    <h2 className="why-heading">Why we exist?</h2>
                    <p className="why-description">
                        At Huddler, we believe money is more than just numbers. It's hope, security, and the power to shape your future.
                        But too often, the path to building wealth feels isolating, slow, and overwhelming. No one thrives alone, not in life and not when it comes to money.
                        <br /><br />
                        That's why we're building a community where financial growth is shared, knowledge flows freely, and people move faster and go further by moving together.
                        A place where it's okay not to know everything, and where vulnerability is met with support, not judgment.
                        <br /><br />
                        Because when we do it together, building wealth becomes less daunting and much more possible.
                    </p>
                </div>
                <h2 className="our-values-heading">Our Values</h2>

                <div className="aboutus-grid">
                    <div className="aboutus-card">
                        <span className="aboutus-icon">⌀</span>
                        <p><strong>Transparent.</strong> Clarity at every step. No hidden terms, no gatekeeping, no guesswork.</p>
                    </div>
                    <div className="aboutus-card">
                        <span className="aboutus-icon">🌐</span>
                        <p><strong>Inclusive.</strong> Financial growth should be within reach for anyone, not just the privileged few.</p>
                    </div>
                    <div className="aboutus-card">
                        <span className="aboutus-icon">🧍</span>
                        <p><strong>Empowering.</strong> Giving you control, insight, and the tools to grow together with confidence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
