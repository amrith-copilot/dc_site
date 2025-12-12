import Link from "next/link";
import { useState, useEffect } from "react";

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
                                                <li><Link href="/CollectData" onClick={handleRemove}>Data Collection</Link></li>
                                                <li><Link href="/Image-Anno" onClick={handleRemove}>Image Annotation</Link></li>
                                                <li><Link href="/SFT" onClick={handleRemove}>Supervised Fine-Tuning</Link></li>
                                                
                                                <li className="menu-section-title">Post-training</li>
                                                <li><Link href="/HITL" onClick={handleRemove}>HITL</Link></li>
                                                <li><Link href="/RLHF" onClick={handleRemove}>RLHF</Link></li>
                                                <li><Link href="/RedTeaming" onClick={handleRemove}>Red Teaming Services</Link></li>
                                                <li><Link href="/LLM-Evals" onClick={handleRemove}>LLM Evals</Link></li>
                                                
                                                <li className="menu-section-title">Cloud</li>
                                                <li><Link href="/MLOps" onClick={handleRemove}>MLOps</Link></li>
                                                <li><Link href="/DevOps" onClick={handleRemove}>DevOps</Link></li>
                                                
                                                <li className="menu-section-title">Others</li>
                                                <li><Link href="/ExpertNetwork" onClick={handleRemove}>Expert Network</Link></li>
                                                <li><Link href="/Search" onClick={handleRemove}>Search and Personalization</Link></li>
                                                <li><Link href="/OCR" onClick={handleRemove}>OCR / IDP</Link></li>
                                                <li><Link href="/GenAI" onClick={handleRemove}>Generative AI</Link></li>
                                                <li><Link href="/index-11" onClick={handleRemove}>Training as a Service</Link></li>
                                                <li><Link href="/Content-md" onClick={handleRemove}>Content Moderation</Link></li>
                                            </ul>
                                        </li>

                                        {/* Product Menu */}
                                        <li className={isActive.key === "product" ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle("product")}>
                                                <svg className="icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isActive.key === "product" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                                </svg>
                                            </span>
                                            <span className="menu-title" onClick={() => handleToggle("product")}>Product</span>
                                            <ul className={isActive.key === "product" ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/KubeTrace" onClick={handleRemove}>KubeTrace</Link></li>
                                                <li><Link href="/HI" onClick={handleRemove}>Human in the Loop</Link></li>
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
                                                <li><Link href="/industries/Manufacturing" onClick={handleRemove}>Manufacturing</Link></li>
                                                <li><Link href="/industries/Agriculture" onClick={handleRemove}>Agriculture</Link></li>
                                                <li><Link href="/industries/Sports" onClick={handleRemove}>Sports & Media</Link></li>
                                                <li><Link href="/industries/Fintech" onClick={handleRemove}>Finance & Insurance</Link></li>
                                                <li><Link href="/industries/Mapping" onClick={handleRemove}>Mapping</Link></li>
                                                <li><Link href="/industries/VoiceAI" onClick={handleRemove}>Customer Service</Link></li>
                                                <li><Link href="/industries/RPA" onClick={handleRemove}>RPA</Link></li>
                                                <li><Link href="/industries/AssetManagement" onClick={handleRemove}>Asset Management</Link></li>
                                                <li><Link href="/industries/PhysicalAI" onClick={handleRemove}>Physical AI</Link></li>
                                                <li><Link href="/industries/Ecommerce" onClick={handleRemove}>E-Commerce and Content</Link></li>
                                                <li><Link href="/industries/ADAS" onClick={handleRemove}>ADAS</Link></li>
                                                <li><Link href="/industries/Retail" onClick={handleRemove}>Retail</Link></li>
                                                <li><Link href="/industries/Geospatial" onClick={handleRemove}>Geospatial</Link></li>
                                                <li><Link href="/industries/PhysicalAI" onClick={handleRemove}>Robotics</Link></li>
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
                                                <li><Link href="/about" onClick={handleRemove}>About us</Link></li>
                                                <li><Link href="/career" onClick={handleRemove}>Careers</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>

                                {/* CTA Button */}
                                <div className="mobile-menu-cta">
                                    <Link className="btn btn-brand-1 btn-full" href="/contact" onClick={handleRemove}>
                                        Get a demo
                                    </Link>
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