import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const menuTimeoutRef = useRef(null);
    
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
    
    const handleMenuEnter = (menuId) => {
        if (menuTimeoutRef.current) {
            clearTimeout(menuTimeoutRef.current);
        }
        setActiveMenu(menuId);
    };
    
    const handleMenuLeave = () => {
        menuTimeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 100);
    };
    
    const handleDropdownEnter = () => {
        if (menuTimeoutRef.current) {
            clearTimeout(menuTimeoutRef.current);
        }
    };
    
    const handleDropdownLeave = () => {
        setActiveMenu(null);
    };
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        
        return () => {
            if (menuTimeoutRef.current) {
                clearTimeout(menuTimeoutRef.current);
            }
        };
    })
    return (
        <>
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/index-3"><img alt="Ecom" src="/assets/logo_name.svg" /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className={`has-children services-mega-menu pl-20 ${activeMenu === 'services' ? 'menu-active' : ''}`}>
                                            <Link 
                                                className="active" 
                                                href="/"
                                                onMouseEnter={() => handleMenuEnter('services')}
                                                onMouseLeave={handleMenuLeave}
                                            >Services</Link>
                                            <div 
                                                className="mega-menu-dropdown"
                                                onMouseEnter={handleDropdownEnter}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <div className="mega-menu-container">
                                                    <div className="mega-menu-column">
                                                        <h4>Pre-training</h4>
                                                        <ul>
                                                            <li><Link href="/CollectData">Data Collection</Link></li>
                                                            <li><Link href="/Image-Anno">Image Annotation</Link></li>
                                                            <li><Link href="/SFT">Supervised Fine-Tuning</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Post-training</h4>
                                                        <ul>
                                                            <li><Link href="/HITL">HITL</Link></li>
                                                            <li><Link href="/RLHF">RLHF</Link></li>
                                                            <li><Link href="/RedTeaming">Red Teaming Services</Link></li>
                                                            <li><Link href="/LLM-Evals">AI Evals</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Cloud</h4>
                                                        <ul>
                                                            <li><Link href="/MLOps">MLOps</Link></li>
                                                            <li><Link href="/DevOps">DevOps</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Others</h4>
                                                        <ul>
                                                            <li><Link href="/ExpertNetwork">Expert Network</Link></li>
                                                            <li><Link href="/Search">Search and Personalization</Link></li>
                                                            <li><Link href="/OCR">OCR / IDP</Link></li>
                                                            <li><Link href="/GenAI">Generative AI</Link></li>
                                                            <li><Link href="/index-11">Training as a Service</Link></li>
                                                            <li><Link href="/Content-md">Content Moderation</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-children"><Link href="#">Product</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/KubeTrace">KubeTrace</Link></li>
                                                <li><Link href="/HITL">Human in the Loop</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`has-children services-mega-menu ${activeMenu === 'industries' ? 'menu-active' : ''}`}>
                                            <Link 
                                                className="active" 
                                                href="/"
                                                onMouseEnter={() => handleMenuEnter('industries')}
                                                onMouseLeave={handleMenuLeave}
                                            >Industries</Link>
                                            <div 
                                                className="mega-menu-dropdown"
                                                onMouseEnter={handleDropdownEnter}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <div className="mega-menu-container">
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industries/ADAS">ADAS</Link></li>
                                                            <li><Link href="/industries/Retail">Retail</Link></li>
                                                            <li><Link href="/industries/Geospatial">Geo Spatial</Link></li>
                                                            <li><Link href="/industries/Mapping">Mapping</Link></li>
                                                            <li><Link href="/industries/MedicalAI">Medical AI</Link></li>
                                                            <li><Link href="/industries/VoiceAI">Voice AI</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industries/Manufacturing">Manufacturing</Link></li>
                                                            <li><Link href="/industries/Agriculture">Agriculture</Link></li>
                                                            <li><Link href="/industries/SocialMedia">Social Media</Link></li>
                                                            <li><Link href="/industries/AssetManagement">Asset Management</Link></li>
                                                            <li><Link href="/industries/Fintech">Fintech</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industries/RPA">RPA</Link></li>
                                                            <li><Link href="/industries/PhysicalAI">Physical AI</Link></li>
                                                            <li><Link href="/industries/Ecommerce">E-Commerce and Content</Link></li>
                                                            <li><Link href="/industries/Insurance">Insurance</Link></li>
                                                            <li><Link href="/industries/Sports">Sports & Media</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-children"><Link href="#">Company</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/partners">Partner</Link></li>
                                                <li><Link href="/career">Careers</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 hover-up" href="register">Get a Demo</Link></div>
                                <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                    onClick={() => { handleOpen(); handleRemove() }}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header;