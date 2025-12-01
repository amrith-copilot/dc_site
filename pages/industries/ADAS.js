import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AdvancedAnnotationSlider from '../../components/slider/AdasAnnotationSlider';

const ADAS = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                <span className="title-line color-black-text">High-Precision Training Data for Smart & Autonomous Mobility</span>
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30"> Transform raw sensor feeds into reliable perception.Lane detection, Obstacle detection, Object tracking and more</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     Our annotation services — from 2D / 3D bounding boxes and image segmentation to LiDAR point-cloud labelling and sensor fusion — power ADAS & autonomous driving systems. Get a demo and see how we can accelerate your pipeline.

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
                            <h2 className="color-brand-1 mb-15">Core Perception Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Visually strong annotation capabilities for autonomous driving systems
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Lane Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Lane & Road Marking Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify lanes, edges and markings for lane-keeping and path planning.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Vehicle Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Vehicle / Pedestrian / Cyclist Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect and classify all dynamic road users for collision avoidance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Traffic Signs" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Traffic Light & Sign Recognition</h6>
                                        <p className="font-sm color-grey-500">
                                            Label signal states and road signs for rule-based driving.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Free Space" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Free-Space Segmentation</h6>
                                        <p className="font-sm color-grey-500">
                                            Map drivable areas in complex environments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="LiDAR Annotation" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">LiDAR 3D Object Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Cluster and classify objects in point-clouds for long-range perception.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Object Tracking" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Object Tracking</h6>
                                        <p className="font-sm color-grey-500">
                                            Track motion trajectories across video frames.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Hazard Detection" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Road Surface Hazard Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Spot potholes, debris and surface anomalies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Sensor Fusion" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h6 className="color-brand-1 mb-15">Sensor Fusion Alignment</h6>
                                        <p className="font-sm color-grey-500">
                                            Synchronize LiDAR–camera–radar for unified perception.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AdvancedAnnotationSlider />




        </Layout>
    );
};

export default ADAS;
