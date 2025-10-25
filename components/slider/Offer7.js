import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer2 = () => {

    const data = [
        {
            title: "Finance / Accounting",
            color: "head-bg-2",
            description: "Invoice parsing, AP automation, bank statement ingestion.",
            link: "/cross-platform-services"
        },
        {
            title: "Insurance",
            color: "head-bg-5",
            description: "Claims intake, policy document extraction, loss adjuster reports.",
            link: "/business-strategy-consulting"
        },
        {
            title: "Healthcare",
            color: "head-bg-3",
            description: "EMR digitization, discharge summaries, patient intake forms (HIPAA-ready processes available).",
            link: "/local-marketing-solutions"
        },
        {
            title: "Legal & Compliance",
            color: "head-bg-4",
            description: "Contract clause extraction, e-discovery indexing, searchable archives.",
            link: "/social-media-management"
        },
        {
            title: "Government / Census / Surveys",
            color: "head-bg-5",
            description: "Large batch processing, identity & KYC data capture.",
            link: "/social-media-management"
        },
    ];


    return (
        <>
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

export default Offer2;