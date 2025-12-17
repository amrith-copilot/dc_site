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

const Offer3 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer3 .annotation-card-title');
            const descriptions = document.querySelectorAll('.offer3 .annotation-card p');
            titles.forEach(adjustTextSize);
            descriptions.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);

    const data = [
        {
            title: "Agriculture",
            color: "head-bg-2",
            description: "We help enable precision agriculture with our high quality annotation services that extracts information from image and video data. Our data enables AI models that improves yield, reduces wastage and water usage and protect crops from diseases.",
            link: "/agriculture-services"
        },
        {
            title: "E Commerce",
            color: "head-bg-5",
            description: "E commerce and content companies leverage our annotation services to improve the performance of their models for product and content recommendations.",
            link: "/ecommerce-solutions"
        },
        {
            title: "ADAS",
            color: "head-bg-3",
            description: "Autonomous vehicle technology will revolutionize the way people move by improving safety and efficiency. Some of our annotation capabilities include 2D and 3D bounding boxes, image segmentation, sensor fusion, 3D point cloud annotation and lane marking.",
            link: "/adas-solutions"
        },
        {
            title: "Geospatial",
            color: "head-bg-4",
            description: "Training data annotated by us enable computer vision based solutions that are used by geospatial companies to extract intelligence and insights from ultra high-volume satellite, aerial and drone imagery to optimize decision making for industries such as insurance, financial services and energy.",
            link: "/geospatial-services"
        },
        {
            title: "Insurance",
            color: "head-bg-1",
            description: "The Banking, Financial and Insurance sectors use AI, Machine Learning and Computer Vision solutions to improve operations and serve their customers in a better way. We help them build better AI.",
            link: "/insurance-solutions"
        },
        {
            title: "Manufacturing",
            color: "head-bg-7",
            description: "AI plays a big part in Industry 4.0 and our annotation services are helping the manufacturing industry in adopting new technologies to improve quality and efficiency.",
            link: "/manufacturing-services"
        },
    ];

    return (
        <div className="offer3">
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
                    prevEl: ".offer3-prev",
                    nextEl: ".offer3-next",
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
                <div className="offer3-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer3-next">
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
                    height: 230px;
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
                .offer3-prev,
                .offer3-next {
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
                .offer3-prev:hover,
                .offer3-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer3;