import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';

const PHITL = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Layout>
            <>
           <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10"> Human-in-the-Loop <br />AI Validation
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        Insert expert human review and correction directly into live AI workflows before predictions, decisions, or actions are finalized.
                                        Built for LLMs, computer vision, NLP, decision systems, and generative AI—scalable across industries and geographies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section banner-5 pt-10 pb-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-10 mx-auto">
                                <h2 className="color-brand-1 mt-20 mb-30 text-start">
                                  Validate AI Predictions with Human Intelligence
                                </h2>
                                <p className="font-lg color-grey-500 mb-35 text-start">
                                    This is a Human-in-the-Loop (HITL) validation platform for AI and machine learning systems. It allows organizations to insert human review and correction into AI prediction workflows before decisions are finalized or actions are taken.<br /><br />
                                    The platform supports LLMs, computer vision models, NLP pipelines, decision engines, and generative AI systems across industries and geographies.
                                </p>
                                <div className="mt-45 text-center">
                                    <Link className="btn btn-brand-1 hover-up" href="/contact" style={{padding: '12px 32px', fontSize: '16px', marginLeft: '500px'}}>
                                        Validate AI Predictions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start mt-50">
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-1">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">

                                                <div className="mt-25">
                                                    <h2 className="color-brand-1 mb-10">What Problem It Solves</h2>
                                                    <p className="font-md color-grey-400">
                                                        AI predictions often carry uncertainty, edge cases, and compliance risk. Pure automation breaks down when:
                                                    </p>
                                                </div>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Confidence scores are low
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Errors have legal or financial consequences
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Outputs must meet brand, safety, or regulatory standards
                                                        </li>
                                                    </ul>
                                                    <p className="font-md color-grey-400 mt-20">
                                                        This product ensures accuracy, accountability, and trust by routing AI outputs to humans only when needed.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center md-50 mt-50 mt-lg-0 mb-30">
                                            <img src="/assets/imgs/page/phitl/hitl-how.jpg" alt="HITL" className="img-fluid" style={{maxWidth: '80%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '-20px 15px 35px rgba(0, 0, 0, 0.12), -8px 8px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(255, 255, 255, 0.8)', marginLeft: 'auto', marginRight: '30px', marginTop: '-30px'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 mb-20">
                                <h2 className="color-brand-1 mb-0">Core Human-In-The-Loop Features</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Comprehensive validation solutions for AI prediction workflows.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-40">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/phitl/drag-and-drop.png" alt="Validation Interface" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <h4 className="left-card-title">Drag-and-Drop Validation Interface Builder</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Build review UIs without engineering effort. Support text, images, video, audio, documents, and forms with conditional fields based on AI outputs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-40">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/phitl/api.png" alt="API-First Platform" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <h4 className="left-card-title">API-First Human-in-the-Loop Platform</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            REST APIs to submit predictions for validation with async or sync flows. Works with any ML stack or cloud provider designed for high-volume production usage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-40">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/phitl/webhook.png" alt="Webhooks & Automation" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <h4 className="left-card-title">Webhooks & Workflow Automation</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Receive real-time validation completion events and trigger downstream systems automatically. Integrates with ML pipelines, CRMs, internal tools, and data platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-30">
                            <div className="col-lg-4 col-md-6 mb-40">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/phitl/routing.png" alt="Review Routing" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <h4 className="left-card-title">Intelligent Review Routing</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Route by confidence score, business rules, or priority. Support single review, multi-review, or consensus workflows with escalation paths for complex decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-40">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/phitl/logs.png" alt="Audit Logs" style={{width: '100%', height: 'auto'}} />
                                        </div>
                                        <h4 className="left-card-title">Audit Logs & Feedback Data</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Full traceability from prediction to human decision with reviewer actions, timestamps, and changes tracked. Export corrected data for model retraining.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-70 pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="color-brand-1 mb-20">Human-in-the-Loop AI Use Cases</h2>
                                <p className="font-lg max-width-600 mx-auto color-grey-500">
                                    Validation solutions across diverse AI systems and industries
                                </p>
                            </div>
                        </div>
                        
                        <Offer5 />
                    </div>
                </section>

                <section className="section mt-70 pt-60 pb-60 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="color-brand-1 mb-20">How Human-in-the-Loop Validation Works</h2>
                                <p className="font-lg max-width-600 mx-auto color-grey-500">
                                    This creates a closed feedback loop between AI systems and human intelligence
                                </p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h5 className="color-black-text mb-5">AI model generates a prediction or output</h5>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h5 className="color-black-text mb-5">Rules or confidence thresholds trigger review</h5>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h5 className="color-black-text mb-5">Prediction is sent via API</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h5 className="color-black-text mb-5">Human reviews using a custom validation interface</h5>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                        <div className="process-number">5</div>
                                        <div>
                                            <h5 className="color-black-text mb-5">Final, verified output is returned via API or webhook</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 pt-60 pb-60 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h4 className="color-brand-1 mb-15">Why HITL Matters</h4>
                                    <p className="font-md color-grey-400">Human-in-the-loop AI systems are more accurate, compliant, and trustworthy. This platform ensures humans intervene only when required.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Accuracy & Trust</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">AI predictions carry uncertainty and edge cases. Human review catches errors before they impact operations.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Compliance & Risk</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Maintain regulatory compliance with full audit trails and human decision logs for legal protection.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Continuous Improvement</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Collect high-quality corrected labels to identify errors and improve model accuracy over time.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Scalable Operations</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Route only uncertain or high-risk predictions to humans, keeping AI fast while preventing costly mistakes.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Enterprise Ready</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Cloud-agnostic, API-driven platform supporting distributed human review teams globally.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Flexible Workflows</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Single review, consensus, or multi-review workflows with intelligent escalation for complex decisions.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4 mb-40">
                                    <div className="image-container">
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="HITL Validation" style={{width: '100%', height: 'auto', display: 'block'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Add Human Validation to Your <br />AI Pipeline</h2>
                                        <p className="font-md color-grey-500">Human-in-the-loop AI systems are more accurate, compliant, and trustworthy. This platform ensures humans intervene only when required—keeping AI fast while preventing costly mistakes. Built for global AI deployment with cloud-agnostic, API-driven architecture supporting distributed human review teams.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default PHITL;
