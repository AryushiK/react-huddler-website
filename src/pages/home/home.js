import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { gsap } from "gsap";
import WaitlistPopup from '../../components/WaitlistPopup';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const sectionRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isInvestHovered, setIsInvestHovered] = useState(false);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        const section = sectionRef.current;

        const videoSelectors = [
            ".purple-card1",
            ".purple-card2",
            ".purple-card3",
            ".purple-card4",
        ];

        videoSelectors.forEach((selector) => {
            const card = section.querySelector(selector);
            const video = card?.querySelector("video");

            if (video) {
                video.playbackRate = 0.5;
                video.pause();

                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        video.currentTime = 0;
                        video.play().catch((err) => {
                            console.warn("Video play failed on enter:", err);
                        });
                    },
                    onLeave: () => {
                        video.pause();
                    },
                    onEnterBack: () => {
                        video.currentTime = 0;
                        video.play().catch((err) => {
                            console.warn("Video play failed on re-enter:", err);
                        });
                    },
                    onLeaveBack: () => {
                        video.pause();
                    },
                });
            }
        });

        const cards = section.querySelectorAll(".info-card");

        cards.forEach((card, index) => {
            if (index === 0) return;
            const prevCard = cards[index - 1];

            ScrollTrigger.create({
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    gsap.to(prevCard, {
                        scale: 0.85,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(prevCard, {
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                },
            });

            if (index === cards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 50%",
                    onEnter: () => {
                        gsap.to(card, {
                            scale: 0.85,
                            duration: 0.4,
                            ease: "power2.out",
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(card, {
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out",
                        });
                    },
                });
            }
        });
        // Word fade-in animation on scroll
        // Word-by-word scroll reveal
        const wordSpans = section.querySelectorAll(".animated-paragraph span");

        wordSpans.forEach((span, index) => {
            ScrollTrigger.create({
                trigger: section.querySelector(".animated-paragraph"),
                start: `top+=${index * 55} bottom-=180`,
                end: `top+=${(index + 1) * 55} bottom-=10`,
                scrub: true,
                onEnter: () => {
                    gsap.to(span, {
                        color: "#000", // dark black
                        duration: 0.1,
                        ease: "power1.out",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(span, {
                        color: "#ccc", // revert to grey on scroll up
                        duration: 0.4,
                        ease: "power1.inOut",
                    });
                },
            });
        });





    }, []);

    return (
        <div ref={sectionRef}>
            <div className="hero-section">
                <video
                    preload="auto"
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="/assets/gifs/maingif.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-text">
                    <h1 className="fade-slide-in delay-1">
                        India’s First{" "}
                        <span className="aurora-text">Collaborative Finance Platform</span>.
                    </h1>



                </div>
            </div>

            <section className="info-section">
                {["gif1", "gif2", "gif3", "gif4"].map((gif, i) => (
                    <div className={`info-card purple-card${i + 1}`} key={i}>
                        <div className="video-container">
                            <video autoPlay loop muted playsInline>
                                <source
                                    src={`/assets/gifs/gif${i + 1}-no-text-movement.mp4`}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
                <div className="scroll-trigger-dummy" style={{ height: "1px" }}></div>
            </section>
            <section className="huddler-intro-section">
                <h2 className="intro-heading">
                    Introducing <span className="highlight-huddler">Huddler</span>
                </h2>

                <p className="animated-paragraph animated-paragraph-huddler">
                    <span>We</span> <span>make</span> <span>it</span><br />
                    <span>easy</span> <span>to</span> <span>grow</span><br />
                    <span>wealth</span> <span>with</span> <span>people</span><br />
                    <span>you</span> <span>trust,</span> <span>powered</span><br />
                    <span>by</span> <span>smart</span> <span>tech,</span><br />
                    <span>seamless</span> <span>structure,</span> <br /><span>and</span>
                    <span>a</span> <span>setup</span><span>so</span><br />
                    <span>smooth,</span> <span>it</span> <span>feels</span><br />
                    <span>effortless.</span>
                </p>


            </section>


            <section className="huddler-section">
                <div className="huddler-heading">
                    <div className="clicky-wrapper" onClick={() => setShowPopup(true)} style={{ cursor: 'pointer' }}>
                        <video
                            src="/assets/gifs/clicky1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="clicky-video"
                            preload="none"
                        ></video>
                    </div>
                    <p className="huddler-subtext">
                        Everyone’s money journey is different—
                        <strong>find the Huddler path that fits yours.</strong>
                    </p>
                </div>

                <div className="huddler-cards">
                    <div className="huddler-card">
                        <h3>Huddler Circles</h3>
                        <p>
                            For those who want to <em>save smarter</em>,
                            <em>stay accountable</em>, and <em>access credit</em> within
                            trusted groups.
                        </p>
                        <div
                            className="image-box1"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={isHovered ? "/assets/gifs/circles_1.gif" : "/assets/images/bnw-circles-illustration.png"}
                                alt="Huddler Circles"
                                className="circles-image"
                            />
                        </div>

                        <button className="huddler-btn" onClick={() => navigate('/circles')}>
                            Explore Circles
                        </button>

                    </div>

                    <div className="huddler-card">
                        <h3>Huddler Invest</h3>
                        <p>
                            For those who want to <em>pool capital</em> and
                            <em> access exclusive investment opportunities</em>.
                        </p>
                        <div
                            className="image-box2"
                            onMouseEnter={() => setIsInvestHovered(true)}
                            onMouseLeave={() => setIsInvestHovered(false)}
                        >
                            <img
                                src={
                                    isInvestHovered
                                        ? "/assets/gifs/invest-gif.gif"
                                        : "/assets/images/bnw000.png"
                                }
                                alt="Huddler Invest"
                                className="invest-image"
                            />
                        </div>

                        <button className="huddler-btn" onClick={() => navigate('/invest')}>
                            Explore Invest
                        </button>
                    </div>
                </div>
            </section>

            <section className="wealth-journey-section">
                <div className="wealth-journey-container">
                    <div className="image-placeholder">
                        <img src="/assets/images/phone-illustration.png" />
                    </div>
                    <div className="wealth-text">
                        <p className="wealth-subtext">
                            We take the stress out of managing money together, so you can
                            focus on what really matters:
                        </p>
                        <p className="wealth-highlight">
                            <em>helping each other grow.</em>
                        </p>
                    </div>
                </div>
                <div className="clicky-wrapper" onClick={() => setShowPopup(true)} style={{ cursor: 'pointer' }}>
                    <video
                        src="/assets/gifs/clicky2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="clicky-video"
                    ></video>
                </div>
                <div className="wealth-support-text">
                    <p>
                        We Tackle Health Together. We Support Each Other’s Mental
                        Well-being.
                        <br />
                        So Why Manage Money Alone?
                    </p>
                </div>
                <div className="waitlist-button">
                    <button onClick={() => setShowPopup(true)}>Join The Waitlist</button>
                </div>

                {/* Reusable Popup */}
                <WaitlistPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            </section>
        </div>
    );
};

export default Home;
