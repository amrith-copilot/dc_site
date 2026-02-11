import React, { useState, useEffect, useRef } from 'react';
// HandSwiper and HandGrab overlays removed per request

const CardSlider = ({ cards, pageId, mobileCardsPerSlide = 1 }) => {
    const [cardSlideIndex, setCardSlideIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(mobileCardsPerSlide);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Touch / pointer swipe refs
    const touchStartX = useRef(0);
    const touchCurrentX = useRef(0);
    const isDragging = useRef(false);
    const SWIPE_THRESHOLD = 50; // px

    // Handle window resize to update cardsPerSlide
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setCardsPerSlide(window.innerWidth <= 768 ? mobileCardsPerSlide : 4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide effect: 3s on mobile, 5s on wider screens
    useEffect(() => {
        const delay = (typeof window !== 'undefined' && window.innerWidth <= 768) ? 3000 : 5000;
        const interval = setInterval(() => {
            handleNextCardSlide();
        }, delay);
        return () => clearInterval(interval);
    }, [cardsPerSlide]);

    // Navigate to next slide
    const handleNextCardSlide = () => {
        const maxSlide = Math.ceil(cards.length / cardsPerSlide);
        setCardSlideIndex((prev) => (prev + 1) % maxSlide);
    };

    // Navigate to previous slide
    const handlePrevCardSlide = () => {
        const maxSlide = Math.ceil(cards.length / cardsPerSlide);
        setCardSlideIndex((prev) => (prev - 1 + maxSlide) % maxSlide);
    };

    // Get cards for current slide
    const getCurrentSlideCards = () => {
        const start = cardSlideIndex * cardsPerSlide;
        return cards.slice(start, start + cardsPerSlide);
    };

    const maxSlides = Math.ceil(cards.length / cardsPerSlide);

    return (
        <>
            {/* Desktop Grid */}
            <div className={`card-grid-${pageId}`} style={{display: 'none', width: '100%'}}>
                <div className="row">
                    {cards.map((card, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6 mb-30">
                            <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden', position: 'relative'}}>
                                    <img 
                                        src={card.img} 
                                        alt={card.alt} 
                                        className="image-showcase-photo-dynamic"
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                    />
                                    {/* hand hint removed */}
                                </div>
                                <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                    <h6 className="color-brand-1 mb-15">{card.title}</h6>
                                    <p className="font-sm color-grey-500">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Slider (2 rows × 1 col = 2 cards per slide with auto-slide) */}
            <div
                className={`card-slider-mobile-${pageId}`}
                style={{display: 'none', flexDirection: 'column', width: '100%', position: 'relative'}}
                onTouchStart={(e) => {
                    const x = e.touches ? e.touches[0].clientX : 0;
                    touchStartX.current = x;
                    touchCurrentX.current = x;
                    isDragging.current = true;
                }}
                onTouchMove={(e) => {
                    if (!isDragging.current) return;
                    touchCurrentX.current = e.touches ? e.touches[0].clientX : touchCurrentX.current;
                }}
                onTouchEnd={() => {
                    if (!isDragging.current) return;
                    const dx = touchCurrentX.current - touchStartX.current;
                    if (Math.abs(dx) > SWIPE_THRESHOLD) {
                        if (dx < 0) handleNextCardSlide(); else handlePrevCardSlide();
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
                    if (Math.abs(dx) > SWIPE_THRESHOLD) {
                        if (dx < 0) handleNextCardSlide(); else handlePrevCardSlide();
                    }
                    isDragging.current = false;
                    touchStartX.current = 0;
                    touchCurrentX.current = 0;
                }}
            >
                {/* hand hint removed */}
                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '100%'}}>
                    {getCurrentSlideCards().map((card, idx) => (
                        <div key={idx}>
                            <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden', position: 'relative'}}>
                                    <img 
                                        src={card.img} 
                                        alt={card.alt} 
                                        className="image-showcase-photo-dynamic"
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                    />
                                    {/* hand hint removed */}
                                </div>
                                <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                    <h6 className="color-brand-1 mb-15">{card.title}</h6>
                                    <p className="font-sm color-grey-500">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Navigation Controls */}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px'}}>
                    <button
                        onClick={handlePrevCardSlide}
                        aria-label="Previous slide"
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '1px solid #e6e6e6',
                            background: '#ffffff',
                            color: 'black',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18 12 H8 M12 6 L6 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minWidth: '160px'}}>
                        {/* Dot pagination (mobile) */}
                        {Array.from({ length: maxSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCardSlideIndex(idx)}
                                aria-label={`Go to slide ${idx+1}`}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    border: '1px solid #d1d5db',
                                    background: idx === cardSlideIndex ? '#111827' : '#ffffff',
                                    cursor: 'pointer',
                                    padding: 0,
                                    boxSizing: 'border-box'
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNextCardSlide}
                        aria-label="Next slide"
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '1px solid #e6e6e6',
                            background: '#ffffff',
                            color: 'black',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6 12 H16 M12 6 L18 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Responsive CSS */}
            <style jsx>{`
                @media (min-width: 769px) {
                    .card-grid-${pageId} {
                        display: block !important;
                    }
                    .card-slider-mobile-${pageId} {
                        display: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .card-grid-${pageId} {
                        display: none !important;
                    }
                    .card-slider-mobile-${pageId} {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CardSlider;
