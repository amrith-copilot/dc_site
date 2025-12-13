import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

/**
 * Reusable Annotation Slider Component
 * @param {Array} items - Array of objects with title and description
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle/description
 * @param {string} navId - Unique ID for navigation (default: 'annotation')
 */
const AnnotationSlider = ({ items, title, subtitle, navId = 'annotation' }) => {
    const prevClass = `${navId}-prev`;
    const nextClass = `${navId}-next`;

    return (
        <>
            <section className="section mt-100 pt-60 pb-60 bg-grey-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="color-brand-1 mb-20">{title}</h2>
                            <p className="font-lg color-grey-500 mb-40">{subtitle}</p>
                        </div>
                    </div>

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
                            prevEl: `.${prevClass}`,
                            nextEl: `.${nextClass}`,
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
                        {items.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="annotation-card">
                                    <div className="annotation-card-content">
                                        <h6 className="annotation-card-title">{item.title}</h6>
                                        {item.description && <p>{item.description}</p>}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="annotation-nav">
                        <div className={prevClass}>
                            <svg width="26" height="26" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </div>
                        <div className={nextClass}>
                            <svg width="26" height="26" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .swiper-annotation {
                    padding: 0 !important;
                }
                .swiper-annotation .swiper-slide {
                    display: flex;
                    align-items: stretch;
                }
                .annotation-card {
                    height: 140px;
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
                .annotation-card p {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
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
                .${prevClass},
                .${nextClass} {
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
                .${prevClass}:hover,
                .${nextClass}:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
};

export default AnnotationSlider;

