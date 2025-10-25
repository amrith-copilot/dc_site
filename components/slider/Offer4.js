import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Offer4 = () => {
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
                
                .card-offer-style-3 .card-info ul {
                    flex: 1;
                    margin: 0;
                    padding-left: 1.2rem;
                    list-style-type: disc;
                }
                
                .card-offer-style-3 .card-info li {
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
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
                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Social Media & Community Platforms</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Detect and remove hate speech, misinformation, and explicit content</li>
                                <li>Maintain brand safety and user trust</li>
                                <li>Prevent online harassment and cyberbullying</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">E-Commerce & Marketplaces</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Product listing compliance (e.g., no counterfeit or banned goods)</li>
                                <li>Fraudulent or misleading review detection</li>
                                <li>Image moderation for listings (logos, NSFW content)</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Gaming & Virtual Worlds</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>In-game chat moderation (toxic behavior, harassment)</li>
                                <li>Voice moderation for multiplayer environments</li>
                                <li>Safe community forums and player-generated content</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Media & Entertainment</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Pre-screening of UGC submissions (fan art, comments, uploads)</li>
                                <li>Live event moderation for chat feeds and streams</li>
                                <li>Protecting IP from pirated or illegal uploads</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Education & EdTech Platforms</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Student chat and forum moderation</li>
                                <li>Prevent exposure to harmful content in learning communities</li>
                                <li>Compliance with COPPA and child safety regulations</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Finance & Fintech</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Moderation of customer communication channels</li>
                                <li>Fraud and scam detection in chatbots and reviews</li>
                                <li>Sensitive information masking (PII protection)</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Healthcare Platforms</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Community forum moderation (patient groups, reviews)</li>
                                <li>Preventing misinformation related to treatments or drugs</li>
                                <li>Protecting vulnerable users from harmful content</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Dating & Social Discovery Apps</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Profile photo and bio moderation (nudity, offensive content)</li>
                                <li>Chat moderation to prevent harassment</li>
                                <li>Fake profile detection and identity fraud prevention</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-brand-1">Advertising & Brand Safety</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Ensuring ad creatives meet platform guidelines</li>
                                <li>Blocking inappropriate ad placement next to harmful content</li>
                                <li>Contextual targeting for safe environments</li>
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

export default Offer4;