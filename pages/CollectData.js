import React, { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../components/slider/VideoSlider'), { ssr: false });
const Offer10 = dynamic(() => import('../components/slider/Offer10'), { ssr: false });
const Offer3 = dynamic(() => import('../components/slider/Offer3'), { ssr: false });

const ColectData = () => {
    const [isOpen, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            <Head>
                <title>AI Data Collection Services | Data Capture & Scalable Data Gathering Solutions by DataClap</title>
                <meta name="description" content="DataClap is your trusted partner for AI-ready data collection. With proven expertise, we deliver cost-effective data capture, gathering, and online collection services to power machine learning and computer vision projects." />
                <meta name="keywords" content="AI-ready data collection, data capture, data gathering, online collection services" />
            </Head>
            <Layout>
                <div className="collectdata-root">
                    <style jsx global>{`
                        body, .collectdata-root, .collectdata-root * {
                            font-family: 'Manrope', sans-serif;
                        }

                        /* Box video banner responsive styles */
                        .box-video-banner-responsive {
                            width: 100%;
                            margin: 40px 0 0 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        /* Desktop and tablet */
                        @media (min-width: 769px) {
                            .box-video-banner-responsive {
                                margin: 50px 0 0 0;
                            }
                        }

                        /* Mobile devices */
                        @media (max-width: 768px) {
                            .section.banner-5 .container {
                                padding-left: 15px;
                                padding-right: 15px;
                            }

                            .box-video-banner-responsive {
                                margin: 30px 0 0 0;
                                padding: 0;
                            }

                            /* Ensure text sections are also responsive */
                            .col-lg-6.mb-20 {
                                margin-bottom: 25px !important;
                            }

                            .mt-65 {
                                margin-top: 40px !important;
                            }

                            .mb-100 {
                                margin-bottom: 60px !important;
                            }
                        }

                        /* Small mobile devices */
                        @media (max-width: 480px) {
                            .section.banner-5 .container {
                                padding-left: 10px;
                                padding-right: 10px;
                            }

                            .box-video-banner-responsive {
                                margin: 25px 0 0 0;
                            }

                            .mt-65 {
                                margin-top: 30px !important;
                            }

                            .mb-100 {
                                margin-bottom: 40px !important;
                            }

                            .col-lg-6.mb-20 {
                                margin-bottom: 20px !important;
                            }

                            /* Adjust text for better mobile readability */
                            .color-brand-2.mt-10 {
                                font-size: 1.8rem;
                                line-height: 1.3;
                            }

                            .font-md {
                                font-size: 0.95rem;
                                line-height: 1.5;
                            }
                        }

                        /* Extra small devices */
                        @media (max-width: 360px) {
                            .section.banner-5 .container {
                                padding-left: 8px;
                                padding-right: 8px;
                            }

                            .box-video-banner-responsive {
                                margin: 20px 0 0 0;
                            }

                            .color-brand-2.mt-10 {
                                font-size: 1.6rem;
                            }

                            .font-md {
                                font-size: 0.9rem;
                            }
                        }

                        /* Right-side single column styling */
                        .right-single-column {
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                        }

                        .right-single-column .single-item {
                            display: flex;
                            align-items: center;
                            gap: 20px;
                            padding: 18px;
                            border: 1px solid #f3f3f3;
                            border-radius: 8px;
                            background: #fff;
                        }

                        .right-single-column .single-item img {
                            width: 120px;
                            height: auto;
                            object-fit: cover;
                            border-radius: 6px;
                            flex-shrink: 0;
                        }

                        .right-single-column .cardNumber {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding-left: 6px;
                        }

                        @media (max-width: 991px) {
                            .right-single-column .single-item img {
                                width: 96px;
                            }
                        }

                        @media (max-width: 767px) {
                            .right-single-column {
                                gap: 16px;
                            }

                            /* make the right column full width under the left column on small screens */
                            .col-lg-7 {
                                width: 100%;
                            }

                            .right-single-column .single-item {
                                flex-direction: row;
                                padding: 12px;
                            }
                        }

                        /* Left-aligned card styling (applied to text-showcase-card) */
                        /* Left-aligned card styles (new design) */
                        .left-aligned-card-wrapper {
                            margin-bottom: 30px;
                        }

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

                        .left-aligned-card-container:hover {
                            transform: translateY(-6px);
                            box-shadow: 0 12px 30px rgba(37,99,235,0.12);
                        }

                        .left-card-icon {
                            width: 64px;
                            height: 64px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: #ffffff;
                            border-radius: 10px;
                            border: 1px solid #eef6ff;
                            margin-bottom: 16px;
                        }

                        .left-card-icon img { width: 36px; height: 36px; object-fit: contain; }

                        .left-card-title {
                            font-size: 20px;
                            font-weight: 700;
                            color: #0f172a;
                            margin: 0 0 10px 0;
                        }

                        .left-card-divider { width: 46px; height: 4px; background: #2563eb; border-radius: 4px; margin-bottom: 12px; }

                        .left-card-description {
                            font-size: 15px;
                            color: #6b7280;
                            line-height: 1.6;
                            margin: 0;
                        }

                        @media (max-width: 991px) {
                            .left-card-icon { width: 56px; height: 56px; }
                            .left-card-icon img { width: 32px; height: 32px; }
                            .left-card-title { font-size: 18px; }
                        }

                        .row.mt-45 .col-lg-4 {
                            margin-bottom: 20px;
                            display: flex;
                            min-height: 100%;
                        }

                        .row.mt-45 .col-lg-4 .text-showcase-card {
                            width: 100%;
                        }

                        /* Reduce vertical gap when two mt-45 rows are stacked in this section */
                        .section.mt-110 .row.mt-45 + .row.mt-45 {
                            margin-top: 12px !important;
                        }

                        /* Also reduce bottom margin of columns in the first row to tighten the gap */
                        .section.mt-110 .row.mt-45:first-of-type .col-lg-4 {
                            margin-bottom: 12px !important;
                        }

                        @media (max-width: 991px) {
                            .text-showcase-card {
                                padding: 28px 24px;
                            }
                            
                            .card-header h5 {
                                font-size: 20px !important;
                            }
                        }

                        @media (max-width: 768px) {
                            .text-showcase-card {
                                padding: 24px 20px;
                            }
                            
                            .card-header h5 {
                                font-size: 18px !important;
                            }
                        }

                        @media (max-width: 480px) {
                            .text-showcase-card {
                                padding: 20px 16px;
                            }
                        }
                        /* Partner benefits (white-on-blue) layout tweaks */
                        .partner-benefits {
                            padding-top: 24px;
                            padding-bottom: 24px;
                        }
                        .partner-benefits .box-core-value h3,
                        .partner-benefits .box-core-value p,
                        .partner-benefits h5,
                        .partner-benefits p {
                            color: #fff;
                        }
                        .partner-benefits .benefit-icon {
                            width: 36px;
                            height: 36px;
                            margin-right: 12px;
                            flex-shrink: 0;
                            display: inline-block;
                        }
                        .partner-benefits .box-border-dashed {
                            border-bottom: 1px dashed rgba(255,255,255,0.08);
                            padding: 14px;
                            border-radius: 8px;
                        }
                        .partner-benefits .ticked {
                            display: none;
                        }

                        /* CTA fullwidth styles (moved here to avoid nested styled-jsx) */
                        .cta-fullwidth{ 
                            width: 100%;
                            background: #e9efff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 80px 0;
                            box-sizing: border-box;
                            min-height: 60vh;
                        }
                        .cta-fullwidth-inner{ max-width: 1120px; }
                        .cta-fullwidth h2{ font-size: 44px; margin-bottom: 12px; }
                        .cta-fullwidth p{ color: #4b5563; margin: 0 auto 18px; max-width: 820px; }
                        @media (max-width: 768px){
                            .cta-fullwidth{ padding: 48px 16px; min-height: 40vh; }
                            .cta-fullwidth h2{ font-size: 26px; }
                            .cta-fullwidth p{ font-size: 15px; }
                        }

                        /* Advantages section mobile responsive */
                        .section.mt-70.pt-60.pb-60.bg-brand-1 {
                            padding-top: 40px !important;
                            padding-bottom: 40px !important;
                            width: 100%;
                            display: block !important;
                            visibility: visible !important;
                        }

                        @media (max-width: 768px) {
                            .section.mt-70.pt-60.pb-60.bg-brand-1 {
                                padding-top: 30px !important;
                                padding-bottom: 30px !important;
                                width: 100vw !important;
                                display: block !important;
                                visibility: visible !important;
                                overflow: visible;
                                position: relative;
                                left: 50%;
                                right: 50%;
                                margin-left: -50vw;
                                margin-right: -50vw;
                                background-color: #0017e3 !important;
                                min-height: auto;
                                opacity: 1;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .container {
                                width: 100%;
                                max-width: 100%;
                                padding: 0 15px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .row {
                                width: 100%;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-4.col-md-6 {
                                flex: 0 0 50%;
                                max-width: 50%;
                                margin-bottom: 20px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 {
                                padding: 20px !important;
                                flex-direction: column;
                                align-items: flex-start;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 h5 {
                                font-size: 16px;
                                margin-bottom: 10px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 p {
                                font-size: 14px;
                                line-height: 1.5;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 img {
                                width: 26px !important;
                                height: 26px !important;
                                margin-right: 12px !important;
                                margin-top: 2px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-12.text-center.mb-40 h2 {
                                font-size: 24px;
                                margin-bottom: 15px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-12.text-center.mb-40 p {
                                font-size: 14px;
                            }
                        }

                        @media (max-width: 480px) {
                            .section.mt-70.pt-60.pb-60.bg-brand-1 {
                                padding-top: 25px !important;
                                padding-bottom: 25px !important;
                                width: 100vw !important;
                                display: block !important;
                                visibility: visible !important;
                                background-color: #0017e3 !important;
                                position: relative;
                                left: 50%;
                                right: 50%;
                                margin-left: -50vw;
                                margin-right: -50vw;
                                overflow: visible;
                                min-height: auto;
                                opacity: 1;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .container {
                                width: 100%;
                                padding: 0 12px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-4.col-md-6 {
                                flex: 0 0 100%;
                                max-width: 100%;
                                margin-bottom: 15px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 {
                                padding: 16px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 h5 {
                                font-size: 15px;
                                margin-bottom: 8px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 p {
                                font-size: 13px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .card-feature-2 img {
                                width: 22px !important;
                                height: 22px !important;
                                margin-right: 10px !important;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-12.text-center.mb-40 h2 {
                                font-size: 20px;
                            }

                            .section.mt-70.pt-60.pb-60.bg-brand-1 .col-lg-12.text-center.mb-40 p {
                                font-size: 13px;
                            }
                        }
                    `}</style>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">

                                   <h2 className="color-black-text mt-10">
                                    Bespoke data collection for every model stage
                                </h2>
                                </div>
                                <div className="col-lg-6 mb-70">
                                    <p className="font-lg color-black-text">
                                    From early prototypes to production-grade foundation models, we design and execute data collection programs that reduce bias, improve model performance, and accelerate time-to-deployment.
                                    </p>
                                </div>
                            </div>
                            <div className="box-video-banner box-video-banner-responsive">
                                <VideoSlider />
                            </div>
                            

                        </div>
                    </div>

                    
                </section>
                <section className="section mt-10">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="color-brand-1 mt-10 mb-15">Why us?</h2>
                                    <div className="mt-20">
                                        <p className="font-lg color-grey-400 pt-20">We design data collection programs that are scalable, compliant, and purpose-built for ML workloads - without unnecessary overhead.</p>
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Tailored sampling and demographic targeting</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Multi-modal support (text, speech, image, video, sensors, IoT)</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Strong QA, audit trails, and privacy-aware data handling</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Fast turnaround and flexible delivery formats (CSV, JSON, TFRecord, COCO, custom)</p>
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
                            <div className="col-lg-12 mb-20 text-center">
                                <h2 className="color-brand-1 mb-0">What We Offer</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                   Modular data collection services designed to fit different model requirements and maturity levels.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Custom data collection programs</h4>
                                        <p className="left-card-description">Design and execute end-to-end collection plans including target profiling, recruitment, scripts, pilot runs and full capture handoff.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Multimodal capture</h4>
                                        <p className="left-card-description">Support for text, speech & audio, image & video, and sensor & telemetry capture — from web scraping and curated corpora to controlled shoots, crowdsourced feeds and LIDAR/IMU streams.</p>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        
                                        <h4 className="left-card-title">Delivery & integration</h4>
                                        <p className="left-card-description">Seamless delivery and support with custom formats, sample indices and metadata, API access, ML pipeline integration and MLOps tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Annotation-ready collection</h4>
                                        <p className="left-card-description">Collect with annotation formats in mind such as bounding boxes, segmentation masks, multi-label taxonomies, speaker timestamps and intent/slot markers.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Privacy-first data handling</h4>
                                        <p className="left-card-description">Privacy-first approach including consent management, PII minimization, secure storage, differential privacy options and on-prem/air-gapped transfers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <h4 className="left-card-title">Quality assurance & validation</h4>
                                        <p className="left-card-description">Multi-tier QA with automated checks, human review, inter-annotator agreement monitoring, sample audits and statistical validation reports.</p>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                    
                </section>
                <section className="section mt-70 pt-60 pb-60 bg-brand-1" style={{ backgroundColor: '#0017e3' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mb-20" style={{ color: "#fff" }}>Advantages of Our Data Collection</h2>
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
                
                <section className="section mt-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Use Cases</h2>
                                <p className="font-lg color-gray-500">
                                        Where structured data collection directly impacts model accuracy and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer10 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section mt-100">
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
                                    <Offer3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                
                    <section className="section mt-30 pt-30 pb-40">
                    <div className="container mt-20">
                        <div className="box-cover-border" >
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2 >Structured data, ready for training</h2>
                                        <p className="font-md color-grey-500" >
                                            Talk to us about building reliable data collection pipelines<br />that convert raw inputs into model-ready datasets.</p>
                                        <div className="box-button text-center mt-25"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Get a demo</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                </div>
            </Layout>
        </>
    );
};

export default ColectData;
