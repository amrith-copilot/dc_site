import React, { useState } from 'react';

const CWHITL = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>


            <div className="accordion accordionStyle2" id="accordionFAQ">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="accordion-item">
                            <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                                <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>AI + HITL Review</button>
                            </h5>
                            <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">Automated filters handle scale; trained human moderators validate edge cases.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion-item">
                            <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                                <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Escalation Pathways</button>
                            </h5>
                            <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">Critical cases are flagged for immediate review.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion-item">
                            <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                                <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Red Teaming & Stress Testing</button>
                            </h5>
                            <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body"> Simulate adversarial attacks and content evasion tactics.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion-item">
                            <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                                <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Feedback Loops</button>
                            </h5>
                            <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body">Continuous improvement of AI models using annotated data from real cases.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion-item">
                            <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                                <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Multilingual Support</button>
                            </h5>
                            <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                <div className="accordion-body ">Moderation across 20+ languages and dialects.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CWHITL;