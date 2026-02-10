import React, { useState, useEffect } from 'react';

const CardSlider = ({ cards, pageId }) => {
    const [cardSlideIndex, setCardSlideIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(2);

    // Handle window resize to update cardsPerSlide
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setCardsPerSlide(window.innerWidth <= 768 ? 2 : 4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextCardSlide();
        }, 5000); // Auto-slide every 5 seconds
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
                                <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                    <img 
                                        src={card.img} 
                                        alt={card.alt} 
                                        className="image-showcase-photo-dynamic"
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                    />
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
            <div className={`card-slider-mobile-${pageId}`} style={{display: 'none', flexDirection: 'column', width: '100%'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '100%'}}>
                    {getCurrentSlideCards().map((card, idx) => (
                        <div key={idx}>
                            <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <div className="image-showcase-top-dynamic" style={{width: '100%', height: '250px', overflow: 'hidden'}}>
                                    <img 
                                        src={card.img} 
                                        alt={card.alt} 
                                        className="image-showcase-photo-dynamic"
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                    />
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
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            border: '2px solid black',
                            background: 'white',
                            color: 'black',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        ‹
                    </button>
                    
                    <div style={{display: 'flex', gap: '8px'}}>
                        {Array.from({ length: maxSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCardSlideIndex(idx)}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    background: idx === cardSlideIndex ? 'black' : 'white',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNextCardSlide}
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            border: '2px solid black',
                            background: 'white',
                            color: 'black',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        ›
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
