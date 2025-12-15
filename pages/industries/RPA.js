import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const RPA = () => {
    const [isOpen, setOpen] = useState(false)

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
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">AI Training Data for Robotic Process Automation and Intelligent Workflows</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     Annotations for document parsing, UI interactions, workflows and process agents — built for enterprises worldwide.

                                 </p>
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
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="UI Element Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">UI Element Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect buttons, fields, menus and interactive elements.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Document Field Extraction" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Document Field Extraction</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract and label fields from forms and documents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Workflow Path Tracking" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Workflow Path Tracking</h6>
                                        <p className="font-sm color-grey-500">
                                            Map process flows and decision pathways.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Cursor & Keystroke Annotation" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Cursor & Keystroke Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Label mouse movements and keyboard interactions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Screen State Recognition" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Screen State Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify application states and screen contexts.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Application Navigation Mapping" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Application Navigation Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Map navigation paths across applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Form Completion Events" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Form Completion Events</h6>
                                        <p className="font-sm color-grey-500">
                                            Tag form fill sequences and submission actions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Process Error Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Process Error Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify error states and process failures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced RPA Capabilities"
                    subtitle="Specialized labeling services for process automation and intelligent workflows"
                    navId="rpa"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="RPA Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Power Your RPA Systems?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for process automation, document parsing and intelligent workflows.
                                        </p>
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

export default RPA;
