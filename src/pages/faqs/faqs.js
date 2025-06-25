import React, { useState } from 'react';
import './faqs.css';
import ContactUsButton from '../../components/ContactUsButton';
const faqData = [
    {
        question: "What is Huddler?",
        answer:
            "Huddler is a collaborative investment platform that allows friends and family to pool their resources and invest together in exclusive opportunities.",
    },
    {
        question: "How does Huddler work?",
        answer:
            "Huddler simplifies the process of collaborative investing. Users can create a group, pool their funds, discuss and vote on investment opportunities, and Huddler takes care of the legalities and setup.",
    },
    {
        question: "What types of investments can I make on Huddler?",
        answer:
            "Huddler offers a wide range of investment opportunities, including real estate, startups, agriculture, and more. These opportunities are carefully vetted and executed through our trusted partners.",
    },
    {
        question: "Is there a maximum group size?",
        answer:
            "Most groups have 2-6 investors, but you’re allowed to go up to a maximum of 20 people per group. Keep in mind that more partners may make reaching alignment more difficult.",
    },
    {
        question: "How do I get started on Huddler?",
        answer:
            "Simply sign up on the Huddler platform, create or join an investment group, and start exploring investment opportunities with your network.",
    },
    {
        question: "Is Huddler available outside of India?",
        answer:
            "Currently, Huddler primarily operates in India, but there may be plans for expansion to other regions in the future.",
    },

    {
        question: "Is Huddler open to anyone, or do I need to be an accredited investor?",
        answer:
            "Huddler is open to anyone interested in collaborative investing, regardless of their accreditation status. It democratizes access to investment opportunities.",
    },
    {
        question: "How is Huddler different from traditional investment clubs?",
        answer:
            "Huddler is a digital platform, while traditional investment clubs often operate offline. Huddler offers greater transparency, accessibility, and a broader range of investment options.",
    },
    {
        question: "Is my money safe on Huddler?",
        answer:
            "Your money is always in your control. We do not handle your funds; instead, they flow directly from your company's bank account to the bank of our investment partner offering and executing the investment opportunities.",
    },
    {
        question: "Can I invest with people I know, like friends and family?",
        answer:
            "Absolutely! Huddler encourages collaborative investing within close-knit circles, such as friends and family, to foster trust and unity.",
    },
    {
        question: "How can I contact Huddler's customer support?",
        answer:
            "Huddler offers customer support through email, chat, or a dedicated support portal. Contact details are available on the platform.",
    },
    {
        question: "Is there a minimum investment amount on Huddler?",
        answer:
            "Minimum investment amounts can vary depending on the specific investment opportunities. Details are provided when you explore investment options.",
    },
    {
        question: "Can I withdraw my investments from Huddler?",
        answer:
            "Yes, Huddler allows users to exit investments based on the terms and conditions of the specific investment opportunity.",
    },
    {
        question: "Is Huddler regulated by any financial authorities?",
        answer:
            "Huddler may operate under regulatory compliance in accordance with local financial authorities' guidelines.\n\nPlease note that these FAQs are for informational purposes, and users should refer to Huddler's official website or contact their customer support for the most up-to-date and accurate information.",
    },
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="faq-container">

                <div className="faq-heading-wrapper">
                    <div className="faq-title">
                        Frequently<br />asked questions
                    </div>

                    <p className="faq-subheading">
                        Got questions? We've got answers!<br /> Browse our FAQ, or reach out anytime.
                    </p>

                    <div className="contact-us-wrapper">
                        <ContactUsButton />
                    </div>
                </div>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
                                {faq.question}
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQs;
