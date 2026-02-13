import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Fintech = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Document OCR & KYC Extraction", "description": "Extract and structure data from identity documents.", "img": "/assets/image/Document OCR & KYC Extraction.webp", "alt": "Document OCR & KYC Extraction"}, {"title": "Check & Receipt Recognition", "description": "Annotate checks, receipts and payment documents.", "img": "/assets/image/Check & Receipt Recognition.webp", "alt": "Check & Receipt Recognition"}, {"title": "ID Verification Annotation", "description": "Label ID fields, photos and security features.", "img": "/assets/image/ID Verification Annotation.webp", "alt": "ID Verification Annotation"}, {"title": "Transaction Behavior Patterns", "description": "Classify transaction types and behavior sequences.", "img": "/assets/images/industry/fin_fraud.webp", "alt": "Transaction Behavior Patterns"}, {"title": "Fraud Trigger Visual Evidence", "description": "Tag visual indicators of fraudulent activity.", "img": "/assets/images/industry/fin_invoice.png", "alt": "Fraud Trigger Visual Evidence"}, {"title": "Signature Matching", "description": "Annotate signatures for verification models.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Signature Matching"}, {"title": "Financial Form Classification", "description": "Classify form types and document categories.", "img": "/assets/image/Financial Form Classification.webp ", "alt": "Financial Form Classification"}, {"title": "Bill/Invoice Structure Detection", "description": "Extract line items, totals and invoice fields.", "img": "/assets/image/BillInvoice Structure Detection.webp", "alt": "Bill/Invoice Structure Detection"}];

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
            <Head>
                <title>Fintech Data Annotation Services | AI Training Data for Finance | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALprovides fintech data annotation services for fraud detection, credit scoring, KYC automation, and financial document processing AI." />
                <meta name="keywords" content="fintech data annotation, financial AI data labeling, fraud detection datasets, KYC data annotation, credit scoring AI training data, transaction data labeling, banking AI datasets, financial document annotation, AML data annotation, AI for financial services" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">Training Data for Fintech Automation, Fraud Detection and Financial Intelligence</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                     High-quality annotations for documents, transactions, behavior patterns and identity verification — optimized for global financial systems.
                                 </h2>
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
                            <CardSlider cards={cardItems} pageId="fintech" />
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
                    <div className="col-lg-4 mb-70">
                        <ul className="list-core-value ">
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
                    title="Advanced Fintech Capabilities"
                    subtitle="Specialized labeling services for financial automation and fraud detection"
                    navId="fintech"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                  <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your Fintech AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for fraud detection, KYC automation and financial intelligence.
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

export default Fintech;
