import React, { useState } from 'react';

const ContactUsButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        try {
            const mailLink = document.createElement('a');
            mailLink.href = 'mailto:support@huddler.in';
            mailLink.style.display = 'none';
            document.body.appendChild(mailLink);
            mailLink.click();
            document.body.removeChild(mailLink);

            // Optional: set a timeout to show popup if mail client doesn't open in 2-3s
            setTimeout(() => {
                setShowPopup(true);
            }, 3000);
        } catch (error) {
            setShowPopup(true);
        }
    };

    return (
        <>
            <button onClick={handleClick} className="view-toggle-button">
                Contact Us
            </button>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <p>We couldn’t open your email app. Please manually contact:</p>
                        <p><strong>support@huddler.in</strong></p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactUsButton;
