import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const HeroSlider = dynamic(() => import('../components/slider/HeroSlider'), { ssr: false });
const Tab = dynamic(() => import('../components/elements/Tab'), { ssr: false });
const Offer = dynamic(() => import('../components/slider/Offer'), { ssr: false });
const Brand = dynamic(() => import('../components/slider/Brand'), { ssr: false });

const HomePage3 = () => {
    const [isOpen, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

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
            <Head>
                <title>DATACLAP  | Enterprise Data Foundations & End-to-End AI Solutions</title>
                <meta name="description" content="Accelerate your AI journey with DATACLAP. We provide enterprise-grade data collection, high-accuracy annotation, RLHF, and LLM evaluation services across 15+ industries. Scale your models with production-ready datasets and expert human-in-the-loop workflows." />
                <meta name="keywords" content="Enterprise AI Solutions, Data Annotation Services, Supervised Fine-Tuning (SFT), RLHF Services, LLM Evaluation-as-a-Service, Computer Vision Data, AI Data Foundations" />
            </Head>
            <Layout>
                <section className="section banner-11">
                    <div className="box-banner-home11">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-1 right-pagination">
                                <HeroSlider/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-200">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Take your social media marketing <br className="d-none d-lg-block" />process to the next level</h2>
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
                                                <h4 className="left-card-title">Data Annotation</h4>
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
                <section className="section mt-10 mb-100 bg-brand-1 pt-50 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center mt-20 mb-20">
                            <span className="font-xl-bold color-white text-uppercase ">explore network</span>
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
                                <h2 className="color-brand-1 mb-20">Built for Teams Across Industries</h2>
                                <p className="font-lg color-gray-500">
                                   We partner with teams in high-impact industries to solve 

                                    <br className="d-none d-lg-block" />
                                   data and infrastructure challenges.
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
                <section className="section mt-100 mb-100 pt-100 pb-100 bg-brand-1 partner-benefits">
                    <div className="container mt-50">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-white mb-15">Built for Enterprise AI Delivery</h3>
                                        <p className="font-md color-white"> Our services are designed for organizations that require scale, reliability, and control. We combine certified expertise, governed operations, and enterprise-grade security to deliver predictable outcomes across the AI lifecycle.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                   <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Deep Technical Capability</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">Proven expertise across computer vision, large language models, and generative AI workflows</p>
                                        </div>
                                    </li> 
                                    <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Fully Governed Operations</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">End-to-end service delivery with centralized management, accountability, and execution oversight.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Industry Aligned Expertise</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">Practitioners with hands-on experience across domain-specific AI use cases and regulatory environments.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    
                                    <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Centralized Innovation Teams</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">Dedicated groups focused on process optimization, tooling efficiency, and continuous improvement.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Flexible Engagement Framework</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">A modular service model combining expert networks, managed delivery, and scalable capacity.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-white mb-5"><img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle'}} />Operational Transparency</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-white mb-20">Clear reporting on progress, quality metrics, throughput, and cost throughout the engagement.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .partner-benefits {
                    }
                        /* Adjust padding for Explore Network section on small screens */
                        .bg-explore {
                            padding-top: 28px !important;
                            padding-bottom: 36px !important;
                        }
                        .bg-explore .text-center {
                            padding-left: 12px !important;
                            padding-right: 12px !important;
                        }
                    .partner-benefits .box-core-value h3,
                    .partner-benefits .box-core-value p,
                    .partner-benefits .list-core-value h5,
                    .partner-benefits .list-core-value p {
                        color: #ffffff;
                    }
                    .partner-benefits .box-border-dashed {
                        border-top: 1px dashed rgba(255,255,255,0.15);
                        padding-top: 12px;
                        margin-top: 12px;
                    }
                    .partner-benefits .ticked { display: none; }
                `}</style>
                <style jsx>{`
                    .box-cover-border .row { gap: 20px; }
                    .box-cover-border .image-container { max-width: 420px; }
                    @media (max-width: 991px) {
                        .box-cover-border .image-container { max-width: 100%; }
                    }
                `}</style>

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border" >
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2 >Ready to Scale Your AI?</h2>
                                        <p className="font-md color-grey-500" >From data collection and annotation to model training and deployment, we provide end-to-end AI services tailored to your business needs. Whether you're building foundation models or deploying production AI systems, our expert teams deliver the quality and scale you need.</p>
                                        <div className="box-button text-center mt-25"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Get a demo</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    @media (max-width: 768px) {
                        /* Center hero slider content on mobile */
                        .box-banner-home11,
                        .box-banner-home11 .box-swiper,
                        .box-banner-home11 .swiper-container {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            text-align: center !important;
                        }

                        /* Ensure pagination dots are centered at the bottom */
                        .box-banner-home11 .swiper-container .swiper-pagination {
                            position: relative !important;
                            left: 50% !important;
                            transform: translateX(-50%) !important;
                            bottom: 0 !important;
                            width: auto !important;
                            display: flex !important;
                            justify-content: center !important;
                            margin-top: 18px !important;
                        }

                        .box-banner-home11 .swiper-container .swiper-pagination-bullet {
                            margin: 0 6px !important;
                        }

                        /* Adjust vertical padding for the hero session on mobile */
                        .box-banner-home11 .banner-slide-11,
                        .box-banner-home11 .banner-slide-11 .banner-slide-11 {
                            padding-top: 30px !important;
                            padding-bottom: 32px !important;
                        }

                        /* Ensure the inner content has comfortable side padding */
                        .box-banner-home11 .banner-slide-11 .col-lg-7,
                        .box-banner-home11 .banner-slide-11 .col-md-9,
                        .box-banner-home11 .banner-slide-11 .col-12 {
                            padding-left: 14px !important;
                            padding-right: 14px !important;
                        }
                    }
                `}</style>
            </Layout>

        </>
    );
};

export default HomePage3;