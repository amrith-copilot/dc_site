
import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Insurance = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Vehicle Exterior Damage Detection", "description": "High-precision visual detection of dents, scratches, and collision damage for faster auto-claim assessments across North America, Europe, and APAC.", "img": "/assets/images/industry/fin_damage.png", "alt": "Annotated image showing vehicle exterior damage detection for auto insurance claims"}, {"title": "Windshield Crack & Glass Damage Analysis", "description": "AI-powered crack and glass damage detection enabling accurate repair cost estimation for global auto insurance providers.", "img": "/assets/images/industry/media.png", "alt": "Annotated windshield crack detection for auto insurance analysis"}, {"title": "Property Roof Condition Assessment (Drone Imagery)", "description": "Drone-based roof damage analysis providing insurers with rapid, accurate assessments of hail, wind, and aging-related risks worldwide.", "img": "/assets/images/industry/doc_hand.png", "alt": "Annotated drone roof inspection for property insurance assessments"}, {"title": "Water/Flood Damage Segmentation in Homes", "description": "Automated visual mapping of flood and water damage patterns for faster claim validation in global flood-prone regions.", "img": "/assets/images/industry/doc_data.png", "alt": "Annotated water and flood damage detection for home insurance claims"}, {"title": "Fire & Smoke Damage Classification", "description": "Computer-vision–based detection of burn marks, soot, and fire patterns to accelerate property damage evaluation in international markets.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Annotated fire and smoke damage classification for property insurance"}, {"title": "Vehicle Part Recognition for Repair Estimation", "description": "AI-driven identification of vehicle components to streamline repair planning for auto insurers across global repair networks.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Annotated vehicle part recognition for insurance repair estimation"}];

    // Slider data for Insurance annotation capabilities
    const annotationItems = [
        {
            title: "Underwriting Risk Scoring",
            description: [
                "Vehicle age tier labels — Vehicle year, Type",
                "Driver-risk category tags — Depend on Age, Experience, Violations",
                "Usage-intensity class markers — Odometer reading"
            ]
        },
        {
            title: "Document Consistency Verification",
            description: [
                "Form-field mismatch flags — Person info, Policy info",
                "ID–claim text discrepancy tags",
                "Signature–photo mismatch markers — Missing photo, mismatch"
            ]
        },
        {
            title: "Policy Metadata Extraction",
            description: [
                "Coverage-limit field labels — Coverage type, Amount",
                "Deductible-type markers — Deductible type/amount",
                "Policy-period tags — Policy start date, End date, Duration"
            ]
        },
        {
            title: "Historical Claims Classification",
            description: [
                "Collision-type classes — Claim ID, Date of claim, Location",
                "Weather-loss category tags — Type of damage, Date of incident",
                "Theft-event labels — Date of theft, Location"
            ]
        },
        {
            title: "Incident Severity Tiering",
            description: [
                "Minor / Moderate / Major impact labels — Severity type",
                "Repair-intensity tiers",
                "Cost-bracket markers"
            ]
        },
        {
            title: "Environmental Hazard Tagging (CV)",
            description: [
                "Flood-zone grid tags",
                "Wildfire-risk polygon labels",
                "Storm-exposure overlays"
            ]
        },
        {
            title: "Multimodal Evidence Correlation",
            description: [
                "Image–document pairing IDs",
                "Timestamp alignment markers",
                "Source-type linkage tags"
            ]
        },
        {
            title: "Rare Insurance Fraud Pattern Detection",
            description: [
                "Duplicate-image hash flags",
                "Manipulated-photo artifact tags",
                "Reused-damage pattern labels"
            ]
        },
        {
            title: "Automated Vehicle Damage Region Tagging (CV)",
            description: [
                "Bumper-damage polygons",
                "Door-panel dent masks",
                "Headlight-crack masks"
            ]
        },
        {
            title: "Pre- vs Post-Accident Comparison (CV)",
            description: [
                "Damage-delta pixel maps",
                "Pre-existing-scratch indicators",
                "New-impact region clusters"
            ]
        },
        {
            title: "Part-Level Classification (CV)",
            description: [
                "Headlight bounding boxes",
                "Mirror segmentation masks",
                "Tire-damage polygons"
            ]
        },
        {
            title: "Impact Pattern Recognition (CV)",
            description: [
                "Front-impact class labels",
                "Side-swipe pattern masks",
                "Rear-impact shape clusters"
            ]
        },
        {
            title: "Vehicle Position & Orientation (CV)",
            description: [
                "Axial rotation markers",
                "Tilt-angle labels",
                "Wheel-direction vectors"
            ]
        },
        {
            title: "License Plate OCR Integrity (CV)",
            description: [
                "Plate-character boxes",
                "Visibility-score tags",
                "Plate-alignment markers"
            ]
        },
        {
            title: "Tow & Recovery Scene Classification (CV)",
            description: [
                "Tow-truck instance masks",
                "Hook/chain detection boxes",
                "Winch-line region labels"
            ]
        }
    ];
    return (
        <Layout>
            <Head>
                <title>Insurance Data Annotation Services | AI for Claims & Risk | Dataclap</title>
                <meta name="description" content="Dataclap provides insurance data annotation services for claims processing, underwriting, fraud detection, and document automation AI systems." />
                <meta name="keywords" content="insurance data annotation, claims data labeling, insurance AI training data, underwriting data annotation, fraud detection datasets, policy document annotation, insurance OCR labeling, risk assessment datasets, financial document labeling, AI for insurance automation" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-10">
                            <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                    <h3 className="color-black-text mt-10 mb-20">
                                        AI Training Data for Insurance Claims, Risk Assessment and Fraud Detection</h3>
                                </div>
     
                                <div className="col-lg-6 mt-10 mb-20">
                                    <p className="font-lg color-black-text">
                                    High-quality annotations for claims imagery, damage scoring, document intelligence and risk analytics — optimized for insurers across North America, Europe and APAC.                                  
                                      </p> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-video">
                        <div className="container">
                            {/* VideoSlider with caption at bottom */}
                            <div className="box-video-banner">
                                <VideoSlider
                                    caption="Structured labeling for vehicle damage, property loss, medical claims, documents and customer interactions to improve claim accuracy, reduce fraud and automate underwriting."
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Computer Vision Use Cases */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Computer Vision Use Cases</h2>
                            <p className="font-lg color-grey-500">
                                AI-powered visual analysis for insurance claims, damage assessment and risk evaluation
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="insurance" />
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
                    title="Advanced Insurance Annotation Capabilities"
                    subtitle="Specialized labeling services for claims processing and risk analytics"
                    navId="insurance"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                  <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Transform Your Insurance AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for smarter claims processing and fraud detection.
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

export default Insurance;
 