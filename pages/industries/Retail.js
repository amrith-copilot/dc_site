import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';
import Head from 'next/head';

const Retail = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Retail annotation capabilities
    const annotationItems = [
        { title: "Planogram Compliance Scoring", description: "Evaluate adherence to layout, placement rules and brand guidelines." },
        { title: "Customer–Product Interaction Labeling", description: "Track product pickups, returns, dwell times and engagement levels." },
        { title: "Fixture & Display Condition Tagging", description: "Record display damage, missing signage and merchandising issues." },
        { title: "Checkout Behavior Modeling", description: "Label scanning patterns, bagging sequences and checkout anomalies." },
        { title: "POS Event Correlation Metadata", description: "Map visual events to transaction logs for fraud and shrink analysis." },
        { title: "Staff Activity Categorization", description: "Classify stocking, cleaning, assisting and operational workflows." },
        { title: "Environmental Condition Annotation", description: "Note lighting, reflection, occlusion and camera-visibility variations." },
        { title: "Rare Event & Edge-Case Identification", description: "Tag unusual shopper actions, equipment failures or irregular store events." }
    ];

    const cardItems = [
        { 
            title: "Product Recognition on Shelves", 
            description: "Annotate SKU placement, facings and shelf positions for planogram compliance.",
            img: "/assets/image/Product Recognition on Shelves.webp",
            alt: "Product Recognition on Shelves"
        },
        { 
            title: "Out-of-Stock & Empty Shelf Detection", 
            description: "Identify missing products and low-stock zones for real-time replenishment.",
            img: "/assets/image/Out-of-Stock & Empty Shelf Detection.webp",
            alt: "Out-of-Stock & Empty Shelf Detection"
        },
        { 
            title: "Shopper Path Tracking", 
            description: "Map customer movement across aisles to optimize layout and flow.",
            img: "/assets/image/Shopper Path Tracking.webp",
            alt: "Shopper Path Tracking"
        },
        { 
            title: "Queue Monitoring", 
            description: "Detect line length and waiting times for smarter staffing.",
            img: "/assets/image/Queue Monitoring.webp",
            alt: "Queue Monitoring"
        },
        { 
            title: "Price Tag & Label Identification", 
            description: "Recognize price labels, discount tags and mismatched signage.",
            img: "/assets/image/Price Tag & Label Identification.webp",
            alt: "Price Tag & Label Identification"
        },
        { 
            title: "Self-Checkout Vision Support", 
            description: "Annotate items, barcodes and bagging area events for automated checkout systems.",
            img: "/assets/image/Self-Checkout Vision Support.webp",
            alt: "Self-Checkout Vision Support"
        },
        { 
            title: "In-Store Theft & Anomaly Detection", 
            description: "Label suspicious actions and asset-removal patterns.",
            img: "/assets/image/In-Store Theft & Anomaly Detection.webp",
            alt: "In-Store Theft & Anomaly Detection"
        },
        { 
            title: "Store Heatmap Generation", 
            description: "Segment high-engagement and low-traffic areas for merchandising decisions.",
            img: "/assets/image/Store Heatmap Generation.webp",
            alt: "Store Heatmap Generation"
        }
    ];
    return (
        <>
            <Head>
                <title>Retail Data Annotation Services | AI for E-commerce & Retail | Dataclap</title>
                <meta name="description" content="Improve retail AI models with Dataclap’s data annotation services for product tagging, shelf analysis, demand forecasting, and personalization systems." />
                <meta name="keywords" content="retail data annotation, ecommerce data labeling, product image annotation, retail AI training data, shelf image annotation" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-12 mt-10 mb-10">
                                    <h1 className="color-black-text">AI Training Data for Retail Vision, Store Analytics and Physical Commerce Automation</h1>
                                </div>

                                <div className="col-lg-12 mt-20 mb-10">
                                    <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        High-accuracy annotations for shopper behavior, shelf intelligence, product detection and in-store automation optimized for retailers across North America, Europe and APAC.
                                    </h2>
                                </div>
                            </div>

                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                    caption={"Structured labeling for CCTV footage, in-store cameras, POS streams and product imagery. Powering Retail AI systems that improve store operations, prevent loss, optimize merchandising and enhance real-world shopper experiences."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Retail Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for retail AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="retail" />
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
                <div style={{marginTop: '-10px'}}></div>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Retail  Capabilities"
                    subtitle="Specialized labeling services for retail operations and store analytics"
                    navId="retail"
                />
                <div style={{marginTop: '-50px'}}></div>
                {/* CTA Section */}
                <div className="retail-cta">
                   <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Revolutionize Your Retail AI?</h2>
                                        <p className="font-md color-grey-500">
                                        Partner with us to get high-quality training data for smarter retail analytics and customer insights.</p>
                                        <div className="box-button text-center mt-40">
                                            <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                @media (max-width: 992px) {
                    .retail-cta .box-cover-border {
                        background: var(--color-primary-100) !important;
                        color: var(--text-primary) !important;
                        border: 1px solid transparent !important;
                        box-shadow: none !important;
                        border-radius: 12px !important;
                        padding: 18px !important;
                    }
                    .retail-cta .box-info-video h2,
                    .retail-cta .box-info-video p {
                        color: var(--text-primary) !important;
                    }
                    .retail-cta .image-container img {
                        filter: brightness(0.7) saturate(0.9) !important;
                        border-radius: 12px !important;
                        box-shadow: none !important;
                    }
                    /* invert button on mobile so it remains visible */
                    .retail-cta .btn-brand-1 {
                        background: var(--color-primary-700) !important;
                        color: #ffffff !important;
                        border: none !important;
                    }
                    /* Hide any Swiper vertical/right pagination bullets on mobile for this page */
                    .swiper-pagination,
                    .swiper-group-1.right-pagination .swiper-pagination,
                    .swiper-pagination.swiper-vertical {
                        display: none !important;
                        visibility: hidden !important;
                        opacity: 0 !important;
                    }
                }
                `}</style>

                </div>

             
            </Layout>
        </>
    );
};

export default Retail;
