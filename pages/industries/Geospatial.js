import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
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
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">Training Data for Geospatial Intelligence, Remote Sensing and Terrain Analytics</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     High-accuracy annotations for satellite, drone and aerial imagery — supporting infrastructure planning, environmental monitoring and land-use analysis globally.

                                 </p>
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
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-land use.jpg" 
                                            alt="Land-Use Classification" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Land-Use Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify agricultural, urban, forest and industrial land types.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-road and pathway.jpg" 
                                            alt="Road & Pathway Extraction" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Road & Pathway Extraction</h6>
                                        <p className="font-sm color-grey-500">
                                            Extract road networks, trails and transportation infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo_dis.png" 
                                            alt="Vegetation Health Mapping" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Vegetation Health Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate vegetation indices and forest health patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-water.jpg" 
                                            alt="Water Body Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Water Body Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify rivers, lakes, wetlands and flood zones.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo_impact.png" 
                                            alt="Building Footprint Segmentation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Building Footprint Segmentation</h6>
                                        <p className="font-sm color-grey-500">
                                            Segment building outlines and structural footprints.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-topo.jpg" 
                                            alt="Topographic Change Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Topographic Change Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Track terrain changes over time from multi-temporal imagery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-disaster.jpg" 
                                            alt="Disaster Impact Mapping" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Disaster Impact Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Map flood, fire and earthquake damage zones.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/images/industry/geo-mining.jpg" 
                                            alt="Mining & Quarry Monitoring" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Mining & Quarry Monitoring</h6>
                                        <p className="font-sm color-grey-500">
                                            Track extraction sites and mining activity changes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Geospatial Annotation Capabilities"
                    subtitle="Specialized labeling services for remote sensing and terrain analytics"
                    navId="geospatial"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Geospatial Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Power Your Geospatial?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for satellite, drone and aerial imagery analysis.
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

export default Geospatial;
