// src/components/WaitlistPopup.js
import React from 'react';
import './WaitlistPopup.css';

const WaitlistPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>HUDDLER: ACHIEVE MORE, TOGETHER</h2>
                <h4>Be first in line to explore the world of shared investments</h4>
                <div className="avatar-group">
                    <img src="https://avatars.githubusercontent.com/u/59442788?v=4" alt="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/106103625?v=45" alt="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/89768406?v=4" alt="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/89332253?v=4" alt="avatar" />
                    {/* <div className="avatar-more">+9</div> */}
                </div>

                <form
                    action="https://formsubmit.co/support@huddler.in"
                    method="POST"
                    className="popup-form"
                >
                    <label>Name<span>*</span></label>
                    <input type="text" name="name" required />

                    <label>Email<span>*</span></label>
                    <input type="email" name="email" required />

                    <button type="submit" className="send-btn">Send</button>
                    <button type="button" className="close-btn" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WaitlistPopup;
