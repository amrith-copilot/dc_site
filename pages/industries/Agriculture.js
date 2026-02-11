import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const Agriculture = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Agriculture annotation capabilities
    const annotationItems = [
        { title: "Soil Texture & Moisture Condition Tagging", description: "Qualify soil type, compaction, wetness and irrigation status." },
        { title: "Plant Density & Canopy Coverage Analysis", description: "Measure stand count and canopy spread for seeding and spacing optimization." },
        { title: "Harvest Readiness Assessment", description: "Determine ripeness levels and maturity thresholds for various crops." },
        { title: "Row Alignment & Spacing Validation", description: "Verify planting uniformity and detect row deviations." },
        { title: "Machinery Operation State Detection", description: "Identify implement engagement, working states and mechanical anomalies." },
        { title: "Environmental Condition Annotation", description: "Record sunlight, cloud cover, dust levels and field microclimates." },
        { title: "Water Stress & Drought Pattern Tagging", description: "Label dry patches and irrigation inefficiencies." },
        { title: "Edge-Case & Rare Event Identification", description: "Flag atypical crop behavior, equipment failures and environmental abnormalities." }
    ];

    const cardItems = [
        { 
            title: "Crop Health Classification", 
            description: "Label disease symptoms, nutrient deficiencies and stress patterns across growth stages.",
            img: "/assets/image/agri_health.webp",
            alt: "Crop Health Classification"
        },
        { 
            title: "Weed Identification", 
            description: "Differentiate weeds from crops for precision spraying and automated weed removal.",
            img: "/assets/image/agri_weed.webp",
            alt: "Weed Identification"
        },
        { 
            title: "Fruit & Yield Counting", 
            description: "Annotate fruit clusters and density for accurate yield forecasting.",
            img: "/assets/image/agri_yield.webp",
            alt: "Fruit & Yield Counting"
        },
        { 
            title: "Plant Growth Stage Detection", 
            description: "Track phenology and developmental stages for optimized interventions.",
            img: "/assets/image/agri_growth.webp",
            alt: "Plant Growth Stage Detection"
        },
        { 
            title: "Field Boundary & Plot Mapping", 
            description: "Define plots, borders and management zones using aerial or satellite imagery.",
            img: "/assets/image/agri_id_soy_beans.webp",
            alt: "Field Boundary & Plot Mapping"
        },
        { 
            title: "Autonomous Tractor Vision", 
            description: "Annotate obstacles, pathways and terrain features for safe navigation.",
            img: "/assets/image/agri_pest.webp",
            alt: "Autonomous Tractor Vision"
        },
        { 
            title: "Multispectral Vegetation Index Labeling", 
            description: "Attach NDVI, NDRE and spectral signatures for advanced crop monitoring.",
            img: "/assets/images/industry/aerospace.jpg",
            alt: "Multispectral Vegetation Index Labeling"
        },
        { 
            title: "Pest & Damage Spotting", 
            description: "Label insect damage, leaf holes and pest infestations at early onset.",
            img: "/assets/imgs/page/homepage6/human2.png",
            alt: "Pest & Damage Spotting"
        }
    ];
    return (
        <>
            <Head>
                <title>Agriculture Data Annotation Services | AI for Smart Farming | Dataclap</title>
                <meta name="description" content="Dataclap delivers agriculture data annotation services for crop monitoring, yield prediction, drone imagery labeling, and precision farming AI models." />
                <meta name="keywords" content="agriculture data annotation, farm AI data labeling, crop image annotation, drone image labeling agriculture, precision farming datasets, plant disease detection labeling, satellite farm imagery annotation, agritech AI training data, yield prediction datasets, smart farming AI solutions" />
            </Head>
            <Layout>           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                    <h3 className="color-black-text mt-10">
                                       Agriculture AI Training Data <br />for Crop Intelligence, Field Robotics <br /> and Precision Farming
                                    </h3>
                                    <h4 className="color-black-text mt-10 mb-20"></h4>
                                </div>
     
                                <div className="col-lg-6  mt-10 mb-20">
                                    <p className="font-lg color-black-text">
                                        High-accuracy annotations for crop health, yield prediction, weed detection, field mapping, autonomous agri-robotics, aerial imagery, ground sensors, machinery vision and multispectral data. Powering Agriculture AI systems that monitor fields, optimize inputs, automate harvesting and detect issues early.
                                    </p>
                                </div>
                             
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Agriculture Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Comprehensive annotation capabilities for precision agriculture AI systems
                            </p>
                        </div>
                        <div className="row">
                            <CardSlider cards={cardItems} pageId="agriculture" />
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
                    title="Advanced Agricultural Annotation Capabilities"
                    subtitle="Specialized labeling services for precision agriculture and crop management"
                    navId="agri"
                />
                <div style={{marginTop: '-70px'}}></div>

                {/* CTA Section */}
        
                   <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Transform Your Agricultural AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get precision training data that powers smarter farming solutions.
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

export default Agriculture;
