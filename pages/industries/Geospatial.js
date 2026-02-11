import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Geospatial = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Geospatial annotation capabilities
    const annotationItems = [
        {
            title: "Soil Moisture Tagging (CV)",
            description: [
                "Dry/wet pixel masks",
                "Irrigation-zone polygons",
                "Moisture-level class labels"
            ]
        },
        {
            title: "Urban Density Measurement (CV)",
            description: [
                "Building-density heatmaps",
                "Urban-core boundary lines",
                "Population-density tiers"
            ]
        },
        {
            title: "Elevation Metadata Extraction (CV)",
            description: [
                "Slope-grade classes",
                "Elevation-band labels",
                "Contour-line polylines"
            ]
        },
        {
            title: "Boundary & Parcel Classification (CV)",
            description: [
                "Property-line polylines",
                "Zoning-type polygons",
                "Parcel-ID markers"
            ]
        },
        {
            title: "Cloud & Shadow Masking (CV)",
            description: [
                "Cloud-cover segmentation",
                "Shadow-region masks",
                "Haze-layer detection tags"
            ]
        },
        {
            title: "Crop-Type Prediction Data (CV)",
            description: [
                "Crop-species polygons",
                "Field-level ID tags",
                "Growth-stage classification"
            ]
        },
        {
            title: "Infrastructure Lifecycle Scoring (CV)",
            description: [
                "Crack-density masks",
                "Erosion hotspot labels",
                "Surface-wear polygons"
            ]
        },
        {
            title: "Rare Terrain Anomalies (CV)",
            description: [
                "Landslide polygons",
                "Sinkhole region masks",
                "Flooded-area overlays"
            ]
        },
        {
            title: "Spectral Feature Extraction (CV)",
            description: [
                "NDVI-class labels",
                "NDWI-region maps",
                "Red-edge vegetation bands"
            ]
        },
        {
            title: "Object Detection in Aerial Imagery (CV)",
            description: [
                "Vehicle bounding boxes",
                "Rooftop segmentation masks",
                "Construction-site polygons"
            ]
        }
    ];

    const cardItems = [
        { 
            title: "Land-Use Classification", 
            description: "Classify agricultural, urban, forest and industrial land types.",
            img: "/assets/image/Land-Use Classification.webp",
            alt: "Land-Use Classification"
        },
        { 
            title: "Road & Pathway Extraction", 
            description: "Extract road networks, trails and transportation infrastructure.",
            img: "/assets/image/Road & Pathway Extraction.webp",
            alt: "Road & Pathway Extraction"
        },
        { 
            title: "Vegetation Health Mapping", 
            description: "Annotate vegetation indices and forest health patterns.",
            img: "/assets/image/geo_dis.webp",
            alt: "Vegetation Health Mapping"
        },
        { 
            title: "Water Body Detection", 
            description: "Identify rivers, lakes, wetlands and flood zones.",
            img: "/assets/image/Water Body Detection.webp",
            alt: "Water Body Detection"
        },
        { 
            title: "Building Footprint Segmentation", 
            description: "Segment building outlines and structural footprints.",
            img: "/assets/image/geo_impact.webp",
            alt: "Building Footprint Segmentation"
        },
        { 
            title: "Topographic Change Detection", 
            description: "Track terrain changes over time from multi-temporal imagery.",
            img: "/assets/image/Topographic Change Detection.webp",
            alt: "Topographic Change Detection"
        },
        { 
            title: "Disaster Impact Mapping", 
            description: "Map flood, fire and earthquake damage zones.",
            img: "/assets/image/Disaster Impact Mapping.webp",
            alt: "Disaster Impact Mapping"
        },
        { 
            title: "Mining & Quarry Monitoring", 
            description: "Track extraction sites and mining activity changes.",
            img: "/assets/images/industry/geo-mining.jpg",
            alt: "Mining & Quarry Monitoring"
        }
    ];
    return (
        <Layout>
            <Head>
                <title>Geospatial Data Annotation Services | GIS & Satellite Labeling | Dataclap</title>
                <meta name="description" content="Dataclap offers geospatial annotation services for satellite imagery, GIS mapping, and remote sensing data to power location-based AI models." />
                <meta name="keywords" content="geospatial data annotation, satellite image labeling, GIS data annotation, remote sensing annotation, map data labeling" />
            </Head>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-10">
                                <h3 className="color-black-text mt-10 mb-20">Training Data for Geospatial Intelligence, Remote Sensing and Terrain Analytics</h3>
                                </div>
                                <div className="col-lg-6 mt-10 mb-20">
                                <p className="font-lg color-black-text">
                                     High-accuracy annotations for satellite, drone and aerial imagery — supporting infrastructure planning, environmental monitoring and land-use analysis globally. </p>
                                </div>
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Structured labeling for objects, terrain, vegetation, water bodies and built environments to power geospatial models used in agriculture, defense, climate and urban planning."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Geospatial Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for geospatial AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="geospatial" />
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
                    title="Advanced Geospatial Annotation Capabilities"
                    subtitle="Specialized labeling services for remote sensing and terrain analytics"
                    navId="geospatial"
                />
                <div style={{marginTop: '-70px'}}></div>
                {/* CTA Section */}
                 <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your Geospatial?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for satellite, drone and aerial imagery analysis.
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

export default Geospatial;
