import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer7 = () => {

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
        <div className="offer7">
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
                    prevEl: ".offer7-prev",
                    nextEl: ".offer7-next",
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
                <div className="offer7-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer7-next">
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
                .annotation-card p {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
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
                .offer7-prev,
                .offer7-next {
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
                .offer7-prev:hover,
                .offer7-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer7;