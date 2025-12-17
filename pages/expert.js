import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import Offer3 from '../components/slider/Offer3';

const Expert = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Layout>
            <>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">Expert Data Annotation Services for High-Stakes AI</h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        Precision annotation powered by domain experts for training, validating, and aligning advanced AI systems. Built for LLMs, computer vision, multimodal models, and mission-critical AI workflows where accuracy, context, and judgment matter.
                                    </p>
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
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    What We Do <br className="d-none d-lg-block" />for High-Stakes AI
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    We provide expert-led data annotation and evaluation for AI systems that cannot rely on generic labeling. Our workflows combine subject-matter expertise, Human-in-the-Loop (HITL) processes, and rigorous quality controls to support production-grade AI.<br /><br />Designed for:
                                                </p>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Foundation models and LLMs
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Generative AI systems
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Safety-critical and regulated AI
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Enterprise and research use cases
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="Expert Data Annotation" />
                                            </div>
                                        </div>
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
                                <h2 className="color-brand-1 mb-20">Domains Covered by Our Expert Workforce</h2>
                                <p className="font-lg max-width-600 mx-auto color-grey-500">
                                    We maintain a vetted, NDA-backed global network of subject-matter experts across technical, professional, and linguistic fields.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-30">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="STEM & Technical" />
                                        </div>
                                        <h4 className="left-card-title">STEM & Technical</h4>
                                        <div className="left-card-divider"></div>
                                        <div className="left-card-description">
                                            <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                                <li>Computer science</li>
                                                <li>Machine learning & AI</li>
                                                <li>Data science</li>
                                                <li>Engineering (mechanical, electrical, civil)</li>
                                                <li>Mathematics & statistics</li>
                                                <li>Physics & chemistry</li>
                                                <li>Cybersecurity</li>
                                                <li>DevOps & cloud infrastructure</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="Medical & Life Sciences" />
                                        </div>
                                        <h4 className="left-card-title">Medical & Life Sciences</h4>
                                        <div className="left-card-divider"></div>
                                        <div className="left-card-description">
                                            <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                                <li>Physicians & clinicians</li>
                                                <li>Radiology & medical imaging</li>
                                                <li>Clinical notes & EHRs</li>
                                                <li>Biomedical research</li>
                                                <li>Pharmacology</li>
                                                <li>Medical device data</li>
                                                <li>Healthcare compliance workflows</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="Legal & Regulatory" />
                                        </div>
                                        <h4 className="left-card-title">Legal & Regulatory</h4>
                                        <div className="left-card-divider"></div>
                                        <div className="left-card-description">
                                            <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                                <li>Contract analysis</li>
                                                <li>Case law & legal research</li>
                                                <li>Regulatory compliance</li>
                                                <li>Financial and corporate law</li>
                                                <li>Policy interpretation</li>
                                                <li>Risk and governance datasets</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="Linguistic & Language Expertise" />
                                        </div>
                                        <h4 className="left-card-title">Linguistic & Language Expertise</h4>
                                        <div className="left-card-divider"></div>
                                        <div className="left-card-description">
                                            <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                                <li>Native-level annotators</li>
                                                <li>Multilingual & low-resource languages</li>
                                                <li>Dialect and regional variation</li>
                                                <li>Semantics, syntax, and pragmatics</li>
                                                <li>Translation, intent, and sentiment</li>
                                                <li>Cultural and contextual nuance</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="Business & Industry Specialists" />
                                        </div>
                                        <h4 className="left-card-title">Business & Industry Specialists</h4>
                                        <div className="left-card-divider"></div>
                                  
                                            <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                                <li>Finance & fintech</li>
                                                <li>Insurance</li>
                                                <li>E-commerce & retail</li>
                                                <li>Manufacturing</li>
                                                <li>Logistics & supply chain</li>
                                                <li>Real estate</li>
                                                <li>Customer support & CX</li>
                                            </ol>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="color-brand-1 mb-20">Why Expert Annotation Matters</h2>
                                <p className="font-lg max-width-600 mx-auto color-grey-500">
                                    Generic labeling fails in complex scenarios. Our expert-driven approach delivers superior results.
                                </p>
                            </div>
                        </div>
                        
                        <div className="row mt-45">
                            <div className="col-lg-6">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Generic Labeling Fails When:</h4>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15" style={{marginLeft:"10px"}}>
                                            <li>Context is critical</li>
                                            <li>Decisions have legal, medical, or financial impact</li>
                                            <li>Models must align with human judgment</li>
                                            <li>Edge cases drive real-world performance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Our Expert-Driven Approach Delivers:</h4>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15"style={{marginLeft:"10px"}}>
                                            <li>Higher signal-to-noise training data</li>
                                            <li>Better alignment for LLMs and agents</li>
                                            <li>Reduced hallucinations and failure modes</li>
                                            <li>Faster iteration with reliable feedback loops</li>
                                        </ul>
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
                                    <h4 className="color-brand-1 mb-15">Quality, Security & Scale</h4>
                                    <p className="font-md color-grey-400">Enterprise-grade annotation workflows with expert oversight and rigorous quality controls.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Multi-pass Expert Review</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Rigorous quality assurance with expert validation at every stage of the annotation process.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Agreement Tracking</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Inter-annotator agreement monitoring and custom guidelines per project for consistent results.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Secure Workflows</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Access-controlled, GDPR-compliant processes with enterprise-ready security protocols.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Flexible Scale</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Scale from pilot projects to millions of data points with consistent quality and turnaround.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h6 className="color-black-text mb-5">Who This Is For</h6>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">AI startups, enterprises, research labs, and teams building LLM-powered products prioritizing safety and accuracy.</p>
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
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Expert Annotation Services" style={{width: '100%', height: 'auto', display: 'block'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Get Started with Expert <br />Annotation Services</h2>
                                        <p className="font-md color-grey-500">Whether you need expert RLHF, red teaming, HITL validation, or high-precision training data, we build annotation workflows tailored to your model, domain, and risk profile. Our expert-driven approach ensures your AI systems meet the highest standards of accuracy, safety, and reliability.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Our Experts</Link></div>
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

export default Expert;