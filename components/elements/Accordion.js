import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ category }) => {
    
    const faqData = [
        {
            id: 1,
            category: "tool",
            question: "What are my tooling options?",
            answer:
                "We have our own annotation tool and we also work with open-source tools and 3rd-party tools. We can also use your preferred tool stack."
        },
        {
            id: 2,
            category: "workforce",
            question: "How soon can we start working together?",
            answer:
                "Usually within a week depending on complexity and project scope."
        },
        {
            id: 3,
            category: "workforce",
            question: "How does scale-up and scale-down work?",
            answer:
                "We have a trained workforce from multiple colleges allowing us to scale rapidly."
        },
        {
            id: 4,
            category: "general",
            question: "Is there any minimum number of people required to start?",
            answer:
                "No. We are flexible. We can start with whatever team size you need. We recommend an hourly model for ad hoc requirements, subscription model for continuous requirements and a dedicated team model for larger requirements."
        },
        {
            id: 5,
            category: "gendral",
            question: "Is there a minimum commitment period for subscription?",
            answer:
                "No. There are no lock up periods. If you want to calcel the subscription, you need to provide a 30 day notice."
        },

        {
            id: 6,
            category: "workforce",
            question: "Do you need any minimum size requirement?",
            answer:
                "No. Even if you have a dataset that’s a couple hundred images, we’ll work on it."
        },

        {
            id: 8,
            category: "general",
            question: "What are the payment methods?",
            answer:
                "We accept wire transfer, Stripe and, PayPal."
        },
        {
            id: 7,
            category: "general",
            question: "How does the payment cycle work?",
            answer:
                "For long term engagements, it’s on a monthly basis. Short time projects need to be paid after the completion of the project or milestone based on the size of the project. For subscription services, payment has to be made in advance."
        },
        {
            id: 8,
            category: "tool",
            question: "How do we communicate with your team?",
            answer:
                "We can communicate on whatever platform you prefer: Skype, Google Hangouts, Slack, Zoom, etc. We mostly use video calls to develop genuine relationships with you."
        },
        {
            id: 9,
            category: "tool",
            question: "What's the size of free pilot?",
            answer:
                "We usually provide 20 hours or free work but it depends on the project. Please contact us with your requirements for more information."
        }
    ];

    const filteredFAQ = faqData.filter((item) => item.category === category);

    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <div className="accordion" id="accordionFAQ">

            <AnimatePresence>
                {filteredFAQ.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="accordion-item"
                    >
                        <h5 className="accordion-header" onClick={() => toggle(item.id)}>
                            <button
                                className={
                                    active === item.id
                                        ? "accordion-button text-heading-5"
                                        : "accordion-button text-heading-5 collapsed"
                                }
                            >
                                {item.question}
                            </button>
                        </h5>

                        <AnimatePresence>
                            {active === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    );
};

export default Accordion;
