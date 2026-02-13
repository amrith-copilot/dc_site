import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Sports = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Player Tracking", "description": "Track athlete positions and movements across frames.", "img": "/assets/image/Player Tracking.webp", "alt": "Player Tracking"}, {"title": "Ball Tracking", "description": "Detect and track ball position, trajectory and speed.", "img": "/assets/image/Ball Tracking.webp", "alt": "Ball Tracking"}, {"title": "Event Detection (Goals, Fouls, Plays)", "description": "Identify key game events and moments automatically.", "img": "/assets/image/Event Detection.webp", "alt": "Event Detection"}, {"title": "Pose & Motion Analysis", "description": "Annotate body poses and biomechanical movements.", "img": "/assets/image/Pose & Motion Analysis.webp", "alt": "Pose & Motion Analysis"}, {"title": "Broadcast Camera Recognition", "description": "Classify camera angles and broadcast shot types.", "img": "/assets/images/industry/spo_track.webp", "alt": "Broadcast Camera Recognition"}, {"title": "Sponsorship Logo Detection", "description": "Detect sponsor logos and brand placements.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Sponsorship Logo Detection"}, {"title": "Field Boundary Mapping", "description": "Map playing field lines, zones and boundaries.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Field Boundary Mapping"}, {"title": "Crowd Behavior Detection", "description": "Analyze crowd reactions and fan behavior patterns.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Crowd Behavior Detection"}];

    // Slider data for Sports & Media annotation capabilities
    const annotationItems = [
        {
            title: "Play-by-Play Sequence Tagging — we can handle",
            description: [
                "Action-event markers",
                "Play-sequence IDs",
                "Possession-shift labels"
            ]
        },
        {
            title: "Athlete Fatigue Indicators (CV)",
            description: [
                "Posture-deviation labels",
                "Reduced-velocity markers",
                "Stride-variation tags"
            ]
        },
        {
            title: "Team Formation Classification (CV)",
            description: [
                "Formation-shape polylines",
                "Player-position grids",
                "Formation-transition markers"
            ]
        },
        {
            title: "Broadcast Metadata Extraction (CV)",
            description: [
                "Scoreboard OCR boxes",
                "Overlay-region masks",
                "Timer-digit bounding boxes"
            ]
        },
        {
            title: "Audience Engagement Patterning (CV)",
            description: [
                "Crowd-reaction heatmaps",
                "Applause-intensity markers",
                "Cheer-source localization tags"
            ]
        },
        {
            title: "Referee Decision Labeling — we can handle",
            description: [
                "Foul-type tags",
                "Offside-event markers",
                "Penalty-call labels"
            ]
        },
        {
            title: "Sound Event Annotation — we can handle",
            description: [
                "Whistle-event timestamps",
                "Crowd-cheer segments",
                "Commentary-excitement markers"
            ]
        },
        {
            title: "Rare Sports Anomalies (CV)",
            description: [
                "Ball-trajectory deviation maps",
                "Injury-event region tags",
                "Unexpected-object detection"
            ]
        },
        {
            title: "Player Identity Recognition (CV)",
            description: [
                "Jersey-number OCR boxes",
                "Player-ID instance labels",
                "Face-embedding reference tags"
            ]
        }
    ];
    return (
        <Layout>
            <Head>
                <title>Sports & Media Data Annotation Services | Video & AI Analytics | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITAL delivers sports and media data annotation services for video analysis, player tracking, content indexing, and AI-powered media intelligence." />
                <meta name="keywords" content="sports data annotation, media data labeling, video annotation services, player tracking annotation, sports analytics datasets, broadcast video labeling, AI for sports analytics, content indexing services, action recognition datasets, media AI training data" />
                <link rel="canonical" href="/industries/Sports" />
                <meta property="og:title" content="Sports & Media Data Annotation Services | Dataclap" />
                <meta property="og:description" content="DATACLAP DIGITAL delivers sports and media data annotation services for video analysis, player tracking, content indexing, and AI-powered media intelligence." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/industries/Sports" />
                <meta property="og:image" content="/assets/imgs/industry/sports-hero.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">AI Training Data for Sports Analytics, Broadcast Automation and Athlete Performance</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                <p className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                     Accurate annotations for player tracking, event detection, motion analytics and content automation — used worldwide.
                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Structured labeling of gameplay footage, athlete motion, team dynamics and broadcast elements for analytics and media automation."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Sports & Media AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for sports analytics and broadcast systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="sports" />
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
                    title="Advanced Sports & Media Capabilities"
                    subtitle="Specialized labeling services for sports analytics and broadcast automation"
                    navId="sports"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                   <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your Sports AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for sports analytics, broadcast automation and athlete performance.</p>
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

export default Sports;
