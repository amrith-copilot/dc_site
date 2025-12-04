import React, { useEffect, useRef, useState } from 'react';

const CalBooking = () => {
    const iframeRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState(700);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMessage = (event) => {
            // Handle postMessage from Cal.com embed for dynamic height
            if (event.origin === 'https://app.cal.com') {
                if (event.data?.type === 'height' && event.data?.height) {
                    setIframeHeight(Math.min(Number(event.data.height), 1000));
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const handleIframeLoad = () => {
        if (!iframeRef.current) return;

        // Ask the embed to send its height (if it supports postMessage protocol)
        iframeRef.current.contentWindow?.postMessage({ type: 'getHeight' }, '*');

        // If same-origin, try to read actual document height immediately as a fallback
        try {
            const win = iframeRef.current.contentWindow;
            const doc = win?.document;
            if (doc) {
                const h = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
                if (h && !isNaN(h)) {
                    setIframeHeight(Math.min(Number(h), 1000));
                }
            }
        } catch (e) {
            // cross-origin: ignore
        }
    };

    if (!mounted) {
        return <div style={{ width: '100%', height: '700px' }} />;
    }

    return (
        <iframe
            ref={iframeRef}
            className="cal-iframe"
            style={{
                width: '100%',
                maxWidth: '1200px',
                height: `${Math.min(iframeHeight, 1000)}px`,
                border: 'none'
            }}
            src="https://app.cal.com/sanjeev.rangasamy/30min?embed=true&layout=month_view&theme=light"
            onLoad={handleIframeLoad}
            title="Schedule a meeting"
        />
    );
};

export default CalBooking;

