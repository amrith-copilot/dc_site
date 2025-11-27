import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Offer5 = () => {
    return (
        <>
            <style jsx>{`
                .card-offer-style-3 {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    flex: 1; /* allow the card to grow to fill the slide */
                }

                .card-offer-style-3 .card-info {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                /* remove bullets and left padding so there is no point symbol */
                .card-offer-style-3 .card-info ul {
                    margin: 0;
                    padding-left: 0;
                    list-style: none;
                }

                .card-offer-style-3 .card-info li {
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }

                /* ensure all slides stretch to the same height and cards fill them */
                .swiper-wrapper {
                    display: flex;
                    align-items: stretch;
                }

                .swiper-wrapper .swiper-slide {
                    display: flex;
                    align-items: stretch;
                    height: auto;
                }

                .swiper-slide .card-offer-style-3 {
                    /* make sure the card uses full available height inside the slide */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
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
                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Healthcare </h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Test medical AI for patient safety.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Healthcare</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Test medical AI for patient safety.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Financial Services</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Ensure fraud detection and credit scoring are secure and unbiased.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Autonomous Systems</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Check vision systems in cars, drones, and robots.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Generative AI</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Keep text, images, and videos safe for public use.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Security & Surveillance</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Stress-test facial recognition and threat detection.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>
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

export default Offer5;