import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import ImageSlider from '../components/slider/ImageSlider';
import Offer4 from '../components/slider/Offer4';
import Knowledgebase2 from '../components/slider/KnowledgeBase2';
import CWHITL from '../components/elements/CWHITL';

const ContentMd = () => {
    const [isOpen, setOpen] = useState(false)
    // Local subcomponents to improve structure
    const Hero = () => (
        <section className="section banner-5">
            <div className="container">
                <div className="mt-65 mb-100">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-20">
                            <span className="title-line color-black-text">CONTENT MODERATION</span>
                            <h2 className="color-black-text mt-10">
                                Safeguard Your Platform <br />with Scalable <br />Content Moderation
                            </h2>
                        </div>
                        <div className="col-lg-6 mb-20">
                            <p className="color-black-text font-lg">
                                Deliver safer, trusted, and compliant user experiences with AI-powered and human-in-the-loop content moderation. From social media to marketplaces, gaming, and beyond—our solutions ensure your digital ecosystem stays secure, inclusive, and aligned with your brand values.
                            </p>
                        </div>
                    </div>
                    
                    <div className="box-video-banner-responsive">
                        <ImageSlider />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .box-video-banner-responsive {
                    width: 100%;
                    margin: 40px 0 0 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* Desktop and tablet */
                @media (min-width: 769px) {
                    .box-video-banner-responsive {
                        margin: 50px 0 0 0;
                    }
                }

                /* Mobile devices */
                @media (max-width: 768px) {
                    .section.banner-5 .container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .box-video-banner-responsive {
                        margin: 30px 0 0 0;
                        padding: 0;
                    }

                    .col-lg-6.mb-20 {
                        margin-bottom: 25px !important;
                    }

                    .mt-65 {
                        margin-top: 40px !important;
                    }

                    .mb-100 {
                        margin-bottom: 60px !important;
                    }
                }

                /* Small mobile devices */
                @media (max-width: 480px) {
                    .section.banner-5 .container {
                        padding-left: 10px;
                        padding-right: 10px;
                    }

                    .box-video-banner-responsive {
                        margin: 25px 0 0 0;
                    }

                    .mt-65 {
                        margin-top: 30px !important;
                    }

                    .mb-100 {
                        margin-bottom: 40px !important;
                    }

                    .col-lg-6.mb-20 {
                        margin-bottom: 20px !important;
                    }

                    .color-brand-2.mt-10 {
                        font-size: 1.8rem;
                        line-height: 1.3;
                    }

                    .font-md {
                        font-size: 0.95rem;
                        line-height: 1.5;
                    }
                }

                /* Extra small devices */
                @media (max-width: 360px) {
                    .section.banner-5 .container {
                        padding-left: 8px;
                        padding-right: 8px;
                    }

                    .box-video-banner-responsive {
                        margin: 20px 0 0 0;
                    }

                    .color-brand-2.mt-10 {
                        font-size: 1.6rem;
                    }

                    .font-md {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );

    const ModerationTypes = () => (
        <section className="section mt-110">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 mb-20">
                        <h2 className="color-brand-1 mb-0">Types of Content Moderation We Offer</h2>
                        <p className="color-grey-500 font-lg mt-20">
                            Here are some types of image annotations we provide.
                        </p>
                    </div>
                </div>

                <div className="row mt-45">
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage6/human1.png" 
                                    alt="Text Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Text Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Profanity filtering</li>
                                    <li>Hate speech & harassment detection</li>
                                    <li>Misinformation & disinformation checks</li>
                                    <li>Spam & scam filtering</li>
                                    <li>Sentiment & toxicity analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage6/human2.png" 
                                    alt="Image Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Image Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Nudity & sexual content detection</li>
                                    <li>Graphic violence identification</li>
                                    <li>Child exploitation prevention</li>
                                    <li>Offensive symbols, gestures, and extremist imagery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage6/human3.png" 
                                    alt="Video Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Video Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Frame-by-frame analysis for explicit or violent content</li>
                                    <li>Contextual detection of unsafe scenes</li>
                                    <li>Logo, brand, and copyright violations</li>
                                    <li>Deepfake detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-45">
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage12/human1.png" 
                                    alt="Audio Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Audio Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Transcription & profanity filtering</li>
                                    <li>Hate speech, extremism, and harassment detection</li>
                                    <li>Music or sound copyright violations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage12/human2.png" 
                                    alt="Profile Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Profile & Metadata Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Username, bio, and profile picture <br />checks</li>
                                    <li>Hashtag and metadata analysis</li>
                                    <li>Fraudulent identity detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="image-showcase-card-dynamic">
                            <div className="image-showcase-top-dynamic">
                                <img 
                                    src="assets/imgs/page/homepage12/human3.png" 
                                    alt="Live Moderation" 
                                    className="image-showcase-photo-dynamic"
                                />
                            </div>
                            <div className="image-showcase-content-dynamic">
                                <h4 className="color-brand-1 mb-15">Live Content Moderation</h4>
                                <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                    <li>Real-time monitoring for live streams and voice chats</li>
                                    <li>Instant flagging of violations</li>
                                    <li>Escalation workflows with human-in-the-loop review</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ContentTypesSection = () => (
        <section className="section mt-80 content-types-section">
            <div className="container">
                <div className="row mb-20">
                    <div className="col-lg-12 text-center">
                        <h2 className="color-brand-1 mb-10">Content Types We Moderate</h2>
                        <p className="font-md color-grey-500">
                            Coverage across asynchronous, synchronous, metadata, and both structured &amp; unstructured data sources.
                        </p>
                    </div>
                </div>

                <div className="row mt-30 gx-4 gy-4">
                    <div className="col-sm-6 col-lg-3">
                        <div className="ct-card p-4 h-100">
                            <h5 className="mb-2">Asynchronous</h5>
                            <p className="color-grey-500 mb-0">Posts, comments, reviews, profiles, images.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="ct-card p-4 h-100">
                            <h5 className="mb-2">Synchronous</h5>
                            <p className="color-grey-500 mb-0">Live video, voice chat, real-time streams.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="ct-card p-4 h-100">
                            <h5 className="mb-2">Metadata</h5>
                            <p className="color-grey-500 mb-0">Tags, product listings, ads, and other contextual fields.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="ct-card p-4 h-100">
                            <h5 className="mb-2">Structured &amp; Unstructured</h5>
                            <p className="color-grey-500 mb-0">JSON, XML, APIs, text blobs and mixed-format sources.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .content-types-section {
                    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
                    border-top: 1px solid rgba(16, 24, 40, 0.04);
                    border-bottom: 1px solid rgba(16, 24, 40, 0.04);
                    padding-top: 40px;
                    padding-bottom: 40px;
                }

                .ct-card {
                    background: #fff;
                    border-radius: 12px;
                    border: 1px solid rgba(16, 24, 40, 0.06);
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .ct-card h5 {
                    color: #0b5fff;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .ct-card p {
                    margin: 0;
                    line-height: 1.45;
                    font-size: 0.95rem;
                }

                .ct-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(11, 95, 255, 0.06);
                }

                @media (max-width: 768px) {
                    .content-types-section {
                        padding-top: 28px;
                        padding-bottom: 28px;
                    }

                    .ct-card {
                        padding: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .ct-card h5 {
                        font-size: 1rem;
                    }

                    .ct-card p {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );
    const IndustriesSection = () => (
        <section className="section mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
                        <p className="font-lg color-gray-500">
                            What makes us different from others? We give holistic solutions
                            <br className="d-none d-lg-block" />
                            with strategy, design &amp; technology.
                        </p>
                    </div>
                </div>
                <div className="mt-50">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-4">
                            <Offer4 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const WorkflowsSection = () => {
    const workflows = [
        { 
            icon: 'cross.png', 
            title: 'AI + HITL Review', 
            description: 'Automated filters handle scale; trained human moderators validate edge cases.',
            color: 'yellow'
        },
        { 
            icon: 'cross2.png', 
            title: 'Escalation Pathways', 
            description: 'Critical cases are flagged for immediate review.',
            color: 'green'
        },
        { 
            icon: 'cross3.png', 
            title: 'Red Teaming & Stress Testing', 
            description: 'Simulate adversarial attacks and content evasion tactics.',
            color: 'orange'
        },
        { 
            icon: 'cross4.png', 
            title: 'Feedback Loops', 
            description: 'Continuous improvement of AI models using annotated data from real cases.',
            color: 'teal'
        },
        { 
            icon: 'cross5.png', 
            title: 'Multilingual Support', 
            description: 'Moderation across 20+ languages and dialects.',
            color: 'green'
        },
    ];

    return (
        <section className="workflows-section py-5">
            <div className="container">
                {/* Header */}
                                <div className="row mb-25 header-row">
                                    <div className="col-lg-8">
                                        <h2 className="display-5 fw-bold color-brand-1 mb-3">
                                            Custom Workflows & <br />
                                            Human-in-the-Loop (HITL)
                                        </h2>
                                        <p className="lead color-grey-500">
                                            We understand no two platforms are alike. That's why we provide{' '}
                                            <strong>custom workflows</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* Workflow Cards Grid */}
                <div className="row g-4">
                    {workflows.map((workflow, index) => (
                        <div 
                            className="col-lg-4 col-md-" 
                            key={index}
                        >
                            <div className="workflow-card h-100 p-4 rounded-3 border border-light shadow-sm hover-lift transition">
                                {/* Icon */}
                                <div className="icon-wrapper mb-3">
                                    <img 
                                        src={`assets/imgs/page/homepage1/${workflow.icon}`}
                                        alt={workflow.title}
                                        className="workflow-icon"
                                        width="64"
                                        height="64"
                                    />
                                </div>

                                {/* Content */}
                                <h4 className="h5 fw-bold text-dark mb-3">
                                    {workflow.title}
                                </h4>
                                <p className="text-muted mb-0">
                                    {workflow.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .workflows-section {
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
                }

                /* Make exactly 2px space between header and the card grid */
                .workflows-section .header-row {
                    margin-bottom: 2px;
                }

                .workflow-card {
                    background: white;
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .workflow-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
                }

                .icon-wrapper {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 16px;
                }

                .workflow-icon {
                    object-fit: contain;
                }

                @media (max-width: 768px) {
                    .display-5 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

    const CoreValuesSection = () => (
        <section className="section mt-30 pb-50 bg-core-value">
            <div className="container">
                <div className="row box-list-core-value">
                    <div className="col-lg-4 mb-70">
                        <div className="box-core-value">
                            <h3 className="color-brand-1 mb-15">Why Choose Us</h3>
                            <p className="font-md color-grey-400">Hear from our users who have saved thousands on their Startup and SaaS solution spend.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ul className="list-core-value">
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Scalable</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Handle millions of content items daily.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Accurate</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">AI trained on diverse datasets, reducing bias and false positives.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Compliant</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Stay aligned with global and regional regulations.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className="list-core-value">
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Flexible</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Custom workflows tailored to your platform’s risk profile.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Human-Centric</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Expert moderators ensure nuanced understanding and fairness.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

    const CTASection = () => (
        <section className="section mt-50 pt-50 pb-40">
            <div className="container">
                <div className="box-cover-border">
                    <div className="row align-items-center">
                        <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="marketing" /></div>
                        <div className="col-lg-6">
                            <div className="box-info-video">
                                <h2 className="color-brand-1 mt-15 mb-20">Build Safer Digital Communities, Today.</h2>
                                <p className="font-md color-grey-500"> Let us help you create an online environment that’s secure, inclusive, and trusted by your users.</p>
                                <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // Final composed return using the smaller subcomponents
    return (
        <>
            <Layout>
                <Hero />
                <ModerationTypes />
                <ContentTypesSection />
                <IndustriesSection />
                <WorkflowsSection />
                <CoreValuesSection />
                <CTASection />
            </Layout>
        </>
    );
};

export default ContentMd;