import React, { useState } from "react";


const Tab = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <div className="row mt-45 justify-content-center">
            <div style={{maxWidth: '1100px', width: '100%'}}>
                <ul className="list-buttons list-buttons-circle nav nav-tabs" role="tablist" style={{display: 'flex', justifyContent: 'center', gap: '28px', listStyle: 'none', padding: 0, margin: '40px 0 20px', flexWrap: 'nowrap', overflowX: 'auto'}}>
                <li onClick={() => handleOnClick(1)} style={{display: 'inline-block'}}>
                    <a className={activeIndex === 1 ? "active" : ""} style={{display: 'inline-block', background: '#ffffff', padding: '12px 26px', borderRadius: '50px', color: '#0C3A7F', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: 'none', transition: 'all 0.3s'}}>RAG & Search Quality</a>
                </li>
                <li onClick={() => handleOnClick(2)} style={{display: 'inline-block'}}>
                    <a className={activeIndex === 2 ? "active" : ""} style={{display: 'inline-block', background: '#ffffff', padding: '12px 26px', borderRadius: '50px', color: '#0C3A7F', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: 'none', transition: 'all 0.3s'}}>Model & Prompt Performance</a>
                </li>
                <li onClick={() => handleOnClick(3)} style={{display: 'inline-block'}}>
                    <a className={activeIndex === 3 ? "active" : ""} style={{display: 'inline-block', background: '#ffffff', padding: '12px 26px', borderRadius: '50px', color: '#0C3A7F', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: 'none', transition: 'all 0.3s'}}>Agentic Robustness</a>
                </li>
                <li onClick={() => handleOnClick(4)} style={{display: 'inline-block'}}>
                    <a className={activeIndex === 4 ? "active" : ""} style={{display: 'inline-block', background: '#ffffff', padding: '12px 26px', borderRadius: '50px', color: '#0C3A7F', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: 'none', transition: 'all 0.3s'}}>Safety, Alignment & Trust</a>
                </li>
            </ul>
                <div className="tab-content" style={{margin: '10px 0 0'}}>
                <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32" style={{background: '#ffffff', borderRadius: '20px', padding: '40px', boxSizing: 'border-box'}}>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15" style={{fontSize: '20px', fontWeight: 700, lineHeight: 1.4}}>
                                        RAG & Information Retrieval Validation
                                    </h3>
                                    <p className="font-md color-grey-400" style={{fontSize: '15px', lineHeight: 1.6, marginBottom: '25px'}}>
                                        Move beyond basic keyword matching. We evaluate the entire retrieval lifecycle to ensure your system provides grounded, factual answers.
                                    </p>
                                    <ul className="list-ticks" style={{paddingLeft: 0, margin: 0}}>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Data Integrity:</strong> Annotation accuracy and noise detection in your vector database.</span>
                                        </li>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Hallucination Audits:</strong> Identifying "plausible but false" outputs in RAG pipelines.</span>
                                        </li>
                                        <li style={{marginBottom: 0, lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Contextual Relevance:</strong> Measuring how effectively your model utilizes retrieved documents.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32" style={{background: '#ffffff', borderRadius: '20px', padding: '40px', boxSizing: 'border-box'}}>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15" style={{fontSize: '20px', fontWeight: 700, lineHeight: 1.4}}>
                                        Benchmarking & Configuration Excellence
                                    </h3>
                                    <p className="font-md color-grey-400" style={{fontSize: '15px', lineHeight: 1.6, marginBottom: '25px'}}>
                                        Quantify the "vibes." We provide head-to-head comparisons of models and system prompts to find your optimal price-to-performance ratio.
                                    </p>
                                    <ul className="list-ticks" style={{paddingLeft: 0, margin: 0}}>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Comparative Benchmarking:</strong>  A/B testing model outputs (OpenAI vs. Anthropic vs. OSS) using custom metrics.</span>
                                        </li>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Standardized Scoring:</strong> Accuracy, F1, BLEU, and ROUGE tailored to your domain.</span>
                                        </li>
                                        <li style={{marginBottom: 0, lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Generalization Checks:</strong> Testing how your prompts perform across diverse user segments.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32" style={{background: '#ffffff', borderRadius: '20px', padding: '40px', boxSizing: 'border-box'}}>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15" style={{fontSize: '20px', fontWeight: 700, lineHeight: 1.4}}>
                                        Agentic Reasoning & Reliability Stress-Tests
                                    </h3>
                                    <p className="font-md color-grey-400" style={{fontSize: '15px', lineHeight: 1.6, marginBottom: '25px'}}>
                                        Agents are unpredictable. We stress-test multi-step reasoning and tool usage to ensure your agents stay on track and handle failures gracefully.
                                    </p>
                                    <ul className="list-ticks" style={{paddingLeft: 0, margin: 0}}>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Edge Case Simulation:</strong>  Stress-testing logic with rare or "broken" user inputs.</span>
                                        </li>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Consistency Audits:</strong> Ensuring the same prompt logic produces reliable results across thousands of queries.</span>
                                        </li>
                                        <li style={{marginBottom: 0, lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Adversarial Testing:</strong> Identifying vulnerabilities in agent tool-calling and execution.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32" style={{background: '#ffffff', borderRadius: '20px', padding: '40px', boxSizing: 'border-box'}}>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15" style={{fontSize: '20px', fontWeight: 700, lineHeight: 1.4}}>
                                        Safety, Governance & Human Alignment
                                    </h3>
                                    <p className="font-md color-grey-400" style={{fontSize: '15px', lineHeight: 1.6, marginBottom: '25px'}}>
                                        Ensure your AI is an asset, not a liability. We audit for ethical compliance, bias, and user trust to protect your brand.
                                    </p>
                                    <ul className="list-ticks" style={{paddingLeft: 0, margin: 0}}>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Red Teaming:</strong> Proactive toxicity and sensitive data leakage detection.</span>
                                        </li>
                                        <li style={{marginBottom: '15px', lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Bias & Coverage Audits:</strong> Identifying demographic gaps or skewed model behaviors.</span>
                                        </li>
                                        <li style={{marginBottom: 0, lineHeight: 1.5}}>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span style={{fontSize: '14px'}}><strong>Human Preference (RLHF Ready):</strong> Helpfulness and clarity scoring based on custom user acceptance criteria.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Tab;