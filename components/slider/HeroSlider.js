import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Navigation,Pagination]);

const HeroSlider = () => {

    const heroBackgroundStyle = {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(to bottom, #ffffff 0%, #f0f7ff 100%)',
        position: 'relative',
        overflow: 'hidden'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top, rgba(0, 112, 243, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0, 168, 255, 0.08) 0%, transparent 40%)',
        pointerEvents: 'none'
    };

    const gridOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(0, 112, 243, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 112, 243, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none'
    };

    return (
        <>
            <div style={heroBackgroundStyle}>
                <div style={overlayStyle}></div>
                <div style={gridOverlayStyle}></div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={true}
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
                            width: '100%'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12 text-center">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>Enterprise AI Solutions</p>
                                        <h1 className="mb-25 color-brand-1" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>Enterprise Data Foundations for AI</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ maxWidth: '600px', margin: '0 auto' }}>Data collection, Data annotation, and supervised fine-tuning delivered with defined schemas, quality controls, and auditability.</p>
                                        <div className="mt-30">
                                            <button className="btn btn-brand-1 btn-xl">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12 text-center">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>Post-Training Services</p>
                                        <h1 className="mb-25 color-brand-1" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>Post-Training That Improves Production Outcomes</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ maxWidth: '600px', margin: '0 auto' }}>HITL workflows, RLHF, red teaming, and AI evaluations to align, validate, and harden deployed models.</p>
                                        <div className="mt-30">
                                            <button className="btn btn-brand-1 btn-xl">Start Collaborating</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12 text-center">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>Infrastructure & Operations</p>
                                        <h1 className="mb-25 color-brand-1" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>Operate AI Systems with Enterprise Reliability</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ maxWidth: '600px', margin: '0 auto' }}>MLOps and DevOps services supporting secure training pipelines, deployments, monitoring, and scale.</p>
                                        <div className="mt-30">
                                            <button className="btn btn-brand-1 btn-xl">Build Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" style={{ height: '100%', width: '100%' }}>
                        <div className="banner-slide-11 d-flex align-items-center justify-content-center" style={{ 
                            height: '100%', 
                            width: '100%'
                        }}>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-md-9 col-12 text-center">
                                        <p className="font-md mb-15 color-brand-1" style={{ fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>Expert Network</p>
                                        <h1 className="mb-25 color-brand-1" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>Access Specialized AI Expertise On Demand</h1>
                                        <p className="font-lg mb-40 color-grey-500" style={{ maxWidth: '600px', margin: '0 auto' }}>A vetted expert network supporting search, personalization, and domain-specific AI initiatives.</p>
                                        <div className="mt-30">
                                            <button className="btn btn-brand-1 btn-xl">Try Flex</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </>
    );
};

export default HeroSlider;

