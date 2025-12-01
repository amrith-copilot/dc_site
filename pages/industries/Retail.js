import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import RetailAnnotationSlider from '../../components/slider/RetailAnnotationSlider';

const Retail = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                            <div className="row align-items-start">
                                <span className="title-line color-black-text mb-10">Retail</span>
                                <div className="col-lg-6 mb-20">
                                    <h3 className="color-black-text mt-10">
                                        AI Training Data for Retail Vision, Store Analytics and Physical Commerce Automation  </h3>
                                </div>
     
                                <div className="col-lg-6 mt-0 mb-20">
                                    <p className="font-lg color-black-text">
                                    High-accuracy annotations for shopper behavior, shelf intelligence, product detection and in-store automation <br />optimized for retailers across North America, Europe and APAC.                                  
                                      </p> 
                                    <p className="font-lg color-black-text md-10 mt-20">
                                        Structured labeling for CCTV footage, in-store cameras, POS streams and product imagery. Powering Retail AI systems that improve store operations, prevent loss, optimize merchandising and enhance real-world shopper experiences.
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
                <RetailAnnotationSlider />
        </Layout>
    );
};

export default Retail;
