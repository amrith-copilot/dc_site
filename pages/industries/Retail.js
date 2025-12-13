import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const Retail = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Retail annotation capabilities
    const annotationItems = [
        { title: "Planogram Compliance Scoring", description: "Evaluate adherence to layout, placement rules and brand guidelines." },
        { title: "Customer–Product Interaction Labeling", description: "Track product pickups, returns, dwell times and engagement levels." },
        { title: "Fixture & Display Condition Tagging", description: "Record display damage, missing signage and merchandising issues." },
        { title: "Checkout Behavior Modeling", description: "Label scanning patterns, bagging sequences and checkout anomalies." },
        { title: "POS Event Correlation Metadata", description: "Map visual events to transaction logs for fraud and shrink analysis." },
        { title: "Staff Activity Categorization", description: "Classify stocking, cleaning, assisting and operational workflows." },
        { title: "Environmental Condition Annotation", description: "Note lighting, reflection, occlusion and camera-visibility variations." },
        { title: "Rare Event & Edge-Case Identification", description: "Tag unusual shopper actions, equipment failures or irregular store events." }
    ];
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                    <h3 className="color-black-text mt-10">
                                        AI Training Data for Retail Vision, Store Analytics and Physical Commerce Automation  </h3>
                                </div>
     
                                <div className="col-lg-6 mt-0 mb-20">
                                    <p className="font-lg color-black-text">
                                    High-accuracy annotations for shopper behavior, shelf intelligence, product detection and in-store automation <br />optimized for retailers across North America, Europe and APAC.                                  
                                      </p> 
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider 
                                caption={"Structured labeling for CCTV footage, in-store cameras, POS streams and product imagery. Powering Retail AI systems that improve store operations, prevent loss, optimize merchandising and enhance real-world shopper experiences."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Retail Vision Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for retail AI systems
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Product Recognition on Shelves" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Product Recognition on Shelves</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate SKU placement, facings and shelf positions for planogram compliance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Out-of-Stock & Empty Shelf Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Out-of-Stock & Empty Shelf Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify missing products and low-stock zones for real-time replenishment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Shopper Path Tracking" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Shopper Path Tracking</h6>
                                        <p className="font-sm color-grey-500">
                                            Map customer movement across aisles to optimize layout and flow.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Queue Monitoring" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Queue Monitoring</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect line length and waiting times for smarter staffing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Price Tag & Label Identification" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Price Tag & Label Identification</h6>
                                        <p className="font-sm color-grey-500">
                                            Recognize price labels, discount tags and mismatched signage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Self-Checkout Vision Support" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Self-Checkout Vision Support</h6>
                                        <p className="font-sm color-grey-500">
                                            Annotate items, barcodes and bagging area events for automated checkout systems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="In-Store Theft & Anomaly Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">In-Store Theft & Anomaly Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Label suspicious actions and asset-removal patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Store Heatmap Generation" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Store Heatmap Generation</h6>
                                        <p className="font-sm color-grey-500">
                                            Segment high-engagement and low-traffic areas for merchandising decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Retail  Capabilities"
                    subtitle="Specialized labeling services for retail operations and store analytics"
                    navId="retail"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Retail Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Revolutionize Your Retail AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for smarter retail analytics and customer insights.
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

export default Retail;
