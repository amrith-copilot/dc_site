import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const RPA = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "UI Element Detection", "description": "Detect buttons, fields, menus and interactive elements.", "img": "/assets/image/UI Element Detection.webp", "alt": "UI Element Detection"}, {"title": "Document Field Extraction", "description": "Extract and label fields from forms and documents.", "img": "/assets/image/Document Field Extraction.webp", "alt": "Document Field Extraction"}, {"title": "Workflow Path Tracking", "description": "Map process flows and decision pathways.", "img": "/assets/image/Workflow Path Tracking.webp", "alt": "Workflow Path Tracking"}, {"title": "Cursor & Keystroke Annotation", "description": "Label mouse movements and keyboard interactions.", "img": "/assets/image/Cursor & Keystroke Annotation.webp", "alt": "Cursor & Keystroke Annotation"}, {"title": "Screen State Recognition", "description": "Classify application states and screen contexts.", "img": "/assets/image/Screen State Recognition.webp", "alt": "Screen State Recognition"}, {"title": "Application Navigation Mapping", "description": "Map navigation paths across applications.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Application Navigation Mapping"}, {"title": "Form Completion Events", "description": "Tag form fill sequences and submission actions.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Form Completion Events"}, {"title": "Process Error Detection", "description": "Identify error states and process failures.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Process Error Detection"}];

    // Slider data for RPA annotation capabilities
    const annotationItems = [
        {
            title: "Automation Handoff Metadata",
            description: [
                "Approval-required markers",
                "Human-review flags",
                "Manual-verification tags"
            ]
        },
        {
            title: "Business Rule Categorization",
            description: [
                "Decision-rule tags",
                "Conditional-logic markers",
                "Trigger-condition labels"
            ]
        },
        {
            title: "Data Validation Tagging",
            description: [
                "Invalid-field flags",
                "Mismatch indicators",
                "Malformed-input labels"
            ]
        },
        {
            title: "Exception Path Identification",
            description: [
                "Non-standard flow IDs",
                "Exception-branch labels",
                "Alternate-path tags"
            ]
        },
        {
            title: "Multistep Workflow Grouping",
            description: [
                "Step-cluster tags",
                "Sequence-ID markers",
                "Flow-group identifiers"
            ]
        },
        {
            title: "Compliance Constraint Tagging",
            description: [
                "Audit-required step tags",
                "Regulatory-rule markers",
                "Compliance-tier labels"
            ]
        },
        {
            title: "Human-in-Loop Trigger Detection",
            description: [
                "Manual-intervention flags",
                "Verification-required labels",
                "Approval-gate markers"
            ]
        },
        {
            title: "Rare UI Edge Cases (CV)",
            description: [
                "Popup-window boxes",
                "Overlay-region masks",
                "Unexpected-dialog tags"
            ]
        },
        {
            title: "Screen State Similarity Detection (CV)",
            description: [
                "State-variant labels",
                "UI-change markers",
                "Near-duplicate screen IDs"
            ]
        }
    ];
    return (
        <>
            <Head>
                <title>RPA Data Annotation Services | Intelligent Automation Training Data | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALprovides RPA data annotation services to train intelligent automation systems, including document labeling, workflow tagging, and structured data extraction." />
                <meta name="keywords" content="RPA data annotation, robotic process automation data labeling, automation training data, intelligent automation datasets, document annotation for RPA, business process data labeling, structured data extraction services, invoice annotation services, form data labeling, AI automation training data" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">AI Training Data for Robotic Process Automation and Intelligent Workflows</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                     Annotations for document parsing, UI interactions, workflows and process agents — built for enterprises worldwide.
                                 </h2>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Structured labeling for screens, forms, keystrokes, workflows and multi-step processes powering next-gen RPA bots."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core RPA AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for process automation systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="rpa" />
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
                    <div className="col-lg-4 mb-70  ">
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
                    title="Advanced RPA Capabilities"
                    subtitle="Specialized labeling services for process automation and intelligent workflows"
                    navId="rpa"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                 <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your RPA Systems?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for process automation, document parsing and intelligent workflows.</p>
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

export default RPA;
