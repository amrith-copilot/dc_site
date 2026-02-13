import React, { useState, useRef, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const ImageSlider = dynamic(() => import('../components/slider/ImageSlider'), { ssr: false });
const Offer7 = dynamic(() => import('../components/slider/Offer7'), { ssr: false });
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Using per-instance `modules` prop on Swiper components instead of global registration

const OCR = () => {
    const [isOpen, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const swiperRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (!mounted) return;
        let intervalId = null;

        const start = () => {
            if (typeof window === 'undefined') return;
            if (window.innerWidth > 991) return;
            if (!swiperRef.current) return;
            if (typeof swiperRef.current.slideNext !== 'function') return;
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(() => {
                try { swiperRef.current.slideNext(); } catch (e) { /* ignore */ }
            }, 3000);
        };

        const stop = () => {
            if (intervalId) { clearInterval(intervalId); intervalId = null; }
        };

        start();
        window.addEventListener('resize', start);
        return () => { stop(); window.removeEventListener('resize', start); };
    }, [mounted]);
    return (
        <>
            <Head>
                <title>OCR & Intelligent Document Processing (IDP) Services | Dataclap</title>
                <meta name="description" content="Automate document workflows with Dataclap's OCR and IDP services. Extract, classify, and process structured and unstructured data with AI-powered automation." />
                <meta name="keywords" content="OCR services, intelligent document processing, IDP solutions, document data extraction, AI document automation" />
            </Head>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10">
                                        Scan → Extract → Validate → Deliver.
                                    </h1>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <p className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        We convert unstructured documents (scanned paper, multi-page PDFs, screenshots, photographs) into structured, usable data. That includes text extraction (printed & handwritten), table extraction (multi-page, nested tables), key–value pair capture, document classification, document verification and secure storage or push to your systems.
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

                        /* Mobile Slider Styles */
                        @media (min-width: 992px) {
                            .mobile-card-slider {
                                display: none !important;
                            }
                        }

                        @media (max-width: 991px) {
                            .desktop-card-grid {
                                display: none !important;
                            }
                        }

                        .mobile-card-slider {
                            padding: 20px 15px 20px 0;
                        }

                        .mobile-card-slider .swiper-container {
                            margin: 0 -15px;
                            padding: 0 15px;
                        }

                        .mobile-card-slider .image-showcase-top-dynamic {
                            width: 100% !important;
                            height: 480px !important;
                            overflow: hidden;
                        }

                        .mobile-card-slider .image-showcase-content-dynamic {
                            padding: 14px 12px !important;
                            max-height: 280px;
                            overflow-y: auto;
                        }

                        .mobile-card-slider .image-showcase-content-dynamic h4,
                        .mobile-card-slider .image-showcase-content-dynamic h6 {
                            font-size: 14px !important;
                            margin-bottom: 10px !important;
                        }

                        .mobile-card-slider .image-showcase-description-dynamic {
                            font-size: 13px !important;
                            line-height: 1.4;
                        }

                        .slider-controls-mobile {
                            padding: 20px 0;
                        }

                        .slider-btn {
                            transition: all 0.3s ease !important;
                        }

                        .slider-btn:hover {
                            background: #265bda !important;
                            color: #fff !important;
                        }

                        .swiper-button-prev-cards:after,
                        .swiper-button-next-cards:after {
                            display: none;
                        }
                    `}</style>
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
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center mb-20">
                                <h2 className="color-brand-1 mb-0 text-center">Core services we offer</h2>
                                <p className="color-grey-500 font-lg mt-20 text-center max-width-600 mx-auto">
                                    Here are some types of image annotations we provide.
                                </p>
                            </div>
                        </div>

                        {/* Mobile Slider View */}
                        {mounted && (
                        <div className="mobile-card-slider d-lg-none">
                            <div style={{position: 'relative', marginBottom: '20px'}}>
                                <Swiper
                                    ref={swiperRef}
                                    onSwiper={(s) => { swiperRef.current = s; }}
                                    onSlideChange={(s) => setActiveSlideIndex(s.realIndex)}
                                    modules={[Autoplay, Navigation]}
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={20}
                                    autoplay={typeof Autoplay !== 'undefined' ? {
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                        waitForTransition: true,
                                        reverseDirection: false
                                    } : false}
                                    navigation={{
                                        nextEl: '.swiper-button-next-cards',
                                        prevEl: '.swiper-button-prev-cards',
                                    }}
                                    className="swiper-container"
                                >
                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human1.png" 
                                                    alt="Cross Platform" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">Document capture & pre-processing</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    High-quality scanning, image de-skew, noise removal, image enhancement, multi-format ingestion (PDF, TIFF, JPG, PNG) and OCR pre-checks to boost extraction accuracy.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human2.png" 
                                                    alt="Team Collaboration" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">OCR (printed + handwritten)</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    Accurate extraction of printed and handwritten text using configurable OCR engines and model ensembles; outputs as searchable PDF, Word, CSV, JSON, or database-ready records.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human3.png" 
                                                    alt="Analytics Dashboard" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">Document classification & routing (IDP)</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    Automatic classification (invoices, receipts, claims, contracts, letters, forms) and routing to the correct business process or user queue using ML and NLP.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage12/human1.png" 
                                                    alt="Project Management" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">Key-value & table extraction</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    Robust extraction of fields, key–value pairs and complex table structures (multi-page and nested tables) with confidence scores, coordinates and schema mapping.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage12/human2.png" 
                                                    alt="Customer Support" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">Verification & human-in-the-loop (HITL)</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    Configurable validation workflows where low-confidence items are routed to human reviewers; results feed back to continually retrain models.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage12/human3.png" 
                                                    alt="Data Security" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="image-showcase-title-dynamic color-brand-1">Data security & compliance</h4>
                                                <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                    Encrypted data transit and storage, role-based access, comprehensive audit logs, and GDPR/HIPAA-ready controls for regulated data.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                {/* Slider Controls */}
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px'}}>
                                    <button
                                        className="swiper-button-prev-cards"
                                        aria-label="Previous slide"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            border: '1px solid #e6e6e6',
                                            background: '#ffffff',
                                            color: 'black',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 0,
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M18 12 H8 M12 6 L6 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minWidth: '100px'}}>
                                        {Array.from({ length: 6 }).map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => swiperRef.current && swiperRef.current.slideToLoop(idx)}
                                                aria-label={`Go to slide ${idx+1}`}
                                                style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    borderRadius: '50%',
                                                    border: '1px solid #d1d5db',
                                                    background: idx === activeSlideIndex ? '#111827' : '#ffffff',
                                                    cursor: 'pointer',
                                                    padding: 0,
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        className="swiper-button-next-cards"
                                        aria-label="Next slide"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            border: '1px solid #e6e6e6',
                                            background: '#ffffff',
                                            color: 'black',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 0,
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M6 12 H16 M12 6 L18 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Desktop Grid View */}
                        <div className="desktop-card-grid d-none d-lg-block">
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
                                        <h4 className="image-showcase-title-dynamic color-brand-1">Document capture & pre-processing</h4>
                                        <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
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
                                        <h4 className="image-showcase-title-dynamic color-brand-1">OCR (printed + handwritten)</h4>
                                        <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
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
                                        <h4 className="image-showcase-title-dynamic color-brand-1">Document classification & routing (IDP)</h4>
                                        <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                            Automatic classification (invoices, receipts, claims, contracts, letters, forms) and routing to the correct business process or user queue using ML and NLP.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
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
                                                            <h4 className="image-showcase-title-dynamic color-brand-1">Key-value & table extraction</h4>
                                                            <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
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
                                                            <h4 className="image-showcase-title-dynamic color-brand-1">Verification & human-in-the-loop (HITL)</h4>
                                                            <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
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
                                                            <h4 className="image-showcase-title-dynamic color-brand-1">Post-processing & integrations</h4>
                                                            <p className="image-showcase-description-dynamic" style={{fontSize: '15px'}}>
                                                                Normalization, deduplication, data enrichment, PII redaction, encryption and connectors to ERPs, RPA, DMS, SharePoint, Salesforce, or your APIs.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                                    </section>

                                    {/* <section className="section mt-100">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12 text-start">
                                                    <h2 className="color-brand-1 mb-20">Technologies we use</h2>
                                                    <p className="font-xl color-gray-500">We leverage best-of-breed OCR/IDP components and cloud services (examples: Azure Form Recognizer, Google Cloud Vision, AWS Textract) 
                                                        together with custom ML models and Python-based pipelines to reach the right mix of accuracy, latency and cost for your use case.</p>
                                                </div>
                                                <div className="col-lg-12 text-center pt-100">
                                                    <h2 className="color-brand-1 mb-20">Typical IDP workflow</h2>
                                                    <p className="font-lg color-gray-500">Discovery & sample analysis — We profile your documents and KPIs.</p>
                                                </div>
                                            </div>

                                            <div className="process-list mt-60">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="process-row fade-up">
                                                            <div className="process-number">1</div>
                                                            <div>
                                                                <h4 className="color-brand-1 mb-5">Discovery & sample analysis</h4>
                                                                <p className="font-md color-grey-500">We profile your documents and KPIs.</p>
                                                            </div>
                                                        </div>

                                                        <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                                            <div className="process-number">2</div>
                                                            <div>
                                                                <h4 className="color-brand-1 mb-5">Prototype / POC</h4>
                                                                <p className="font-md color-grey-500">Run a sample set, show extraction accuracy and end-to-end throughput.</p>
                                                            </div>
                                                        </div>

                                                        <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                                            <div className="process-number">3</div>
                                                            <div>
                                                                <h4 className="color-brand-1 mb-5">Model development & automation</h4>
                                                                <p className="font-md color-grey-500">Build extraction models + business rules + validation thresholds.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                                            <div className="process-number">4</div>
                                                            <div>
                                                                <h4 className="color-brand-1 mb-5">Integration & automation</h4>
                                                                <p className="font-md color-grey-500">Wire outputs to systems, configure error handling and HITL queues.</p>
                                                            </div>
                                                        </div>

                                                        <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                                            <div className="process-number">5</div>
                                                            <div>
                                                                <h4 className="color-brand-1 mb-5">Go-live & continuous improvement</h4>
                                                                <p className="font-md color-grey-500">Monitored SLAs, retraining pipeline and periodic model audits.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> */}

                                  

                                    {/* <section className="section mt-100">
                                        <div className="container">
                                            <div className="row mt-50 align-items-start">
                                                {/* Left Column - Header 
                            <div className="col-lg-5 mb-30">
                                <div className="sticky-content" style={{ position: 'sticky', top: '100px' }}>
                                    <h2 className="color-brand-1 mb-20">Why choose us</h2>
                                    <div className="title-line font-md color-grey-500">
                                        We support a wide range of data types, annotation types, and services
                                    </div>
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
                                                    Data Types
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">
                                                Proven OCR & IDP playbook used across industries (scanning → OCR → NLP → HITL).
                                            </p>
                                        </div>
                                    </div>

                                    {/* Annotation Types Card *
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

                                    {/* Additional Services Card *
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
                </section> */}
                  <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mt-20 mb-20" style={{ color: "#fff" }}>Advantages of adopting DevOps</h2>
                                <p className="font-lg max-width-600 mx-auto" style={{ color: "#fff" }}>
                                    Transform your software delivery with proven DevOps practices that accelerate innovation and improve quality.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Faster Deployment</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Automated deployment pipelines significantly reduce release cycles, allowing teams to push updates to production with minimal manual intervention.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Enhanced Collaboration</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Breaking down silos between development and operations teams fosters better communication, shared responsibility, and improved problem-solving across organizations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Continuous Integration</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Regular code integration and automated testing catch bugs early, reducing debugging time and ensuring higher quality software releases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Infrastructure Automation</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Standardized infrastructure configuration through code eliminates manual setup errors and enables consistent environments across development, testing, and production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Rapid Recovery</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Automated monitoring and incident response systems help teams quickly identify, isolate, and resolve issues before they impact users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Cost Optimization</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Efficient resource utilization, automated scaling, and streamlined processes reduce operational costs while maintaining high service quality standards.
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
                                                    <h2 className="color-brand-1  mt-20 mb-20">Industries We Serve</h2>
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
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2>Ready to make your documents work smarter?</h2>
                                        <p className="font-lg color-grey-500">Contact us today to learn how we can help.</p>
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

export default OCR;
