
import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Insurance = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Insurance annotation capabilities
    const annotationItems = [
        { title: "Underwriting Risk Scoring" },
        { title: "Document Consistency Verification" },
        { title: "Policy Metadata Extraction" },
        { title: "Historical Claims Classification" },
        { title: "Incident Severity Tiering" },
        { title: "Environmental Hazard Tagging" },
        { title: "Multimodal Evidence Correlation" },
        { title: "Rare Insurance Fraud Pattern Detection" }
    ];
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-10">
                            <div className="row align-items-start">
                                <span className="title-line color-black-text mb-10">Insurance</span>
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
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Insurance Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for insurance AI systems
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Vehicle Damage Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Vehicle Damage Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate dents, cracks and collision severity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Property Loss Assessment" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Property Loss Assessment</h6>
                                        <p className="font-sm color-grey-500">
                                            Label roof, water and fire damage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Claims Document OCR" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Claims Document OCR</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify fields, forms and structured data.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Fraud Behavior Indicators" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Fraud Behavior Indicators</h6>
                                        <p className="font-sm color-grey-500">
                                            Visual cues linked to suspicious claims.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Storm & Disaster Impact Mapping" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Storm & Disaster Impact Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify hail, flood and wind damage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Policy Document Classification" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Policy Document Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Sort coverage types and sections.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Medical Claim Visual Evidence" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Medical Claim Visual Evidence</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate injury documentation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Adjuster Workflow Vision" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Adjuster Workflow Vision</h6>
                                        <p className="font-sm color-grey-500">
                                            Track inspection steps and evidence capture.
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
                                <div className="col-lg-6">
                                    <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Insurance Solutions" />
                                </div>
                                <div className="col-lg-6">
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
