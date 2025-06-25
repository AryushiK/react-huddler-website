import React from 'react';

const ContactUsButton = () => {
    const handleClick = () => {
        window.location.href = 'mailto:support@huddler.in';
    };

    return (
        <button
            onClick={handleClick}
            className="view-toggle-button"
        >
            Contact Us
        </button>
    );
};

export default ContactUsButton;
