import React, { useState } from "react";


const Tab = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <ul className="list-buttons list-buttons-circle nav nav-tabs" role="tablist">
                <li onClick={() => handleOnClick(1)}>
                    <a className={activeIndex === 1 ? "active" : ""}>Annotations</a>
                </li>
                <li onClick={() => handleOnClick(2)}>
                    <a className={activeIndex === 2 ? "active" : ""}>LLM Evaluations</a>
                </li>
                <li onClick={() => handleOnClick(3)}>
                    <a className={activeIndex === 3 ? "active" : ""}>Supervised FT</a>
                </li>
                <li onClick={() => handleOnClick(4)}>
                    <a className={activeIndex === 4 ? "active" : ""}>OCR and IDP</a>
                </li>
                <li onClick={() => handleOnClick(5)}>
                    <a className={activeIndex === 5 ? "active" : ""}>Generative AI</a>
                </li>
                <li onClick={() => handleOnClick(6)}>
                    <a className={activeIndex === 6 ? "active" : ""}>Content Moderation</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">Annotaion</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        High-quality labeled data, at scale
                                    </h3>
                                    <p className="font-md color-grey-400">
                                       We deliver production-ready annotations across vision, text, audio, and multimodal datasets, built to match your exact specs and downstream model requirements. Our workflows are designed for consistency, traceability, and long-term scalability across use cases.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Image, video, text, audio annotation

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Custom taxonomies & guidelines

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>QA-led workflows with SLAs

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Scales from pilots to millions of tasks

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Multi-level review and inter-annotator agreement
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Secure data handling and access controls
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">LLM Evaluations</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                       Measure what actually matters
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        We help teams evaluate LLMs on real-world tasks that reflect production behavior, not synthetic benchmarks. Our evaluation frameworks surface performance gaps, regressions, and failure modes across model versions
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task-based and rubric-driven evaluations
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Human + automated scoring
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Bias, safety, and failure analysis
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Continuous eval pipelines
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Model-to-model and version comparisons
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Custom metrics aligned to business outcomes
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">Supervised FT</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Fine-tuning data you can trust
                                    </h3>
                                    <p className="font-md color-grey-400">
                                       We prepare clean, instruction-aligned datasets for supervised fine-tuning, enabling faster iteration and more stable model behavior. Data is structured to reduce noise, improve generalization, and support repeated training cycles.

                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Instruction / response pairs
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Domain-specific data creation



                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Data cleaning & validation
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Iteration-friendly workflows
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Consistency checks across prompts and outputs
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Support for multi-turn and conversational formats
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">OCR and IDP</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                       Turn documents into structured data
                                    </h3>
                                    <p className="font-md color-grey-400">
                                       We support OCR and intelligent document processing for complex, noisy, real-world documents, including edge cases that automated systems struggle with. Our workflows combine automation with human review to ensure accuracy.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Invoices, receipts, forms, contracts
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Field extraction & validation
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Handwritten and low-quality scans
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Human-in-the-loop review
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Schema normalization and post-processing
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Confidence scoring and exception handling
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">Generative AI</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Human feedback for generative systems
                                    </h3>
                                    <p className="font-md color-grey-400">
                                       We support generative AI teams with high-quality human feedback loops that improve output quality, relevance, and reliability over time. Our processes are designed to integrate cleanly into training and evaluation pipelines.

                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Prompt-response evaluation

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>RLHF / preference data

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Content quality & relevance checks
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Domain expert reviews

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Style, tone, and factuality assessments
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Feedback datasets for continuous improvement
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 6 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    {/* <span className="btn btn-tag">Content Moderation</span> */}
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Policy-aligned, consistent decisions
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        We help platforms enforce policies at scale while maintaining accuracy, context awareness, and reviewer consistency. Our moderation workflows are built to adapt as policies, platforms, and risk profiles evolve
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Text, image, and video moderation

                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Custom policy training
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Edge-case escalation flows
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>24/7 moderation support
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Reviewer calibration and quality audits
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Detailed reporting and audit trails
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tab;