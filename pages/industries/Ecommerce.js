import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import CardSlider from '../../components/slider/CardSlider';
import Link from 'next/link';

const Ecommerce = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Product Attribute Tagging", "description": "Tag colors, sizes, materials and product features.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Product Attribute Tagging"}, {"title": "SKU Variant Recognition", "description": "Identify product variants and SKU relationships.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "SKU Variant Recognition"}, {"title": "Lifestyle Image Analysis", "description": "Analyze lifestyle imagery and scene context.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Lifestyle Image Analysis"}, {"title": "Model & Apparel Detection", "description": "Detect clothing items and fashion elements on models.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Model & Apparel Detection"}, {"title": "Beauty & Cosmetic Swatch Mapping", "description": "Map color swatches and cosmetic product variations.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Beauty & Cosmetic Swatch Mapping"}, {"title": "UGC Quality Filtering", "description": "Filter and classify user-generated content quality.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "UGC Quality Filtering"}, {"title": "Content Moderation", "description": "Moderate product listings and user content.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Content Moderation"}, {"title": "Brand & Logo Detection", "description": "Detect and identify brand logos in product images.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Brand & Logo Detection"}];

    // Slider data for E-Commerce annotation capabilities
    const annotationItems = [
        {
            title: "Category Taxonomy Mapping",
            description: [
                "Category-level tags",
                "Hierarchy-position markers",
                "Subcategory-ID labels"
            ]
        },
        {
            title: "Search Intent Classification",
            description: [
                "Transactional / Informational tags",
                "Query-topic labels",
                "Buyer-stage markers"
            ]
        },
        {
            title: "Review Sentiment Labeling",
            description: [
                "Positive / Negative opinion tokens",
                "Emotion-class labels",
                "Intensity-score tags"
            ]
        },
        {
            title: "Attribute Conflict Detection",
            description: [
                "Inconsistent-attribute flags",
                "Mismatch markers",
                "Contradiction-label tokens"
            ]
        },
        {
            title: "Pricing Metadata Extraction",
            description: [
                "Price OCR tokens",
                "Currency labels",
                "Discount-percentage tags"
            ]
        },
        {
            title: "Product Comparison Tagging",
            description: [
                "Similarity-score labels",
                "Feature-difference markers",
                "Alternative-product flags"
            ]
        },
        {
            title: "Seasonal Trend Annotation",
            description: [
                "Holiday-timing tags",
                "Seasonality classes",
                "Event-cycle markers"
            ]
        },
        {
            title: "Rare Catalog Inconsistencies (CV)",
            description: [
                "Wrong-product image flags",
                "Duplicate-listing markers",
                "Image–SKU mismatch tags"
            ]
        },
        {
            title: "UGC Visual Quality Filtering (CV)",
            description: [
                "Blur-detection masks",
                "Low-light classification",
                "Noise-level tags"
            ]
        }
    ];
    return (
        <Layout>
            <Head>
                <title>E-Commerce — AI Training Data for Product Vision & Search | DataClap</title>
                <meta name="description" content="High-quality training data for e-commerce: product attribute tagging, SKU recognition, UGC filtering, and content moderation. Scalable annotation pipelines to improve search, personalization and conversion." />
                <meta name="keywords" content="ecommerce AI, product image annotation, SKU recognition dataset, product attribute tagging, UGC filtering" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-20">AI Training Data for E-Commerce Search, Product Vision and Content Intelligence</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-10 mb-20">
                                <p className="font-lg color-black-text">
                                     Accurate annotations for SKUs, attributes, content categorization and recommendations for global marketplaces.

                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Labeling for product images, lifestyle visuals, UGC, metadata, and multi-modal content powering retail search and personalization engines."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core E-Commerce AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for product and content AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="ecommerce" />
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
                    title="Advanced E-Commerce Capabilities"
                    subtitle="Specialized labeling services for product discovery and content intelligence"
                    navId="ecommerce"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your E-Commerce AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for product search, content intelligence and personalization.
                                        </p>
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
    );
};

export default Ecommerce;
