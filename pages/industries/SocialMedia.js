import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const SocialMedia = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Content Moderation Classification", "description": "Classify content for policy compliance and safety.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Content Moderation Classification"}, {"title": "Object & Scene Understanding", "description": "Identify objects, scenes and contexts in user content.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Object & Scene Understanding"}, {"title": "User Action Recognition", "description": "Detect activities and behaviors in video content.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "User Action Recognition"}, {"title": "Meme OCR & Detection", "description": "Extract and classify text within memes and images.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Meme OCR & Detection"}, {"title": "Brand & Logo Recognition", "description": "Detect brands, logos and sponsored content.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Brand & Logo Recognition"}, {"title": "Fashion & Product Tagging", "description": "Tag clothing, accessories and products for shopping.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Fashion & Product Tagging"}, {"title": "Emotion & Expression Detection", "description": "Classify facial expressions and emotional cues.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Emotion & Expression Detection"}, {"title": "Spam & Bot Visual Patterns", "description": "Identify visual spam indicators and bot-generated content.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Spam & Bot Visual Patterns"}];

    // Slider data for Social Media annotation capabilities
    const annotationItems = [
        {
            title: "Sentiment Analysis Labeling",
            description: [
                "Positive/negative sentiment tokens",
                "Emotion-class labels",
                "Sarcasm flags — need to check"
            ]
        },
        {
            title: "Topic Clustering",
            description: [
                "Theme-category tags",
                "Conversation-topic IDs",
                "Content-domain labels"
            ]
        },
        {
            title: "Engagement Behavior Tagging",
            description: [
                "Dwell-time buckets",
                "Scroll-depth markers",
                "Repeat-view flags"
            ]
        },
        {
            title: "Virality Trend Annotation",
            description: [
                "Meme-template IDs",
                "Rapid-growth content flags",
                "Trend-seed markers"
            ]
        },
        {
            title: "Creator Profile Categorization",
            description: [
                "Creator-niche tags",
                "Audience-type labels",
                "Influencer-tier tags"
            ]
        },
        {
            title: "Multilingual Text Classification",
            description: [
                "Language ID tokens",
                "Code-switch segments",
                "Dialect-level labels"
            ]
        },
        {
            title: "Community Guideline Metadata",
            description: [
                "Risk-level labels",
                "Violation-likelihood tags",
                "Content-sensitivity scores"
            ]
        },
        {
            title: "Edge-Case Harmful Content Tagging (CV)",
            description: [
                "Deepfake detection masks",
                "Violence-probability score tags",
                "Weapon-region bounding boxes"
            ]
        },
        {
            title: "Face/Entity Blurring (CV)",
            description: [
                "Face bounding boxes",
                "Sensitive-entity masks",
                "Identity-obfuscation markers"
            ]
        },
        {
            title: "Meme Template Detection (CV)",
            description: [
                "Meme-layout region masks",
                "Image-template IDs",
                "Text-region metadata tags"
            ]
        }
    ];
    return (
        <>
            <Head>
                <title>Sports & Media Data Annotation Services | Video & AI Analytics | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALdelivers sports and media data annotation services for video analysis, player tracking, content indexing, and AI-powered media intelligence." />
                <meta name="keywords" content="sports data annotation, media data labeling, video annotation services, player tracking annotation, sports analytics datasets, broadcast video labeling, AI for sports analytics, content indexing services, action recognition datasets, media AI training data" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">Training Data for Social Media AI, Content Understanding and Safety Models</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                     High-precision annotations for user behavior, visual content, sentiment and moderation — for global social platforms.
                                 </h2>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner mb-70">
                                <VideoSlider
                                caption={"Structured labeling of images, videos, text and interactions to power recommendation engines, content discovery and safety systems."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div style={{marginTop: '-40px'}}></div>
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Social Media AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for social media AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="socialmedia" />
                        </div>
                    </div>
                </section>
                
                 <section className="section mt-10 pb-0 bg-core-value">
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
                <div style={{marginTop: '-40px'}}></div>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Social Media Annotation Capabilities"
                    subtitle="Specialized labeling services for content understanding and safety systems"
                    navId="socialmedia"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your Social Media ?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for content moderation, recommendation and safety systems.</p>
                                        <div className="box-button text-center mt-40">
                                            <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
               
            </Layout>
        </>
    );
};

export default SocialMedia;
