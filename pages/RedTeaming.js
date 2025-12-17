import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';

const RedTeaming = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                    <section className="section banner-5">
                        <div className="container">
                            <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">

                                <h2 className="color-black-text mt-10">
                                    Put Your AI to the Test <br />Before the World Does
                                </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                <p className="font-lg color-black-text">
                                   AI is powerful, but it’s not perfect. Models can be tricked, biased, or produce unexpected results—sometimes with serious consequences. Our Red Teaming services are designed to challenge your AI like a real attacker or edge-case user would, helping you spot hidden risks before they reach customers or regulators.
                                </p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/RedTeaming.png" alt="Red Teaming hero" style={{ width: '80%', height: 'auto'}} />
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
                                                        What is Red Teaming <br className="d-none d-lg-block" />for AI?
                                                    </h2>
                                                    <p className="font-md color-grey-400">
                                                        Red Teaming is like a stress test for your AI systems. Instead of checking only if they “work,” we test how they behave in difficult, tricky, or even malicious situations.<br /><br />Where normal testing focuses on accuracy, Red Teaming asks:
                                                    </p>
                                                    <div className="mt-20">
                                                        <ul className="list-ticks">
                                                            <li className='font-md'>
                                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Can your AI be misled?
                                                            </li>
                                                            <li className='font-md'>
                                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Does it behave safely in sensitive situations?
                                                            </li>
                                                             <li className='font-md'>
                                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Is it fair across different users and groups?
                                                            </li>
                                                             <li className='font-md'>
                                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Does it expose any private or unintended information?
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center position-relative">
                                                <div className="box-circle-image">
                                                    <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="iori" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Test</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <h4 className="left-card-title color-brand-1">Large Language Models (LLMs)</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description font-md color-grey-500">
                                                Can the model be tricked into saying something unsafe or biased? Does it accidentally leak sensitive information? Does it give consistent, trustworthy answers under pressure?
                                            </p>
                                        </div>    
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <h4 className="left-card-title color-brand-1">Computer Vision Systems</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description font-md color-grey-500">
                                                Can the system be fooled by changes in images or environments? Is it fair across different demographics and conditions? Does it make safe decisions in critical use cases like healthcare or autonomous driving?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <h4 className="left-card-title color-brand-1">Multimodal AI (text, images, video, audio combined)</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description font-md color-grey-500">
                                                Do different inputs (text + images) work together safely? Could the system generate harmful or inappropriate content? Are there mismatches between what it shows and what it says?
                                            </p>
                                        </div>
                                    </div>
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
                                    <h3 className="color-brand-1 mb-15">Why Companies Choose Us</h3>
                                    <p className="font-md color-grey-400">Hear from our users who have saved thousands on their Startup and SaaS solution spend.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Real-World Testing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We simulate how AI could be misused, not just how it works in perfect scenarios.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Human + AI Expertise</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our team blends automated tools with human reviewers to catch subtle risks.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Clear, Actionable Reports</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We don’t just list problems—we give you prioritized fixes.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Industry Coverage</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">From healthcare to finance to consumer apps, we adapt to your domain.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Ongoing Support</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Red Teaming isn’t a one-time check; we help you keep your AI safe as it evolves.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Help</h2>
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
                                    <Offer5 />
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Make Your AI Safer, Smarter, and More Reliable</h2>
                                        <p className="font-md color-grey-500">Red Teaming is the difference between hoping your AI is safe and knowing it is. With us as your partner, you’ll deploy AI systems that are stronger, more trustworthy, and ready for real-world challenges.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
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

export default RedTeaming;
