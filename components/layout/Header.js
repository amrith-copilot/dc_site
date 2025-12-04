import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState(null);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveMobileMenu(null);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };
    
    const handleMobileSubmenu = (menuName) => {
        setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
    };
    
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileMenu(null);
        document.body.style.overflow = 'unset';
    };
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scroll]);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                closeMobileMenu();
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = 'unset';
        };
    }, []);
    
    return (
        <>
            <style jsx>{`
                /* Base Styles */
                * {
                    box-sizing: border-box;
                }
                
                .header {
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 1000;
                }
                
                .header.stick {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .main-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 70px;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                }
                
                .header-logo {
                    flex-shrink: 0;
                    z-index: 1002;
                }
                
                .header-logo img {
                    height: 45px;
                    width: auto;
                    display: block;
                }
                
                /* Desktop Navigation */
                .header-nav {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    margin: 0 30px;
                }
                
                .nav-main-menu {
                    display: block;
                }
                
                .main-menu {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 35px;
                    align-items: center;
                }
                
                .main-menu > li {
                    position: relative;
                }
                
                .main-menu > li > a {
                    display: block;
                    padding: 10px 0;
                    color: #2c3e50;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: color 0.3s;
                    white-space: nowrap;
                }
                
                .main-menu > li > a:hover,
                .main-menu > li > a.active {
                    color: #0017e3;
                }
                
                /* Mega Menu */
                .mega-menu-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #fff;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
                    border-radius: 12px;
                    padding: 35px;
                    min-width: 750px;
                    opacity: 0;
                    visibility: hidden;
                    margin-top: 10px;
                    transition: all 0.3s ease;
                    z-index: 1001;
                }
                
                .has-children:hover .mega-menu-dropdown,
                .has-children:hover .sub-menu {
                    opacity: 1;
                    visibility: visible;
                    margin-top: 0;
                }
                
                .mega-menu-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 35px;
                }
                
                .mega-menu-column h4 {
                    margin: 0 0 18px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #0017e3;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .mega-menu-column ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .mega-menu-column ul li {
                    margin-bottom: 12px;
                }
                
                .mega-menu-column ul li a {
                    color: #5a6c7d;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s;
                    display: block;
                    padding: 3px 0;
                }
                
                .mega-menu-column ul li a:hover {
                    color: #0017e3;
                    padding-left: 5px;
                }
                
                /* Sub Menu */
                .sub-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: #fff;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
                    border-radius: 12px;
                    padding: 15px 0;
                    min-width: 220px;
                    list-style: none;
                    margin: 10px 0 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    z-index: 1001;
                }
                
                .sub-menu li a {
                    display: block;
                    padding: 12px 25px;
                    color: #5a6c7d;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s;
                }
                
                .sub-menu li a:hover {
                    background: #f0f4ff;
                    color: #0017e3;
                    padding-left: 30px;
                }
                
                /* Header Right */
                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    z-index: 1002;
                }
                
                .btn {
                    padding: 10px 20px;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.3s;
                    display: inline-block;
                    font-weight: 600;
                    font-size: 14px;
                    white-space: nowrap;
                }
                
                .btn-brand-1 {
                    background: #0017e3;
                    color: #fff !important;
                    border: 2px solid #0017e3;
                }
                
                .btn-brand-1:hover {
                    background: #0012b5;
                    border-color: #0012b5;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 23, 227, 0.3);
                }
                
                /* Burger Menu */
                .burger-icon {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                    padding: 8px;
                    gap: 5px;
                    background: transparent;
                    border: none;
                    z-index: 1002;
                    margin-right: 10px;
                    margin-top: 2px;
                }
                
                .burger-icon span {
                    display: block;
                    width: 24px;
                    height: 2px;
                    background: #2c3e50;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }
                
                .burger-icon.active .burger-icon-top {
                    transform: rotate(45deg) translate(5px, 5px);
                    background: #0017e3;
                }
                
                .burger-icon.active .burger-icon-mid {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                
                .burger-icon.active .burger-icon-bottom {
                    transform: rotate(-45deg) translate(5px, -5px);
                    background: #0017e3;
                }
                
                /* Mobile Sidebar Navigation */
                .mobile-sidebar-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 23, 227, 0.15);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    z-index: 999;
                    backdrop-filter: blur(4px);
                }
                
                .mobile-sidebar-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    left: -100%;
                    width: 300px;
                    max-width: 85vw;
                    height: 100vh;
                    background: #ffffff;
                    box-shadow: 8px 0 30px rgba(0,0,0,0.12);
                    overflow-y: auto;
                    transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1001;
                }

                .mobile-sidebar.active {
                    left: 0;
                }
                
                /* Mobile Sidebar Header */
                .mobile-sidebar-header {
                    padding: 20px;
                    background: #0017e3;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }
                
                .mobile-sidebar-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0;
                    letter-spacing: 0.3px;
                    color: #ffffff;
                }
                
                .mobile-close-btn {
                    background: rgba(255,255,255,0.15);
                    border: none;
                    color: #fff;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 20px;
                    line-height: 1;
                    transition: all 0.2s;
                }
                
                .mobile-close-btn:hover {
                    background: rgba(255,255,255,0.25);
                }
                
                /* Mobile Menu Content */
                .mobile-sidebar-content {
                    padding: 8px 0 24px;
                }
                
                .mobile-menu-list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                .mobile-menu-item {
                    border-bottom: 1px solid #f0f4ff;
                }
                
                .mobile-menu-item:last-child {
                    border-bottom: none;
                }
                
                .mobile-menu-link,
                .mobile-menu-toggle {
                    display: flex;
                    align-items: center;
                    padding: 16px 20px;
                    color: #2c3e50;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    background: none;
                    border: none;
                    width: 100%;
                    text-align: left;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .mobile-menu-link:hover,
                .mobile-menu-toggle:hover {
                    background: #f0f4ff;
                    color: #0017e3;
                }
                
                .mobile-menu-text {
                    flex: 1;
                }
                
                .mobile-menu-arrow {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                    color: #9e9e9e;
                    font-size: 12px;
                }
                
                .mobile-menu-arrow.open {
                    transform: rotate(180deg);
                    color: #0017e3;
                }
                
                /* Mobile Submenu */
                .mobile-submenu {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    background: #fafbff;
                }

                .mobile-submenu.active {
                    max-height: 320px;
                    overflow-y: auto;
                }
                
                .mobile-submenu-inner {
                    padding: 20px 0 16px 0;
                }
                
                .mobile-submenu-section {
                    margin-bottom: 16px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #e8ecf4;
                    width: 100%;
                }
                
                .mobile-submenu-section:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .mobile-submenu-title {
                    padding: 8px 20px 8px 35px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #0017e3;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    background: transparent;
                    margin-bottom: 4px;
                }
                
                .mobile-submenu-list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    width: 100%;
                }
                
                .mobile-submenu-item {
                    margin: 4px 10px 2px 45px;
                }
                
                .mobile-submenu-item a {
                    display: block;
                    padding: 10px 20px 10px 50px;
                    color: #4a5568;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    background: transparent;
                    text-align: left;
                    position: relative;
                }

                .mobile-submenu-item a::before {
                    content: '•';
                    position: absolute;
                    left: 35px;
                    color: #0017e3;
                    font-size: 14px;
                }

                .mobile-submenu-item a:hover {
                    background: #e8f0ff;
                    color: #0017e3;
                }
                
                /* Simple Submenu (for Product, Company) */
                .mobile-submenu-simple {
                    padding: 20px 0 16px 0;
                    margin: 4px 10px 2px 45px;
                }

                .mobile-submenu-simple a {
                    display: block;
                    padding: 10px 20px 10px 50px;
                    color: #4a5568;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    background: transparent;
                    text-align: left;
                    position: relative;
                }

                .mobile-submenu-simple a::before {
                    content: '•';
                    position: absolute;
                    left: 35px;
                    color: #0017e3;
                    font-size: 14px;
                }

                .mobile-submenu-simple a:hover {
                    background: #e8f0ff;
                    color: #0017e3;
                }
                
                /* Submenu Scrollbar */
                .mobile-submenu::-webkit-scrollbar {
                    width: 4px;
                }
                
                .mobile-submenu::-webkit-scrollbar-track {
                    background: #f0f4ff;
                }
                
                .mobile-submenu::-webkit-scrollbar-thumb {
                    background: #c7d6ff;
                    border-radius: 4px;
                }
                
                .mobile-submenu::-webkit-scrollbar-thumb:hover {
                    background: #a4baff;
                }
                
                /* Scrollbar Styling */
                .mobile-sidebar::-webkit-scrollbar {
                    width: 4px;
                }
                
                .mobile-sidebar::-webkit-scrollbar-track {
                    background: #f5f5f5;
                }
                
                .mobile-sidebar::-webkit-scrollbar-thumb {
                    background: #c7d6ff;
                    border-radius: 4px;
                }
                
                .mobile-sidebar::-webkit-scrollbar-thumb:hover {
                    background: #a4baff;
                }
                
                /* Responsive Breakpoints */
                @media (max-width: 1024px) {
                    .nav-main-menu {
                        display: none !important;
                    }
                    
                    .burger-icon {
                        display: flex;
                    }
                    
                    .header-nav {
                        margin: 0 15px;
                        justify-content: flex-end;
                    }
                }
                
                @media (max-width: 768px) {
                    .header-logo img {
                        height: 38px;
                    }
                    
                    .main-header {
                        height: 60px;
                    }
                    
                    .btn {
                        padding: 8px 16px;
                        font-size: 13px;
                    }
                }
                
                @media (max-width: 480px) {
                    .container {
                        padding: 0 15px;
                    }
                    
                    .header-logo img {
                        height: 32px;
                    }
                    
                    .mobile-sidebar {
                        width: 280px;
                    }
                    
                    .btn {
                        padding: 7px 12px;
                        font-size: 12px;
                    }
                }
                
                /* Utility Classes */
                .d-none {
                    display: none;
                }
                
                .d-sm-inline-block {
                    display: inline-block;
                }
                
                @media (min-width: 1200px) {
                    .d-xl-block {
                        display: block !important;
                    }
                }
            `}</style>
            
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            {/* Mobile Burger Icon - positioned before logo */}
                            <button
                                className={`burger-icon ${isMobileMenuOpen ? 'active' : ''}`}
                                onClick={toggleMobileMenu}
                                aria-label="Toggle menu"
                            >
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </button>

                            <div className="header-logo">
                                <Link className="d-flex" href="/index-3">
                                    <img alt="Ecom" src="/assets/logo_name.svg" />
                                </Link>
                            </div>

                            <div className="header-nav">
                                {/* Desktop Navigation */}
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children services-mega-menu pl-20">
                                            <Link className="active" href="/">Services</Link>
                                            <div className="mega-menu-dropdown">
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
                                                            <li><Link href="/OCR">OCR /IDP</Link></li> 
                                                            <li><Link href="/GenAI">Generative AI</Link></li>                                                          
                                                            <li><Link href="/index-11">Training as a Service</Link></li>
                                                            <li><Link href="/Content-md">Content Moderation</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#">Product</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="https://kubetrace.net/" target="_blank" rel="noopener noreferrer">KubeTrace</Link></li>
                                                <li><Link href="/HI">Human in the Loop</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children services-mega-menu">
                                            <Link className="active" href="/">Industries</Link>
                                            <div className="mega-menu-dropdown">
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
                                        <li className="has-children">
                                            <Link href="#">Company</Link>
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
                                <Link className="btn btn-brand-1 hover-up" href="/register">Get a Demo</Link>
                                
                                {/* Mobile Burger Icon */}
                                <button 
                                    className={`burger-icon ${isMobileMenuOpen ? 'active' : ''}`}
                                    onClick={toggleMobileMenu}
                                    aria-label="Toggle menu"
                                >
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Sidebar Navigation */}
            
            
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
                {/* Sidebar Header */}
                <div className="mobile-sidebar-header">
                    <h3 className="mobile-sidebar-title">Menu</h3>
                    <button 
                        className="mobile-close-btn"
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                
                {/* Sidebar Content */}
                <div className="mobile-sidebar-content">
                    <ul className="mobile-menu-list">
                        {/* Services Menu */}
                        <li className="mobile-menu-item">
                            <button
                                className="mobile-menu-toggle"
                                onClick={() => handleMobileSubmenu('services')}
                            >
                                <span className="mobile-menu-text">Services</span>
                                <span className={`mobile-menu-arrow ${activeMobileMenu === 'services' ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className={`mobile-submenu ${activeMobileMenu === 'services' ? 'active' : ''}`}>
                                <div className="mobile-submenu-inner">
                                    <div className="mobile-submenu-section">
                                        <div className="mobile-submenu-title">Pre-training</div>
                                        <ul className="mobile-submenu-list">
                                            <li className="mobile-submenu-item">
                                                <Link href="/CollectData" onClick={closeMobileMenu}>Data Collection</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/Image-Anno" onClick={closeMobileMenu}>Image Annotation</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/SFT" onClick={closeMobileMenu}>Supervised Fine-Tuning</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-submenu-section">
                                        <div className="mobile-submenu-title">Post-training</div>
                                        <ul className="mobile-submenu-list">
                                            <li className="mobile-submenu-item">
                                                <Link href="/HITL" onClick={closeMobileMenu}>HITL</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/RLHF" onClick={closeMobileMenu}>RLHF</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/RedTeaming" onClick={closeMobileMenu}>Red Teaming Services</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/LLM-Evals" onClick={closeMobileMenu}>AI Evals</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-submenu-section">
                                        <div className="mobile-submenu-title">Cloud</div>
                                        <ul className="mobile-submenu-list">
                                            <li className="mobile-submenu-item">
                                                <Link href="/MLOps" onClick={closeMobileMenu}>MLOps</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/DevOps" onClick={closeMobileMenu}>DevOps</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-submenu-section">
                                        <div className="mobile-submenu-title">Others</div>
                                        <ul className="mobile-submenu-list">
                                            <li className="mobile-submenu-item">
                                                <Link href="/ExpertNetwork" onClick={closeMobileMenu}>Expert Network</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/Search" onClick={closeMobileMenu}>Search and Personalization</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/OCR" onClick={closeMobileMenu}>OCR /IDP</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/GenAI" onClick={closeMobileMenu}>Generative AI</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/index-11" onClick={closeMobileMenu}>Training as a Service</Link>
                                            </li>
                                            <li className="mobile-submenu-item">
                                                <Link href="/Content-md" onClick={closeMobileMenu}>Content Moderation</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                
                                                <li className="mobile-menu-item">
                                                    <button
                                                        className="mobile-menu-toggle"
                                                        onClick={() => handleMobileSubmenu('product')}
                                                    >
                                                        <span className="mobile-menu-text">Product</span>
                                                        <span className={`mobile-menu-arrow ${activeMobileMenu === 'product' ? 'open' : ''}`}>
                                                            ▼
                                                        </span>
                                                    </button>
                                                    <div className={`mobile-submenu ${activeMobileMenu === 'product' ? 'active' : ''}`}>
                                                        <ul className="mobile-submenu-list">
                                                            <li className="mobile-submenu-item">
                                                                <Link 
                                                                    href="https://kubetrace.net/" 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer" 
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    KubeTrace
                                                                </Link>
                                                            </li>
                                                            <li className="mobile-submenu-item">
                                                                <Link href="/HI" onClick={closeMobileMenu}>
                                                                    Human in the Loop
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                
                                                {/* Industries Menu */}
                        <li className="mobile-menu-item">
                            <button
                                className="mobile-menu-toggle"
                                onClick={() => handleMobileSubmenu('industries')}
                            >
                                <span className="mobile-menu-text">Industries</span>
                                <span className={`mobile-menu-arrow ${activeMobileMenu === 'industries' ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className={`mobile-submenu ${activeMobileMenu === 'industries' ? 'active' : ''}`}>
                                <div className="mobile-submenu-inner">
                                    <ul className="mobile-submenu-list">
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/ADAS" onClick={closeMobileMenu}>ADAS</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Retail" onClick={closeMobileMenu}>Retail</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Geospatial" onClick={closeMobileMenu}>Geo Spatial</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Mapping" onClick={closeMobileMenu}>Mapping</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/MedicalAI" onClick={closeMobileMenu}>Medical AI</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/VoiceAI" onClick={closeMobileMenu}>Voice AI</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Manufacturing" onClick={closeMobileMenu}>Manufacturing</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Agriculture" onClick={closeMobileMenu}>Agriculture</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/SocialMedia" onClick={closeMobileMenu}>Social Media</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/AssetManagement" onClick={closeMobileMenu}>Asset Management</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Fintech" onClick={closeMobileMenu}>Fintech</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/RPA" onClick={closeMobileMenu}>RPA</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/PhysicalAI" onClick={closeMobileMenu}>Physical AI</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Ecommerce" onClick={closeMobileMenu}>E-Commerce and Content</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Insurance" onClick={closeMobileMenu}>Insurance</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/industries/Sports" onClick={closeMobileMenu}>Sports & Media</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* Company Menu */}
                        <li className="mobile-menu-item">
                            <button
                                className="mobile-menu-toggle"
                                onClick={() => handleMobileSubmenu('company')}
                            >
                                <span className="mobile-menu-text">Company</span>
                                <span className={`mobile-menu-arrow ${activeMobileMenu === 'company' ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className={`mobile-submenu ${activeMobileMenu === 'company' ? 'active' : ''}`}>
                                    <ul className="mobile-submenu-list">
                                        <li className="mobile-submenu-item">
                                            <Link href="/about" onClick={closeMobileMenu}>About us</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/partners" onClick={closeMobileMenu}>Partner</Link>
                                        </li>
                                        <li className="mobile-submenu-item">
                                            <Link href="/career" onClick={closeMobileMenu}>Careers</Link>
                                        </li>
                                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;