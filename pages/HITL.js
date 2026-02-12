import React, { useState, useRef, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../components/slider/VideoSlider'), { ssr: false });
const Offer5 = dynamic(() => import('../components/slider/Offer5'), { ssr: false });
const Offer3 = dynamic(() => import('../components/slider/Offer3'), { ssr: false });
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Using per-instance `modules` prop on Swiper components instead of global registration

const HITL = () => {
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
            // only enable fallback autoplay on mobile widths
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
        <Layout>
            <>
                <Head>
                    <title>HITL AI Services | Dataclap AI Data Annotation Experts</title>
                    <meta name="description" content="Improve AI performance with Dataclap’s HITL services. We combine human expertise and automation to deliver accurate, scalable machine learning solutions." />
                    <meta name="keywords" content="Human-in-the-Loop AI, HITL services, Dataclap, AI data annotation company, AI training data company, machine learning data services, human feedback for AI" />
                    <meta name="robots" content="index, follow" />
                </Head>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        Annotation That Scales 
                                    </h2>
                                    <h4 className="color-black-text mb-20">
                                        Accurate, auditable, and SLA-backed. 
                                    </h4>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        We combine skilled human reviewers with automated tooling to deliver high-quality labeled data for computer vision, NLP, audio, LiDAR and multimodal ML workflows — at scale and with guaranteed SLAs.
                                    </p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/HITL.png" alt="HITL hero" style={{ width: '80%', height: 'auto'}} />
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
                                                    What we deliver
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Our Human-in-the-Loop annotation services ensure your ML models are trained on the highest quality data:
                                                </p>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>High accuracy via multi-pass HITL workflows (annotate → review → QA → adjudicate)
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Flexible scale: from pilot batches to continuous pipelines supporting hundreds of thousands of items/month
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Security & compliance: role-based access, encrypted data transfer, and ISO-grade controls for sensitive projects
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-40 text-start">
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
                            <div className="col-lg-12 mb-20 text-center">
                                <h2 className="color-brand-1 mb-0">Types of tasks and data we handle</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Comprehensive annotation services across all data modalities
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
                                                    alt="Image & Video" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="color-brand-1 mb-15">Image & Video</h4>
                                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                                    <li>Bounding boxes, polygons, instance & semantic segmentation</li>
                                                    <li>Keypoints/pose, temporal tracking, activity/event tagging</li>
                                                    <li>Video frame sequencing, interpolation checks, per-frame QA</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human2.png" 
                                                    alt="3D & Sensor" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="color-brand-1 mb-15">3D & Sensor</h4>
                                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                                    <li>LiDAR point cloud labeling, voxelization</li>
                                                    <li>Sensor fusion alignment</li>
                                                    <li>3D bounding boxes and segmentation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human3.png" 
                                                    alt="Text & NLP" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="color-brand-1 mb-15">Text & NLP</h4>
                                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                                    <li>Named entity recognition (NER), intent labeling</li>
                                                    <li>Pairwise comparison, summarization verification</li>
                                                    <li>Prompt-response evaluation, content classification, hallucination checks</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human1.png" 
                                                    alt="Audio" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="color-brand-1 mb-15">Audio</h4>
                                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                                    <li>Transcription, speaker diarization</li>
                                                    <li>Keyword spotting, sound event labeling</li>
                                                    <li>Multi-language support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <div className="image-showcase-card-dynamic">
                                            <div className="image-showcase-top-dynamic">
                                                <img 
                                                    src="assets/imgs/page/homepage6/human2.png" 
                                                    alt="Documents" 
                                                    className="image-showcase-photo-dynamic"
                                                />
                                            </div>
                                            <div className="image-showcase-content-dynamic">
                                                <h4 className="color-brand-1 mb-15">Documents</h4>
                                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                                    <li>OCR correction, form field extraction</li>
                                                    <li>Table parsing, semantic restructuring</li>
                                                    <li>Redaction and data masking</li>
                                                </ul>
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

                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minWidth: '80px'}}>
                                        {Array.from({ length: 5 }).map((_, idx) => (
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
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Image & Video" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Image & Video</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Bounding boxes, polygons, instance & semantic segmentation</li>
                                            <li>Keypoints/pose, temporal tracking, activity/event tagging</li>
                                            <li>Video frame sequencing, interpolation checks, per-frame QA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="3D & Sensor" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">3D & Sensor</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>LiDAR point cloud labeling, voxelization</li>
                                            <li>Sensor fusion alignment</li>
                                            <li>3D bounding boxes and segmentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Text & NLP" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Text & NLP</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Named entity recognition (NER), intent labeling</li>
                                            <li>Pairwise comparison, summarization verification</li>
                                            <li>Prompt-response evaluation, content classification, hallucination checks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Audio" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Audio</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Transcription, speaker diarization</li>
                                            <li>Keyword spotting, sound event labeling</li>
                                            <li>Multi-language support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Documents" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Documents</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>OCR correction, form field extraction</li>
                                            <li>Table parsing, semantic restructuring</li>
                                            <li>Redaction and data masking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

              

                {/* <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Annotation Types</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    (Placeholder cards)
                                </p>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                   
              <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mb-20" style={{ color: "#fff" }}>Our Advantages </h2>
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
                            <div className="col-lg-12 text-center ">
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
                </section>
  {/* <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
                                <p className="font-lg color-gray-500">
                                    Delivering Human-in-the-Loop annotation solutions across diverse industries
                                    <br className="d-none d-lg-block" />
                                    with accuracy, speed &amp; guaranteed SLAs.
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
                </section> */}
                <section className="section mt-20 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2>Deploy HITL safeguards in minutes.</h2>
                                        <p className="font-md color-grey-500">Get high-quality labeled data at scale with our Human-in-the-Loop annotation services. From pilot projects to production-scale pipelines, we deliver accurate annotations with guaranteed SLAs.</p>
                                        {/* <p className="font-md color-grey-500 mt-20">Our multi-pass workflow ensures every annotation meets your quality standards, so you can train better models faster.</p> */}
                                        <div className="box-button text-center mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <style jsx>{`
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

                    .mobile-card-slider .custom-bullets {
                        font-size: 12px !important;
                        margin: 0 0 0 1rem !important;
                        line-height: 1.4;
                    }

                    .mobile-card-slider .custom-bullets li {
                        margin-bottom: 3px !important;
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
            </>
        </Layout>
    );
};

export default HITL;