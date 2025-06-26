import React, { useLayoutEffect, useRef } from 'react';

import './invest.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Invest() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useLayoutEffect(() => {

        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                const container = containerRef.current;
                const section = sectionRef.current;

                if (container && section) {
                    const scrollLength = container.scrollWidth - window.innerWidth;

                    gsap.to(container, {
                        x: () => `-${scrollLength}px`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top top',
                            end: () => `+=${scrollLength}`,
                            scrub: true,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true
                        }
                    });
                }

                ScrollTrigger.refresh();
            });

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                ctx.revert();
            };
        }
    }, []);

    return (
        <>
            <section className="invest-hero-section dark-bg-section">
                <div className="invest-hero-heading">
                    <h2>
                        INVEST by <img src="/assets/images/huddler-logo-white.png" alt="Huddler Logo" className="invest-huddler-logo" />
                    </h2>
                </div>

                <div className="invest-hero-content">
                    <div className="invest-hero-text">
                        <h2>
                            Group Investment, <span className="invest-highlight-orange">Simplified</span>
                        </h2>
                        <p>
                            Turn trusted networks into powerful <br /> investing teams. Huddler handles the <br /> complexity –
                            so you can focus on <br /> <strong>growing wealth, together.</strong>
                        </p>
                    </div>

                    <div className="invest-hero-image">
                        <img src="/assets/images/invest-hero.svg" alt="Invest Hero" />
                    </div>
                </div>
            </section>


            {/* Horizontal Scroll Section */}
            <section className="scroll-section" ref={sectionRef}>
                <h2 className="scroll-heading">
                    Investor-Focused <span className="highlight">Platform</span> Solutions
                </h2>

                <div className="scroll-wrapper" ref={containerRef}>
                    <div className="scroll-cards">
                        <div className="scroll-card card-one">
                            <img src="/assets/images/Group1.svg" alt="Group Icon" className="group-icon1" />
                            <p>
                                <span className="first-line">Unlock Access to Bigger Plays</span><br />
                                Cross high minimums together and access quality investment
                                opportunities previously reserved for the 0.01%. You bring
                                the group, we help you move like a fund.
                            </p>
                        </div>

                        <div className="scroll-card card-two">
                            <img src="/assets/images/Group2.svg" alt="Group Icon" className="group-icon2" />
                            <p>
                                <span className="first-line">Real-Time Visibility & Control</span><br />
                                See who’s in, what’s committed, and how things are performing:
                                All from one clean, auditable dashboard.
                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group3.svg" alt="Group Icon" className="group-icon3" />
                            <p>
                                <span className="first-line">Built-In Structure That Handles the “What Ifs”</span><br />
                                Disagreements? Exits? Payouts? Every group gets a clear
                                operating agreement, drafted and enforced by us.
                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group4.svg" alt="Group Icon" className="group-icon4" />
                            <p>
                                <span className="first-line">End-to-End Infrastructure for Group Investing</span><br />
                                We handle all the heavy lifting; SPVs, bank account setup, capital
                                calls, KYC, tax filing, and compliance.
                            </p>
                        </div>

                        <div className="scroll-card card-four">
                            <img src="/assets/images/Group5.svg" alt="Group Icon" className="group-icon5" />
                            <p>
                                <span className="first-line">AI That Drives Group Clarity</span><br />
                                From deal summaries to risk signals, Huddler’s AI keeps your
                                group aligned; surfacing what matters, flagging what doesn’t.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="invest-container dark-bg-section">
                <h2 className="invest-title-overlay">Explore Our Investment Opportunities</h2>

                <div className="invest-cards-wrapper">
                    <div className="card card-top card-1">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/real-estate-3.png" alt="Fixed Deposits Icon" className="card-icon" />
                                <h3>Real Estates</h3>
                            </div>
                            <div className="card-back">
                                <p>More about Fixed Deposits</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-top card-2">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/portfolio-management-3.png" alt="AIF Icon" className="card-icon" />
                                <h3>Mutual Funds</h3>
                            </div>
                            <div className="card-back">
                                <p>More about Mutual Funds</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-top card-3">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/hedge-fund-2.png" alt="AIF Icon" className="card-icon" />
                                <h3>Hedge Funds</h3>
                            </div>
                            <div className="card-back">
                                <p>More about Insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-bottom card-4">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/portfolio-management-3.png" alt="AIF Icon" className="card-icon" />
                                <h3>Portfolio Management Services</h3>
                            </div>
                            <div className="card-back">
                                <p>More about PMS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-bottom card-5">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/portfolio-management-3.png" alt="AIF Icon" className="card-icon" />
                                <h3>Alternate Investments Funds</h3>
                            </div>
                            <div className="card-back">
                                <p>More about AIF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="next-section">
                <h2 style={{ color: 'black' }}>This is the next section</h2>
            </section>
        </>
    );
}

export default Invest;
