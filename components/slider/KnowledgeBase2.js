import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Knowledgebase2 = () => {
    return (
        <>
            <style jsx>{`
                .card-guide {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .card-guide .card-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .card-guide .card-info ul {
                    flex: 1;
                    margin: 0;
                    padding-left: 1.2rem;
                    list-style-type: disc;
                }
                
                .card-guide .card-info li {
                    margin-bottom: 0.75rem;
                    line-height: 1.6;
                }
                
                .card-guide .card-info li strong {
                    font-weight: 600;
                    margin-right: 0.5rem;
                }
                
                .swiper-slide {
                    height: auto;
                    display: flex;
                }
            `}</style>
            
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-2",
                    nextEl: ".swiper-button-next-style-2",
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="card-guide">
                        <div className="card-image">
                            <img src="assets/imgs/page/help/icon1.svg" alt="Scalable Content Moderation" />
                        </div>
                        <div className="card-info">
                            <h5 className="color-brand-1 mb-15">Asynchronous</h5>
                            <ul className="font-md color-grey-500">
                                <li>Posts, comments, reviews, profiles, images.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-guide">
                        <div className="card-image">
                            <img src="assets/imgs/page/help/icon2.svg" alt="Accurate AI Moderation" />
                        </div>
                        <div className="card-info">
                            <h5 className="color-brand-1 mb-15">Metadata</h5>
                            <ul className="font-md color-grey-500">
                                <li>Tags, Product Listings, Ads</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-guide">
                        <div className="card-image">
                            <img src="assets/imgs/page/help/icon3.svg" alt="Compliant Moderation" />
                        </div>
                        <div className="card-info">
                            <h5 className="color-brand-1 mb-15">Synchronous</h5>
                            <ul className="font-md color-grey-500">
                                <li>Live video, voice chat, real-time streams</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-guide">
                        <div className="card-image">
                            <img src="assets/imgs/page/help/icon1.svg" alt="Flexible Workflows" />
                        </div>
                        <div className="card-info">
                            <h5 className="color-brand-1 mb-15">Structured + unstructured data sources</h5>
                            <ul className="font-md color-grey-500">
                                <li>(JSON, XML, APIs)</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-guide">
                        <div className="card-image">
                            <img src="assets/imgs/page/help/icon2.svg" alt="Human-Centric Approach" />
                        </div>
                        <div className="card-info">
                            <h5 className="color-brand-1 mb-15">Human-Centric</h5>
                            <ul className="font-md color-grey-500">
                                <li>Expert moderators ensure nuanced understanding and fairness.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Knowledgebase2; 