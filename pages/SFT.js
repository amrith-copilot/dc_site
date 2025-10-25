import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Tab2 from '../components/elements/tab2';
import Offer6 from '../components/slider/Offer6';

const SFT = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">Supervised Fine-Tuning (SFT) Services</span>
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
                            <div className="box-video-banner">
                                <VideoSlider />
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
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Cross Platform" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Large Language Models (LLMs)</h4>
                                        <p className='pb-10 font-xl'>We fine-tune models for:</p>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Customer support and virtual assistants</li>
                                            <li>Summarization and knowledge management</li>
                                            <li>Industry-specific applications (finance, healthcare, legal, retail)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Team Collaboration" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Computer Vision Systems</h4>
                                        <p className='pb-10 font-xl'>We adapt vision models for:</p>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Quality inspection in manufacturing</li>
                                            <li>Medical imaging analysis</li>
                                            <li>Autonomous navigation and robotics</li>
                                            <li>Security and surveillance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Analytics Dashboard" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Multimodal AI</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>For systems that combine text, images, and video, we fine-tune models to keep results safe, consistent, and aligned across multiple input types.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20 mb-40 mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Process</h2>
                                <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                            </div>
                        </div>
                        <div className="table-box-help mt-50">
                            <div className="table-responsive">
                                <table className="table table-forum">
                                    <thead>
                                        <tr>
                                            <th className="width-50">Process Structure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Discovery & Scoping</h4>
                                                        <p className="font-ls color-grey-500">We align on goals, risks, and success metrics.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Data Curation</h4>
                                                        <p className="font-ls color-grey-500">We prepare high-quality examples for fine-tuning.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Fine-Tuning & Testing</h4>
                                                        <p className="font-ls color-grey-500">We train the model and validate its performance.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Deployment-Ready Delivery</h4>
                                                        <p className="font-ls color-grey-500"> You receive a refined model with clear evaluation results.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Ongoing Support </h4>
                                                        <p className="font-ls color-grey-500">Continuous monitoring and re-tuning as your data and needs evolve.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Support</h2>
                                <p className="font-lg color-gray-500">
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer6 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Why Partner With Us</h2>
                                <p className="font-lg color-gray-500">We're lively, not corporate. We have the energy and boldness of a startup and <br className="d-none d-lg-block" />the expertise and pragmatism of a scale-up. All in one place.</p>
                            </div>
                        </div>
                        <div className="row mt-65">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Connected</h6>
                                        <p className="font-md color-grey-500">Proven expertise in both language and vision models</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Inclusive</h6>
                                        <p className="font-md color-grey-500">Human-in-the-loop quality assurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Flexible</h6>
                                        <p className="font-md color-grey-500">Flexible engagement models, from pilots to enterprise rollouts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Persuasion</h6>
                                        <p className="font-md color-grey-500">Actionable insights with clear, easy-to-use reports</p>
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
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
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
            </Layout>
        </>
    );
};

export default SFT;
