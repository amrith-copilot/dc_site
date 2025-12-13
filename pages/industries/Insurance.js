
import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Insurance = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Insurance annotation capabilities
    const annotationItems = [
        { title: "Automated Vehicle Damage Region Tagging", description: "Identify specific damaged areas such as bumpers, fenders, headlights, quarter panels." },
        { title: "Pre- vs Post-Incident Image Comparison", description: "Detect discrepancies by comparing historical vehicle photos with claim images." },
        { title: "Part-Level Classification for Repair Estimates", description: "Tag components like doors, mirrors, grills, tires, and windshields." },
        { title: "Impact Direction & Collision Pattern Recognition", description: "Label collision patterns (front impact, side swipe, rear-end)." },
        { title: "Environmental Context Identification", description: "Detect weather (rain, snow), lighting, and background elements in accident photos." },
        { title: "Vehicle Position & Orientation Detection", description: "Annotate how the vehicle rests after an incident (angled, overturned, displaced)." },
        { title: "License Plate Visibility & OCR Checks", description: "Validate plate clarity, integrity, and match against policy records." },
        { title: "Tow & Recovery Scene Classification", description: "Identify towing trucks, recovery equipment, and accident-scene setups." },
        { title: "Underwriting Risk Scoring", description: "Tag historical patterns that influence risk profiles (property age, claim frequency)." },
        { title: "Document Consistency Verification", description: "Identify mismatches across submitted forms, IDs, or claim narratives." },
        { title: "Policy Metadata Extraction", description: "Extract coverage limits, exclusions, dates and policyholder details." },
        { title: "Historical Claims Classification", description: "Group prior claims into categories like collision, natural disaster, liability." },
        { title: "Incident Severity Tiering", description: "Tag severity levels (minor, moderate, major)." },
        { title: "Environmental Hazard Tagging", description: "Label risks such as flood zones, wildfire regions or coastal exposure." },
        { title: "Multimodal Evidence Correlation", description: "Link images, documents and written narratives to a single claim event." },
        { title: "Rare Insurance Fraud Pattern Detection", description: "Identify forged documents, repeated claim artifacts or staged accidents." }
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
