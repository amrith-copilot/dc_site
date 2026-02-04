import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import HeroSlider from '../components/slider/HeroSlider';
import Tab from '../components/elements/Tab';
import Offer from '../components/slider/Offer';
import Brand from '../components/slider/Brand';

const HomePage3 = () => {
    const [isOpen, setOpen] = useState(false)

    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index); // remove the curly braces
    };

    const [social, setSocial] = useState(1);
    
    const handleSocial = (index) => {
        setSocial(index); // remove the curly braces
    };

    return (
        <>
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
                <section className="section mt-50 mb-200">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Take your social media marketing <br className="d-none d-lg-block" />prowess to the next level</h2>
                            </div>
                        </div>
                        <div className="text-center mt-25 mb-65">
                            <div className="box-social-media">
                                <ul className="tabs-plan change-media" role="tablist">
                                    <li> <a className={social === 1 ? "active" : ""} onClick={() => handleSocial(1)}>Pre training</a></li>
                                    <li> <a className={social === 2 ? "active" : ""} onClick={() => handleSocial(2)}>Post training</a></li>
                                    <li> <a className={social === 3 ? "active" : ""} onClick={() => handleSocial(3)}>Cloud</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-50 justify-content-center">
                            {social == 1 && <>
                                <Link href="/CollectData" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">Data Collection</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Structured and compliant data sourcing tailored to domain, geography, and model requirements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link href="/Image-Anno" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">Image Annotation</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    High-accuracy visual labeling delivered with defined schemas and quality assurance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link href="/SFT" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">Supervised Fine-Tuning</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Expert-labeled datasets to improve task performance and model consistency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>}

                            {social == 2 && <>
                                <Link href="/HITL" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">HITL</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Human-in-the-loop workflows for review, exception handling, and continuous quality control.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link href="/RLHF" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">RLHF</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Preference and feedback data to improve model alignment and response quality.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/RedTeaming" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">Red Teaming Services</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Systematic testing to identify safety gaps, failure modes, and edge cases.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link href="/LLM-Evals" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">AI Evals</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Ongoing evaluation and benchmarking across model versions and use cases.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>}

                            {social == 3 && <>
                                <Link href="/MLOps" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">MLOps</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Managed pipelines and monitoring for reliable training, deployment, and lifecycle control.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/DevOps" className="col-lg-3 col-md-6 social-media">
                                    <div>
                                        <div className="left-aligned-card-wrapper">
                                            <div className="left-aligned-card-container">
                                                <h4 className="left-card-title">DevOps</h4>
                                                <div className="left-card-divider"></div>
                                                <p className="left-card-description">
                                                    Secure and scalable infrastructure support for AI workloads in production environments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4 mb-40">
                                    <div className="image-container">
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="AI Data Services" style={{width: '100%', height: 'auto', display: 'block'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Scale Your AI?</h2>
                                        <p className="font-md color-grey-500">From data collection and annotation to model training and deployment, we provide end-to-end AI services tailored to your business needs. Whether you're building foundation models or deploying production AI systems, our expert teams deliver the quality and scale you need.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Get a demo</Link></div>
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

export default HomePage3;