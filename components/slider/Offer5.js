import React, { useEffect } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const useAutoTextSize = () => {
    const adjustTextSize = (element) => {
        if (!element) return;
        const textLength = element.textContent.length;
        let fontSize = textLength <= 20 ? '16px' : textLength <= 40 ? '15px' : textLength <= 60 ? '14px' : '13px';
        element.style.fontSize = fontSize;
    };
    return adjustTextSize;
};

const Offer5 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer5 .annotation-card-title');
            const lists = document.querySelectorAll('.offer5 .annotation-card li');
            titles.forEach(adjustTextSize);
            lists.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);
    const data = [
        {
            title: "Healthcare",
            description: "Test medical AI for patient safety."
        },
        {
            title: "Financial Services",
            description: "Ensure fraud detection and credit scoring are secure and unbiased."
        },
        {
            title: "Autonomous Systems",
            description: "Check vision systems in cars, drones, and robots."
        },
        {
            title: "Generative AI",
            description: "Keep text, images, and videos safe for public use."
        },
        {
            title: "Security & Surveillance",
            description: "Stress-test facial recognition and threat detection."
        }
    ];

    return (
        <div className="offer5">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                navigation={{
                    prevEl: ".offer5-prev",
                    nextEl: ".offer5-next",
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    575: { slidesPerView: 1, spaceBetween: 20 },
                    767: { slidesPerView: 1, spaceBetween: 20 },
                    991: { slidesPerView: 2, spaceBetween: 20 },
                    1199: { slidesPerView: 3, spaceBetween: 20 },
                    1350: { slidesPerView: 4, spaceBetween: 20 },
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
                <div className="offer5-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer5-next">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </div>
            </div>

            <style jsx>{`
                .swiper-annotation {
                    padding: 0 !important;
                }
                .swiper-annotation .swiper-slide {
                    display: flex;
                    align-items: stretch;
                }
                .annotation-card {
                    height: 180px;
                    padding: 30px;
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    text-align: left;
                    transition: 0.3s ease;
                    width: 100%;
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
                    line-height: 1.4;
                }
                .annotation-card p {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.5;
                }
                .annotation-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 24px rgba(0,0,0,0.15);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }
                .offer5-prev,
                .offer5-next {
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
                .offer5-prev:hover,
                .offer5-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer5;