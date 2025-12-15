import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Fintech = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Fintech annotation capabilities
    const annotationItems = [
        {
            title: "Risk Score Labeling",
            description: [
                "High / Medium / Low risk tags",
                "Risk-factor category labels",
                "Exposure-tier markers"
            ]
        },
        {
            title: "Spending Pattern Tagging",
            description: [
                "Merchant-category ID tags",
                "Purchase-cluster labels",
                "Recurring-transaction markers"
            ]
        },
        {
            title: "Chargeback Classification",
            description: [
                "Fraud vs dispute classes",
                "Reason-code labels",
                "Transaction-type flags"
            ]
        },
        {
            title: "Merchant Category Modeling",
            description: [
                "MCC-code tokens",
                "Merchant-type labels",
                "Industry-segment tags"
            ]
        },
        {
            title: "Compliance Event Tagging",
            description: [
                "AML-flag tokens",
                "KYC-event markers",
                "Sanction-screening flags"
            ]
        },
        {
            title: "Time-Series Anomaly Detection",
            description: [
                "Spike / dip markers",
                "Irregular-pattern flags",
                "Volatility-zone labels"
            ]
        },
        {
            title: "User Intent Metadata",
            description: [
                "Intent labels (transfer, refund)",
                "Action-category tags",
                "Goal-state markers"
            ]
        },
        {
            title: "Rare Fraud Case Identification (CV)",
            description: [
                "Forgery artifact masks",
                "Synthetic-document flags",
                "Tampered-field regions"
            ]
        },
        {
            title: "Document Tampering Detection (CV)",
            description: [
                "Cropping-boundary masks",
                "Manipulated-text regions",
                "Overlay-layer detection tags"
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
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">Training Data for Fintech Automation, <br />Fraud Detection and Financial Intelligence</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     High-quality annotations for documents, transactions, behavior patterns and identity verification — optimized for global financial systems.

                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Label structured/unstructured data for KYC, AML, risk scoring, fraud prevention and financial automation."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Fintech AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for financial AI systems
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Document OCR & KYC Extraction" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Document OCR & KYC Extraction</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract and structure data from identity documents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Check & Receipt Recognition" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Check & Receipt Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate checks, receipts and payment documents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="ID Verification Annotation" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">ID Verification Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Label ID fields, photos and security features.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Transaction Behavior Patterns" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Transaction Behavior Patterns</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify transaction types and behavior sequences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Fraud Trigger Visual Evidence" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Fraud Trigger Visual Evidence</h6>
                                        <p className="font-sm color-grey-500">
                                            Tag visual indicators of fraudulent activity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Signature Matching" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Signature Matching</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate signatures for verification models.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Financial Form Classification" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Financial Form Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify form types and document categories.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Bill/Invoice Structure Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Bill/Invoice Structure Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract line items, totals and invoice fields.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Fintech Capabilities"
                    subtitle="Specialized labeling services for financial automation and fraud detection"
                    navId="fintech"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Fintech Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Power Your Fintech AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for fraud detection, KYC automation and financial intelligence.
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

export default Fintech;
