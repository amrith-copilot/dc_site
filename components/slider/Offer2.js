import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer3 = () => {

    const data = [
        {
            title: "Generative AI",
            color: "head-bg-2",
            description: "Testing safety, reasoning, and hallucinations.We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/cross-platform-services"
        },
        {
            title: "Computer Vision",
            color: "head-bg-5",
            description: "Auditing detection and recognition models.We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/business-strategy-consulting"
        },
        {
            title: "Healthcare AI",
            color: "head-bg-3",
            description: "Ensuring fairness and compliance in medical data.We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/local-marketing-solutions"
        },
        {
            title: "Financial services AI",
            color: "head-bg-4",
            description: "Stress-testing risk-sensitive applications.We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/social-media-management"
        },
    ];
    return (
        <>
            <style jsx>{`
                .card-offer-style-3 {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .card-offer-style-3 .card-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .card-offer-style-3 .card-info p {
                    flex: 1;
                    display: flex;
                    align-items: flex-start;
                }
                
                .swiper-slide {
                    height: auto;
                    display: flex;
                }
            `}</style>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i} className={`swiper-slide`}>
                        <div className="card-offer-style-3">
                            <div className="card-head bg-13">
                                <div className="card-title">
                                    <h4 className="color-brand-1">{item.title}</h4>
                                </div>
                            </div>
                            <div className="card-info">
                                <p className="font-xl color-grey-500 mt-10 mb-15">{item.description}</p>
                                <div className="box-button-offer">
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="box-button-slider-bottom">
                <div className="swiper-button-prev swiper-button-prev-group-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-group-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Offer3;