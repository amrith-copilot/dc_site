import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const Career = () => {
    const iframeRef = React.useRef(null);
    const [iframeHeight, setIframeHeight] = React.useState(1600);

    React.useEffect(() => {
        // Listen for postMessage from the embedded page with its content height.
        // The embedded page must post a message like: { type: 'embedHeight', height: 1200 }
        function handleMessage(event) {
            try {
                const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                if (!data) return;
                if (data.type === 'embedHeight' && data.height && !isNaN(data.height)) {
                    setIframeHeight(Number(data.height));
                }
                // Some embeds might send plain { height: 1234 }
                if (data.height && !data.type && !isNaN(data.height)) {
                    setIframeHeight(Number(data.height));
                }
            } catch (e) {
                // ignore non-JSON messages
            }
        }

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <>
            <Head>
                <title>Career</title>
            </Head>

            <Layout>
                <section className="section mt-90">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="color-grey-500 mb-15">Take a look at our current openings</h6>
                            <h2 className="color-brand-1">We are Always Searching For <br className="d-none d-lg-block" />Amazing People to Join Our Team. </h2>
                        </div>
                    </div>
                </section>
                <iframe
                    ref={iframeRef}
                    className="career-iframe"
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        // cap the iframe height to avoid excessive blank space before we get a real height from the embed
                        height: `${Math.min(iframeHeight, 1000)}px`,
                        border: 'none'
                    }}
                    src="https://app.dover.com/jobs/dataclapdigital?embed=1"
                    onLoad={() => {
                        // Ask the embed to send its height (if it supports postMessage protocol)
                        iframeRef.current?.contentWindow?.postMessage({ type: 'getHeight' }, '*');

                        // If same-origin, try to read actual document height immediately as a fallback
                        try {
                            const win = iframeRef.current?.contentWindow;
                            const doc = win?.document;
                            if (doc) {
                                const h = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
                                if (h && !isNaN(h)) {
                                    // cap to the same max so we don't create huge gaps
                                    setIframeHeight(Math.min(Number(h), 1000));
                                }
                            }
                        } catch (e) {
                            // cross-origin: ignore
                        }
                    }}
                    title="Career listings"
                />

            </Layout>

        </>
    );
};

export default Career;