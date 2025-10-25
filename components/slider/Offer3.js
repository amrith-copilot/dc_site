import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer3 = () => {

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
                    <SwiperSlide key={i} className={`swiper-slide-2`}>
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