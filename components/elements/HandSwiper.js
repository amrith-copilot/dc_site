import React, { useEffect, useState } from 'react';

const HandSwiper = () => {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const hideTimer = setTimeout(() => setVisible(false), 4200);
        const onTouch = () => setVisible(false);
        window.addEventListener('touchstart', onTouch, { once: true });
        return () => {
            clearTimeout(hideTimer);
            window.removeEventListener('touchstart', onTouch);
        };
    }, [mounted]);

    if (!mounted || !visible) return null;

    return (
        <div className="hand-swiper-overlay">
            <div className="hand-icon" aria-hidden>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11V6a3 3 0 016 0v5" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 13v3a4 4 0 004 4h6" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <style jsx>{`
                .hand-swiper-overlay {
                    position: absolute;
                    left: 16px;
                    bottom: 18px;
                    z-index: 60;
                    display: flex;
                    align-items: center;
                    pointer-events: none;
                    -webkit-tap-highlight-color: transparent;
                }
                .hand-icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(255,255,255,0.95);
                    border-radius: 12px;
                    box-shadow: 0 6px 18px rgba(16,24,40,0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: hand-swipe 1.2s ease-in-out 0s 3;
                }

                @keyframes hand-swipe {
                    0% { transform: translateX(0) translateY(0) scale(1); opacity: 1; }
                    50% { transform: translateX(18px) translateY(-4px) scale(1.02); opacity: 0.9; }
                    100% { transform: translateX(0) translateY(0) scale(1); opacity: 1; }
                }

                @media (min-width: 769px) {
                    .hand-swiper-overlay { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default HandSwiper;
