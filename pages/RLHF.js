import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../components/slider/VideoSlider'), { ssr: false });
const Offer5 = dynamic(() => import('../components/slider/Offer5'), { ssr: false });
const Offer3 = dynamic(() => import('../components/slider/Offer3'), { ssr: false });

const RLHF = () => {
    const [isOpen, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
          
        <>
        <Head>
                <title>RLHF Services | Reinforcement Learning from Human Feedback | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALprovides RLHF services to align LLMs with human preferences through ranking, reward modeling, safety validation, and scalable human feedback workflows." />
                <meta name="keywords" content="RLHF services, reinforcement learning from human feedback, LLM alignment services, human feedback training AI, reward model training, training data labeling" />
            </Head>
        <Layout>
            <>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10">
                                        Aligned Models Through Human-Driven Reinforcement
                                    </h1>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        We deliver scalable RLHF pipelines that pair human judgment with model training to align LLMs, vision-language systems, agents, and decision models. Our teams score, rank, and correct model outputs in real time, providing high-signal feedback aligned with your safety, compliance, and product requirements.
                                    </h2>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/RLHF.png" alt="RLHF hero" style={{ width: '80%', height: 'auto'}} />
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
                                                    What We Provide
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Our comprehensive RLHF services ensure your models are aligned with human values and business objectives:
                                                </p>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Human preference ranking for multi-output generations
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Policy shaping through iterative reward-model training
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Safety alignment using domain experts for high-risk decisions
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Bias and hallucination reduction via structured evaluation protocols
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Scalable throughput for tens of thousands to millions of judgments
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Continuous improvement loops connecting humans → reward model → policy updates
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-40 text-center">
                                                    <Link className="btn btn-brand-1 hover-up font-md" href="/help">Talk to our Experts</Link>
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

                <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center mb-20">
                                <h2 className="color-brand-1 mb-0">Types of Data & Tasks We Handle</h2>
                                <p className="color-grey-500 font-lg mt-20 text-center">
                                    Comprehensive RLHF services across all AI modalities
                                </p>
                            </div>
                        </div>

                        <style jsx>{`
                            /* Left-aligned card styles (matching CollectData "What We Offer") */
                            .left-aligned-card-wrapper { margin-bottom: 20px; width: 100%; display: flex; }
                            .left-aligned-card-container {
                                background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
                                border: 1px solid #e8f2ff;
                                border-radius: 12px;
                                padding: 26px;
                                height: 100%;
                                transition: transform 0.3s ease, box-shadow 0.3s ease;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                            }
                            .left-aligned-card-container:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(37,99,235,0.12); }
                            .left-card-title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; }
                            .left-card-description { font-size: 15px; color: #6b7280; line-height: 1.6; margin: 0; }
                            .row.mt-45 .col-lg-6 { display: flex; }
                            .custom-bullets { padding-left: 1.1rem; margin: 0 0 8px 0; }
                            .custom-bullets li { margin-bottom: 8px; font-size: 15px; color: #4b5563; }
                            @media (max-width: 991px) {
                                .left-card-title { font-size: 17px; }
                            }
                        `}</style>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-4">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">LLM Text Outputs</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Reasoning traces and logical flows</li>
                                            <li>Summaries and abstracts</li>
                                            <li>Instructions and dialogues</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Vision-Language Outputs</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Captioning and object reasoning</li>
                                            <li>Multi-step visual decisions</li>
                                            <li>Scene understanding and interpretation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Multimodal Models</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Combined image-text outputs</li>
                                            <li>Audio-text integration</li>
                                            <li>Agent outputs and decisions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Agentic Workflows</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Tool-use chains and sequences</li>
                                            <li>Planning and decision sequences</li>
                                            <li>Simulated environment interactions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               

                 
              <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mt-20 mb-20" style={{ color: "#fff" }}>Our Advantages </h2>
                                <p className="font-lg max-width-600 mx-auto" style={{ color: "#fff" }}>
                                    Understand how our data collection approach improves model quality, compliance, and time-to-market.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Optimized for Quality</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            We have a two-layer QC process that ensures the quality of the output. This is enabled by a short feedback loop process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>End to End Solutions</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            From data collection and cleaning to data annotation, we offer end-to-end solutions for your training data needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Cost Efficient</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Our pricing is transparent and economical. We are more cost-effective than contract workers and large annotation platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Completely Managed</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Our services are fully managed with dedicated account managers to ensure smooth operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Scalable Workforce</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Start with a single person and grow with us. We scale our team based on your demands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Data Security</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Data security is paramount. We are GDPR compliant and ISO 27001 certified.
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
                                <h2 className="color-brand-1 mt-20mb-20">Industries Supported & Real RLHF Use Cases</h2>
                                <p className="font-lg color-gray-500">
                                    Real-world RLHF applications across diverse industries
                                    with expert judgment and continuous feedback loops.
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
                         <section className="section mt-20 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border" >
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2>Align Your AI Models with Human Values</h2>
                                        <p className="font-md color-grey-500">Build safer, more reliable AI systems with our scalable RLHF pipelines. From preference ranking to policy shaping, we provide the human feedback your models need to align with your safety and compliance requirements.</p>
                                        {/* <p className="font-md color-grey-500 mt-20">Our expert teams deliver high-quality judgments at scale, creating continuous improvement loops that enhance model performance over time.</p> */}
                                        <div className="mt-65 text-center">
                                            <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
            </>
        </Layout>
        </>
    );
};

export default RLHF;
