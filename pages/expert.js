import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';

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
                                       <div className="box-button text-end mt-10">
                                           <a className="btn btn-brand-1 hover-up font-md" href="https://experts.dataclap.digital/signin" target="_blank" rel="noopener noreferrer">Sign in</a>
                                       </div>
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
                                                    What We Do 
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

                <section className="section mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="color-brand-1 mb-20">Core Use Cases We Support</h2>
                            </div>
                        </div>

                        <div className="row mt-30">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '28px'}}>
                                        <h6 className="color-black-text mb-15">Human-in-the-Loop (HITL)</h6>
                                        <p className="font-md color-grey-500 mb-15">Insert expert human review directly into model workflows to validate, correct, and approve AI outputs before deployment or downstream actions. Ideal for production AI, decision systems, and continuous learning loops.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '28px'}}>
                                        <h6 className="color-black-text mb-15">Reinforcement Learning from Human Feedback (RLHF)</h6>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15" style={{marginLeft: '15px'}}>
                                            <li>Preference ranking</li>
                                            <li>Comparative evaluations</li>
                                            <li>Instruction tuning</li>
                                            <li>Output quality scoring</li>
                                            <li>Safety and policy alignment</li>
                                        </ul>
                                        <p className="font-md color-grey-500">Performed by trained evaluators and domain experts to improve model behavior, reasoning, and reliability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '28px'}}>
                                        <h6 className="color-black-text mb-15">Red Teaming & AI Safety Evaluation</h6>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15" style={{marginLeft: '15px'}}>
                                            <li>Adversarial prompt generation</li>
                                            <li>Jailbreak detection</li>
                                            <li>Hallucination identification</li>
                                            <li>Bias, toxicity, and misuse analysis</li>
                                            <li>Failure mode discovery</li>
                                        </ul>
                                        <p className="font-md color-grey-500">Used to stress-test LLMs and generative systems before public or enterprise release.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '28px'}}>
                                        <h6 className="color-black-text mb-15">Model Evaluation & Benchmarking</h6>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15" style={{marginLeft: '15px'}}>
                                            <li>Ground truth creation</li>
                                            <li>Accuracy and relevance scoring</li>
                                            <li>Domain-specific evaluation sets</li>
                                            <li>Regression testing across model versions</li>
                                            <li>Gold-standard dataset creation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column', padding: '28px'}}>
                                        <h6 className="color-black-text mb-15">Expert Labeling for Training Data</h6>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15" style={{marginLeft: '15px'}}>
                                            <li>Complex text, image, video, audio, and multimodal datasets</li>
                                            <li>Edge-case and long-tail scenario annotation</li>
                                            <li>High-context and subjective labeling tasks</li>
                                            <li>Low-resource and specialized domains</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 pt-60 pb-60">
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
                                       
                                        <h4 className="left-card-title">STEM & Technical</h4>
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
                                        
                                        <h4 className="left-card-title">Medical & Life Sciences</h4>
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
                                      
                                        <h4 className="left-card-title">Legal & Regulatory</h4>
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
                                        
                                        <h4 className="left-card-title">Linguistic & Language Expertise</h4>
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
                                        
                                        <h4 className="left-card-title">Business & Industry Specialists</h4>
                                        <div className="left-card-description">
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
                    </div>
                </section>

                <section className="section mt-70 pt-90 pb-90 bg-grey-60">
                    <div className="container">
                        <div className="text-center mb-70">
                            <h2 className="color-brand-1 mb-20">Why Expert Annotation Matters</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">01</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Generic labeling fails when:</h5>
                                                <ul className="list-dots font-md color-grey-500 mb-0">
                                                    <li className="mb-10">Domain expertise is essential</li>
                                                    <li className="mb-10">Mistakes carry significant consequences</li>
                                                    <li className='mb-10'>Nuance and interpretation are required</li>
                                                    <li>Rare scenarios determine real-world success</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">02</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Revenue Share</h5>
                                                <ul className="list-dots font-md color-grey-500 mb-0">
                                                    <li className='mb-10'>Higher signal-to-noise training data</li>
                                                    <li className='mb-10'>Better alignment for LLMs and agents</li>
                                                    <li className='mb-10'>Reduced hallucinations and failure modes</li>
                                                    <li className='mb-10'>Faster iteration with reliable feedback loops</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-90 mb-90">
                    <div className="container">
                        <div className="text-center mb-60">
                            <h2 className="color-brand-1 mb-20">Who This Is For</h2>

                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-1 h-100">
                                    <div className="number-box">
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">AI Startups</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                         Training foundation or vertical models
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-2 h-100">
                                    <div className="number-box">
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Enterprises </h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Deploying AI in production
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-3 h-100">
                                    <div className="number-box">
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Research Labs</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Applied AI teams and research projects
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-4 h-100">
                                    <div className="number-box">
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">LLM-Powered Products</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Teams prioritizing safety, accuracy, and trust
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                                <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-brand-1 mb-15">Quality, Security and Scale</h3>                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Multi-pass expert review</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Multiple expert review layers ensure consistent quality, accuracy, and compliance across all deliverables.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Inter-annotator agreement tracking</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Quantitative agreement metrics are used to measure consistency and improve annotation reliability.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Custom guidelines per project</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Project-specific guidelines are defined to align outputs with model objectives and domain requirements.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Secure, access-controlled workflows</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Role-based access and controlled environments protect sensitive data throughout execution.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">GDPR and enterprise-ready processes</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Processes are designed to meet GDPR requirements and enterprise compliance standards.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Flexible scale from pilot to millions of data points</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Engagements scale seamlessly from small pilots to large, production-scale datasets.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-30 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2 className="color-black-text mt-15 mb-20">Get Started</h2>
                                        <p className="font-md color-grey-500">Whether you need expert RLHF, red teaming, HITL validation, or high-precision training data, we build annotation workflows tailored to your model, domain, and risk profile.</p>
                                        <div className="box-button text-center mt-65"> 
                                            <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact us</Link>
                                        </div>
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