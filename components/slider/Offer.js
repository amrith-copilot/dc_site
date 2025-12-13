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
            title: "Cross-Platform",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "Business strategy",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Local Marketing",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "Social Media",
            color: "head-bg-4",
            img: "cross4.png",
        },
    ];


    return (
        <div className="offer1">
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
                    prevEl: ".offer1-prev",
                    nextEl: ".offer1-next",
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
                                <p>Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their craft! All products were super amazing with strong attention to details, comps and overall vibe.</p>
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
                }
                .swiper-annotation .swiper-slide {
                    display: flex;
                    align-items: stretch;
                }
                .annotation-card {
                    height: 200px;
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

