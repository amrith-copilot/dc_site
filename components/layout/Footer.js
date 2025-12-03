import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="modern-footer mt-50">
                <div className="footer-main">
                    <div className="footer-container">
                        <div className="footer-grid">
                            {/* Column 1 - Company Details */}
                            <div className="footer-column company-details">
                                <div className="company-logo">
                                    <Link href="/index-3">
                                        <img alt="dataclap" src="/assets/logo_white-1.svg" />
                                    </Link>
                                </div>
                                <div className="company-info">
                                    <div className="social-section">
                                        <div className="social-links">
                                            <Link className="social-icon linkedin" href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 - Industries (Column 1) */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title">Industries</h5>
                                <ul className="footer-menu">
                                    <li><Link href="#">ADAS</Link></li>
                                    <li><Link href="#">RPA</Link></li>
                                    <li><Link href="#">Manufacturing</Link></li>
                                    <li><Link href="#">Geospatial</Link></li>
                                    <li><Link href="#">Customer Services</Link></li>
                                    <li><Link href="#">Social Media</Link></li>
                                    <li><Link href="#">Manufacturing</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 - Industries (Column 2) */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title invisible">Industries</h5>
                                <ul className="footer-menu">
                                    <li><Link href="/industries/Agriculture">Agriculture</Link></li>
                                    <li><Link href="#">News &amp; Events</Link></li>
                                    <li><Link href="/industries/Sports">Sports &amp; Media</Link></li>
                                    <li><Link href="/industries/Retail">Retail</Link></li>
                                    <li><Link href="/industries/Mapping">Mapping</Link></li>
                                    <li><Link href="#">Robotics</Link></li>
                                    <li><Link href="/industries/Geospatial">Geospatial</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 - Services */}
                            <div className="footer-column services-col">
                                <h5 className="column-title">Services</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">Pre-Training</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/LLM-Evals">AI Evals</Link></li>
                                        <li><Link href="/Image-Anno">Image Annotation</Link></li>
                                        <li><Link href="/SFT">Supervised Fine-Tuning</Link></li>
                                        <li><Link href="/OCR">OCR /IDP</Link></li>
                                        <li><Link href="/CollectData">Data Collection</Link></li>
                                    </ul>
                                </div>
                                <div className="service-group">
                                    <h6 className="service-heading">Post-Training</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/RedTeaming">Red Teaming Services</Link></li>
                                        <li><Link href="/GenAI">Generative AI</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 5 - Services (continued) */}
                            <div className="footer-column services-col">
                                <h5 className="column-title invisible">Services</h5>
                                <div className="service-group">
                                <h6 className="service-heading">Others</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="/index-11">Training as a Service</Link></li>
                                        <li><Link href="/Search">Search and Personalization</Link></li>
                                        <li><Link href="/Content-md">Content Moderation</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 6 - Resources */}
                            <div className="footer-column resources-col">
                                <h5 className="column-title">Resources</h5>
                                <ul className="footer-menu">
                                    <li><Link href="/pricing">Pricing</Link></li>
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
                            <div className="footer-links">
                                <ul className="legal-menu">
                                    <li><Link className="legal-link font-md" href="/term-conditions">Privacy and Terms</Link></li>
                                    {/* <li><Link className="legal-link" href="/cookies">Cookies</Link></li> */}
                                </ul>
                            </div>
                            <div className="copyright">
                                <span className="copyright-text">©2024-2026 DATACLAP. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;