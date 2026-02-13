import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Offer10 from '../../components/slider/Offer10';
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });

const PhysicalAI = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Data Annotation Services", "description": "2D & 3D Bounding Boxes, Segmentation, Pose Estimation & Keypoints, Video tracking for movement analysis, Sensor fusion annotation (LiDAR + Camera + Depth)", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Data Annotation Services"}, {"title": "Human-in-the-Loop (HITL)", "description": "Continuous quality checks during training, Edge-case handling with expert reviewers, Iterative refinement of datasets", "img": "/assets/imgs/page/homepage12/human2.png", "alt": "Human-in-the-Loop"}, {"title": "Reinforcement Learning with Human Feedback", "description": "Teaching robots preferred actions through feedback loops, Aligning machine responses with human expectations in physical tasks", "img": "/assets/imgs/page/homepage12/human2.png", "alt": "RLHF"}, {"title": "Supervised Fine-Tuning (SFT)", "description": "Adapting foundation models for task-specific use (industrial robots, healthcare assistants, AR/VR avatars), Scaling models to understand multimodal data (speech + movement + visual context)", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Supervised Fine-Tuning"}];

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
            <Head>
                <title>Physical AI Data Annotation Services | Robotics & Edge AI | Dataclap</title>
                <meta name="description" content="DATACLAP DIGITALdelivers physical AI annotation services for robotics, IoT, edge AI, and real-world sensor data including video, LiDAR, and 3D point cloud labeling." />
                <meta name="keywords" content="physical AI annotation, robotics data annotation, edge AI data labeling, sensor data annotation, 3D point cloud labeling, robot vision annotation, LiDAR data labeling, IoT dataset annotation, autonomous robotics training data, real-world AI datasets" />
            </Head>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                            <div className="row align-items-start">
                                <div className="col-lg-12 mt-10 mb-10">
                                    <h1 className="color-black-text">Physical AI Training Data for Robotics, Embodied Intelligence and Human–Robot Interaction</h1>
                                </div>

                                <div className="col-lg-12 mt-20 mb-10">
                                    <h2 className="font-lg color-black-text" style={{ textAlign: 'left' }}>
                                        High-precision annotations for human motion, object manipulation, force dynamics and 3D physical environments — powering next-gen robotics, industrial automation, warehouse systems and humanoid AI.
                                    </h2>
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
                                                    <div className="row justify-content-center text-center">
                                                        <div className="col-lg-8 mb-20">
                                                            <h2 className="color-brand-1 mb-0">Our Solutions</h2>
                                                            <p className="color-grey-500 font-lg mt-20">
                                                                Comprehensive services to train AI for real-world physical interactions.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* First Row of Cards - 4 in a row */}
                                                    <div className="row mt-45">
                                                        <CardSlider cards={cardItems} pageId="physicalai" />
                                                    </div>
                                                </div>
                                            </section>
                                             
                 <section className="section mt-10 pb-0 bg-core-value">
            <div className="container  mb-100">
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
                <div style={{marginTop: '-10px'}}></div>

                <AnnotationSlider
                    items={annotationItems}
                    title="Use Cases Across Industries"
                    subtitle="Powering physical AI solutions in diverse sectors"
                    navId="physicalai"
                />
                <div style={{marginTop: '-70px'}}></div>

                     <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">

                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Build Intelligent Physical AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Let us help you create AI that doesn't just understand the digital world, but thrives in the physical one.</p>
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

export default PhysicalAI;