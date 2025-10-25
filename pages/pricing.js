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
                <section className="section bg-plan-3 pt-110 pb-0">
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
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Why Clients Choose Dataclap</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Free Pilot to validate quality & speed</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">No Minimum Order Quantity – even 10 images are fine</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Dedicated teams for ongoing projects</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Share updates instantly within our project management software, and get the entire team collaborating">Platform agnostic – we work with your tools or ours</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">100+ skilled annotators and global on-demand workforce</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">ISO 27001 certified & GDPR compliant</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">SLAs and project managers for accountability</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Subject matter experts (medical, engineering, STEM backgrounds)</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-40 mb-50 text-center"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Sales </Link></div> */}
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-center card-no-border">
                            <div className="col-lg-6 mb-30">
                                <h2 className="color-brand-1">What’s Included</h2>
                                <div className="title-line mb-10 mt-10 font-md">We support a wide range of data types, annotation types, and services</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up ">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Data Types</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Text, Image, Video, Audio, DICOM, Point Cloud</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Annotation Types</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Bounding boxes, Segmentation, Keypoints, Cuboids, Tracking, OCR, NER, Transcription & more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Share updates instantly within our project management software, and get the entire team collaborating">Additional Services</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Data collection, Content moderation, RLHF, Red Teaming, Model fine-tuning</p>
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
                                <h2 className="color-brand-1 mb-20">Process Structure</h2>
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
                                                        <h4 className="color-brand-1 mb-15">Consultation</h4>
                                                        <p className="font-md color-grey-500">Share your project needs</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Free Pilot</h4>
                                                        <p className="font-md color-grey-500">Try us risk-free</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Feedback & Optimization</h4>
                                                        <p className="font-md color-grey-500">Align with your expectations</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Execution</h4>
                                                        <p className="font-md color-grey-500">Scale with dedicated resources</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">QC & Delivery</h4>
                                                        <p className="font-md color-grey-500">3-tier quality checks, free rework if needed</p>
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
                <section className="section mt-50">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-30">
                                Crafting human connection through
                                <br className="d-none d-lg-block" />digital experience
                            </h2>
                            <p className="color-grey-500 font-md">
                                Discover powerful features to boost your productivit. You are
                                always welcome to visit our little den. Professional in teir
                                <br className="d-none d-lg-block" />craft! All products were super
                                amazing with strong attension to details, comps and overall vibe.
                            </p>
                        </div>
                        <div className="row align-items-start mt-50">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-2">
                                    <div className="card-info text-start">
                                        <h3 className="color-brand-1 mb-20">Social Media Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">
                                            Manage your media channels professionally and efficiently.
                                            Real-time and automatic reporting system.
                                        </p>
                                        <div className="text-start">
                                            <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link>
                                        </div>
                                    </div>
                                    <div className="card-image mb-10">
                                        <img src="/assets/imgs/page/homepage9/img.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-11">
                                    <div className="card-info text-start">
                                        <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">
                                            Synchronize and automate all your business in the cloud.
                                            Save time and effort, enjoy great vacations.
                                        </p>
                                        <div className="mt-0">
                                            <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                        </div>
                                    </div>
                                    <div className="card-image image-automated">
                                        <img className="d-block" src="/assets/imgs/page/homepage9/img2.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-1">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">
                                                <span className="title-line line-48">Automatic Tools</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    Business can also <br className="d-none d-lg-block" />be
                                                    simple
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Access advanced order types including limit, market,
                                                    stop limit and dollar cost averaging. Track your total
                                                    asset holdings, values and equity over time. Monitor
                                                    markets, manage your portfolio, and trade crypto on the
                                                    go.
                                                </p>
                                                <div className="mt-40">
                                                    <ul className="list-ticks">
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up" href="/help">Help Center </Link><Link href="#" className="btn btn-default font-sm-bold hover-up" >Learn More
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="iori" />
                                                <div className="shape-1 box-image-4">
                                                    <img src="/assets/imgs/page/homepage9/testimonial.png" alt="iori" />
                                                </div>
                                                <div className="box-number-business shape-3">
                                                    <div className="cardNumber bg-white">
                                                        <h3>25k+</h3>
                                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Daily Updates</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">24/7 Support</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Weekly Reports</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Daily Updates</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">24/7 Support</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-support">
                                    <div className="card-image">
                                        <div className="box-circle-img">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Weekly Reports</h4>
                                        <p className="font-md color-grey-500 mb-15">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="no-bg-faqs">
                    <section className="section pt-80 mb-30 bg-faqs">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                    <p className="font-lg color-gray-500">Feeling inquisitive? Have a read through some of our FAQs or<br className="d-none d-lg-block" /> contact our supporters for help</p>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end text-start"></div>
                            </div>
                            <div className="row mt-50 mb-100">
                                <div className="col-xl-3 col-lg-4">
                                    <ul className="list-faqs nav nav-tabs" role="tablist">
                                        <li><a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)} ><span>General Support</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Order / Purchase</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>Download / Install</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}><span>Technology</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}><span>Your Account</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                    </ul>
                                    <div className="mt-80 text-start mb-40"><Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link></div>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="tab-content tab-content-slider">
                                        <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                        <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                        <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom" />
                    </section>
                </div>
                <section className="section mt-50 mb-40 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 text-center mb-70">
                                <h2 className="color-brand-1 mb-20">What our custommers are saying</h2>
                                <p className="font-lg color-gray-500">Hear from our users who have saved thousands on <br className="d-none d-lg-block" />their Startup and SaaS solution spend.</p>
                            </div>
                        </div>
                        <div className="row align-items-start" data-masonry="{&quot;percentPosition&quot;: true }">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/pricing/author1.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Bessie Cooper</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Et velit laborum cum temporibus similique qui nostrum odit hic Quis cupiditate et facilis sunt. Et dolorum nostrum qui culpa ullam ut consequatur voluptas eum modi nobis. Ut voluptatem voluptatum hic praesentium eveniet non quae laboriosam nam architecto consequatur aut obcaecati consequatur sit dolores labore ut officia velit. Eos officia consectetur sit labore voluptatem et quia recusandae</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/pricing/author2.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Bessie Cooper</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-500">Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis</p>
                                    <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                    </div>
                                </div>
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
                                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Project-Images with Description </h2>
                                <p className="font-lg color-gray-500">Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales urna ut vestibulum</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">View All
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Easy Ways to Make Money While You Sleep</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="/blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Tiktok video size guide: Everything you need to know</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="/blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">How to convert video to MP4 for free online</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="/blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">5 fastest ways to increase search engine rankings</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="/blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
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
                                        <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
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