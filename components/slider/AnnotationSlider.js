import React, { useEffect, useRef, useState } from "react";
// HandSwiper overlay removed per request
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Register Swiper modules only on the client to avoid server-side execution
// that can trigger webpack/SSR issues.


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
// Register Swiper modules on the client synchronously so the Swiper
// instance sees `autoplay` during the initial render. Doing this inside
// a component effect can be too late (effect runs after first render).
// Use the modern `modules` prop on the Swiper component instead of
// calling SwiperCore.use(...) which can run into SSR/undefined issues.

const AnnotationSlider = ({ items, title, subtitle, navId = 'annotation' }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const prevClass = `${navId}-prev`;
    const nextClass = `${navId}-next`;
    const adjustTextSize = useAutoTextSize();
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    // Touch / pointer swipe refs for manual fallback
    const touchStartX = useRef(0);
    const touchCurrentX = useRef(0);
    const isDragging = useRef(false);
    const SWIPE_THRESHOLD = 50; // px
    
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

    // pagination removed; navigation arrows are used instead

    // Attach fallback click handlers for prev/next nav buttons in case Swiper didn't wire them
    useEffect(() => {
        if (!containerRef.current || !swiperRef.current) return;
        const prevBtn = containerRef.current.querySelector(`.${prevClass}`);
        const nextBtn = containerRef.current.querySelector(`.${nextClass}`);
        const listeners = [];

        if (prevBtn) {
            const onPrev = (e) => { e.preventDefault(); if (swiperRef.current && typeof swiperRef.current.slidePrev === 'function') swiperRef.current.slidePrev(); };
            prevBtn.addEventListener('click', onPrev);
            listeners.push([prevBtn, onPrev]);
            prevBtn.style.cursor = 'pointer';
        }

        if (nextBtn) {
            const onNext = (e) => { e.preventDefault(); if (swiperRef.current && typeof swiperRef.current.slideNext === 'function') swiperRef.current.slideNext(); };
            nextBtn.addEventListener('click', onNext);
            listeners.push([nextBtn, onNext]);
            nextBtn.style.cursor = 'pointer';
        }

        return () => {
            listeners.forEach(([el, fn]) => el.removeEventListener('click', fn));
        };
    }, [mounted, swiperRef.current]);

    // render normally; component will be exported as client-only to avoid SSR hydration issues

    return (
        <>
            <section className={`section mt-100 pt-60 pb-60 ${navId} swiper-group-1`}>
                        <div
                            className="container"
                            ref={containerRef}
                            style={{position: 'relative'}}
                            onTouchStart={(e) => {
                                const x = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
                                touchStartX.current = x;
                                touchCurrentX.current = x;
                                isDragging.current = true;
                            }}
                            onTouchMove={(e) => {
                                if (!isDragging.current) return;
                                touchCurrentX.current = e.touches && e.touches[0] ? e.touches[0].clientX : touchCurrentX.current;
                            }}
                            onTouchEnd={() => {
                                if (!isDragging.current) return;
                                const dx = touchCurrentX.current - touchStartX.current;
                                if (Math.abs(dx) > SWIPE_THRESHOLD && swiperRef.current) {
                                    if (dx < 0) swiperRef.current.slideNext(); else swiperRef.current.slidePrev();
                                }
                                isDragging.current = false;
                                touchStartX.current = 0;
                                touchCurrentX.current = 0;
                            }}
                            onPointerDown={(e) => {
                                touchStartX.current = e.clientX;
                                touchCurrentX.current = e.clientX;
                                isDragging.current = true;
                            }}
                            onPointerMove={(e) => {
                                if (!isDragging.current) return;
                                touchCurrentX.current = e.clientX;
                            }}
                            onPointerUp={() => {
                                if (!isDragging.current) return;
                                const dx = touchCurrentX.current - touchStartX.current;
                                if (Math.abs(dx) > SWIPE_THRESHOLD && swiperRef.current) {
                                    if (dx < 0) swiperRef.current.slideNext(); else swiperRef.current.slidePrev();
                                }
                                isDragging.current = false;
                                touchStartX.current = 0;
                                touchCurrentX.current = 0;
                            }}
                        >
                    {/* hand hint removed */}
                    <div className="row ">
                        <div className="col-lg-12 text-center">
                            <h2 className="color-brand-1 mb-20">{title}</h2>
                            <p className="font-lg color-grey-500 mb-40">{subtitle}</p>
                        </div>
                    </div>

                    <Swiper modules={[Autoplay, Navigation]}
                        onSwiper={(s) => { swiperRef.current = s; }}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        loopedSlides={items.length}
                        /* pagination disabled: using only navigation arrows */
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
                        <button className={prevClass} aria-label="Previous slide" type="button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 12 H8 M12 6 L6 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className={nextClass} aria-label="Next slide" type="button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6 12 H16 M12 6 L18 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>
            </section>

            <style jsx>{`
                .swiper-annotation {
                    padding: 0 !important;
                    cursor: grab;
                }
                .swiper-annotation.swiper-grabbing {
                    cursor: grabbing;
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
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 8px;
                    width: 4px;
                    height: 4px;
                    background-color: #000;
                    border-radius: 50%;
                    display: block;
                }
                .annotation-card:hover {
                    background: white !important;
                    box-shadow: 0 8px 24px rgba(11, 95, 255, 0.15) !important;
                    transform: translateY(-4px);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 40px;
                }
                .${prevClass},
                .${nextClass} {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #ffffff;
                    cursor: pointer;
                    transition: 0.2s ease;
                    border: 1px solid #e6e6e6;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                    padding: 0;
                }
                /* Prevent color/background changes on click/active/focus */
                .${prevClass}:active,
                .${nextClass}:active,
                .${prevClass}.active,
                .${nextClass}.active,
                .${prevClass}:focus,
                .${nextClass}:focus {
                    background: white !important;
                    color: #000 !important;
                    border: 1px solid var(--border-light) !important;
                    box-shadow: none !important;
                    transform: none !important;
                }
                .${prevClass} svg, .${nextClass} svg { color: #000; width: 18px; height: 18px; }
                .${prevClass}:hover,
                .${nextClass}:hover {
                    transform: scale(1.1);
                    border: 1px solid var(--border-light);
                }
                /* Mobile: show arrow nav and keep right pagination available */
                @media (max-width: 768px) {
                    /* show arrow nav below the slider (not overlay) on mobile */
                    .annotation-nav {
                        display: flex !important;
                        position: static !important;
                        bottom: unset !important;
                        left: unset !important;
                        transform: none !important;
                        gap: 16px;
                        z-index: 1;
                        align-items: center;
                        justify-content: center;
                        margin-top: 18px;
                        margin-bottom: 8px;
                    }

                    /* pagination removed: using arrow navigation only */
                }
            `}</style>
        </>
    );
};

export default AnnotationSlider;

