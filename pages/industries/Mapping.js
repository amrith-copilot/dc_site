import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import CardSlider from '../../components/slider/CardSlider';
import Link from 'next/link';

const Mapping = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Road Geometry Extraction", "description": "Extract road centerlines, edges and geometry for HD maps.", "img": "/assets/image/Road Geometry Extraction.webp", "alt": "Road Geometry Extraction"}, {"title": "POI Identification", "description": "Detect and classify points of interest from street imagery.", "img": "/assets/image/POI Identification.webp", "alt": "POI Identification"}, {"title": "Street Sign Recognition", "description": "Recognize and transcribe street signs and traffic signage.", "img": "/assets/image/Street Sign Recognition.webp", "alt": "Street Sign Recognition"}, {"title": "Intersection Mapping", "description": "Map complex intersections, turns and junction layouts.", "img": "/assets/image/Intersection Mapping.webp", "alt": "Intersection Mapping"}, {"title": "Curb & Sidewalk Detection", "description": "Identify curbs, sidewalks and pedestrian infrastructure.", "img": "/assets/image/Curb & Sidewalk Detection.webp", "alt": "Curb & Sidewalk Detection"}, {"title": "Map Change Detection", "description": "Detect road changes, new construction and map updates.", "img": "/assets/image/Map Change Detection.webp", "alt": "Map Change Detection"}, {"title": "Street Furniture Segmentation", "description": "Segment poles, benches, bins and urban infrastructure.", "img": "/assets/image/Street Furniture Segmentation.webp", "alt": "Street Furniture Segmentation"}, {"title": "Lane-Level Annotation", "description": "Annotate individual lanes, markings and lane attributes.", "img": "/assets/image/Lane-Level Annotation.webp", "alt": "Lane-Level Annotation"}];

    // Slider data for Mapping annotation capabilities
    const annotationItems = [
        {
            title: "Speed-Limit Metadata (CV)",
            description: [
                "Speed-limit OCR boxes — we can handle",
                "Regulatory-sign class labels — we can handle",
                "Overposted-limit flags — doubt"
            ]
        },
        {
            title: "Street-Name OCR (CV)",
            description: [
                "Text-region bounding boxes — we can handle",
                "Street-name character tokens — attribute tags (street name, area, postal code) — we can handle",
                "Word-segmentation masks — doubt"
            ]
        },
        {
            title: "Crosswalk Classification (CV)",
            description: [
                "Zebra-crossing masks — we can handle",
                "Ladder-crosswalk polylines — yes",
                "Faded-crosswalk detection tags — yes"
            ]
        },
        {
            title: "Traffic Flow Pattern Tagging (CV)",
            description: [
                "Congestion-density heatmaps",
                "Lane-occupancy labels — yes",
                "Stop-and-go segment markers — yes"
            ]
        },
        {
            title: "Map Update Prioritization (CV)",
            description: [
                "Change-detection polygons",
                "Outdated-feature flags",
                "New-construction markers"
            ]
        },
        {
            title: "Routing Constraint Labeling (CV)",
            description: [
                "One-way arrow markers",
                "Restricted-zone polygons",
                "Height-clearance tags"
            ]
        },
        {
            title: "Visibility & Obstruction Tagging (CV)",
            description: [
                "Occlusion masks",
                "Blocked-sign instance tags",
                "Visibility-range circles"
            ]
        },
        {
            title: "Rare Infrastructure Anomalies (CV)",
            description: [
                "Broken-sign masks",
                "Road-collapse polygons",
                "Temporary-detour markers"
            ]
        }
    ];
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-20">AI Training Data for Mapping, Navigation and Spatial Intelligence</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-10 mb-20">
                                <p className="font-lg color-black-text">
                                     Accurate annotations for road geometry, traffic elements, POI detection and map updates — optimized for global mapping systems.

                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Structured labeling across street-level imagery, aerial surveys and LiDAR for HD maps, navigation apps and geo-aware autonomous systems."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Mapping Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for mapping and navigation systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="mapping" />
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
                    title="Advanced Mapping Annotation Capabilities"
                    subtitle="Specialized labeling services for navigation and spatial intelligence"
                    navId="mapping"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Enhance Your Mapping Data?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for HD maps, navigation and spatial intelligence.
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

export default Mapping;
