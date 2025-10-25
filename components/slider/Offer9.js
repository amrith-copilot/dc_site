import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Offer9 = () => {
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
                                <h4 className="color-black-text">Text & Language Models</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Legal document summarization </strong>– fine-tuning models to produce concise, accurate summaries of lengthy contracts or case law.</li>
                                <li><strong>Financial report analysis </strong>– instruction datasets that train models to extract key insights, trends, and compliance data.</li>
                                <li><strong>Multilingual chatbot tuning </strong>– generating and validating dialogue datasets across multiple languages and cultural contexts.</li>
                                {/* <li><strong>E-commerce product enrichment </strong>– generating product descriptions, attributes, and tags with human validation for accuracy.</li>
                                <li><strong>Safety & toxicity filtering </strong>– HITL workflows for moderation prompts to ensure safe, brand-aligned outputs.</li> */}
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Code & Technical AI Models</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Code review automation </strong>– – datasets for models that check coding standards, security flaws, and suggest improvements.</li>
                                <li><strong>Bug-fixing & patch generation </strong>– human-validated examples where AI proposes code fixes, and annotators confirm correctness..</li>
                                <li><strong>API documentation generation </strong>– fine-tuning to auto-generate clear and accurate docs from codebases.</li>
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
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Clinical note summarization </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Medical image report drafting </strong>– training multimodal models that pair scans with expert-reviewed diagnostic text.</li>
                                <li><strong>Drug discovery text mining </strong>– entity tagging and relationship mapping in biomedical literature for knowledge extraction.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Multimodal & Vision Models</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Visual question answering (VQA) </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Image-to-text captioning </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Brand compliance checks </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                                <li><strong>Retail shelf analytics </strong>– ensuring models accurately capture symptoms, diagnoses, and treatments.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Enterprise Productivity</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Meeting summarization </strong>– instruction-tuning to capture decisions, tasks, and key points with human review for accuracy.</li>
                                <li><strong>Knowledge base creation </strong>– generating FAQs, SOPs, and training manuals from raw internal documents.</li>
                                <li><strong>Email drafting & classification </strong> – models tuned for tone, priority detection, and automatic routing.</li>
                            </ul>
                            <div className="box-button-offer"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-2">
                    <div className="card-offer-style-3">
                        <div className="card-head bg-13">
                            <div className="card-title">
                                <h4 className="color-black-text">Creative & Media</h4>
                            </div>
                        </div>
                        <div className="card-info">
                            <ul className="font-md color-grey-500 mt-10 mb-15">
                                <li><strong>Ad copy & campaign ideation </strong>– fine-tuned models to propose variations, with humans selecting the most effective ones.</li>
                                <li><strong>Script and story generation </strong>– datasets for narrative consistency, character alignment, and cultural sensitivity.</li>
                                <li><strong>Game dialogue creation </strong>– producing non-player character (NPC) dialogue with human validation for immersion and coherence.</li>
                            </ul>
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

export default Offer9;