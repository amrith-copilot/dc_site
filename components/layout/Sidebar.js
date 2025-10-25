import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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

        if (openClass === "sidebar-visible") {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [openClass, handleRemove]);

    return (
        <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
            <div className="mobile-header-wrapper-inner">
                <div className="mobile-header-content-area">
                    <div className="perfect-scroll">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <Tabs
                                defaultActiveKey="menu"
                                id="fill-tab-example"
                                className="nav nav-tabs nav-tabs-mobile mt-25"
                                fill
                            >
                                <Tab eventKey="menu" title="Services">
                                    <div className="tab-pane">
                                        <nav className="mt-15">
                                            <ul className="mobile-menu font-heading">
                                                <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link className="active" href="/">Pre-Training</Link>
                                                    <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link className='active' href="/LLM-Evals">LLM Evals</Link></li>
                                                        <li><Link href="/Image-Anno">Image Annotations</Link></li>
                                                        <li><Link href="/SFT">Supervised Fine Tuning</Link></li>
                                                        <li><Link href="/CollectData">Data Collection</Link></li>
                                                        <li><Link href="/OCR">OCR / IDP</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link className="active" href="/">Post Training</Link>
                                                    <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link href="/index-11">Red Teaming</Link></li>
                                                        <li><Link href="/index-11">Generative AI</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link className="active" href="/">Others</Link>
                                                    <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link href="/index-11">Training as a service</Link></li>
                                                        <li><Link href="/index-11">Search and Personalization</Link></li>
                                                        <li><Link href="/Content-md">Content Moderation</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Tab>
                                <Tab eventKey="account" title="Industries">
                                    <div className="tab-pane">
                                        <nav className="mt-15">
                                            <ul className="mobile-menu font-heading">
                                                <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                    <li><Link href="/industry">ADAS</Link></li>
                                                    <li><Link href="/industry">Retail</Link></li>
                                                    <li><Link href="/industry">Geospatial</Link></li>
                                                    <li><Link href="/industry">Robotics</Link></li>
                                                    <li><Link href="/industry">Mapping</Link></li>
                                                    <li><Link href="/industry">Social Media</Link></li>
                                                    <li><Link href="/industry">Manufacturing</Link></li>
                                                    <li><Link href="/industry">Agriculture</Link></li>
                                                    <li><Link href="/industry">Sports & Media</Link></li>
                                                    <li><Link href="/industry">Finance & Insurance</Link></li>
                                                    <li><Link href="/industry">Customer Service</Link></li>
                                                    <li><Link href="/industry">RPA</Link></li>
                                                    <li><Link href="/industry">Asset Management</Link></li>
                                                    <li><Link href="/industry">Physical AI</Link></li>
                                                </ul>
                                            </ul>
                                        </nav>
                                    </div>
                                </Tab>
                                <Tab eventKey="company" title="Others">
                                    <div className="tab-pane">
                                        <nav className="mt-15">
                                            <ul className="mobile-menu font-heading">
                                                <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link href="#">Resources</Link>
                                                    <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link href="/blog">Blog</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link href="/blog">Company</Link>
                                                    <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link href="/about">About us</Link></li>
                                                        <li><Link href="/career">Careers</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                                    <span className="menu-expand">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </span>
                                                    <Link href="#">Pages</Link>
                                                    <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                        <li><Link href="/register">Register</Link></li>
                                                        <li><Link href="/login">Login</Link></li>
                                                        <li><Link href="/coming-soon">Coming soon</Link></li>
                                                        <li><Link href="/404">Error 404</Link></li>
                                                        <li><Link href="/help.js">Help</Link></li>
                                                        <li><Link href="/term-conditions">Terms and Conditions</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/pricing">Pricing</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;