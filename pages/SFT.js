import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Tab2 from '../components/elements/tab2';
import Offer6 from '../components/slider/Offer6';
import Partner from '../components/elements/Partner';

const SFT = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <style jsx global>{`
                    @font-face {
                        font-family: 'VerdanaItalic';
                        src: url('/assets/fonts/uicons/VERDANAI.TTF') format('truetype');
                        font-weight: 400;
                        font-style: italic;
                        font-display: swap;
                    }
                    body, .sft-root, .sft-root * {
                        font-family: 'VerdanaItalic', Verdana, Arial, sans-serif;
                    }
                    .card-hover {
                        transition: transform .22s cubic-bezier(.2,.9,.3,1), box-shadow .22s cubic-bezier(.2,.9,.3,1), background .22s ease, color .22s ease;
                        cursor: default;
                        background: #fff;
                    }
                    .card-hover:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 14px 40px rgba(2,6,23,0.12);
                        background: linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.02));
                    }
                    .card-hover h5 {
                        color: #000 !important;
                        font-weight: 600;
                        transition: color .22s ease;
                    }
                    .card-hover p {
                        color: #000 !important;
                        transition: color .22s ease;
                    }
                    .card-hover:hover h5 {
                        color: #2563eb !important;
                    }
                    .card-hover:hover p {
                        color: rgba(37,99,235,0.9) !important;
                    }
                    .card-hover:hover::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 12px;
                        bottom: 12px;
                        width: 6px;
                        border-radius: 6px;
                        background: linear-gradient(180deg, #2563eb, rgba(37,99,235,0.6));
                        box-shadow: 0 6px 18px rgba(37,99,235,0.12);
                    }
                    .card-hover {
                        position: relative;
                        overflow: visible;
                    }
                `}</style>
                <div className="sft-root">
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        Transform Pre-Trained AI Models Into Domain-Ready Solutions
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        Pre-trained AI models are powerful, but they’re also generic. They don’t naturally understand your industry, customers, or compliance requirements. Supervised Fine-Tuning (SFT) bridges this gap—taking a general model and refining it with high-quality, domain-specific examples so it performs reliably in real-world scenarios.
                                    </p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/SFT.png" alt="SFT hero" style={{ width: '80%', height: 'auto'}} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-brand-1 mt-10 mb-15">What is SFT?</h3>
                                    <p className="font-lg color-grey-400">Supervised Fine-Tuning is the process of training an existing AI model on curated, labeled examples relevant to your business. <br /><br />By showing the model how it should behave in your context, SFT makes it more accurate, safer, and aligned with your goals.</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">For language models (LLMs): This means a chatbot that speaks in your brand voice, avoids risky outputs, and consistently provides useful answers.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">For computer vision systems: This means reliable recognition, detection, or classification that works in your unique environment, from factory floors to medical labs.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 ml-20 text-start"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Experts</Link></div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="box-business-service">
                                        <div className="box-number-1 shape-2">
                                            <div className="cardNumber bg-white">
                                                <h3>25k+</h3>
                                                <p className="font-xs color-brand-1">Happy Clients</p>
                                            </div>
                                        </div>
                                        <div className="box-image-1 shape-3"> <img src="assets/imgs/page/service/img1.png" alt="iori" /></div>
                                        <div className="box-image-2 shape-2"> <img src="assets/imgs/page/service/img2.png" alt="iori" /></div>
                                        <div className="box-image-3 shape-1"> <img src="assets/imgs/page/service/img4.png" alt="iori" />
                                            <div className="cardNumber bg-white">
                                                <h2 className="color-brand-1">469k</h2>
                                                <p className="font-lg color-brand-1">Social followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-0 pb-50 bg-core-value mb-30 mt-50">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value pl-0">
                                    <h1 className="color-brand-1 mb-15">Why SFT Matters</h1>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                    <div className="mt-30"></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Domain Expertise</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Adapt models to your industry vocabulary, workflows, and standards.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Reliability</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Reduce errors, hallucinations, or misclassifications in production.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Compliance & Safety</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Ensure outputs meet regulatory and ethical standards.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Efficiency</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Save time and costs by fine-tuning existing models instead of building from scratch.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Do the right thing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Our SFT Services</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Here are some types of SFT services we provide.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Large Language Models" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Large Language Models (LLMs)</h6>
                                        <p className='pb-10 font-sm color-grey-500'>We fine-tune models for:</p>
                                        <ul className="custom-bullets font-sm color-grey-500 mb-15 pl-15">
                                            <li>Customer support and virtual assistants</li>
                                            <li>Summarization and knowledge management</li>
                                            <li>Industry-specific applications (finance, healthcare, legal, retail)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Computer Vision Systems" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Computer Vision Systems</h6>
                                        <p className='pb-10 font-sm color-grey-500'>We adapt vision models for:</p>
                                        <ul className="custom-bullets font-sm color-grey-500 mb-15 pl-15">
                                            <li>Quality inspection in manufacturing</li>
                                            <li>Medical imaging analysis</li>
                                            <li>Autonomous navigation and robotics</li>
                                            <li>Security and surveillance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Multimodal AI" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Multimodal AI</h6>
                                        <ul className="custom-bullets font-sm color-grey-500 mb-15 pl-15">
                                            <li>For systems that combine text, images, and video, we fine-tune models to keep results safe, consistent, and aligned across multiple input types.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-100 mb-40 process-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Process Structure</h2>
                                <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Consultation</h4>
                                            <p className="font-md color-grey-500">Share your project needs</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Free Pilot</h4>
                                            <p className="font-md color-grey-500">Try us risk-free</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Feedback & Optimization</h4>
                                            <p className="font-md color-grey-500">Align with your expectations</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Execution</h4>
                                            <p className="font-md color-grey-500">Scale with dedicated resources</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                        <div className="process-number">5</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">QC & Delivery</h4>
                                            <p className="font-md color-grey-500">3-tier quality checks, free rework if needed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Replaced original "Why Partner With Us?" block with a themed, responsive benefits grid */} 
                <section className="section mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h2 className="color-brand-1 mb-20">Why Partner With Us?</h2>
                        <p className="font-lg color-grey-500">
                          Proven capabilities across modalities, quality-first delivery, and flexible engagement models.
                        </p>
                      </div>
                    </div>

                    <div className="mt-40">
                      <div className="grid row gx-4 gy-4">
                        {/* Use site grid columns (3 across on lg, 2 on md) */}
                        <div className="col-md-6 col-lg-4">
                          <div className="box-core-value p-4 rounded-3xl h-100 shadow-sm card-hover">
                            <div className="d-flex align-items-start mb-3">
                              <div>
                                <h5 className="mb-1">Proven expertise in both language and vision models</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="box-core-value p-4 rounded-3xl h-100 shadow-sm card-hover">
                            <div className="d-flex align-items-start mb-3">
                              <div>
                                <h5 className="mb-1">Human-in-the-loop quality assurance</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="box-core-value p-4 rounded-3xl h-100 shadow-sm card-hover">
                            <div className="d-flex align-items-start mb-3">
                              <div>
                                <h5 className="mb-1">Flexible engagement models</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="box-core-value p-4 rounded-3xl h-100 shadow-sm card-hover">
                            <div className="d-flex align-items-start mb-3">
                              <div>
                                <h5 className="mb-1">Actionable insights with clear reports</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="box-core-value p-4 rounded-3xl h-100 shadow-sm card-hover">
                            <div className="d-flex align-items-start mb-3">
                              <div>
                                <h5 className="mb-1">Commitment to safety, fairness, and compliance</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      </div>
                    </div>
                </section>
                          
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Make Your AI Work For You</h2>
                                        <p className="font-md color-grey-500">Generic AI is a starting point. Supervised Fine-Tuning makes it your competitive advantage. With our SFT services, you can trust that your models will be safer, more reliable, and better aligned with your business goals.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    );
};

export default SFT;
