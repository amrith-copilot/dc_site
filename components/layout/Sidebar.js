import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const Sidebar = ({ openClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    // Close sidebar when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                handleRemove();
            }
        };

        // Prevent touch move on body when sidebar is open
        const preventTouchMove = (e) => {
            // Allow scrolling inside the sidebar content area
            const sidebarContent = document.querySelector('.mobile-header-content-area');
            if (sidebarContent && sidebarContent.contains(e.target)) {
                return; // Allow scroll inside sidebar
            }
            e.preventDefault();
        };

        if (openClass === "sidebar-visible") {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
            document.addEventListener('touchmove', preventTouchMove, { passive: false });
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('touchmove', preventTouchMove);
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        };
    }, [openClass, handleRemove]);

    const router = useRouter();

    const handleNavClick = (e, href) => {
        if (router && router.pathname === href) {
            // already on this page — just close sidebar and prevent navigation
            handleRemove();
            e.preventDefault();
            return;
        }
        handleRemove();
    };

    return (
        <>
            {/* Overlay */}
            <div 
                className={`mobile-menu-overlay ${openClass === "sidebar-visible" ? "active" : ""}`}
                onClick={handleRemove}
            />
            
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    {/* Close button */}
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/"><img alt="Logo" src="/assets/DC_Full_B.svg" style={{ height: '28px', width: 'auto' }} /></Link>
                        </div>
                        <button className="mobile-menu-close" onClick={handleRemove} aria-label="Close menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        {/* Services Menu */}
                                        <li className={isActive.key === "services" ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle("services")}>
                                                <svg className="icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isActive.key === "services" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                                </svg>
                                            </span>
                                            <span className="menu-title" onClick={() => handleToggle("services")}>Services</span>
                                            <ul className={isActive.key === "services" ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li className="menu-section-title">Pre-training</li>
                                                <li><Link legacyBehavior href="/CollectData"><a onClick={handleRemove}>Data Collection</a></Link></li>
                                                <li><Link legacyBehavior href="/Image-Anno"><a onClick={handleRemove}>Data Annotation</a></Link></li>
                                                <li><Link legacyBehavior href="/SFT"><a onClick={handleRemove}>Supervised Fine-Tuning</a></Link></li>
                                                
                                                <li className="menu-section-title">Post-training</li>
                                                <li><Link legacyBehavior href="/HITL"><a onClick={handleRemove}>HITL</a></Link></li>
                                                <li><Link legacyBehavior href="/RLHF"><a onClick={handleRemove}>RLHF</a></Link></li>
                                                <li><Link legacyBehavior href="/RedTeaming"><a onClick={handleRemove}>Red Teaming Services</a></Link></li>
                                                <li><Link legacyBehavior href="/LLM-Evals"><a onClick={handleRemove}>LLM Evals</a></Link></li>
                                                
                                                <li className="menu-section-title">Cloud</li>
                                                <li><Link legacyBehavior href="/MLOps"><a onClick={handleRemove}>MLOps</a></Link></li>
                                                <li><Link legacyBehavior href="/DevOps"><a onClick={handleRemove}>DevOps</a></Link></li>
                                                
                                                <li className="menu-section-title">Others</li>
                                                
                                                <li><Link legacyBehavior href="/Search"><a onClick={handleRemove}>Search and Personalization</a></Link></li>
                                                <li><Link legacyBehavior href="/OCR"><a onClick={handleRemove}>OCR / IDP</a></Link></li>
                                                <li><Link legacyBehavior href="/GenAI"><a onClick={handleRemove}>Generative AI</a></Link></li>
                                                <li><Link legacyBehavior href="/index-11"><a onClick={(e) => handleNavClick(e, '/index-11')}>Training as a Service</a></Link></li>
                                                <li><Link legacyBehavior href="/Content-md"><a onClick={handleRemove}>Content Moderation</a></Link></li>
                                            </ul>
                                        </li>

                                        

                                        {/* Industries Menu */}
                                        <li className={isActive.key === "industries" ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle("industries")}>
                                                <svg className="icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isActive.key === "industries" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                                </svg>
                                            </span>
                                            <span className="menu-title" onClick={() => handleToggle("industries")}>Industries</span>
                                            <ul className={isActive.key === "industries" ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link legacyBehavior href="/industries/ADAS"><a onClick={handleRemove}>ADAS</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Retail"><a onClick={handleRemove}>Retail</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Geospatial"><a onClick={handleRemove}>Geo Spatial</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Mapping"><a onClick={handleRemove}>Mapping</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/MedicalAI"><a onClick={handleRemove}>Medical AI</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/VoiceAI"><a onClick={handleRemove}>Voice AI</a></Link></li>

                                                <li><Link legacyBehavior href="/industries/Manufacturing"><a onClick={handleRemove}>Manufacturing</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Agriculture"><a onClick={handleRemove}>Agriculture</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/SocialMedia"><a onClick={handleRemove}>Social Media</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/AssetManagement"><a onClick={handleRemove}>Asset Management</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Fintech"><a onClick={handleRemove}>Fintech</a></Link></li>

                                                <li><Link legacyBehavior href="/industries/RPA"><a onClick={handleRemove}>RPA</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/physicalai"><a onClick={handleRemove}>Physical AI</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Ecommerce"><a onClick={handleRemove}>E-Commerce and Content</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Insurance"><a onClick={handleRemove}>Insurance</a></Link></li>
                                                <li><Link legacyBehavior href="/industries/Sports"><a onClick={handleRemove}>Sports & Media</a></Link></li>
                                            </ul>
                                        </li>

                                        {/* Company Menu */}
                                        <li className={isActive.key === "company" ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle("company")}>
                                                <svg className="icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isActive.key === "company" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                                </svg>
                                            </span>
                                            <span className="menu-title" onClick={() => handleToggle("company")}>Company</span>
                                            <ul className={isActive.key === "company" ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link legacyBehavior href="/about"><a onClick={handleRemove}>About us</a></Link></li>
                                                <li><Link legacyBehavior href="/career"><a onClick={handleRemove}>Careers</a></Link></li>
                                                <li><Link legacyBehavior href="/partners"><a onClick={handleRemove}>Partner</a></Link></li>
                                            </ul>
                                        </li>
                                        {/* Expert marketplace (separate item below Company) */}
                                        <li>
                                            <a href="https://experts.dataclap.digital/signin" onClick={handleRemove}>Expert marketplace</a>
                                        </li>
                                    </ul>
                                </nav>

                                {/* CTA Button */}
                                <div className="mobile-menu-cta">
                                    <Link legacyBehavior href="/contact"><a className="btn btn-brand-1 btn-full" onClick={handleRemove}>Get a demo</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;