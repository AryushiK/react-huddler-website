import React, { useEffect, useRef } from 'react';
import './invest.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Invest() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
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
                ctx.revert(); // ✅ Proper cleanup to remove pinned elements & animations
            };
        }
    }, []);

    return (
        <>
            <section className="invest-hero-section">
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
                                Unlock Access to Bigger Plays<br />
                                Cross high minimums together and access quality investment<br />
                                opportunities previously reserved for the 0.01%. You bring<br />
                                the group — we help you move like a fund.
                            </p>
                        </div>

                        <div className="scroll-card card-two">
                            <img src="/assets/images/Group2.svg" alt="Group Icon" className="group-icon2" />
                            <p>
                                📊 Real-Time Visibility & Control<br />
                                See who’s in, what’s committed, and how things are performing —<br />
                                all from one clean, auditable dashboard.
                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group3.svg" alt="Group Icon" className="group-icon3" />
                            <p>
                                🧩 Built-In Structure That Handles the “What Ifs”<br />
                                Disagreements? Exits? Payouts? Every group gets a clear<br />
                                operating agreement, drafted and enforced by us.
                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group4.svg" alt="Group Icon" className="group-icon4" />
                            <p>
                                🔧 End-to-End Infrastructure for Group Investing<br />
                                We handle the heavy lifting — SPVs, bank account setup, capital<br />
                                calls, KYC, tax filing, and compliance.
                            </p>
                        </div>

                        <div className="scroll-card card-four">
                            <img src="/assets/images/Group5.svg" alt="Group Icon" className="group-icon5" />
                            <p>
                                AI That Drives Group Clarity<br />
                                From deal summaries to risk signals, Huddler’s AI keeps your<br />
                                group aligned — surfacing what matters, flagging what doesn’t.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="invest-container">
                <div className="card card-top card-1">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src="/assets/images/real-estate-2.png" alt="Fixed Deposits Icon" className="card-icon" />
                            <h3>Real Estates</h3>
                            {/* <p>*Specific institutions and tenures from NRO accounts only.</p> */}
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
                            {/* <p>Invest easily in mutual fund schemes and meet your long-term financial goals.</p> */}
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


            <section className="next-section">
                <h2 style={{ color: 'black' }}>This is the next section</h2>
            </section>
        </>
    );
}

export default Invest;
