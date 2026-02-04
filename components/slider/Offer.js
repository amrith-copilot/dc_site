import React, { useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

/**
 * Auto-adjusts text size based on content length and available space
 */
const useAutoTextSize = () => {
    const adjustTextSize = (element) => {
        if (!element) return;
        
        const textLength = element.textContent.length;
        let fontSize;
        
        if (textLength <= 20) {
            fontSize = '16px';
        } else if (textLength <= 40) {
            fontSize = '15px';
        } else if (textLength <= 60) {
            fontSize = '14px';
        } else {
            fontSize = '13px';
        }
        
        element.style.fontSize = fontSize;
    };
    
    return adjustTextSize;
};

const Offer = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer1 .annotation-card-title');
            titles.forEach(adjustTextSize);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [adjustTextSize]);

    const data = [
        {
            title: "ADAS",
            description: "Enterprise-grade perception and sensor data supporting driver assistance systems, safety validation, and autonomous capabilities.",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "Retail",
            description: "Structured and enriched data enabling personalization, inventory optimization, order lifecycle tracking, and customer engagement at scale.",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Geo Spatial",
            description: "High-fidelity geospatial data for mapping, change detection, infrastructure planning, and location intelligence.",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "Mapping",
            description: "Curated spatial datasets supporting navigation, routing, localization, and enterprise mapping platforms.",
            color: "head-bg-4",
            img: "cross4.png",
        },
        {
            title: "Medical AI",
            description: "Clinically relevant, expert-labeled data supporting diagnostics, medical imaging, documentation, and compliant AI development.",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "Voice AI",
            description: "Enterprise speech and language datasets enabling transcription, conversational interfaces, and multilingual voice systems.",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Manufacturing",
            description: "Operational and visual data supporting quality inspection, defect detection, predictive maintenance, and process optimization.",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "Agriculture",
            description: "Remote sensing and field data supporting crop monitoring, yield forecasting, disease detection, and precision agriculture systems.",
            color: "head-bg-4",
            img: "cross4.png",
        },
        {
            title: "Social Media",
            description: "Multimodal content data supporting moderation, sentiment analysis, compliance, and recommendation systems.",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "Asset Management",
            description: "Structured financial and alternative datasets supporting portfolio analysis, risk modeling, reporting, and decision workflows.",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Fintech",
            description: "Transaction, document, and behavioral data supporting fraud detection, credit assessment, regulatory compliance, and automation.",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "RPA",
            description: "Document and workflow intelligence enabling automated processing, exception handling, and AI-assisted operations.",
            color: "head-bg-4",
            img: "cross4.png",
        },
        {
            title: "Physical AI",
            description: "Sensor, vision, and simulation data supporting robotics, autonomous systems, and real-world interaction modeling.",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "E-Commerce",
            description: "Multimodal data enabling search, recommendations, catalog intelligence, content generation, and lifecycle management.",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Insurance",
            description: "Claims, document, and image data supporting underwriting, risk assessment, fraud detection, and operational efficiency.",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "Sports & Media",
            description: "Video, audio, and text data supporting analytics, content indexing, personalization, and audience engagement.",
            color: "head-bg-4",
            img: "cross4.png",
        },
    ];


    return (
        <div className="offer1">
            <Swiper
                slidesPerView={4}
                spaceBetween={16}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                navigation={{
                    prevEl: ".offer1-prev",
                    nextEl: ".offer1-next",
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 16 },
                    575: { slidesPerView: 1, spaceBetween: 16 },
                    767: { slidesPerView: 1, spaceBetween: 16 },
                    991: { slidesPerView: 2, spaceBetween: 16 },
                    1199: { slidesPerView: 3, spaceBetween: 16 },
                    1350: { slidesPerView: 4, spaceBetween: 16 },
                }}
                className="swiper-annotation"
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="annotation-card">
                            <div className="annotation-card-content">
                                <h6 className="annotation-card-title">{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
            <div className="annotation-nav">
                <div className="offer1-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer1-next">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </div>
            </div>

            <style jsx>{`
                .swiper-annotation {
                    padding: 0 !important;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .swiper-annotation .swiper-slide {
                    display: flex;
                    align-items: stretch;
                }
                .annotation-card {
                    height: auto;
                    min-height: 200px;
                    padding: 24px;
                    background: white;
                    border-radius: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    text-align: left;
                    transition: 0.3s ease;
                    width: 100%;
                    border: 1px solid #e5e7eb;
                }
                .annotation-card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    width: 100%;
                }
                .annotation-card-title {
                    color: #0017e3;
                    font-weight: 600;
                    font-size: 16px;
                    margin: 0;
                    line-height: 1.3;
                    text-align: left;
                }
                .annotation-card p {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.6;
                    text-align: left;
                    word-wrap: break-word;
                }
                .annotation-card:hover {
                    background: var(--color-primary-100);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 20px;
                }
                .offer1-prev,
                .offer1-next {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                    cursor: pointer;
                    transition: 0.2s ease;
                }
                .offer1-prev:hover,
                .offer1-next:hover {
                    transform: scale(1.1);
                }
            `}</style>

        </div>
    );
};

export default Offer;

