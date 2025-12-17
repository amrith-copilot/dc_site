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

const Offer10 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer10 .annotation-card-title');
            const lists = document.querySelectorAll('.offer10 .annotation-card li');
            titles.forEach(adjustTextSize);
            lists.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);
    return (
        <div className="offer10">
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
                    prevEl: ".offer10-prev",
                    nextEl: ".offer10-next",
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
                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Healthcare</h6>
                            <ul>
                                <li>Clinical notes, speech for telehealth, medical imaging (with strict compliance).</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Automotive & Robotics</h6>
                            <ul>
                                <li>Lane/obstacle video, LIDAR point clouds, sensor fusion datasets.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Retail & eCommerce</h6>
                            <ul>
                                <li>Product text, search logs, user-behavior telemetry, visual product images.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Finance & Insurance</h6>
                            <ul>
                                <li>Transactional text, claims audio, document capture (secure handling).</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Telecom & IoT</h6>
                            <ul>
                                <li>Network telemetry, device logs, acoustic monitoring.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Consumer AI</h6>
                            <ul>
                                <li>Chat/corpus collection, voice assistants, multi-language support.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className="annotation-nav">
                <div className="offer10-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer10-next">
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
                    display: flex;
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
                    line-height: 1.4;
                }
                .annotation-card ul {
                    margin: 0;
                    padding-left: 1.2rem;
                    list-style-type: disc;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.5;
                }
                .annotation-card li {
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }
                .annotation-card:hover {
                    background: var(--color-primary-100);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }
                .offer10-prev,
                .offer10-next {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    transition: 0.2s ease;
                    border: 1px solid #e5e7eb;
                }
                .offer10-prev:hover,
                .offer10-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer10;