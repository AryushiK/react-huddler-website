import React, { useRef, useEffect, useState } from 'react';
import './circles.css';
import WaitlistPopup from '../../components/WaitlistPopup';

const steps = [
    {
        title: "Start Your Circle",
        description:
            "Invite your group and agree on a regular contribution that works for everyone.",
        image: "/assets/images/asset1.png",
        className: "img-1",
    },
    {
        title: "Pitch In Together",
        description:
            "Everyone adds the same amount on a schedule you choose, whether monthly, weekly, or custom.",
        image: "/assets/images/asset2.png",
        className: "img-2",
    },
    {
        title: "Take Turns Receiving",
        description:
            "Each cycle, one person gets the full pot amount, either by order or bidding based on urgency. Funds go straight to their bank or UPI accounts. Huddler never holds your money.",
        image: "/assets/images/asset3.png",
        className: "img-3",
    },
    {
        title: "Track Everything Easily",
        description:
            "Stay updated on contributions, payouts, and turn order with complete transparency in your dashboard.",
        image: "/assets/images/asset4.png",
        className: "img-4",
    },
    // {
    //     title: "Celebrate Financial Wins",
    //     description:
    //         "Achieve your goals faster and build strong financial habits together!",
    // },
];
function StepCard({ step, index }) {
    const ref = useRef();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.2,
            }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`step-card ${inView ? "animate" : ""}`}
        >
            <img
                src={step.image}
                alt={step.title}
                className={`step-image ${step.className}`}
            />
            <div className="step-content">
                <h2>{index + 1}. {step.title}</h2>
                <p>{step.description}</p>
            </div>
        </div>
    );
}




function Circles() {
    const [popupVisible, setPopupVisible] = useState(false);


    return (
        <div className="circles-wrapper">
            <div className="circles-heading">
                <h1>
                    CIRCLES by{" "}
                    <img
                        src="/assets/images/huddler_logo.png"
                        alt="Huddler Logo"
                        className="huddler-logo"
                    />
                </h1>
            </div>

            <div className="circles-container">
                <div className="circles-left">
                    <h1>
                        Achieve more,<br />
                        Together.
                    </h1>
                    <p>
                        Empowering you to save smarter, stay accountable, and access credit with the people who matter.
                    </p>
                </div>
                <div className="circles-right">
                    <img
                        src="/assets/gifs/circles_1.gif"
                        alt="Circles GIF"
                        className="circles-gif"
                    />
                </div>
            </div>

            <div className="savings-section">
                <div className="savings-left">
                    <h2>Group savings system</h2>
                    <h4>A timeless tradition, reimagined for today.</h4>
                    <p>
                        Long before formal credit systems, communities saved and supported one another through chit funds,
                        committees, kitties, beesi, and other trusted group savings systems. These informal networks, built
                        on trust and accountability, helped people access money when it mattered most without credit checks
                        or high-interest debt.
                    </p>
                    <p>
                        But the old ways weren’t always easy. They lacked structure, security, transparency, and formal
                        paperwork or legal safeguards. We at Circles by Huddler transform this powerful tradition for the
                        digital age, preserving its heart while making it simple, safe, and ready for today.
                    </p>
                </div>
                <div className="savings-right">
                    <video
                        src="/assets/gifs/main-circles.mp4"
                        className="savings-gif"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
            {/* How it Works Section */}
            <div className="how-wrapper">
                <h1 className="how-heading">How it works</h1>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <StepCard step={step} index={index} key={index} />
                    ))}
                </div>
            </div>
            <div className="circles-waitlist-section">
                <h2 className="circles-waitlist-text">A smarter way to save, together.</h2>
                <button className="circles-waitlist-btn" onClick={() => setPopupVisible(true)}>
                    Join Waitlist
                </button>
            </div>

            <WaitlistPopup isOpen={popupVisible} onClose={() => setPopupVisible(false)} />


        </div>

    );
}

export default Circles;
