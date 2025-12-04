import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Accordion from '../components/elements/Accordion';
import Layout from '../components/layout/Layout';
import VideoSlider from '../components/slider/VideoSlider';
import CalBooking from '../components/elements/CalBooking';

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
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

    // HubSpot form integration
    useEffect(() => {
        // Function to load HubSpot script dynamically
        const loadHubSpotScript = () => {
            // Check if HubSpot script is already loaded
            if (window.hbspt) {
                createHubSpotForm();
                return;
            }

            // Create script element
            const script = document.createElement('script');
            script.src = "//js.hsforms.net/forms/embed/v2.js"; // Replace with your actual HubSpot script URL
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            // Add onload event to create form after script loads
            script.onload = () => {
                createHubSpotForm();
            };

            // Handle script load errors
            script.onerror = () => {
                console.error('Failed to load HubSpot script');
            };

            // Append script to document head
            document.head.appendChild(script);
        };

        // Function to create HubSpot form
        const createHubSpotForm = () => {
            if (window.hbspt && window.hbspt.forms) {
                window.hbspt.forms.create({
                    portalId:  "7608056", // Replace with your actual portal ID
                    formId:  "5dae9e3f-bb37-469d-8f5e-1a483b4b1ad2",   // Replace with your actual form ID
                    region: "na1",   // Replace with your actual region
                    target: '#hubspot-form-container' // Target the container div
                });
            }
        };

        // Load the script
        loadHubSpotScript();

        // Cleanup function (optional)
        return () => {
            // You can add cleanup logic here if needed
            // Note: Usually we don't remove HubSpot scripts as they might be used elsewhere
        };
    }, []);

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>

            <Layout>
                <section className="section bg-brand-1 box-why-trusted-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 mb-30">
                                <h2 className="color-white mb-5">Impact you can measure, timelines you can trust<br className="d-none d-lg-block" /></h2>
                            </div>
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <p className="font-lg color-white mb-20">Start a conversation with our team and discover how we help companies drive meaningful progress with minimal friction. 
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Centered & wider contact section */}
                <section className="section mt-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10">
                                <h2 className="color-brand-1 mb-15 text-center">Get in touch</h2>
                                <p className="font-sm color-grey-500 text-center">Do you want to know more or contact our sales department?</p>

                                <div className="mt-50">
                                    <div className="box-form-contact mx-auto">
                                        {/* HubSpot form will be injected here */}
                                        <div id="hubspot-form-container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cal.com Booking Section */}
                <section className="section mt-70 mb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-12">
                                <h2 className="color-brand-1 mb-15 text-center">Schedule a Meeting</h2>
                                <p className="font-sm color-grey-500 text-center mb-40">Book a 30-minute call with our team to discuss your project needs.</p>
                                <div className="box-calendar-container" style={{minHeight: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>
                                    <CalBooking />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

            {/* Custom styles for HubSpot form and centered wider layout */}
            <style jsx>{`
                /* Make the centred contact area a bit wider and constrained */
                .box-form-contact {
                    width: 100%;
                    max-width: 900px; /* adjust as needed for "normal viewable size" */
                    margin: 0 auto;
                    padding: 20px;
                    background: transparent;
                }

                #hubspot-form-container {
                    min-height: 400px;
                }

                #form-loading {
                    display: block;
                }

                /* Hide loading message when HubSpot form is loaded */
                #hubspot-form-container .hbspt-form ~ #form-loading {
                    display: none !important;
                }

                /* Custom styling for HubSpot form to match your design */
                #hubspot-form-container .hbspt-form {
                    font-family: inherit;
                }

                #hubspot-form-container .hs-form-field {
                    margin-bottom: 25px;
                }

                #hubspot-form-container .hs-input {
                    width: 100% !important;
                    padding: 12px 15px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 14px;
                    background: #fff;
                    transition: all 0.3s ease;
                }

                #hubspot-form-container .hs-input:focus {
                    border-color: #007bff;
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
                }

                #hubspot-form-container .hs-submit .hs-button {
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                #hubspot-form-container .hs-submit .hs-button:hover {
                    background: #0056b3;
                    transform: translateY(-1px);
                }

                #hubspot-form-container .hs-form fieldset {
                    max-width: none !important;
                }

                /* Center headings inside the contact block on larger screens */
                @media (min-width: 768px) {
                    .box-form-contact + #form-loading {
                        text-align: center;
                    }
                }
            `}</style>
        </>
    );
};

export default ContactUs;