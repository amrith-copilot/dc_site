import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import ImageSlider from '../components/slider/ImageSlider';
import Offer7 from '../components/slider/Offer7';

const OCR = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">OCR/IDP</span>
                                    <p className="color-black-text mt-10 mb-40 font-3xl">
                                        Scan → Extract → Validate → Deliver.
                                    </p>
                                </div>
                                <div className="col-lg-6 mb-70">
                                    <p className="font-lg color-black-text">
                                        searchable data from any document, at scale.
                                    </p>
                                </div>
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
                <section className="section mt-10 mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="color-brand-1 mb-20">What we do</h2>
                                <p className="font-lg color-grey-500">
                                    We convert unstructured documents (scanned paper, multi-page PDFs, screenshots, photographs) into structured, usable data. That includes text extraction (printed & handwritten), table extraction (multi-page, nested tables), key–value pair capture, document classification, document verification and secure storage or push to your systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                                <section className="section mb-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-brand-1 mt-10 mb-15">Why OCR + IDP matters</h3>
                                    <p className="font-lg color-grey-400">Supervised Fine-Tuning is the process of training an existing AI model on curated, labeled examples relevant to your business. <br /><br />By showing the model how it should behave in your context, SFT makes it more accurate, safer, and aligned with your goals.</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Speed: </strong>OCR can process documents tens of times faster than manual typing; when combined with ML-driven IDP, throughput and business-rule automation scale dramatically.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Accuracy: </strong>Modern OCR + post-processing (layout analysis, model ensembles, H-in-the-loop QA) achieves enterprise-grade accuracy for invoices, forms, and healthcare records.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400"><strong>Cost & compliance: </strong>Reduce manual labor, shorten SLAs, and keep audit trails, encryption and role-based access for regulated data.</p>
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
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Core services we offer</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Here are some types of image annotations we provide.
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
                                        <h4 className="image-showcase-title-dynamic">Document capture & pre-processing</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            High-quality scanning, image de-skew, noise removal, image enhancement, multi-format ingestion (PDF, TIFF, JPG, PNG) and OCR pre-checks to boost extraction accuracy.
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
                                        <h4 className="image-showcase-title-dynamic">OCR (printed + handwritten)</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Accurate extraction of printed and handwritten text using configurable OCR engines and model ensembles; outputs as searchable PDF, Word, CSV, JSON, or database-ready records.
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
                                        <h4 className="image-showcase-title-dynamic">Document classification & routing (IDP)</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Automatic classification (invoices, receipts, claims, contracts, letters, forms) and routing to the correct business process or user queue using ML and NLP.
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
                                        <h4 className="image-showcase-title-dynamic">Key-value & table extraction</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Robust extraction of fields, key–value pairs and complex table structures (multi-page and nested tables) with confidence scores, coordinates and schema mapping.
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
                                        <h4 className="image-showcase-title-dynamic">Verification & human-in-the-loop (HITL)</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Configurable validation workflows where low-confidence items are routed to human reviewers; results feed back to continually retrain models.
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
                                        <h4 className="image-showcase-title-dynamic">Post-processing & integrations</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Normalization, deduplication, data enrichment, PII redaction, encryption and connectors to ERPs, RPA, DMS, SharePoint, Salesforce, or your APIs.
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
                                <h2 className="color-brand-1 mb-20">Technologies we use</h2>
                                <p className="font-xl color-gray-500">We leverage best-of-breed OCR/IDP components and cloud services (examples: Azure Form Recognizer, Google Cloud Vision, AWS Textract) 
                                    together with custom ML models and Python-based pipelines to reach the right mix of accuracy, atency and cost for your use case.with strategy, design &amp; technology.</p>
                            </div>
                            <div className="col-lg-12 text-center pt-100">
                                <h3 className="color-brand-1 mb-20">Typical IDP workflow Discovery & sample analysis</h3>
                                <p className="font-xl color-gray-500">We profile your documents and KPIs.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Prototype / POC</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Run a sample set, show extraction accuracy and end-to-end throughput.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Integration & automation</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Build extraction models + business rules + validation thresholds.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Integration & automation</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Wire outputs to systems, configure error handling and HITL queues.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Share updates instantly within our project management software, and get the entire team collaborating">Go-live & continuous improvement</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Monitored SLAs, retraining pipeline and periodic model audits.</p>
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
                                    <Offer7 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-start">
                            {/* Left Column - Header */}
                            <div className="col-lg-5 mb-30">
                                <div className="sticky-content" style={{ position: 'sticky', top: '100px' }}>
                                    <h2 className="color-brand-1 mb-20">Why choose us</h2>
                                    <div className="title-line font-md color-grey-500">
                                        We support a wide range of data types, annotation types, and services
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Cards */}
                            <div className="col-lg-7">
                                <div className="d-flex flex-column gap-4">
                                    {/* Data Types Card */}
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                    Data Types
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                Proven OCR & IDP playbook used across industries (scanning → OCR → NLP → HITL).
                                            </p>
                                        </div>
                                    </div>

                                    {/* Annotation Types Card */}
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                    Annotation Types
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                Hybrid approach: cloud OCR engines + custom ML models + human quality loops for edge cases.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Additional Services Card */}
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-15">
                                            <img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" />
                                        </div>
                                        <div className="card-info mt-15">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="#">
                                                    Additional Services
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                Fast POC turnaround so you can measure ROI before committing to scale.
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
                </section>
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to make your documents work smarter?</h2>
                                        <p className="font-lg color-grey-500">Contact us today to learn how we can help.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
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

export default OCR;
