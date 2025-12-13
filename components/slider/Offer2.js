import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer2 = () => {

    const data = [
        {
            title: "Generative AI",
            color: "head-bg-2",
            description: "Testing safety, reasoning, and hallucinations. We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/cross-platform-services"
        },
        {
            title: "Computer Vision",
            color: "head-bg-5",
            description: "Auditing detection and recognition models. We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/business-strategy-consulting"
        },
        {
            title: "Healthcare AI",
            color: "head-bg-3",
            description: "Ensuring fairness and compliance in medical data. We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/local-marketing-solutions"
        },
        {
            title: "Financial services AI",
            color: "head-bg-4",
            description: "Stress-testing risk-sensitive applications. We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/social-media-management"
        },
    ];
    return (
        <div className="offer2">
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
                    prevEl: ".offer2-prev",
                    nextEl: ".offer2-next",
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
                <div className="offer2-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer2-next">
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
                    height: 250px;
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
                .offer2-prev,
                .offer2-next {
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
                .offer2-prev:hover,
                .offer2-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer2;