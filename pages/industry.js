import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ModalVideo from 'react-modal-video';
import ExploreTopics from '../components/slider/ExploreTopics';

const Industry = () => {
    const [isOpen, setOpen] = useState(false)

    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index); // remove the curly braces
    };

    return (
        <>
            <Head>
                <title>iori - Multipurpose Startup & SaaS Template</title>
            </Head>

            <Layout>
                 <section className="section mt-55">
                    <div className="container">
                        <div className="box-create-account">
                            <div className="row align-items-center">
                                <div className="col-lg-6 position-relative mb-30">
                                    <div className="box-image-account"><img className="d-block" src="assets/imgs/page/homepage3/img4.png" alt="iori" /></div>
                                </div>
                                <div className="col-lg-6"><span className="title-line line-48">Take the control</span>
                                    <h2 className="color-brand-1 mb-20 mt-10">AI in the<br className="d-none d-lg-block" />industry name</h2>
                                    <p className="font-md color-grey-500 mb-50">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 mb-30">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/personal.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">Personal</h6>
                                            <p className="font-xs color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque. Praesent vulputate justo dictum nisl faucibus, eu feugiat ex pretium. Duis sed mauris at nisi egestas suscipit eget eu enim.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/building.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">Personal</h6>
                                            <p className="font-xs color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque. Praesent vulputate justo dictum nisl faucibus, eu feugiat ex pretium. Duis sed mauris at nisi egestas suscipit eget eu enim.</p>
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
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Real-World Use Cases</h2>
                                <p className="color-grey-500 font-md mt-20">
                                    Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
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
                                        <h4 className="image-showcase-title-dynamic">Cross Platform</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Discover powerful features to boost your productivity. You are always welcome to visit our little den.
                                        </p>
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
                                        <h4 className="image-showcase-title-dynamic">Team Collaboration</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Streamline your team's workflow with advanced collaboration tools and seamless integration.
                                        </p>
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
                                        <h4 className="image-showcase-title-dynamic">Analytics Dashboard</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Get comprehensive insights with detailed reporting and real-time performance metrics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Project Management" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Project Management</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Organize and track your projects with powerful management tools and intuitive workflows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human2.png" 
                                            alt="Customer Support" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Customer Support</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Deliver exceptional customer experiences with comprehensive support and communication tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human3.png" 
                                            alt="Data Security" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Data Security</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Protect your valuable data with enterprise-grade security and compliance features.
                                        </p>
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
                                <h2 className="color-brand-1 mb-20">Our Advantages version-1 </h2>
                                <p className="font-lg color-gray-500">Explore our open roles for working totally remotely, from the<br className="d-none d-lg-block" />office or somewhere in between.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Manage budgets and resources</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Employee Assessments</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Smart Installation Tools</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Collaborative to the core.</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Share updates instantly within our project management software, and get the entire team collaborating</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Manage budgets and resources</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/job-detail">Unlimited ways to work</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-40 mb-50 text-center"><Link className="btn btn-brand-1 hover-up" href="contact">Contact Us</Link><a className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg></a></div>
                    </div>
                </section>
                <section className="section mt-90">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Our Advantages version-2</h2>
                            <p className="font-lg color-grey-500"> <Link className="font-lg-bold color-brand-1" href="#">Iori Platform </Link>lets you take control of your money, balance your <br className="d-none d-lg-block" />income and expenses, and understand where your money goes.</p>
                        </div>
                        <div className="row mt-75 align-items-center">
                            <div className="col-lg-4 mb-30">
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Total control</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon1.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Rapid experimentation</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon2.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Secure transfer</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon3.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Activity statistics</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon4.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30 text-center"><img src="/assets/imgs/page/homepage8/phone2.png" alt="iori" /></div>
                            <div className="col-lg-4 mb-30">
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon5.png" alt="iori" /><span>Track your spending</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon6.png" alt="iori" /><span>Fast Response</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon7.png" alt="iori" /><span>AI automation</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon8.png" alt="iori" /><span>Budget that works</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mt-100" />
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
                        <div className="row">
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
                                                        <h4 className="color-brand-1 mb-15">1. Announcements</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">2. User Feedback</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">3. Technology support center</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">4. Product Support</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">5. Market research</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/identity.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">6. Strategic Consulting</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">7. Cognitive Solution</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
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
                                <h2 className="color-brand-1 mb-20">Explore Topics</h2>
                                <p className="font-lg color-gray-500">Easily create Documentation, Knowledge-base, FAQ, Forum and more</p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper swiper-style-2">
                                <ExploreTopics />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="box-radius-border box-radius-border-help">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/help/answer.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-answer"><span className="btn btn-tag">More help</span>
                                        <h2 className="color-brand-1 mt-10 mb-15">Contact us for more</h2>
                                        <p className="color-grey-500 font-md">Make use of a qualified tutor to get the answer</p>
                                        <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up" href="#">Ask a Question</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Contact Us
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
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

export default Industry;