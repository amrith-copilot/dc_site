import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="modern-footer mt-50">
                <div className="footer-main">
                    <div className="footer-container">
                        <div className="footer-grid">
                            {/* Column 1 - Industries */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title">INDUSTRIES</h5>
                                <ul className="footer-menu">
                                    <li><Link href="/industries/ADAS">ADAS</Link></li>
                                    <li><Link href="/industries/RPA">RPA</Link></li>
                                    <li><Link href="/industries/Manufacturing">Manufacturing</Link></li>
                                    <li><Link href="/industries/Geospatial">Geospatial</Link></li>
                                    <li><Link href="/industries/CustomerServices">Customer Services</Link></li>
                                    <li><Link href="/industries/SocialMedia">Social Media</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 - Industries (Column 2) */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title invisible">INDUSTRIES</h5>
                                <ul className="footer-menu">
                                    <li><Link href="/industries/Agriculture">Agriculture</Link></li>
                                    <li><Link href="#">News &amp; Events</Link></li>
                                    <li><Link href="/industries/Sports">Sports &amp; Media</Link></li>
                                    <li><Link href="/industries/Retail">Retail</Link></li>
                                    <li><Link href="/industries/Mapping">Mapping</Link></li>
                                    <li><Link href="#">Robotics</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 - Services: Pre-Training & Cloud */}
                            <div className="footer-column services-col">
                                <h5 className="column-title">SERVICES</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">PRE-TRAINING</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/CollectData">Data Collection</Link></li>
                                        <li><Link href="/Image-Anno">Image Annotation</Link></li>
                                        <li><Link href="/SFT">Supervised Fine-Tuning</Link></li>
                                    </ul>
                                </div>
                                <div className="service-group">
                                    <h6 className="service-heading">CLOUD</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/MLOps">MLOps</Link></li>
                                        <li><Link href="/DevOps">DevOps</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 5 - Services: Post-Training */}
                            <div className="footer-column services-col">
                                <h5 className="column-title invisible">SERVICES</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">POST-TRAINING</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/HITL">HITL</Link></li>
                                        <li><Link href="/RLHF">RLHF</Link></li>
                                        <li><Link href="/RedTeaming">Red Teaming Services</Link></li>
                                        <li><Link href="/LLM-Evals">AI Evals</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 6 - Others */}
                            <div className="footer-column services-col">
                                <h5 className="column-title invisible">SERVICES</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">OTHERS</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/ExpertNetwork">Expert Network</Link></li>
                                        <li><Link href="/Search">Search and Personalization</Link></li>
                                        <li><Link href="/OCR">OCR / IDP</Link></li>
                                        <li><Link href="/GenAI">Generative AI</Link></li>
                                        <li><Link href="/index-11">Training as a Service</Link></li>
                                        <li><Link href="/Content-md">Content Moderation</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 7 - Resources */}
                            <div className="footer-column resources-col">
                                <h5 className="column-title">RESOURCES</h5>
                                <ul className="footer-menu">
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/partners">Partners</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/careers">Careers</Link></li>  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-container">
                        <div className="bottom-content">
                            
                           <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
                                <div className="company-logo" style={{ marginTop: '10px' }}>
                                    <Link href="/index-3">
                                        <img alt="Dataclap" src="/assets/logo_white-1.svg" />
                                    </Link>
                                </div>
                                <div className="legal-links" style={{ marginTop: '5px' }}>
                                    <Link className="legal-link font-md" href="/term-conditions" style={{  marginTop: '15px' }}>
                                           Privacy and Terms
                                    </Link>
                                </div>
                                    <div className="copyright" style={{ textAlign: 'center' }}>
                                         <span className="copyright-text font-md">
                                           © 2024-2026 DATACLAP. All rights reserved.
                                         </span>
                                      </div>
                                </div>

                             {/* Right side - Social Icons */}
                            <div className="footer-social">
                                <div className="social-links">
                                    <Link
                                        className="social-icon linkedin"
                                        href="https://www.linkedin.com/company/dataclap/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                    {/* Add more social icons here if needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;