import React, { useState, useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Navigation,Pagination]);

const HeroSlider = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const heroBackgroundStyle = {
        height: '100%',
        width: '100%',
        minHeight: 'min(700px, 85vh)',
        background: 'linear-gradient(to right, #ffffff 0%, #f0f7ff 100%)',
        position: 'relative',
        overflow: 'hidden'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top, rgba(0, 112, 243, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0, 168, 255, 0.04) 0%, transparent 40%)',
        pointerEvents: 'none'
    };

    const gridOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(0, 112, 243, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 112, 243, 0.02) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        pointerEvents: 'none'
    };

    return (
        <>
            <div style={heroBackgroundStyle}>
                <div style={overlayStyle}></div>
                <div style={gridOverlayStyle}></div>
                {mounted ? (
                <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ el: '.hero-pagination', clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-style-3",
                        nextEl: ".swiper-button-next-style-3",
                    }}
                    className="swiper-wrapper"
                    style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
                >
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#0b5bff' }}>Enterprise AI Solutions</p>
                                        <h1 className="mb-10 color-brand-1" style={{ 
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                            fontWeight: 800, 
                                            lineHeight: 1.05, 
                                            textAlign: 'center', // Center the title
                                            marginBottom: '0.5rem', 
                                            minHeight: '120px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            whiteSpace: 'normal', 
                                            overflow: 'visible', 
                                            textOverflow: 'clip' 
                                        }}>Enterprise Data Foundations for AI</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ 
                                            maxWidth: '720px', 
                                            margin: '0 auto', // Center content
                                            textAlign: 'center', // Center content text
                                            fontSize: '1rem', 
                                            lineHeight: '1.8', 
                                            fontWeight: 400, 
                                            fontFamily: 'Arial, sans-serif', 
                                            color: '#5a6b7a' 
                                        }}>Enterprise data collection, data annotation, and supervised fine-tuning services designed for training and improving AI and machine learning models at scale. We deliver structured datasets using defined labeling schemas, multi-stage quality assurance, and full auditability to support production AI systems across industries and global markets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <div className="mt-30" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="btn btn-brand-1" style={{ width: 'auto', padding: '10px 30px' }}>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#0b5bff' }}>Post-Training Services</p>
                                        <h1 className="mb-10 color-brand-1" style={{ 
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                            fontWeight: 800, 
                                            lineHeight: 1.05, 
                                            textAlign: 'center', // Center the title
                                            marginBottom: '0.5rem', 
                                            minHeight: '120px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            whiteSpace: 'normal', 
                                            overflow: 'visible', 
                                            textOverflow: 'clip' 
                                        }}>Post-Training That Improves Production Outcomes</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ 
                                            maxWidth: '720px', 
                                            margin: '0 auto', // Center content
                                            textAlign: 'center', // Center content text
                                            fontSize: '1rem', 
                                            lineHeight: '1.8', 
                                            fontWeight: 400, 
                                            fontFamily: 'Arial, sans-serif', 
                                            color: '#5a6b7a' 
                                        }}>Post-training AI services including human-in-the-loop workflows, RLHF, red teaming, and AI evaluations to improve model performance after deployment. These services help enterprises align models with business requirements, validate outputs, reduce risk, and continuously improve AI systems in real-world production environments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <div className="mt-30" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="btn btn-brand-1" style={{ width: 'auto', padding: '10px 30px' }}>Start Collaborating</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#0b5bff' }}>Infrastructure & Operations</p>
                                        <h1 className="mb-10 color-brand-1" style={{ 
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                            fontWeight: 800, 
                                            lineHeight: 1.05, 
                                            textAlign: 'center', // Center the title
                                            marginBottom: '0.5rem', 
                                            minHeight: '120px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            whiteSpace: 'normal', 
                                            overflow: 'visible', 
                                            textOverflow: 'clip' 
                                        }}>Operate AI Systems with Enterprise Reliability</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ 
                                            maxWidth: '720px', 
                                            margin: '0 auto', // Center content
                                            textAlign: 'center', // Center content text
                                            fontSize: '1rem', 
                                            lineHeight: '1.8', 
                                            fontWeight: 400, 
                                            fontFamily: 'Arial, sans-serif', 
                                            color: '#5a6b7a' 
                                        }}>Enterprise MLOps and DevOps services that support secure AI training pipelines, automated deployments, continuous monitoring, and scalable cloud infrastructure. Built to integrate with existing enterprise cloud platforms and global deployments, ensuring reliability, performance, and operational control for AI workloads.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <div className="mt-30" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="btn btn-brand-1" style={{ width: 'auto', padding: '10px 30px' }}>Build Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#0b5bff' }}>Expert Network</p>
                                        <h1 className="mb-10 color-brand-1" style={{ 
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                            fontWeight: 800, 
                                            lineHeight: 1.05, 
                                            textAlign: 'center', // Center the title
                                            marginBottom: '0.5rem', 
                                            minHeight: '120px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            whiteSpace: 'normal', 
                                            overflow: 'visible', 
                                            textOverflow: 'clip' 
                                        }}>Access Specialized AI Expertise On Demand</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ 
                                            maxWidth: '720px', 
                                            margin: '0 auto', // Center content
                                            textAlign: 'center', // Center content text
                                            fontSize: '1rem', 
                                            lineHeight: '1.8', 
                                            fontWeight: 400, 
                                            fontFamily: 'Arial, sans-serif', 
                                            color: '#5a6b7a' 
                                        }}>A global, vetted AI expert network providing on-demand access to specialized practitioners for search, personalization, and domain-specific AI initiatives. Enterprises can quickly engage experienced AI professionals without long-term hiring, while maintaining governance, security, and delivery accountability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <div className="mt-30" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="btn btn-brand-1" style={{ width: 'auto', padding: '10px 30px' }}>Try Flex</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero-pagination" />
                </>
                ) : (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#0b5bff' }}>Enterprise AI Solutions</p>
                                        <h1 className="mb-10 color-brand-1" style={{ 
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                                            fontWeight: 800, 
                                            lineHeight: 1.05, 
                                            textAlign: 'center',
                                            marginBottom: '0.5rem', 
                                            minHeight: '120px'
                                        }}>Enterprise Data Foundations for AI</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ 
                                            maxWidth: '720px', 
                                            margin: '0 auto',
                                            textAlign: 'center',
                                            fontSize: '1rem', 
                                            lineHeight: '1.8', 
                                            fontWeight: 400, 
                                            fontFamily: 'Arial, sans-serif', 
                                            color: '#5a6b7a' 
                                        }}>Enterprise data collection, data annotation, and supervised fine-tuning services designed for training and improving AI and machine learning models at scale. We deliver structured datasets using defined labeling schemas, multi-stage quality assurance, and full auditability to support production AI systems across industries and global markets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12">
                                        <div className="mt-30" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="btn btn-brand-1" style={{ width: 'auto', padding: '10px 30px' }}>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-pagination" aria-hidden="true">
                            <span className="swiper-pagination-bullet"></span>
                            <span className="swiper-pagination-bullet"></span>
                            <span className="swiper-pagination-bullet"></span>
                            <span className="swiper-pagination-bullet"></span>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    :global(.hero-pagination) {
                        position: relative;
                        margin-top: 0px;
                        display: flex !important;
                        justify-content: center !important;
                        gap: 8px !important;
                        z-index: 50 !important;
                        transform: translateY(-8px) !important;
                    }
                    /* Mobile adjustments: tighter paddings, smaller heading and nudge pagination */
                    @media (max-width: 767px) {
                        /* Place pagination absolutely so it's always above the CTA */
                        :global(.hero-pagination) {
                            position: absolute !important;
                            left: 50% !important;
                            bottom: 120px !important;
                            transform: translateX(-50%) !important;
                            margin: 0 !important;
                            z-index: 120 !important;
                        }
                        :global(.banner-slide-11) {
                            padding-top: 20px !important;
                            padding-bottom: 12px !important;
                        }
                        :global(.banner-slide-11 .col-lg-7), :global(.banner-slide-11 .col-md-9), :global(.banner-slide-11 .col-12) {
                            padding-left: 12px !important;
                            padding-right: 12px !important;
                        }
                        :global(.banner-slide-11 h1) {
                            min-height: auto !important;
                            font-size: clamp(1.6rem, 6.5vw, 2.2rem) !important;
                            line-height: 1.08 !important;
                            margin-bottom: 10px !important;
                            padding: 0 6px !important;
                        }
                        :global(.banner-slide-11 p) {
                            font-size: 0.95rem !important;
                            line-height: 1.6 !important;
                        }
                        :global(.banner-slide-11 .btn) {
                            padding: 8px 18px !important;
                        }
                    }
                    :global(.hero-pagination .swiper-pagination-bullet) {
                        width: 10px !important;
                        height: 10px !important;
                        background: #2563eb !important;
                        border-radius: 50% !important;
                        opacity: 0.5 !important;
                        cursor: pointer !important;
                        transition: opacity 0.3s ease !important;
                        margin: 0 4px !important;
                    }
                    :global(.hero-pagination .swiper-pagination-bullet-active) {
                        opacity: 1 !important;
                        background: #2563eb !important;
                    }
                `}</style>
            </div>


        </>
    );
};

export default HeroSlider;

