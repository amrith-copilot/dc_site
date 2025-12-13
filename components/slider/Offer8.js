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

const Offer8 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer8 .annotation-card-title, .offer8 h4');
            const lists = document.querySelectorAll('.offer8 .annotation-card li, .offer8 li');
            titles.forEach(adjustTextSize);
            lists.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);
    const data = [
        {
            title: "E-Commerce & Retail",
            items: [
                "Optimize product ranking and relevance.",
                "Build personalized product recommendations based on browsing and purchase history.",
                "Improve faceted search and filtering for better product discovery."
            ]
        },
        {
            title: "Media & Entertainment",
            items: [
                "Enhance content discovery with personalized recommendations across streaming platforms.",
                "Improve relevance ranking for news articles, videos, and podcasts.",
                "Build hybrid recommendation systems blending user preferences and content similarity."
            ]
        },
        {
            title: "Travel & Hospitality",
            items: [
                "Deliver personalized travel recommendations (hotels, destinations, activities).",
                "Optimize search relevance for accommodations and flight options.",
                "Build contextual recommendations based on traveler preferences and past bookings."
            ]
        },
        {
            title: "Healthcare & Life Sciences",
            items: [
                "Enhance search relevance in medical databases and research portals.",
                "Personalize patient content and wellness recommendations.",
                "Improve drug or clinical trial search for practitioners and researchers."
            ]
        },
        {
            title: "Financial Services",
            items: [
                "Help users discover the most relevant banking or investment products.",
                "Personalize financial advice and insights for different customer segments.",
                "Improve fraud detection models by labeling anomalous patterns in user data."
            ]
        },
        {
            title: "Voice, Conversational AI & Assistants",
            items: [
                "Train assistants to understand diverse intent phrasing.",
                "Deliver context-aware responses for FAQs or transactional tasks.",
                "Continuously adapt recommendations through feedback loops."
            ]
        },
        {
            title: "Education & EdTechs",
            items: [
                "Personalize learning content recommendations for students.",
                "Improve search relevance for educational resources and courses.",
                "Adapt recommendations to different learning styles and paces."
            ]
        },
        {
            title: "Marketplaces & Classifieds",
            items: [
                "Match buyers and sellers with greater accuracy.",
                "Improve local search results for services and listings.",
                "Personalize ranking of ads or listings to maximize engagement."
            ]
        }
    ];

    return (
        <div className="offer8">
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
                    prevEl: ".offer8-prev",
                    nextEl: ".offer8-next",
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
                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">E-Commerce & Retail</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Optimize product ranking and relevance.</li>
                                <li>Build personalized product recommendations based on browsing and purchase history.</li>
                                <li>Improve faceted search and filtering for better product discovery.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Media, Entertainment & Streaming</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Curate content playlists and recommendations tailored to individual user preferences.</li>
                                <li>Surface trending or long-tail content based on user interest signals.</li>
                                <li>Enhance search for multilingual, genre-based, or niche content.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Travel, Hospitality & Mobility</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Personalize search results for flights, hotels, or ride-sharing options based on context.</li>
                                <li>Recommend packages or experiences that align with user behavior and location.</li>
                                <li>Rank results dynamically for seasonal or real-time availability.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Enterprise Knowledge Management</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Enable employees to quickly retrieve relevant internal documents and insights.</li>
                                <li>Contextualize search for domain-specific terminology.</li>
                                <li>Improve discovery in knowledge bases, CRM, and support systems.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Healthcare & Life Sciences</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Enhance search relevance in medical databases and research portals.</li>
                                <li>Personalize patient content and wellness recommendations.</li>
                                <li>Improve drug or clinical trial search for practitioners and researchers.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Financial Services</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Help users discover the most relevant banking or investment products.</li>
                                <li>Personalize financial advice and insights for different customer segments.</li>
                                <li>Improve fraud detection models by labeling anomalous patterns in user data.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Voice, Conversational AI & Assistants</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Train assistants to understand diverse intent phrasing.</li>
                                <li>Deliver context-aware responses for FAQs or transactional tasks.</li>
                                <li>Continuously adapt recommendations through feedback loops.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Education & EdTechs</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Personalize learning content recommendations for students.</li>
                                <li>Improve search relevance for educational resources and courses.</li>
                                <li>Adapt recommendations to different learning styles and paces.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Marketplaces & Classifieds</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-xl color-grey-500 mt-10 mb-15">
                                <li>Match buyers and sellers with greater accuracy.</li>
                                <li>Improve local search results for services and listings.</li>
                                <li>Personalize ranking of ads or listings to maximize engagement.</li>
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
        </div>
    );
};

export default Offer4;