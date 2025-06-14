import React, { useEffect, useRef } from "react";
import "./home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const sectionRef = useRef(null);

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
                    <p className="fade-slide-in delay-2">
                        We Empower You To <strong>Pool Funds</strong>, Manage{" "}
                        <strong>Investments</strong>, And <br />
                        <strong>Access Exclusive Opportunities</strong> Previously Beyond
                        Your Individual Reach.
                    </p>
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

            <section className="huddler-section">
                <div className="huddler-heading">
                    <video
                        src="/assets/gifs/clicky1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="clicky-video"
                        preload="none"
                    ></video>
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
                        <div className="image-box1">
                            <img src="/assets/images/bath.png" />
                        </div>
                        <button className="huddler-btn">Explore Circles</button>
                    </div>

                    <div className="huddler-card">
                        <h3>Huddler Invest</h3>
                        <p>
                            For those who want to <em>pool capital</em> and
                            <em> access exclusive investment opportunities</em>.
                        </p>
                        <div className="image-box2">
                            <img src="/assets/images/meditate.png" />
                        </div>
                        <button className="huddler-btn">Explore Invest</button>
                    </div>
                </div>
            </section>

            <section className="wealth-journey-section">
                <div className="wealth-journey-container">
                    <div className="image-placeholder">
                        <img src="/assets/images/watering.png" />
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
                <video
                    src="/assets/gifs/clicky2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="clicky-video"
                ></video>
                <div className="wealth-support-text">
                    <p>
                        We Tackle Health Together. We Support Each Other’s Mental
                        Well-being.
                        <br />
                        So Why Manage Money Alone?
                    </p>
                </div>
                <div className="waitlist-button">
                    <button>Join The Waitlist</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
