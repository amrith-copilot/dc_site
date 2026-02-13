import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
import Link from 'next/link';
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });

const MedicalAI = () => {
    const [isOpen, setOpen] = useState(false)
    const [cardSlideIndex, setCardSlideIndex] = useState(0)
    const [cardsPerSlide, setCardsPerSlide] = useState(4)

    // Slider data for Medical AI annotation capabilities
    const annotationItems = [
        {
            title: "Clinical Workflow Tagging",
            description: [
                "Triage / diagnosis / treatment labels",
                "Workflow-step IDs",
                "Care-stage markers"
            ]
        },
        {
            title: "Medical Terminology Normalization",
            description: [
                "Synonym mapping tags",
                "Standard-term labels",
                "Term-linkage IDs"
            ]
        },
        {
            title: "Patient Risk Score Metadata",
            description: [
                "Risk-tier labels",
                "Severity-category markers",
                "Probability-score tokens"
            ]
        },
        {
            title: "Medication & Dosage Extraction",
            description: [
                "Drug-name tokens",
                "Dosage-value labels",
                "Administration-route tags"
            ]
        },
        {
            title: "Device / Monitoring State Labeling",
            description: [
                "Alert-state tags",
                "Sensor-status markers",
                "Measurement-mode labels"
            ]
        },
        {
            title: "Diagnostic Outcome Mapping",
            description: [
                "Diagnosis-ID labels",
                "Outcome-category tags",
                "Result-severity markers"
            ]
        },
        {
            title: "Lab Value Classification",
            description: [
                "Normal / abnormal flags",
                "Critical-range labels",
                "Reference-range IDs"
            ]
        },
        {
            title: "Rare Clinical Edge Cases (CV)",
            description: [
                "Unusual-lesion masks",
                "Atypical-pattern tags",
                "Low-frequency anomaly markers"
            ]
        },
        {
            title: "Anatomical Landmark Detection (CV)",
            description: [
                "Keypoint coordinate labels",
                "Landmark-region masks",
                "Skeleton-structure tags"
            ]
        },
        {
            title: "Medical Image Quality Assurance (CV)",
            description: [
                "Motion-blur flags",
                "Low-contrast markers",
                "Cropping-issue tags"
            ]
        }
    ];

    // Card data for the card grid slider
    const cardItems = [
        { title: "Lesion & Tumor Segmentation", description: "Segment lesions, tumors and abnormal tissue regions.", img: "/assets/image/Lesion & Tumor Segmentation.webp", alt: "Lesion & Tumor Segmentation" },
        { title: "Organ & Structure Labeling", description: "Label anatomical organs and body structures.", img: "/assets/imgs/page/homepage6/human2.png", alt: "Organ & Structure Labeling" },
        { title: "Bone Fracture Detection", description: "Detect and classify bone fractures in X-rays.", img: "/assets/image/Bone Fracture Detection.webp", alt: "Bone Fracture Detection" },
        { title: "Ultrasound Anatomy Annotation", description: "Annotate anatomical features in ultrasound imagery.", img: "/assets/image/Ultrasound Anatomy Annotation.webp", alt: "Ultrasound Anatomy Annotation" },
        { title: "Pathology Cell Classification", description: "Classify cell types in pathology slides.", img: "/assets/image/Pathology Cell Classification.webp", alt: "Pathology Cell Classification" },
        { title: "Radiology Report Linking", description: "Link imaging findings to radiology reports.", img: "/assets/imgs/page/homepage6/human3.png", alt: "Radiology Report Linking" },
        { title: "Vitals & Waveform Event Detection", description: "Detect events in ECG, EEG and vital waveforms.", img: "/assets/imgs/page/homepage6/human1.png", alt: "Vitals & Waveform Event Detection" },
        { title: "Surgical Video Action Recognition", description: "Recognize surgical actions and instrument usage.", img: "/assets/image/Surgical Video Action Recognition.webp", alt: "Surgical Video Action Recognition" },
    ];

    // Handle window resize to update cardsPerSlide
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setCardsPerSlide(window.innerWidth <= 768 ? 1 : 4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextCardSlide();
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [cardsPerSlide]);

    // Navigate to next slide
    const handleNextCardSlide = () => {
        const maxSlide = Math.ceil(cardItems.length / cardsPerSlide);
        setCardSlideIndex((prev) => (prev + 1) % maxSlide);
    };

    // Navigate to previous slide
    const handlePrevCardSlide = () => {
        const maxSlide = Math.ceil(cardItems.length / cardsPerSlide);
        setCardSlideIndex((prev) => (prev - 1 + maxSlide) % maxSlide);
    };

    // Get cards for current slide (2 rows of 2 = 4 cards on mobile, all on desktop)
    const getCurrentSlideCards = () => {
        const start = cardSlideIndex * cardsPerSlide;
        return cardItems.slice(start, start + cardsPerSlide);
    };
    return (
        <>
            <Head>
                <title>Medical AI Data Annotation Services | Healthcare AI Training | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALprovides secure medical AI annotation services for radiology, pathology, and clinical data to power accurate healthcare AI models." />
                <meta name="keywords" content="medical data annotation, healthcare AI annotation, medical image labeling, radiology image annotation, clinical data labeling" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-12 mt-10 mb-10">
                                    <h1 className="color-black-text">Training Data for Medical AI, Diagnostics and Clinical Automation</h1>
                                </div>

                                <div className="col-lg-12 mt-20 mb-10">
                                    <p className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        High-accuracy annotations for imaging, pathology, patient monitoring and clinical workflows — supporting healthcare systems globally.
                                    </p>
                                </div>
                            </div>

                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                    caption={"Precise labeling across MRI, CT, X-ray, ultrasound, vitals and clinical records to power detection, prediction and diagnostic automation."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Medical AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Specialized annotation capabilities for healthcare and diagnostic AI systems
                            </p>
                        </div>
                        <CardSlider cards={cardItems} pageId="medicalai" mobileCardsPerSlide={1} />
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
                <div style={{marginTop: '-10px'}}></div>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Medical AI Capabilities"
                    subtitle="Specialized labeling services for diagnostics and clinical automation"
                    navId="medicalai"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                 <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Enhance Your Medical AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for diagnostics, imaging analysis and clinical automation.
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
        </>
    );
};

export default MedicalAI;
