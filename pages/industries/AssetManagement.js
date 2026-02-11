import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const AssetManagement = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Defect & Damage Detection", "description": "Annotate cracks, corrosion, leaks and wear across industrial and infrastructure assets.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Defect & Damage Detection"}, {"title": "Predictive Maintenance Indicators", "description": "Label vibration patterns, thermal hotspots and degradation signals.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Predictive Maintenance Indicators"}, {"title": "Equipment Condition Classification", "description": "Score asset health using visual and sensor-based evidence.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Equipment Condition Classification"}, {"title": "Utility Infrastructure Monitoring", "description": "Mark faults in power lines, transformers, pipelines and substations.", "img": "/assets/images/industry/asset-utility.jpg", "alt": "Utility Infrastructure Monitoring"}, {"title": "Facilities Inspection & Compliance", "description": "Identify safety violations, missing components and operational risks.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Facilities Inspection & Compliance"}, {"title": "Inventory & Asset Identification", "description": "Detect asset types, serial labels, barcodes and component parts.", "img": "/assets/image/Inventory & Asset Identification.webp", "alt": "Inventory & Asset Identification"}, {"title": "Structural Integrity Assessment", "description": "Annotate deformation, misalignment and load-related stress.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Structural Integrity Assessment"}, {"title": "Drone-Based Visual Inspection", "description": "Label faults from aerial imagery for hard-to-reach assets.", "img": "/assets/image/Drone-Based Visual Inspection.webp", "alt": "Drone-Based Visual Inspection"}];

    // Slider data for Asset Management annotation capabilities
    const annotationItems = [
        { title: "Lifecycle Stage Annotation", description: "Tag commissioning, active use, maintenance, and end-of-life phases." },
        { title: "Asset Utilization Pattern Analysis", description: "Map usage cycles, idle patterns and operational intensity." },
        { title: "Risk & Severity Scoring", description: "Classify potential impact levels for defect categories." },
        { title: "Compliance Documentation Tagging", description: "Organize inspection logs, audit events and regulatory checkpoints." },
        { title: "Spatial Localization & Mapping", description: "Associate assets with GPS coordinates, zones or facility sections." },
        { title: "Environmental Impact Metadata", description: "Capture temperature, humidity, dust and external exposure conditions." },
        { title: "Maintenance Workflow Event Tagging", description: "Label repair actions, follow-ups and scheduling dependencies." },
        { title: "Rare Failure & Edge-Case Identification", description: "Flag unusual operational anomalies and abnormal behavior patterns." }
    ];
    return (
        <Layout>
            <Head>
                <title>Asset Management Data Annotation Services | AI for Finance | Dataclap</title>
                <meta name="description" content="Power financial AI models with Dataclap’s asset management data annotation services for portfolio analytics, risk modeling, and predictive insights." />
                <meta name="keywords" content="asset management data annotation, financial data labeling, investment AI datasets, portfolio analysis AI, risk modeling annotation, financial NLP annotation, stock market data labeling, quantitative finance datasets, AI for wealth management" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                    <h4 className="color-black-text mt-10">
                                       AI Training Data for Asset Management, Predictive Maintenance and Infrastructure Monitoring
                                    </h4>
                                    <h4 className="color-black-text mt-10 mb-20"></h4>
                                </div>
     
                                <div className="col-lg-6  mt-10 mb-20">
                                    <p className="font-lg color-black-text">
                                        High-quality annotations for equipment inspection, defect detection, condition scoring and asset lifecycle intelligence — with structured labeling for images, video, IoT sensor streams and geospatial data. Built for Asset Management systems that detect faults early, reduce downtime and extend asset lifespan.
                                    </p>
                                </div>
                             
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Asset Management Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Powerful annotation capabilities for asset management AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="assetmanagement" />
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
                    title="Advanced Annotation Capabilities"
                    subtitle="Specialized labeling services for asset management and predictive maintenance"
                    navId="asset"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                   <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Optimize Your Asset Management?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for predictive maintenance and asset tracking.
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

export default AssetManagement;
