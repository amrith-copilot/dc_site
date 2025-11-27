import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/index-3" target="_blank" rel="noopener noreferrer"><img alt="Ecom" src="/assets/logo_name.svg" /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children services-mega-menu pl-20">
                                            <Link className="active" href="/" target="_blank" rel="noopener noreferrer">Services</Link>
                                            <div className="mega-menu-dropdown">
                                                <div className="mega-menu-container">
                                                    <div className="mega-menu-column">
                                                        <h4>Pre-training</h4>
                                                        <ul>
                                                            <li><Link href="/CollectData" target="_blank" rel="noopener noreferrer">Data Collection</Link></li>
                                                            <li><Link href="/Image-Anno" target="_blank" rel="noopener noreferrer">Image Annotation</Link></li>
                                                            <li><Link href="/SFT" target="_blank" rel="noopener noreferrer">Supervised Fine-Tuning</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Post-training</h4>
                                                        <ul>
                                                            <li><Link href="/HITL" target="_blank" rel="noopener noreferrer">HITL</Link></li>
                                                            <li><Link href="/RLHF" target="_blank" rel="noopener noreferrer">RLHF</Link></li>
                                                            <li><Link href="/RedTeaming" target="_blank" rel="noopener noreferrer">Red Teaming Services</Link></li>
                                                            <li><Link href="/LLM-Evals" target="_blank" rel="noopener noreferrer">AI Evals</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Cloud</h4>
                                                        <ul>
                                                            <li><Link href="/MLOps" target="_blank" rel="noopener noreferrer">MLOps</Link></li>
                                                            <li><Link href="/DevOps" target="_blank" rel="noopener noreferrer">DevOps</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <h4>Others</h4>
                                                        <ul>
                                                            <li><Link href="/ExpertNetwork" target="_blank" rel="noopener noreferrer">Expert Network</Link></li>
                                                            <li><Link href="/Search" target="_blank" rel="noopener noreferrer">Search and Personalization</Link></li>
                                                            <li><Link href="/OCR" target="_blank" rel="noopener noreferrer">OCR /IDP</Link></li> 
                                                            <li><Link href="/GenAI" target="_blank" rel="noopener noreferrer">Generative AI</Link></li>                                                          
                                                            <li><Link href="/index-11" target="_blank" rel="noopener noreferrer">Training as a Service</Link></li>
                                                            <li><Link href="/Content-md" target="_blank" rel="noopener noreferrer">Content Moderation</Link></li>
                                                            <li><Link href="/Search" target="_blank" rel="noopener noreferrer">Search and Personalization</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-children"><Link href="#" target="_blank" rel="noopener noreferrer">Product</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="https://kubetrace.net/" target="_blank" rel="noopener noreferrer">KubeTrace</Link></li>
                                                <li><Link href="/HI" target="_blank" rel="noopener noreferrer">Human in the Loop</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children services-mega-menu">
                                            <Link className="active" href="/" target="_blank" rel="noopener noreferrer">Industries</Link>
                                            <div className="mega-menu-dropdown">
                                                <div className="mega-menu-container">
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Manufacturing</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Agriculture</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Sports & Media</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Finance & Insurance</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Mapping</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Customer Service</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">RPA</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Asset Management</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Physical AI</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">E-Commerce and Content</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-column">
                                                        <ul>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">ADAS</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Retail</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Geospatial</Link></li>
                                                            <li><Link href="/industry" target="_blank" rel="noopener noreferrer">Robotics</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-children"><Link href="#" target="_blank" rel="noopener noreferrer">Resources</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/blog" target="_blank" rel="noopener noreferrer">Blog</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#" target="_blank" rel="noopener noreferrer">Company</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/about" target="_blank" rel="noopener noreferrer">About us</Link></li>
                                                <li><Link href="/career" target="_blank" rel="noopener noreferrer">Careers</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#" target="_blank" rel="noopener noreferrer">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/register" target="_blank" rel="noopener noreferrer">Register</Link></li>
                                                <li><Link href="/login" target="_blank" rel="noopener noreferrer">Login</Link></li>
                                                <li><Link href="/coming-soon" target="_blank" rel="noopener noreferrer">Coming soon</Link></li>
                                                <li><Link href="/404" target="_blank" rel="noopener noreferrer">Error 404</Link></li>
                                                <li><Link href="/help.js" target="_blank" rel="noopener noreferrer">Help</Link></li>
                                                <li><Link href="/term-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/pricing" target="_blank" rel="noopener noreferrer">Pricing</Link></li>
                                        <li><Link href="/contact" target="_blank" rel="noopener noreferrer">Contact</Link></li>
                                    </ul>
                                </nav>
                                <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                    onClick={() => { handleOpen(); handleRemove() }}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 hover-up" href="register" target="_blank" rel="noopener noreferrer">Get Started</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header;