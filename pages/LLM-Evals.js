import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Tab2 from '../components/elements/tab2';
import Proccess from '../components/elements/Proccess';
import Offer2 from '../components/slider/Offer2';

const LLMEvals = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">AI EVALS</span>
                                    <h2 className="color-black-text mt-10">
                                        Trusted Human Evaluation for Safer, Smarter AI
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text ">
                                        We provide expert, workforce-driven evaluations for LLMs and Computer Vision models — powered by human judgment, guided by open-source benchmarks, and scaled for enterprise needs.
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
                <section className="section mb-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-brand-1 mt-10 mb-15">Why Evals Matter</h3>
                                    <p className="font-xl color-grey-400">AI models don’t just fail when they’re inaccurate. They fail when:</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Datasets are mislabeled or biased</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Models hallucinate or produce unsafe content</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Edge cases and adversarial prompts go untested</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Evals as a Service ensures your AI is trustworthy, robust, and aligned — before it reaches production.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 ml-20 text-start"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Evaluation Experts</Link></div>
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
                <section className="section mt-50 mb-30 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center">
                            <span className="font-xl-bold color-white text-uppercase">What We Offer</span>
                                    <h2 className="color-brand-2 mb-60 mt-15">
                                        Our Evaluation Services
                                    </h2>
                        </div>
                        <div className="mt-30 mb-60">
                            <Tab2 />
                        </div>
                    </div>
                </section>
                <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-brand-1 mb-15">Why Choose Us?</h3>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Human-first evaluations </h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Open-source powered</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’re honest, transparent and committed to doing what’s best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable workforce</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Custom eval design</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Being the world's leading commerce platform requires unrivaled vision, innovation and execution. We never settle. We challenge our ideas of what’s possible in order to better meet the needs of our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Do the right thing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. </p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Stronger united</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20 mb-40 mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">How It Works</h2>
                                <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-process-eval">
                                <div className="process-eval">
                                    {/* Proccess component handles the process cards */}
                                    <Proccess />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
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
                                    <Offer2 />
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Validate Your AI?</h2>
                                        <p className="font-md color-grey-500">Let our workforce evaluate your model with precision and care.</p>
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

export default LLMEvals;
