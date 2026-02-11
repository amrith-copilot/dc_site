import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../components/slider/VideoSlider'), { ssr: false });
const Offer8 = dynamic(() => import('../components/slider/Offer8'), { ssr: false });
const Offer3 = dynamic(() => import('../components/slider/Offer3'), { ssr: false });

const SAP = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Head>
                <title>AI Search & Personalization Solutions | Dataclap</title>
                <meta name="description" content="Enhance user engagement with AI-powered search and personalization solutions. Dataclap delivers intelligent recommendation engines and custom search systems." />
                <meta name="keywords" content="AI search solutions, AI personalization services, recommendation engine development, intelligent search systems, AI-driven personalization" />
            </Head>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        Delivering Relevant Experiences, Every Time
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-black-text">
                                        Modern digital platforms live and die by how quickly and accurately they can connect users with what they’re looking for. Whether it’s a product, a piece of content, or a recommendation, search relevance and personalization are at the heart of great user experiences. Our Search & Personalization Services combine data expertise, human-in-the-loop validation, and machine learning workflows to help you deliver results that feel intuitive, contextual, and personalized.
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

                <section className="section mt-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-black-text mt-10 mb-15">Why Search Relevance Matters</h3>
                                    <p className="font-md color-grey-400">Machine learning models powering search engines and recommendation systems depend heavily on well-labeled, high-quality training data. However, algorithms alone can’t fully capture human intent. What seems “relevant” to a user is influenced by language nuances, cultural context, and individual preferences.</p>
                                    <div className="mt-20">
                                        <p className="font-lg color-grey-400 pt-20">Our process-driven services bridge this gap by:</p>
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Training ML Models with Quality Data: </strong> Ensuring that query-result pairs reflect real-world user expectations.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Human-Centered Judgments: </strong>Using domain-trained annotators to evaluate whether results are truly relevant.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Continuous Feedback Loops: </strong>Feeding human insights back into your ML systems to improve performance over time.</p>
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
                   <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center mb-20">
                                <h2 className="color-brand-1 mb-0">Core MLOps Services</h2>
                                <p className="color-grey-500 font-lg mt-20 max-width-600 mx-auto">
                                    Comprehensive MLOps solutions to accelerate your machine learning initiatives.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>MLOps Assessment and Strategy</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Evaluate and optimize your ML development and deployment processes. Identify gaps in the ML lifecycle management and develop a tailored MLOps implementation plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>ML Pipeline Automation</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Design and implement end-to-end automated ML pipelines. Automate data preprocessing, feature engineering, model training and set up continuous integration for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>Model Versioning and Experiment Tracking</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Implement version control and experiment tracking for ML models. Set up experiment tracking and management systems to enable reproducibility of ML experiments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-0">
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>Model Deployment and Serving</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Automate and scale model deployment processes. Implement scalable model serving solutions and set up A/B testing and canary deployments for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>ML Development</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Custom ML model development and optimization. ML Model Optimization and ML Model Integration, Training & Validation for your specific business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modified section: two-column sticky header + cards */}
                {/* <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-start">
                            {/* Left Column - Header 
                            <div className="col-lg-5 mb-30">
                                <div className="sticky-content">
                                    <h2 className="color-brand-1 mb-20">Personalization Beyond the Algorithm</h2>
                                    <p className="title-line font-md color-grey-500">
                                        Personalization is more than recommending “similar items.” It’s about adapting to user behavior, context, and evolving intent. We support personalization efforts through:
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - Cards *
                            <div className="col-lg-7">
                                <div className="d-flex flex-column gap-4">
                                    {/* Data Types Card *
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                    Behavioral Data Annotation
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                 Mapping user actions (clicks, dwell time, purchases) to meaningful training signals.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Annotation Types Card 
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                    Contextual Understanding
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                 Labeling datasets with demographic, linguistic, or regional attributes.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Additional Services Card 
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                   Preference Modeling
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                 Creating datasets that help algorithms predict “next-best” content or product choices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .sticky-content {
                            padding-right: 40px;
                        }
                        
                        .gap-4 {
                            gap: 1.5rem;
                        }
                        
                        @media (max-width: 991px) {
                            .sticky-content {
                                position: static !important;
                                padding-right: 0;
                                margin-bottom: 30px;
                            }
                        }
                    `}</style>
                </section> */}
{/* 
                <section className="section mt-20 mb-40 mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">Our Process-Oriented Approach</h2>
                                <p className="font-lg color-gray-500">We don’t deliver technology—we deliver processes that make technology smarter. Our services are built around</p>
                            </div>
                        </div>
                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Data Curation & Enrichment</h4>
                                            <p className="font-md color-grey-500">Preparing structured, bias-free datasets tailored for search and personalization models.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Scalable Human-in-the-Loop (HITL)</h4>
                                            <p className="font-md color-grey-500">Combining human judgment with automation for ongoing model evaluation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Quality Assurance Frameworks</h4>
                                            <p className="font-md color-grey-500">Multi-stage review systems to reduce errors and ensure training data consistency.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Global & Multilingual Coverage</h4>
                                            <p className="font-md color-grey-500">Support for diverse markets and cultural contexts to expand reach and accuracy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">Industries We Serve</h2>
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
                                    <Offer8 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                
                {/* <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">The Business Impact</h2>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Higher User Engagement</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">When users find what they need faster, they stay longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Increased Conversions</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Relevant search results directly translate into purchase decisions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Reduced Churn</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Personalization fosters loyalty by making users feel understood.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Share updates instantly within our project management software, and get the entire team collaborating">Scalable Efficiency</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Ongoing HITL processes keep models sharp without overburdening internal teams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                
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
                <section className="section mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mt-20 mb-20">Industries We Serve</h2>
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
                                    <Offer3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-30 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-black-text mt-15 mb-20">Let’s make your search smarter and personalization sharper.</h2>
                                        <p className="font-md color-grey-500">Talk to us about building ML-ready processes that turn relevance into results.</p>
                                        <div className="box-button text-center mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
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

export default SAP;
