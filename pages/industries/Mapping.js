import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Mapping = () => {
    const [isOpen, setOpen] = useState(false)

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
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">AI Training Data for Mapping, Navigation and Spatial Intelligence</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
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
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Road Geometry Extraction" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Road Geometry Extraction</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract road centerlines, edges and geometry for HD maps.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="POI Identification" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">POI Identification</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect and classify points of interest from street imagery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Street Sign Recognition" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Street Sign Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Recognize and transcribe street signs and traffic signage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Intersection Mapping" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Intersection Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Map complex intersections, turns and junction layouts.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Curb & Sidewalk Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Curb & Sidewalk Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify curbs, sidewalks and pedestrian infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Map Change Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Map Change Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect road changes, new construction and map updates.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Street Furniture Segmentation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Street Furniture Segmentation</h6>
                                        <p className="font-sm color-grey-500">
                                            Segment poles, benches, bins and urban infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Lane-Level Annotation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Lane-Level Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate individual lanes, markings and lane attributes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Mapping Annotation Capabilities"
                    subtitle="Specialized labeling services for navigation and spatial intelligence"
                    navId="mapping"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Mapping Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Enhance Your Mapping Data?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for HD maps, navigation and spatial intelligence.
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

export default Mapping;
