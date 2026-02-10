import React, { useState } from 'react';
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import CardSlider from '../../components/slider/CardSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const ADAS = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for ADAS annotation capabilities
    const annotationItems = [
        { 
            title: "HD Map Feature Labelling",
            description: "Extract curbs, poles, barriers and road geometry for HD map creation."
        },
        { 
            title: "Intersection Complexity Annotation",
            description: "Tag merging paths, turn pockets and crossing zones."
        },
        { 
            title: "Weather & Illumination Condition Tagging",
            description: "Classify rain, fog, night, glare and low-visibility conditions."
        },
        { 
            title: "Vehicle Pose & Orientation Estimation",
            description: "Annotate heading, rotation and spatial alignment for 3D understanding."
        },
        { 
            title: "Behavior & Intent Tagging",
            description: "Label cues for predicting actions of VRUs and vehicles."
        },
        { 
            title: "Road-Work & Temporary Structure Labelling",
            description: "Identify cones, barricades, temporary lanes and work-zone layouts."
        },
        { 
            title: "Occlusion & Visibility Scoring",
            description: "Mark partial, full or dynamic occlusions across objects and scenes."
        },
        { 
            title: "Anomaly & Edge-Case Tagging",
            description: "Surface rare events like unusual objects, unpredictable behavior or sensor irregularities."
        }
    ];

    // Card data for the card grid slider
    const cardItems = [
        { title: "Lane & Road Marking Detection", description: "Identify lanes, edges and markings for lane-keeping and path planning.", img: "/assets/image/Lane & Road Marking Detection.webp", alt: "Lane Detection" },
        { title: "Vehicle / Pedestrian / Cyclist Detection", description: "Detect and classify all dynamic road users for collision avoidance.", img: "/assets/image/Vehicle  Pedestrian  Cyclist Detection.webp", alt: "Vehicle Detection" },
        { title: "Traffic Light & Sign Recognition", description: "Label signal states and road signs for rule-based driving.", img: "/assets/images/industry/Traffic Light & Sign Recognition.png", alt: "Traffic Signs" },
        { title: "Free-Space Segmentation", description: "Map drivable areas in complex environments.", img: "/assets/images/industry/Object Tracking.png", alt: "Free Space" },
        { title: "LiDAR 3D Object Annotation", description: "Cluster and classify objects in point-clouds for long-range perception.", img: "/assets/images/industry/LiDAR 3D Object Annotation.jpeg", alt: "LiDAR Annotation" },
        { title: "Object Tracking", description: "Track motion trajectories across video frames.", img: "/assets/images/industry/Object Tracking.png", alt: "Object Tracking" },
        { title: "Road Surface Hazard Detection", description: "Spot potholes, debris and surface anomalies.", img: "/assets/images/industry/Road Surface Hazard Detection.png", alt: "Hazard Detection" },
        { title: "Sensor Fusion Alignment", description: "Synchronize LiDAR–camera–radar for unified perception.", img: "/assets/images/industry/ADAS_cs.png", alt: "Sensor Fusion" },
    ];

    return (
        <Layout>
            <Head>
                <title>ADAS — High-Precision Training Data for Autonomous Mobility | DataClap</title>
                <meta name="description" content="High-precision training data for ADAS and autonomous vehicles — lane detection, object tracking, LiDAR annotation, sensor fusion. Partner with DataClap for production-ready datasets and annotation workflows." />
                <meta name="keywords" content="ADAS training data, autonomous vehicles, lane detection annotation, LiDAR annotation, object tracking, sensor fusion" />
            </Head>

            <div className="adas-page">
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mt-10 mb-10">                            
                                <h3 className="color-black-text">High-Precision Training Data for 
                                     <br />Smartand Autonomous Mobility</h3>
                                </div>
                                <div className="col-lg-6 mt-20 mb-10">
                                <p className="font-lg color-black-text">
                                     Transform raw sensor feeds into reliable perception.Lane detection, Obstacle detection, Object tracking and more
                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={" Our annotation services — from 2D / 3D bounding boxes and image segmentation to LiDAR point-cloud labelling and sensor fusion — power ADAS & autonomous driving systems. Get a demo and see how we can accelerate your pipeline."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-20 mb-0">
                    <div className="container">
                        <div className="text-center mb-20">
                            <h2 className="color-brand-1 mb-15">Core Perception Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for autonomous driving systems
                            </p>
                        </div>
                        <CardSlider cards={cardItems} pageId="adas" />
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
                <div style={{marginTop: '-40px'}}>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Annotation Capabilities"
                    subtitle="Specialized labeling services for autonomous driving and ADAS systems"
                    navId="adas"
                />
                </div>
                

                {/* CTA Section */}
                <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Accelerate Your ADAS Development?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data that powers safer, smarter autonomous systems.
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

                <style jsx>{`
                    /* remove banner pseudo-element on all viewports to eliminate white boxed area */
                    .adas-page .banner-5::before,
                    .adas-page .banner-5::after {
                        background: transparent !important;
                        height: 0 !important;
                        display: none !important;
                    }

                @media (max-width: 768px) {
                    /* remove ALL borders, outlines, shadows globally */
                    .adas-page * {
                        border: none !important;
                        outline: none !important;
                        box-shadow: none !important;
                    }

                    /* general container/layout fixes */
                    .adas-page .container,
                    .adas-page .box-cover-border,
                    .adas-page .box-video-banner,
                    .adas-page .box-radius-16,
                    .adas-page .box-container {
                        background: transparent !important;
                        border-radius: 0 !important;
                        box-shadow: none !important;
                        border: none !important;
                        max-width: 100% !important;
                        padding-left: 12px !important;
                        padding-right: 12px !important;
                        overflow: visible !important;
                    }

                    .adas-page .section {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                        background: transparent !important;
                        border: none !important;
                        overflow: visible !important;
                    }

                    /* remove banner pseudo background that creates white blocks on mobile */
                    .adas-page .banner-5::before,
                    .adas-page .banner-5::after {
                        background: transparent !important;
                        height: 0 !important;
                        display: none !important;
                    }

                    /* remove card backgrounds that may overlap hero */
                    .adas-page .box-info-video-banner .card-small,
                    .adas-page .image-banner-5,
                    .adas-page .image-banner-5 img,
                    .adas-page .box-info-video-banner,
                    .adas-page .card-plan,
                    .adas-page .card-testimonial-list {
                        background: transparent !important;
                        border-radius: 0 !important;
                        box-shadow: none !important;
                        border: none !important;
                    }

                    /* make sure full-width visuals use available space */
                    .adas-page .video-slider-wrapper,
                    .adas-page .video-slider-container {
                        max-width: 100% !important;
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                        border: none !important;
                        outline: none !important;
                    }
                    /* restore CTA box styling to match desktop */
                    .adas-page .box-cover-border {
                        background-color: var(--color-primary-100) !important;
                        border: 1px solid var(--color-gray-100) !important;
                        border-radius: 8px !important;
                        padding: 25px 10px !important;
                        overflow: hidden !important;
                    }
                }
                `}</style>

            </div>
        </Layout>
    );
};

export default ADAS;
