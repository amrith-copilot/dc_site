import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Manufacturing = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Surface Defect Detection", "description": "Identify scratches, dents, cracks and surface anomalies.", "img": "/assets/image/man_safety.webp", "alt": "Surface Defect Detection"}, {"title": "Assembly Verification", "description": "Verify correct assembly and detect missing components.", "img": "/assets/image/manufac_assembly.webp", "alt": "Assembly Verification"}, {"title": "Component Classification", "description": "Classify parts, materials and component types.", "img": "/assets/image/manufac_defect.webp", "alt": "Component Classification"}, {"title": "Robotic Grasp Point Annotation", "description": "Label optimal grip points for robotic manipulation.", "img": "/assets/image/manufac_inspection.webp", "alt": "Robotic Grasp Point Annotation"}, {"title": "Tool & Machine State Detection", "description": "Detect tool wear, machine status and operational states.", "img": "/assets/image/man_inventory.webp", "alt": "Tool & Machine State Detection"}, {"title": "Conveyor Object Tracking", "description": "Track items moving through production lines.", "img": "/assets/image/Conveyor Object Tracking.webp", "alt": "Conveyor Object Tracking"}, {"title": "Packaging Quality Check", "description": "Inspect packaging integrity and label accuracy.", "img": "/assets/image/Packaging Quality Check.webp", "alt": "Packaging Quality Check"}, {"title": "Industrial Safety Monitoring", "description": "Detect PPE compliance and safety zone violations.", "img": "/assets/image/man_safety.webp", "alt": "Industrial Safety Monitoring"}];

    // Slider data for Manufacturing annotation capabilities
    const annotationItems = [
        {
            title: "Production Step Metadata (CV)",
            description: [
                "Step-sequence labels",
                "Workstation-ID tags",
                "Stage-status markers"
            ]
        },
        {
            title: "Batch Quality Scoring",
            description: [
                "Pass/fail batch tags",
                "Quality-tier labels",
                "Defect-rate markers"
            ]
        },
        {
            title: "Calibration Pattern Tagging (CV)",
            description: [
                "Checkerboard corner points",
                "Target-pattern masks",
                "Intrinsic-calibration anchors"
            ]
        },
        {
            title: "Equipment Behavior Annotation",
            description: [
                "Machine-state labels",
                "Operation-mode tags",
                "Load-level markers"
            ]
        },
        {
            title: "Workflow Efficiency Mapping",
            description: [
                "Station-occupancy heatmaps",
                "Bottleneck region markers",
                "Cycle-time class labels"
            ]
        },
        {
            title: "Thermal Anomaly Tagging (CV)",
            description: [
                "Hotspot masks",
                "Temperature-zone classes",
                "Cooling-failure tags"
            ]
        },
        {
            title: "Process Drift Detection",
            description: [
                "Drift-index labels",
                "Step-deviation markers",
                "Out-of-tolerance flags"
            ]
        },
        {
            title: "Rare Mechanical Fault Cases (CV)",
            description: [
                "Broken-part segmentation",
                "Misalignment detection boxes",
                "Loose-component markers"
            ]
        },
        {
            title: "Surface Imperfection Recognition (CV)",
            description: [
                "Scratch masks",
                "Dent instance segmentation",
                "Texture-deviation labels"
            ]
        }
    ];
    return (
        <>
            <Head>
                <title>Manufacturing Data Annotation Services | Industrial AI Solutions | Dataclap</title>
                <meta name="description" content="Improve quality control and automation with Dataclap’s manufacturing data annotation services for defect detection, robotics, and industrial AI systems." />
                <meta name="keywords" content="manufacturing data annotation, industrial AI labeling, defect detection annotation, factory automation AI, quality inspection data labeling, robotics training data, machine vision annotation, predictive maintenance datasets, industrial computer vision, production line AI data" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">Training Data for Manufacturing Vision, Quality Control and Industrial Automation</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                    <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        High-accuracy annotations for defect detection, assembly verification and robotic automation — trusted across factories in North America, Europe and APAC.
                                    </h2>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Labeling for machine vision systems that inspect products, track workflows, detect failures and power industrial robots."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Manufacturing Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for industrial AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="manufacturing" />
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
                                    <p className="font-md color-grey-500 mb-20">Tailor solutions for specific use cases and domains.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Expert Review</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Domain experts ensure relevance and accuracy.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Security</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Enterprise-grade data protection and compliance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Annotation Slider - Advanced Manufacturing Capabilities */}
        <AnnotationSlider 
            items={annotationItems}
            title="Advanced Manufacturing Capabilities"
            subtitle="Specialized labeling services for quality control and industrial automation"
            navId="manufacturing"
        />

        
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
                                    <p className="font-md color-grey-500 mb-20">Tailor solutions for specific use cases and domains.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Expert Review</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Domain experts ensure relevance and accuracy.</p>
                                </div>
                            </li>
                            <li> <span className="ticked" />
                                <h5 className="color-brand-1 mb-5">Security</h5>
                                <div className="box-border-dashed">
                                    <p className="font-md color-grey-500 mb-20">Enterprise-grade data protection and compliance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        
                         <section className="section mt-0">
            <div className=" bg-core-value">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="box-contact-form">
                                <h2 className="color-white mb-30">Get Started Today</h2>
                                <p className="font-lg color-white">Partner with us for high-quality labeled data</p>
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
export default Manufacturing; 
