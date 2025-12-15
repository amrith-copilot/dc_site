import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer10 from '../components/slider/Offer10';

const ColectData = () => {
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
                                    Bespoke data collection for every model stage
                                </h2>
                                </div>
                                <div className="col-lg-6 mb-70">
                                    <p className="font-lg color-black-text">
                                        From prototype experiments to production-grade foundation models, we deliver fit-for-purpose datasets that reduce bias, improve performance, and speed time-to-insight.
                                    </p>
                                </div>
                            </div>
                            <div className="box-video-banner">
                                <VideoSlider />
                            </div>
                            

                        </div>
                    </div>

                    <style jsx>{`
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
                    `}</style>
                </section>
                <section className="section mt-10">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-black-text mt-10 mb-15">Why us?</h3>
                                    <div className="mt-20">
                                        <p className="font-lg color-grey-400 pt-20">Primary benefits</p>
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
                                                <p className="font-md color-grey-400">Strong QA, audit trails and compliance (GDPR, CCPA, HIPAA where needed)</p>
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

                    <style jsx>{`
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
                    `}</style>
                </section>
                <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">What We Offer</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Here are some types of image annotations we provide.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Custom data collection programs</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Design and execute end-to-end collection plans:
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15"style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Target profile definition</li>
                                            <li>Recruitment</li>
                                            <li>Scripts/instruments</li>
                                            <li>Pilot runs</li>
                                            <li>Full capture and handoff</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Multimodal capture</h5>
                                    </div>
                                    <div className="card-content">
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li><strong>Text: </strong> web scraping, curated corpora, conversational transcripts, domain-specific corpora</li>
                                            <li><strong>Speech & audio: </strong> scripted/natural speech, environmental sounds, speaker metadata</li>
                                            <li><strong>Image & video: </strong>controlled shoots, crowdsourced capture, dashcam/robotics feeds</li>
                                            <li><strong>Sensor & telemetry: </strong>LIDAR, IMU, CANbus, time-series from industrial/automotive devices.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Panel & participant recruitment</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Targeted recruitment for demographic, geographic and behavioral cohorts
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text  mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Screening</li>
                                            <li>Consent</li>
                                            <li>Incentives</li>
                                            <li>Scheduling</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Annotation-ready collection</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Collect with annotation in mind:
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Bounding boxes</li>
                                            <li>Segmentation masks</li>
                                            <li>Multi-label taxonomies</li>
                                            <li>Speaker timestamps</li>
                                            <li>Intent/slot markers</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Privacy-first data handling</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Privacy-first approach includes:
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Consent management</li>
                                            <li>PII minimization</li>
                                            <li>Secure storage</li>
                                            <li>Differential privacy options</li>
                                            <li>On-prem/air-gapped transfers</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Quality assurance & validation</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Multi-tier quality assurance:
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Automated checks + human review</li>
                                            <li>Inter-annotator agreement monitoring</li>
                                            <li>Sample audits</li>
                                            <li>Statistical validation reports</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-showcase-card">
                                    <div className="card-header">
                                        <div className="card-icon-inline">
                                            <svg className="icon-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h5 className="color-brand-1 mb-15">Delivery & integration</h5>
                                    </div>
                                    <div className="card-content">
                                        <div className="font-md color-black-text mb-15 pl-15">
                                            Seamless delivery and support:
                                        </div>
                                        <ol className="custom-bullets font-md color-black-text mb-15 pl-15" style={{marginBottom: '15px', marginLeft: '15px'}}>
                                            <li>Custom formats</li>
                                            <li>Sample indices and metadata</li>
                                            <li>API access</li>
                                            <li>ML pipeline integration</li>
                                            <li>MLOps tools </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        /* Left-aligned card styling (applied to text-showcase-card) */
                        .text-showcase-card {
                            margin-bottom: 30px;
                            border-radius: 16px;
                            overflow: hidden;
                            transition: all 0.3s ease;
                            background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
                            border: 1px solid #e8f2ff;
                            padding: 32px 28px;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            position: relative;
                        }

                        .text-showcase-card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
                        }

                        .card-header {
                            display: contents;
                            margin: 0;
                            padding: 0;
                            border: none;
                        }

                        .card-icon-inline {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 48px;
                            height: 48px;
                            background: transparent;
                            border-radius: 0;
                            flex-shrink: 0;
                            margin-bottom: 20px;
                        }

                        .card-icon-inline svg {
                            width: 24px;
                            height: 24px;
                        }

                        .card-header h5 {
                            margin: 0 0 16px 0 !important;
                            padding: 0 !important;
                            font-size: 22px !important;
                            font-weight: 700 !important;
                            line-height: 1.3 !important;
                            text-align: left !important;
                            color: #2563eb !important;
                            position: relative;
                            padding-bottom: 20px !important;
                        }

                        .card-header h5::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 40px;
                            height: 3px;
                            background: linear-gradient(90deg, #2563eb, #3b82f6);
                            border-radius: 2px;
                        }

                        .icon-blue {
                            color: #2563eb;
                        }

                        .card-content {
                            flex: 1;
                            margin-top: 0;
                            margin-left: 25px;
                        }

                        .card-content .font-md {
                            font-size: 15px !important;
                            font-weight: 400 !important;
                            line-height: 1.6 !important;
                            color: #6b7280 !important;
                            margin-bottom: 24px !important;
                            text-align: left !important;
                            padding-left: 0 !important;
                            margin-left: 0 !important;
                        }

                        .card-content .custom-bullets {
                            font-size: 15px !important;
                            font-weight: 400 !important;
                            line-height: 1.6 !important;
                            color: #6b7280 !important;
                            text-align: left !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            list-style: none;
                            margin-left: 0 !important;
                        }

                        .card-content .custom-bullets li {
                            text-align: left !important;
                            margin-bottom: 8px !important;
                            font-size: 15px !important;
                            font-weight: 400 !important;
                            line-height: 1.6 !important;
                            color: #6b7280 !important;
                            padding-left: 0 !important;
                            margin-left: 0 !important;
                        }

                        .card-content .custom-bullets li::before {
                            content: '•';
                            margin-right: 8px;
                        }

                        .row.mt-45 .col-lg-4 {
                            margin-bottom: 20px;
                            display: flex;
                            min-height: 100%;
                        }

                        .row.mt-45 .col-lg-4 .text-showcase-card {
                            width: 100%;
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
                    `}</style>
                </section>
                <section className="section mt-100 mb-40 process-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">How we work</h2>
                                <p className="font-lg color-gray-500">Simple and transparent process</p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Kickoff & Requirements</h4>
                                            <p className="font-md color-grey-500"> define success metrics, target populations, and constraints.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Design & Pilot</h4>
                                            <p className="font-md color-grey-500">create collection instruments, run pilots, measure quality and adjust.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Scale & Capture</h4>
                                            <p className="font-md color-grey-500"> full launch with monitoring dashboards and live QA.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Validate & Clean</h4>
                                            <p className="font-md color-grey-500">automated filtering + human review, produce QA reports.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                        <div className="process-number">5</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Deliver & Support</h4>
                                            <p className="font-md color-grey-500">hand off data, integrate into your pipeline, provide <br></br>follow-up sampling as models evolve.</p>
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
                                <h2 className="color-brand-1 mb-20">Use Cases</h2>
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
                                    <Offer10 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-center card-no-border">
                            <div className="col-lg-6 mb-350">
                                <h2 className="color-brand-1">Quality, compliance & security</h2>
                                <div className="mb-10 mt-10 font-md">Personalization is more than recommending “similar items.” It’s about adapting to user behavior, context, and evolving intent. We support personalization efforts through:</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up mb-20">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Transparent QA metrics :</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Error rates, agreement scores, coverage reports.</p>
                                    </div>
                                </div>
                                <div className="card-offer card-we-do hover-up mb-20">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Reproducible pipelines: </Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Capturable provenance, versioning and sample snapshots for audits.</p>
                                    </div>
                                </div>
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Share updates instantly within our project management software, and get the entire team collaborating">Regulatory alignment: </Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Flexible privacy controls, exportable consent records, ability to work under NDAs and DPA terms.</p>
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
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Let’s make your search smarter and personalization sharper.</h2>
                                        <p className="font-md color-grey-500">Talk to us about building ML-ready processes that turn relevance into results.</p>
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

export default ColectData;
