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

const Offer4 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer4 .annotation-card-title');
            const lists = document.querySelectorAll('.offer4 .annotation-card li');
            titles.forEach(adjustTextSize);
            lists.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);
    const data = [
        {
            title: "Social Media & Community Platforms",
            items: [
                "Detect and remove hate speech, misinformation, and explicit content",
                "Maintain brand safety and user trust",
                "Prevent online harassment and cyberbullying"
            ]
        },
        {
            title: "E-Commerce & Marketplaces",
            items: [
                "Product listing compliance (e.g., no counterfeit or banned goods)",
                "Fraudulent or misleading review detection",
                "Image moderation for listings (logos, NSFW content)"
            ]
        },
        {
            title: "Gaming & Virtual Worlds",
            items: [
                "In-game chat moderation (toxic behavior, harassment)",
                "Voice moderation for multiplayer environments",
                "Safe community forums and player-generated content"
            ]
        },
        {
            title: "Media & Entertainment",
            items: [
                "Pre-screening of UGC submissions (fan art, comments, uploads)",
                "Live event moderation for chat feeds and streams",
                "Protecting IP from pirated or illegal uploads"
            ]
        },
        {
            title: "Education & EdTech Platforms",
            items: [
                "Student chat and forum moderation",
                "Prevent exposure to harmful content in learning communities",
                "Compliance with COPPA and child safety regulations"
            ]
        },
        {
            title: "Finance & Fintech",
            items: [
                "Moderation of customer communication channels",
                "Fraud and scam detection in chatbots and reviews",
                "Sensitive information masking (PII protection)"
            ]
        },
        {
            title: "Healthcare Platforms",
            items: [
                "Community forum moderation (patient groups, reviews)",
                "Preventing misinformation related to treatments or drugs",
                "Protecting vulnerable users from harmful content"
            ]
        },
        {
            title: "Dating & Social Discovery Apps",
            items: [
                "Profile photo and bio moderation (nudity, offensive content)",
                "Chat moderation to prevent harassment",
                "Fake profile detection and identity fraud prevention"
            ]
        },
        {
            title: "Advertising & Brand Safety",
            items: [
                "Ensuring ad creatives meet platform guidelines",
                "Blocking inappropriate ad placement next to harmful content",
                "Contextual targeting for safe environments"
            ]
        }
    ];

    return (
        <div className="offer4">
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
                    prevEl: ".offer4-prev",
                    nextEl: ".offer4-next",
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
                                <ul className="annotation-card-list">
                                    {item.items.map((listItem, index) => (
                                        <li key={index}>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="annotation-nav">
                <div className="offer4-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer4-next">
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
                    padding: 8px;
                }
                .annotation-card {
                    min-height: 140px;
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
                .annotation-card-list {
                    margin: 0;
                    padding-left: 20px;
                    list-style: none;
                }
                .annotation-card-list li {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 8px;
                    position: relative;
                    padding-left: 16px;
                }
                .annotation-card-list li::before {
                    content: '▸';
                    position: absolute;
                    left: 0;
                    color: #0017e3;
                    font-weight: bold;
                }
                .annotation-card:hover {
                    background: var(--color-primary-100);
                }
                /* Keep text readable on hover: force title, paragraphs and list items to black */
                .annotation-card:hover .annotation-card-content ul,
                .annotation-card:hover .annotation-card-content li,
                .annotation-card:hover .annotation-card-content p {
                    color: #000 !important;
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 40px;
                }
                .offer4-prev,
                .offer4-next {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    transition: 0.2s ease;
                    border: 1px solid var(--border-light);
                }
                .offer4-prev:hover,
                .offer4-next:hover {
                    transform: scale(1.1);
                    border: 1px solid var(--border-light);
                }
            `}</style>
        </div>
    );
};

export default Offer4;