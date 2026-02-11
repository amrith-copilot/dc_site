import React, { useEffect, useState } from 'react';

const HandGrab = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const hide = setTimeout(() => setVisible(false), 3600);
        const onTouch = () => setVisible(false);
        window.addEventListener('touchstart', onTouch, { once: true });
        return () => {
            clearTimeout(hide);
            window.removeEventListener('touchstart', onTouch);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="hand-grab-overlay" aria-hidden>
            <div className="hand-grab-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11v-4a2 2 0 114 0v4" stroke="#0b60ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 7v6" stroke="#0b60ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 16v1a3 3 0 003 3h6" stroke="#0b60ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <style jsx>{`
                .hand-grab-overlay {
                    position: absolute;
                    right: 12px;
                    bottom: 12px;
                    z-index: 60;
                    pointer-events: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hand-grab-icon {
                    width: 46px;
                    height: 46px;
                    background: rgba(255,255,255,0.95);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 20px rgba(2,6,23,0.12);
                    animation: grab 1s ease-in-out 0s 3;
                }
                @keyframes grab {
                    0% { transform: translateY(0); opacity: 1 }
                    50% { transform: translateY(-8px) scale(1.03); opacity: .9 }
                    100% { transform: translateY(0); opacity: 1 }
                }
                @media (min-width: 769px) {
                    .hand-grab-overlay { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default HandGrab;
