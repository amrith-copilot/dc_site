import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const isExpanded = (sectionId) => expandedSections[sectionId] || false;

    return (
        <>
            <footer className="modern-footer mt-50 no-line">
                <div className="footer-main">
                    <div className="footer-container">
                        {isMobile ? (
                            <div className="footer-grid mobile-layout">
                                {/* Mobile Layout - Single Column */}
                                
                                {/* Industries Section */}
                                <div className="footer-section mobile-section">
                                    <h5 
                                        className="section-title"
                                        onClick={() => toggleSection('industries')}
                                    >
                                        INDUSTRIES
                                    </h5>
                                    {isExpanded('industries') && (
                                        <ul className="footer-menu">
                                            <li><Link href="/industries/ADAS">ADAS</Link></li>
                                            <li><Link href="/industries/RPA">RPA</Link></li>
                                            <li><Link href="/industries/Manufacturing">Manufacturing</Link></li>
                                            <li><Link href="/industries/Geospatial">Geospatial</Link></li>
                                            <li><Link href="/industries/Agriculture">Agriculture</Link></li>
                                            <li><Link href="/industries/Retail">Retail</Link></li>
                                            <li><Link href="/industries/Sports">Sports &amp; Media</Link></li>
                                            <li><Link href="/industries/Mapping">Mapping</Link></li>
                                            <li><Link href="/industries/CustomerServices">Customer Services</Link></li>
                                            <li><Link href="/industries/SocialMedia">Social Media</Link></li>
                                        </ul>
                                    )}
                                </div>

                                {/* Solutions Section */}
                                <div className="footer-section mobile-section">
                                    <h5 
                                        className="section-title"
                                        onClick={() => toggleSection('solutions')}
                                    >
                                        SOLUTIONS
                                    </h5>
                                    {isExpanded('solutions') && (
                                        <>
                                            <div className="service-group">
                                                <h6 className="service-heading">PRE-TRAINING</h6>
                                                <ul className="footer-menu">
                                                    <li><Link href="/CollectData">Data Collection</Link></li>
                                                    <li><Link href="/Image-Anno">Data Annotation</Link></li>
                                                    <li><Link href="/SFT">Supervised Fine-Tuning</Link></li>
                                                </ul>
                                            </div>
                                            <div className="service-group">
                                                <h6 className="service-heading">CLOUD</h6>
                                                <ul className="footer-menu">
                                                    <li><Link href="/MLOps">MLOps</Link></li>
                                                    <li><Link href="/DevOps">DevOps</Link></li>
                                                </ul>
                                            </div>
                                            <div className="service-group">
                                                <h6 className="service-heading">POST-TRAINING</h6>
                                                <ul className="footer-menu">
                                                    <li><Link href="/HITL">HITL</Link></li>
                                                    <li><Link href="/RLHF">RLHF</Link></li>
                                                    <li><Link href="/RedTeaming">Red Teaming Services</Link></li>
                                                    <li><Link href="/LLM-Evals">AI Evals</Link></li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Resources Section */}
                                <div className="footer-section mobile-section">
                                    <h5 
                                        className="section-title"
                                        onClick={() => toggleSection('Others')}
                                    >
                                        OTHERS
                                    </h5>
                                    {isExpanded('Others') && (
                                        <ul className="footer-menu">
                                            <li><Link href="/Search">Search and Personalization</Link></li>
                                            <li><Link href="/OCR">OCR / IDP</Link></li>
                                            <li><Link href="/GenAI">Generative AI</Link></li>
                                            <li><Link href="/Content-md">Content Moderation</Link></li>
                                        </ul>
                                    )}
                                </div>

                                {/* Company Section */}
                                <div className="footer-section mobile-section">
                                    <h5 
                                        className="section-title"
                                        onClick={() => toggleSection('company')}
                                    >
                                        RESOURCES
                                    </h5>
                                    {isExpanded('company') && (
                                        <ul className="footer-menu">
                                             <li><Link href="/partners">Partners</Link></li>
                                            <li><Link href="/pricing">Pricing</Link></li>
                                            {/* <li><Link href="/about">About Us</Link></li> */}
                                            <li><Link href="/contact">Contact</Link></li>
                                            <li><Link href="/career">Careers</Link></li>
                                            {/* <li><Link href="/term-conditions">Privacy and Terms</Link></li> */}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="footer-grid">
                                {/* Desktop Layout - Original Grid */}
                                {/* Column 1 - Industries */}
                                <div className="footer-column industries-col">
                                    <h5 className="column-title">INDUSTRIES</h5>
                                    <ul className="footer-menu">
                                        <li><Link href="/industries/ADAS">ADAS</Link></li>
                                        <li><Link href="/industries/RPA">RPA</Link></li>
                                        <li><Link href="/industries/Manufacturing">Manufacturing</Link></li>
                                        <li><Link href="/industries/Geospatial">Geospatial</Link></li>
                                        <li><Link href="/industries/VoiceAI">VoiceAi</Link></li>
                                        <li><Link href="/industries/SocialMedia">Social Media</Link></li>
                                        <li><Link href="/industries/AssetManagement">Asset Management</Link></li>
                                        <li><Link href="/industries/CustomerServices">E-Commerce and Content</Link></li>

                                    </ul>
                                </div>

                                {/* Column 2 - Industries (Desktop Only) */}
                                <div className="footer-column industries-col">
                                    <h5 className="column-title invisible">INDUSTRIES</h5>
                                    <ul className="footer-menu">
                                        <li><Link href="/industries/Agriculture">Agriculture</Link></li>
                                        <li><Link href="/industries/MedicalAI">MedicalAi</Link></li>
                                        <li><Link href="/industries/Fintech">Fintech</Link></li>
                                        <li><Link href="/industries/Sports">Sports &amp; Media</Link></li>
                                        <li><Link href="/industries/Retail">Retail</Link></li>
                                        <li><Link href="/industries/Mapping">Mapping</Link></li>
                                        <li><Link href="/industries/Insurance">Insurance</Link></li> 
                                        <li><Link href="/industries/physicalai">PhysicalAi</Link></li>
                                    </ul>
                                </div>

                                {/* Column 3 - Services: Pre-Training & Cloud */}
                                <div className="footer-column services-col">
                                    <h5 className="column-title">SERVICES</h5>
                                    <div className="service-group">
                                        <h6 className="service-heading">PRE-TRAINING</h6>
                                        <ul className="service-submenu">
                                            <li><Link href="/CollectData">Data Collection</Link></li>
                                            <li><Link href="/Image-Anno">Data Annotation</Link></li>
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

                                {/* Column 4 - Services: Post-Training */}
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

                                {/* Column 5 - Others */}
                                <div className="footer-column services-col">
                                    <h5 className="column-title">OTHERS</h5>
                                    <ul className="footer-menu">
                                        <li><Link href="/Search">Search and Personalization</Link></li>
                                        <li><Link href="/OCR">OCR / IDP</Link></li>
                                        <li><Link href="/GenAI">Generative AI</Link></li>
                                        <li><Link href="/Content-md">Content Moderation</Link></li>
                                    </ul>
                                </div>

                                {/* Column 6 - Resources */}
                                <div className="footer-column resources-col">
                                    <h5 className="column-title">RESOURCES</h5>
                                    <ul className="footer-menu">
                                        {/* <li><Link href="/pricing">Pricing</Link></li> */}
                                        <li><Link href="/partners">Partners</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/career">Careers</Link></li>  
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-container">

                        <div className="bottom-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '0px' }}>

                            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="company-logo">
                                    <Link href="/index-3">
                                        <img alt="Dataclap" src="/assets/logo_white-1.svg" />
                                    </Link>
                                </div>
                            </div>

                            <div className="footer-legal-center" style={{ flex: '1 1 auto', textAlign: 'center' }}>
                                <div className="footer-legal-row" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                                    <div className="legal-links">
                                        <Link className="legal-link" href="/term-conditions" style={{ color: '#9b9b9b' }}>
                                            Privacy and Terms
                                        </Link>
                                    </div>
                                    <div className="copyright">
                                        <span className="copyright-text" style={{ color: '#9b9b9b' }}>
                                            © 2025-2026 DATACLAP DIGITALDIGITAL. All rights reserved.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn icon on right */}
                            <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '0' }}>
                                <Link
                                    className="social-icon linkedin"
                                    href="https://www.linkedin.com/company/dataclap/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .footer-grid.mobile-layout {
                            display: flex;
                            flex-direction: column;
                            gap: 0;
                        }

                        .footer-section.mobile-section {
                            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                            padding: 20px 0;
                        }

                        .footer-section.mobile-section:first-child {
                            border-top: 1px solid rgba(255, 255, 255, 0.1);
                        }

                        .section-title {
                            cursor: pointer;
                            font-size: 16px;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            color: #fff;
                            margin: 0;
                            padding-bottom: 12px;
                        }

                        .footer-section.mobile-section .footer-menu {
                            list-style: none;
                            padding: 0;
                            margin: 12px 0 0 0;
                        }

                        .footer-section.mobile-section .footer-menu li {
                            margin: 8px 0;
                            font-size: 14px;
                        }

                        .footer-section.mobile-section .footer-menu a {
                            color: #9b9b9b;
                            text-decoration: none;
                        }

                        .footer-section.mobile-section .footer-menu a:hover {
                            color: #fff;
                        }

                        .footer-section.mobile-section .service-group {
                            margin-top: 12px;
                        }

                        .footer-section.mobile-section .service-heading {
                            font-size: 12px;
                            font-weight: 600;
                            color: #9b9b9b;
                            margin: 8px 0;
                            text-transform: uppercase;
                        }
                    }
                `}</style>
            </footer>
        </>
    );
};

export default Footer;