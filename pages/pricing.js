import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Accordion from '../components/elements/Accordion';
import Layout from '../components/layout/Layout';

const pagePrice = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>Pricing</title>
            </Head>

            <Layout>
                <section className="section bg-plan-3 pt-110 pb-0" style={{ backgroundColor: '#c8d6fe' }}>
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">Pick your plan. <br className="d-none d-lg-block" /> Change whenever you want.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan"><img src="assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Trial Plan</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">FREE</span><span className="font-md color-grey-500">- 30 days trial</span><br /><span className="font-xs color-grey-500">No Credit card required</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Try for free
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-1"><img src="assets/imgs/page/homepage1/standard.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Standard</h4>
                                            <p className="font-md color-grey-400">Advanced project</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$29</span><span className="font-md color-grey-500">- user / month<br /></span><span className="font-xs color-grey-500">Billed annually</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan card-plan-2 hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-2"><img src="assets/imgs/page/homepage1/business.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Business</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$99</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-3"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Enterprise</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$299</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section banner-9 mb-100">
                    <div className="box-banner-home9">
                        <div className="container position-relative">
                            <div className="box-ticks">
                                <div className="row">
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">Unlimited design &amp; dev requests</span>
                                    </div>
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">No Card. No Contract. Cancel anytime</span>
                                    </div>
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">Monthly flat-rate. Support 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mb-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-brand-1 mt-10 mb-15">Why Choose us?</h3>
                                    <p className="font-xl color-grey-400">AI models don't just fail when they're inaccurate. They fail when:</p>
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
                                    <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Evaluation Experts</Link></div>
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
                <section className="section mt-50 mb-40 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 text-center mb-70">
                                <h2 className="color-brand-1 mb-20">What our custommers are saying</h2>
                                <p className="font-lg color-gray-500">Hear from our users who have saved thousands on <br className="d-none d-lg-block" />their Startup and SaaS solution spend.</p>
                            </div>
                        
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author2.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Esther Howard</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Vivamus venenatis turpis at elit aliquam, in mattis felis ullamcorper. Donec vel elit at diam suscipit volutpat. Donec rhoncus, magna vitae gravida condimentum, massa mauris fermentum est, vitae euismod leo magna vestibulum nunc</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30 testimonial-warning">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/pricing/author3.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Albert Flores</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean sed metus pulvinar, efficitur lectus sit amet, consectetur nisl. Vivamus hendrerit moles Maecenas lobortis risus Maecenas lobortis risus</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/pricing/author4.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Albert Flores</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean sed metus pulvinar, efficitur lectus sit amet, consectetur nisl. Vivamus hendrerit moles Maecenas lobortis risus Maecenas lobortis risus</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100 mb-100">
                    <div className="container">
                        <div className="box-radius-border box-radius-border-help">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/help/answer.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-answer">
                                        <h2 className="color-brand-1 mt-10 mb-15">Ready to Validate Your AI?</h2>
                                        <p className="color-grey-500 font-xl">Let our workforce evaluate your model with precision and care.</p>
                                        <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
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

export default pagePrice;