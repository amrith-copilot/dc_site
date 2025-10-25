import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Accordion from '../components/elements/Accordion';
import Layout from '../components/layout/Layout';
import VideoSlider from '../components/slider/VideoSlider';

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

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
                                <h2 className="color-white mb-5">See why we are <br className="d-none d-lg-block" />trusted the world over</h2>
                            </div>
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <p className="font-lg color-white mb-20">Et quaerat deserunt et numquam voluptatem et laborum consectetur non consequatur temporibus ea repellat nihil vel consectetur dolores et rerum voluptas. Nam voluptas reiciendis non laborum perspiciatis eum omnis cumque ab impedit earum ex quos porro sit dolorem cupiditate ut ducimus autem.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-1 mb-15">Get in touch</h2>
                                <p className="font-sm color-grey-500">Do you want to know more or contact our sales department?</p>
                                <div className="mt-50">
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-1 mb-10">Visit the Knowledge Base</h6>
                                            <p className="font-md color-grey-500 mb-5">Browse customer support articles and step-by-step instructions for specific features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-1 mb-10">Watch Product Videos</h6>
                                            <p className="font-md color-grey-500 mb-5">Watch our video tutorials for visual walkthroughs on how to use our features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img3.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-1 mb-10">Get in touch with Sales</h6>
                                            <p className="font-md color-grey-500 mb-5">Let us talk about how we can help your enterprise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-form-contact">
                                    {/* HubSpot form will be injected here */}
                                    <div id="hubspot-form-container"></div>
                                    
                                    {/* Loading message while HubSpot form loads */}
                                    <div id="form-loading" style={{padding: '20px', textAlign: 'center', color: '#666'}}>
                                        Loading contact form...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="no-bg-faqs">
                    <section className="section pt-80 mb-30 bg-faqs">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                    <p className="font-lg color-gray-500">Feeling inquisitive? Have a read through some of our FAQs or<br className="d-none d-lg-block" /> contact our supporters for help</p>
                                </div>
                            </div>
                            <div className="row mt-50 mb-100">
                                <div className="col-xl-3 col-lg-4">
                                <ul className="list-faqs nav nav-tabs" role="tablist">
                                    <li><a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)} ><span>General Support</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Order / Purchase</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>Download / Install</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}><span>Technology</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}><span>Your Account</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                </ul>
                                    <div className="mt-80 text-start mb-40"><a className="btn btn-brand-1 hover-up" href="#">Contact Us</a></div>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom" />
                    </section>
                </div>
                <section className="section mt-50 mb-100">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

            {/* Custom styles for HubSpot form */}
            <style jsx>{`
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
            `}</style>
        </>
    );
};

export default ContactUs;