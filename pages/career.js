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
                <section
                    className="section pt-0 pb-50 bg-core-value bg-grey-60"
                    // remove the extra bottom margin/padding that was creating a large gap
                    style={{ marginBottom: 0, paddingBottom: '30px' }}
                >
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <div className="shape-left shape-1" />
                                    <h3 className="color-brand-1 mb-15">Core values</h3>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Customers First</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Act With Integrity</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’re honest, transparent and committed to doing what’s best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Make a Difference Every Day</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Think Big</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Being the world's leading commerce platform requires unrivaled vision, innovation and execution. We never settle. We challenge our ideas of what’s possible in order to better meet the needs of our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Do the right thing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. </p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Stronger united</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default Career;