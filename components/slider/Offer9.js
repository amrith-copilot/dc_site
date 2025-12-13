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

const Offer9 = () => {
    const adjustTextSize = useAutoTextSize();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const titles = document.querySelectorAll('.offer9 .annotation-card-title');
            const lists = document.querySelectorAll('.offer9 .annotation-card li');
            titles.forEach(adjustTextSize);
            lists.forEach(adjustTextSize);
        }, 100);
        return () => clearTimeout(timer);
    }, [adjustTextSize]);
    return (
        <div className="offer9">
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
                    prevEl: ".offer9-prev",
                    nextEl: ".offer9-next",
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
                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Text & Language Models</h6>
                            <ul>
                                <li><strong>Legal document summarization </strong>– fine-tuning models to produce concise, accurate summaries of lengthy contracts or case law.</li>
                                <li><strong>Financial report analysis </strong>– instruction datasets that train models to extract key insights, trends, and compliance data.</li>
                                <li><strong>Multilingual chatbot tuning </strong>– generating and validating dialogue datasets across multiple languages and cultural contexts.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Code & Technical AI Models</h6>
                            <ul>
                                <li><strong>Code review automation </strong>– – datasets for models that check coding standards, security flaws, and suggest improvements.</li>
                                <li><strong>Bug-fixing & patch generation </strong>– human-validated examples where AI proposes code fixes, and annotators confirm correctness..</li>
                                <li><strong>API documentation generation </strong>– fine-tuning to auto-generate clear and accurate docs from codebases.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Healthcare & Life Sciences</h6>
                            <ul>
                                <li><strong>Clinical note summarization </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Medical image report drafting </strong>– training multimodal models that pair scans with expert-reviewed diagnostic text.</li>
                                <li><strong>Drug discovery text mining </strong>– entity tagging and relationship mapping in biomedical literature for knowledge extraction.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Multimodal & Vision Models</h6>
                            <ul>
                                <li><strong>Visual question answering (VQA) </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Image-to-text captioning </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Brand compliance checks </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Retail shelf analytics </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Enterprise Productivity</h6>
                            <ul>
                                <li><strong>Meeting summarization </strong>– instruction-tuning to capture decisions, tasks, and key points with human review for accuracy.</li>
                                <li><strong>Knowledge base creation </strong>– generating FAQs, SOPs, and training manuals from raw internal documents.</li>
                                <li><strong>Email drafting & classification </strong> – models tuned for tone, priority detection, and automatic routing.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="annotation-card">
                        <div className="annotation-card-content">
                            <h6 className="annotation-card-title">Creative & Media</h6>
                            <ul>
                                <li><strong>Ad copy & campaign ideation </strong>– fine-tuned models to propose variations, with humans selecting the most effective ones.</li>
                                <li><strong>Script and story generation </strong>– datasets for narrative consistency, character alignment, and cultural sensitivity.</li>
                                <li><strong>Game dialogue creation </strong>– producing non-player character (NPC) dialogue with human validation for immersion and coherence.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className="annotation-nav">
                <div className="offer9-prev">
                    <svg width="26" height="26" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </div>
                <div className="offer9-next">
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
                    height: 350px;
                    padding: 30px;
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    text-align: left;
                    transition: 0.3s ease;
                    width: 100%;
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
                .annotation-card ul {
                    margin: 0;
                    padding-left: 1.2rem;
                    list-style-type: disc;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.5;
                }
                .annotation-card li {
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }
                .annotation-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 24px rgba(0,0,0,0.15);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }
                .offer9-prev,
                .offer9-next {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                    cursor: pointer;
                    transition: 0.2s ease;
                }
                .offer9-prev:hover,
                .offer9-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Offer9;