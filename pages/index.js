import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import HeroSlider from '../components/slider/HeroSlider';
import Tab from '../components/elements/Tab';
import Offer from '../components/slider/Offer';

const HomePage1 = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1);

    const [social, setSocial] = useState(1);
    
    const handleSocial = (index) => {
        setSocial(index); // remove the curly braces
    };

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>DataClap</title>
            </Head>

            <Layout>
                <section className="section banner-11">
                    <div className="box-banner-home11">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-1 right-pagination">
                                <HeroSlider/>
                            </div>
                        </div>
                        <div className="swiper-pagination right-pagination swiper-pagination-group-11" />
                    </div>
                </section>
                <section className="section mt-100 mb-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Take your social media marketing <br className="d-none d-lg-block" />prowess to the next level</h2>
                            </div>
                        </div>
                        <div className="text-center mt-25 mb-65">
                            <div className="box-social-media">
                                <ul className="tabs-plan change-media" role="tablist">
                                    <li> <a className={social === 1 ? "active" : ""} onClick={() => handleSocial(1)}>Personal</a></li>
                                    <li> <a className={social === 2 ? "active" : ""} onClick={() => handleSocial(2)}>Company</a></li>
                                    <li> <a className={social === 3 ? "active" : ""} onClick={() => handleSocial(3)}>Enterprise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-50">
                            {social == 1 && <>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross2.png" alt="Cross Platform" />
                                            </div>
                                            <h4 className="left-card-title">Cross-Platform</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross.png" alt="Social Media" />
                                            </div>
                                            <h4 className="left-card-title">Social Media</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/identity.png" alt="Brand Identity" />
                                            </div>
                                            <h4 className="left-card-title">Brand Identity</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="Customer Service" />
                                            </div>
                                            <h4 className="left-card-title">Customer Service</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="Analytics & Insights" />
                                            </div>
                                            <h4 className="left-card-title">Analytics & Insights</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/creation.png" alt="Content Planning" />
                                            </div>
                                            <h4 className="left-card-title">Content Planning</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>}

                            {social == 2 && <>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/creation.png" alt="Team Collaboration" />
                                            </div>
                                            <h4 className="left-card-title">Team Collaboration</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Streamline your team's workflow with advanced collaboration tools. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Continue with other Company cards using the same structure... */}
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="Multi-Brand Management" />
                                            </div>
                                            <h4 className="left-card-title">Multi-Brand Management</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Manage multiple brand accounts seamlessly from one dashboard. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross.png" alt="Social Media" />
                                            </div>
                                            <h4 className="left-card-title">Social Media</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/identity.png" alt="Brand Identity" />
                                            </div>
                                            <h4 className="left-card-title">Brand Identity</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="Customer Service" />
                                            </div>
                                            <h4 className="left-card-title">Customer Service</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="Analytics & Insights" />
                                            </div>
                                            <h4 className="left-card-title">Analytics & Insights</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </>}

                            {social == 3 && <>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="Enterprise Security" />
                                            </div>
                                            <h4 className="left-card-title">Enterprise Security</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Advanced security features with compliance support for enterprise-level requirements. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross.png" alt="Social Media" />
                                            </div>
                                            <h4 className="left-card-title">Social Media</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/identity.png" alt="Brand Identity" />
                                            </div>
                                            <h4 className="left-card-title">Brand Identity</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="Customer Service" />
                                            </div>
                                            <h4 className="left-card-title">Customer Service</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="Analytics & Insights" />
                                            </div>
                                            <h4 className="left-card-title">Analytics & Insights</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 social-media">
                                    <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container">
                                            <div className="left-card-icon">
                                                <img src="assets/imgs/page/homepage2/creation.png" alt="Content Planning" />
                                            </div>
                                            <h4 className="left-card-title">Content Planning</h4>
                                            <div className="left-card-divider"></div>
                                            <p className="left-card-description">
                                                Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.
                                            </p>
                                            <div className="left-card-button-wrapper">
                                                <a className="left-card-learn-more">
                                                    Learn More
                                                    <svg className="left-card-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>}

                        </div>
                    </div>
                </section>
                <section className="members">
                    <div className="image-slideshow">
                        <div className="mover-1" />
                        <div className="mover-2" />
                    </div>
                </section>
                <section className="section mt-100 mb-50 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center">
                            <span className="font-xl-bold color-white text-uppercase">explore network</span>
                            <h2 className="color-brand-2 mb-60 mt-15">
                                Ready to capture every <br className="d-none d-lg-block" />wonderful
                                moment
                            </h2>
                        </div>
                        <div className="mt-30 mb-60">
                            <Tab/>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
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
                                    <Offer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32">
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Financial Management</h3>
                                        <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                        <div className="text-center"> <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-4">
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">Synchronize and automate all your business in the cloud. Save time and effort, enjoy great vacations.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/automated.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-grey-60">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd">
                                                <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/page/homepage7/img.png" alt="iori" />
                                                    <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd-2">
                                                <h2 className="color-brand-1 mb-30">How to grow your <br className="d-none d-lg-block" />business fast</h2>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">1</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Consultation</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">2</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Pilot</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">3</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Feedback and Optimization</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-grey-60">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd">
                                                <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/page/homepage7/img.png" alt="iori" />
                                                    <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd-2">
                                                <h2 className="color-brand-1 mb-30">How to grow your <br className="d-none d-lg-block" />business fast</h2>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">4</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Customize Workflow</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">5</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Execution</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">6</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">QC and Delivery</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
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
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link></div>
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

export default HomePage1;