import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const SocialMedia = () => {
    const [isOpen, setOpen] = useState(false)

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
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">Training Data for Social Media AI, Content Understanding and Safety Models</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     High-precision annotations for user behavior, visual content, sentiment and moderation — for global social platforms.

                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
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
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Content Moderation Classification" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Content Moderation Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify content for policy compliance and safety.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Object & Scene Understanding" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Object & Scene Understanding</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify objects, scenes and contexts in user content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="User Action Recognition" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">User Action Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect activities and behaviors in video content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Meme OCR & Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Meme OCR & Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract and classify text within memes and images.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Brand & Logo Recognition" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Brand & Logo Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect brands, logos and sponsored content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Fashion & Product Tagging" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Fashion & Product Tagging</h6>
                                        <p className="font-sm color-grey-500">
                                            Tag clothing, accessories and products for shopping.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Emotion & Expression Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Emotion & Expression Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify facial expressions and emotional cues.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Spam & Bot Visual Patterns" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Spam & Bot Visual Patterns</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify visual spam indicators and bot-generated content.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="ADAS Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 >Ready to Power Your Social Media ?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for content moderation, recommendation and safety systems.</p>
                                        <div className="box-button text-start mt-40">
                                            <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
               
        </Layout>
    );
};

export default SocialMedia;
