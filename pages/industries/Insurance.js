
import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Insurance = () => {
    const [isOpen, setOpen] = useState(false)

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
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-10">
                            <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                    <h3 className="color-black-text mt-10">
                                        AI Training Data for Insurance Claims, Risk Assessment and Fraud Detection</h3>
                                </div>
     
                                <div className="col-lg-6 mt-10 mb-10">
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
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human1.png"
                                            alt="Annotated image showing vehicle exterior damage detection for auto insurance claims"
                                            title="Annotated image showing vehicle exterior damage detection for auto insurance claims"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Vehicle Exterior Damage Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            High-precision visual detection of dents, scratches, and collision damage for faster auto-claim assessments across North America, Europe, and APAC.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human2.png"
                                            alt="Annotated windshield crack detection for auto insurance analysis"
                                            title="Annotated windshield crack detection for auto insurance analysis"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Windshield Crack & Glass Damage Analysis</h6>
                                        <p className="font-sm color-grey-500">
                                            AI-powered crack and glass damage detection enabling accurate repair cost estimation for global auto insurance providers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human3.png"
                                            alt="Annotated drone roof inspection for property insurance assessments"
                                            title="Annotated drone roof inspection for property insurance assessments"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Property Roof Condition Assessment (Drone Imagery)</h6>
                                        <p className="font-sm color-grey-500">
                                            Drone-based roof damage analysis providing insurers with rapid, accurate assessments of hail, wind, and aging-related risks worldwide.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human1.png"
                                            alt="Annotated water and flood damage detection for home insurance claims"
                                            title="Annotated water and flood damage detection for home insurance claims"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Water/Flood Damage Segmentation in Homes</h6>
                                        <p className="font-sm color-grey-500">
                                            Automated visual mapping of flood and water damage patterns for faster claim validation in global flood-prone regions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human2.png"
                                            alt="Annotated fire and smoke damage classification for property insurance"
                                            title="Annotated fire and smoke damage classification for property insurance"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Fire & Smoke Damage Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Computer-vision–based detection of burn marks, soot, and fire patterns to accelerate property damage evaluation in international markets.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img
                                            src="/assets/imgs/page/homepage6/human3.png"
                                            alt="Annotated vehicle part recognition for insurance repair estimation"
                                            title="Annotated vehicle part recognition for insurance repair estimation"
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Vehicle Part Recognition for Repair Estimation</h6>
                                        <p className="font-sm color-grey-500">
                                            AI-driven identification of vehicle components to streamline repair planning for auto insurers across global repair networks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Insurance Annotation Capabilities"
                    subtitle="Specialized labeling services for claims processing and risk analytics"
                    navId="insurance"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Insurance Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Transform Your Insurance AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for smarter claims processing and fraud detection.
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

export default Insurance;
