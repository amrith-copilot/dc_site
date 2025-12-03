import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../../components/slider/VideoSlider';
import Offer10 from '../../components/slider/Offer10';
import AnnotationSlider from '../../components/slider/AnnotationSlider';

const PhysicalAI = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Physical AI use cases
    const annotationItems = [
        { title: "Manufacturing & Industrial Automation" },
        { title: "Healthcare & Medical Robotics" },
        { title: "Autonomous Vehicles & Mobility" },
        { title: "Agriculture & AgriTech" },
        { title: "Retail & Customer Experience" },
        { title: "Logistics & Supply Chain" },
        { title: "Defense & Security" },
        { title: "Sports & Fitness" },
        { title: "Construction & Infrastructure" },
        { title: "AR/VR & Metaverse Applications" }
    ];

    return (
        <>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">Physical AI</span>
                                    <h3 className="color-black-text mt-10">
                                        Physical AI Training Data for Robotics, Embodied Intelligence and Human–Robot Interaction
                                    </h3>
                                </div>
                                <div className="col-lg-6 mt-20">
                                    <p className="font-lg color-black-text">
                                        High-precision annotations for human motion, object manipulation, force dynamics and 3D physical environments — powering next-gen robotics, industrial automation, warehouse systems and humanoid AI.

                                    </p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                                                        <div className="box-video-banner">
                                                            <VideoSlider
                                                            caption={"From robotics to AR/VR, we help train AI that understands, adapts, and interacts with the real world."}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="section mt-100">
                                                <div className="container">
                                                    <div className="box-business-rd">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-5">
                                                                <h3 className="color-black-text mt-10 mb-15">The Challenge of Physical AI</h3>
                                                                <p className="font-md color-grey-400">Physical AI requires not only digital perception but also real-world interaction.</p>
                                                                <div className="mt-20">
                                                                    <p className="font-lg color-grey-400 pt-20">Key challenges include:</p>
                                                                    <ul className="list-ticks pt-15">
                                                                        <li>
                                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <p className="font-md color-grey-400">Ambiguity in 3D environments (occluded objects, changing lighting)</p>
                                                                        </li>
                                                                        <li>
                                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <p className="font-md color-grey-400">Training data gaps in edge cases (rare movements, unusual angles)</p>
                                                                        </li>
                                                                        <li>
                                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <p className="font-md color-grey-400">Safety-critical decision-making (robot navigation, autonomous driving)</p>
                                                                        </li>
                                                                        <li>
                                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <p className="font-md color-grey-400">Lack of human feedback for nuanced decision-making</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="mt-50 ml-20 text-start"> 
                                                                    <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Experts</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7">
                                                                <div className="box-business-service">
                                                                    <div className="box-number-1 shape-2">
                                                                        <div className="cardNumber bg-white">
                                                                            <h3>25k+</h3>
                                                                            <p className="font-xs color-brand-1">Happy Clients</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box-image-1 shape-3"> <img src="/assets/imgs/page/service/img1.png" alt="iori" /></div>
                                                                    <div className="box-image-2 shape-2"> <img src="/assets/imgs/page/service/img2.png" alt="iori" /></div>
                                                                    <div className="box-image-3 shape-1"> <img src="/assets/imgs/page/service/img4.png" alt="iori" />
                                                                        <div className="cardNumber bg-white">
                                                                            <h2 className="color-brand-1">469k</h2>
                                                                            <p className="font-lg color-brand-1">Social followers</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="section mt-110">
                                                <div className="container">
                                                    <div className="row align-items-end">
                                                        <div className="col-lg-6 mb-20">
                                                            <h2 className="color-brand-1 mb-0">Our Solutions</h2>
                                                            <p className="color-grey-500 font-lg mt-20">
                                                                Comprehensive services to train AI for real-world physical interactions.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* First Row of Cards - 4 in a row */}
                                                    <div className="row mt-45">
                                                        <div className="col-lg-3">
                                                            <div className="image-showcase-card-dynamic">
                                                                <div className="image-showcase-top-dynamic">
                                                                    <img 
                                                                        src="/assets/imgs/page/homepage6/human2.png" 
                                                                        alt="Data Annotation Services" 
                                                                        className="image-showcase-photo-dynamic"
                                                                    />
                                                                </div>
                                                                <div className="image-showcase-content-dynamic">
                                                                    <h4 className="color-brand-1 mb-15">Data Annotation Services</h4>
                                                                    <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                                                        <li className="mb-8">2D & 3D Bounding Boxes, Segmentation</li>
                                                                        <li className="mb-8">Pose Estimation & Keypoints</li>
                                                                        <li className="mb-8">Video tracking for movement analysis</li>
                                                                        <li className="mb-8">Sensor fusion annotation (LiDAR + Camera + Depth)</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-3">
                                                            <div className="image-showcase-card-dynamic">
                                                                <div className="image-showcase-top-dynamic">
                                                                    <img 
                                                                        src="/assets/imgs/page/homepage12/human2.png" 
                                                                        alt="Human-in-the-Loop" 
                                                                        className="image-showcase-photo-dynamic"
                                                                    />
                                                                </div>
                                                                <div className="image-showcase-content-dynamic">
                                                                    <h4 className="color-brand-1 mb-15">Human-in-the-Loop (HITL)</h4>
                                                                    <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                                                        <li className="mb-8">Continuous quality checks during training</li>
                                                                        <li className="mb-8">Edge-case handling with expert reviewers</li>
                                                                        <li className="mb-8">Iterative refinement of datasets</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-3">
                                                            <div className="image-showcase-card-dynamic">
                                                                <div className="image-showcase-top-dynamic">
                                                                    <img 
                                                                        src="/assets/imgs/page/homepage12/human2.png" 
                                                                        alt="RLHF" 
                                                                        className="image-showcase-photo-dynamic"
                                                                    />
                                                                </div>
                                                                <div className="image-showcase-content-dynamic">
                                                                    <h4 className="color-brand-1 mb-15">Reinforcement Learning with Human Feedback</h4>
                                                                    <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                                                        <li className="mb-8">Teaching robots "preferred" actions through feedback loops</li>
                                                                        <li className="mb-8">Aligning machine responses with human expectations in physical tasks</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3">
                                                            <div className="image-showcase-card-dynamic">
                                                                <div className="image-showcase-top-dynamic">
                                                                    <img 
                                                                        src="/assets/imgs/page/homepage6/human2.png" 
                                                                        alt="Supervised Fine-Tuning" 
                                                                        className="image-showcase-photo-dynamic"
                                                                    />
                                                                </div>
                                                                <div className="image-showcase-content-dynamic">
                                                                    <h4 className="color-brand-1 mb-15">Supervised Fine-Tuning (SFT)</h4>
                                                                    <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                                                        <li className="mb-8">Adapting foundation models for task-specific use (industrial robots, healthcare assistants, AR/VR avatars)</li>
                                                                        <li className="mb-8">Scaling models to understand multimodal data (speech + movement + visual context)</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                <AnnotationSlider
                    items={annotationItems}
                    title="Use Cases Across Industries"
                    subtitle="Powering physical AI solutions in diverse sectors"
                    navId="physicalai"
                />

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Build Intelligent Physical AI?</h2>
                                        <p className="font-md color-grey-500">Let us help you create AI that doesn't just understand the digital world, but thrives in the physical one.</p>
                                        <div className="box-button text-start mt-65"> 
                                            <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link>
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

export default PhysicalAI;