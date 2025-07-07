import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import './invest.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import WaitlistPopup from '../../components/WaitlistPopup';

function Invest() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [popupVisible, setPopupVisible] = useState(false);

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

    const cardsContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray('.investcard-card');

        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    duration: 0.9,
                    scrollTrigger: {
                        trigger: '.investcard-section',
                        // Each card starts animating at different scroll positions
                        start: `${20 + (i * 20)}% center`, // Card 0: 20%, Card 1: 40%, Card 2: 60%, Card 3: 80%
                        end: `${40 + (i * 20)}% center`,   // Card 0: 40%, Card 1: 60%, Card 2: 80%, Card 3: 100%
                        scrub: 1, // Smooth scrubbing
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
        // 👇 Add this to fade out the heading
        gsap.to(".investcard-heading", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".investcard-section", // cards container
                start: "bottom 97%",
                end: "bottom 75%",
                scrub: true,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger && trigger.trigger.closest('.investcard-section')) {
                    trigger.kill();
                }
            });
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
                    Designed for Seamless <span className="highlight">Group</span> Investing
                </h2>

                <div className="scroll-wrapper" ref={containerRef}>
                    <div className="scroll-cards">
                        <div className="scroll-card card-one">
                            <img src="/assets/images/Group1.svg" alt="Group Icon" className="group-icon1" />
                            <p>
                                <span className="first-line">Opportunities Don’t Wait. Neither Should You.
                                </span><br />
                                The best investments usually need a lot of money. With Huddler, you can team up with people you trust to start now and diversify across opportunities to lower risk and grow smarter.

                            </p>
                        </div>

                        <div className="scroll-card card-two">
                            <img src="/assets/images/Group2.svg" alt="Group Icon" className="group-icon2" />
                            <p>
                                <span className="first-line">Clarity at Every Step.</span><br />
                                Everyone stays on the same page with real-time insights, shared visibility, and a transparent, auditable view of all your group’s investments

                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group3.svg" alt="Group Icon" className="group-icon3" />
                            <p>
                                <span className="first-line">Worried About Conflicts? You Don’t Have to Be.
                                </span><br />
                                Life is unpredictable. If someone needs to exit early or plans change, every Huddler group has a clear legal framework ensuring peace of mind for all.


                            </p>
                        </div>

                        <div className="scroll-card card-three">
                            <img src="/assets/images/Group4.svg" alt="Group Icon" className="group-icon4" />
                            <p>
                                <span className="first-line">Group investing is complex. We simplify it.
                                </span><br />
                                From setting up investment vehicles and bank accounts to handling KYC and taxes, we take care of it all so you can invest confidently together
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
                <h2 className="invest-title-overlay">Premium Opportunities, <br />No Longer Out of Reach</h2>
                <p className="invest-title-overlay-p">We partner with leading investment providers to give your group structured, compliant access to exclusive investments  that go beyond what individuals can access alone</p>
                <div className="invest-cards-wrapper invest-cards-responsive">
                    <div className="card card-top card-1">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/real-estate-3.png" alt="Fixed Deposits Icon" className="card-icon" />
                                <h3>Real Estate</h3>
                            </div>
                            <div className="card-back">
                                <p>Co-own real estate as a group with legal clarity, transparency, and full digital tracking</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-top card-2">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/private-equity.png" alt="AIF Icon" className="card-icon" />
                                <h3>Private Equity</h3>
                            </div>
                            <div className="card-back">
                                <p>Access pre-IPO deals as a group with flexible exits and early-stage upside</p>
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
                                <p>Unlock group access to hedge funds traditionally reserved for institutions</p>
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
                                <p>Access leading PMS offerings together with full transparency and expert oversight</p>
                            </div>
                        </div>
                    </div>

                    <div className="card card-bottom card-5">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/assets/images/AIFs.png" alt="AIF Icon" className="card-icon" />
                                <h3>Other<br />Alternate Investments Funds</h3>
                            </div>
                            <div className="card-back">
                                <p>Invest in curated AIFs collectively, with professional management and compliant access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="investcard-section dark-bg-section">
                {/* <div className="investcard-sticky-wrapper"> */}
                <h2 className="investcard-heading">How It Works</h2>
                <div className="investcard-scroll-wrapper">
                    <div className="investcard-card">
                        <h4>1</h4>
                        <h3>Form your<br />investment group</h3>
                        <img
                            src="/assets/images/form-your-investment-group.png"
                            alt="decorative"
                            className="investcard-card-img"
                        />
                        <p>Start a group with people you trust and align with</p>
                    </div>
                    <div className="investcard-card">
                        <h4>2</h4>
                        <h3>Pick a premium<br />opportunity</h3>
                        <img
                            src="/assets/images/pick_a_premium_opportunity.png"
                            alt="decorative"
                            className="investcard-card-img"
                        />
                        <p>Explore curated investment tailored to your group's goals and risk appetite</p>
                    </div>
                    <div className="investcard-card">
                        <h4>3</h4>
                        <h3>Let us<br />set it up</h3>
                        <img
                            src="/assets/images/let-us-set-it-up.png"
                            alt="decorative"
                            className="investcard-card-img"
                        />
                        <p>We handle everything on the backend so your group can focus on building wealth, not paperwork</p>
                    </div>
                    <div className="investcard-card">
                        <h4>4</h4>
                        <h3>Track, manage<br />& profit</h3>
                        <img
                            src="/assets/images/track_manage_&_profit.png"
                            alt="decorative"
                            className="investcard-card-img"
                        />
                        <p>Monitor performance, payouts, and documents all in one simple dashboard</p>
                    </div>
                </div>
                {/* </div> */}
            </section>
            <div className="Invest-waitlist-wrapper dark-bg-section">
                <div className="Invest-waitlist-section">
                    <h2 className="Invest-waitlist-text">A smarter way to invest, together.</h2>
                    <button className="Invest-waitlist-btn" onClick={() => setPopupVisible(true)}>
                        Join Waitlist
                    </button>
                </div>

                <WaitlistPopup isOpen={popupVisible} onClose={() => setPopupVisible(false)} />
            </div>


        </>
    );
}

export default Invest;
