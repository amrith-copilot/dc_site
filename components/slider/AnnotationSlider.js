import React, { useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

/**
 * Auto-adjusts text size based on content length and available space
 */
const useAutoTextSize = () => {
    const adjustTextSize = (element) => {
        if (!element) return;
        
        const textLength = element.textContent.length;
        let fontSize;
        
        if (textLength <= 20) {
            fontSize = '16px';
        } else if (textLength <= 40) {
            fontSize = '15px';
        } else if (textLength <= 60) {
            fontSize = '14px';
        } else {
            fontSize = '13px';
        }
        
        element.style.fontSize = fontSize;
    };
    
    return adjustTextSize;
};

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
    const adjustTextSize = useAutoTextSize();
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
        // Auto-adjust text sizes and then normalize card heights so all cards match the tallest
        let resizeTimer;

        const adjustCardHeights = () => {
            const root = containerRef.current || document;
            const cards = root.querySelectorAll(`.${navId} .annotation-card`);
            if (!cards || cards.length === 0) return;

            // reset heights so measurement is natural
            cards.forEach((c) => (c.style.height = 'auto'));

            let max = 0;
            cards.forEach((c) => {
                const h = c.offsetHeight;
                if (h > max) max = h;
            });

            if (max > 0) cards.forEach((c) => (c.style.height = `${max}px`));
        };

        const runAdjustments = () => {
            const titles = document.querySelectorAll(`.${navId} .annotation-card-title`);
            const descriptions = document.querySelectorAll(`.${navId} .annotation-card p, .${navId} .annotation-card-list`);

            titles.forEach(adjustTextSize);
            descriptions.forEach(adjustTextSize);

            // allow browser to paint after font size change
            setTimeout(adjustCardHeights, 80);
        };

        const timer = setTimeout(runAdjustments, 120);

        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                runAdjustments();
            }, 150);
        };

        window.addEventListener('resize', onResize);

        return () => {
            clearTimeout(timer);
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', onResize);
        };
    }, [adjustTextSize, navId, items]);

    return (
        <>
            <section className={`section mt-100 pt-60 pb-60 ${navId}`}>
                <div className="container" ref={containerRef}>
                    <div className="row ">
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
                                        {item.description && (
                                            Array.isArray(item.description) ? (
                                                <ul className="annotation-card-list">
                                                    {item.description.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{item.description}</p>
                                            )
                                        )}
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
                    color: white;
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 40px;
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
                    cursor: pointer;
                    transition: 0.2s ease;
                    border: 1px solid var(--border-light);
                }
                .${prevClass}:hover,
                .${nextClass}:hover {
                    transform: scale(1.1);
                    border: 1px solid var(--border-light);
                }
            `}</style>
        </>
    );
};

export default AnnotationSlider;

