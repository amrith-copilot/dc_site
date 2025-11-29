import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../../components/slider/VideoSlider';
import Offer10 from '../../components/slider/Offer10';

const PhysicalAI = () => {
    const [isOpen, setOpen] = useState(false)
    
    const useCases = [
        {
            title: "Manufacturing & Industrial Automation",
            description: "Annotated 2D/3D data trains robots to identify components, track assembly steps, and ensure safety.",
            secondPoint: "Fine-tuned models help robots understand operator instructions, maintenance manuals, and safety protocols in natural language.",
            icon: "⚙️"
        },
        {
            title: "Healthcare & Medical Robotics",
            description: "Medical imaging, instrument recognition, and patient monitoring annotation enable safe robotic support.",
            secondPoint: "RLHF trains medical-assistant robots to respond empathetically and align with ethical and clinical communication standards.",
            icon: "🏥"
        },
        {
            title: "Autonomous Vehicles & Mobility",
            description: "Annotation of LiDAR and video data enables robust obstacle detection and environment understanding.",
            secondPoint: "Fine-tuning foundation models allows vehicles to interpret natural language navigation commands and explain safety decisions to passengers.",
            icon: "🚗"
        },
        {
            title: "Agriculture & AgriTech",
            description: "Drone and ground imagery annotation supports crop monitoring, weed detection, and yield prediction.",
            secondPoint: "Multimodal models trained with field data and farmer notes generate actionable insights, improved through human-in-the-loop feedback.",
            icon: "🌾"
        },
        {
            title: "Retail & Customer Experience",
            description: "Shelf and product annotation helps automate checkout and optimize store layouts.",
            secondPoint: "Conversational AI fine-tuned with RLHF assists customers in natural language while HITL ensures context-aware responses.",
            icon: "🛒"
        },
        {
            title: "Logistics & Supply Chain",
            description: "Annotating warehouse scans and package images enables robots to identify, sort, and track goods.",
            secondPoint: "Language models trained on logistics data can plan routes, schedule tasks, and respond to voice instructions from warehouse staff.",
            icon: "📦"
        },
        {
            title: "Defense & Security",
            description: "Annotated surveillance data ensures accurate detection of people, vehicles, and threats across diverse conditions.",
            secondPoint: "RLHF refines AI systems to provide context-sensitive situational analysis and avoid false alarms or biased actions.",
            icon: "🛡️"
        },
        {
            title: "Sports & Fitness",
            description: "Pose and motion annotation allows AI to evaluate athlete form and prevent injuries.",
            secondPoint: "Fine-tuned models interpret performance data and provide personalized coaching advice in natural language.",
            icon: "⚽"
        },
        {
            title: "Construction & Infrastructure",
            description: "Annotated drone imagery and site scans help detect hazards, monitor progress, and identify structural defects.",
            secondPoint: "Instruction-following models support workers with hands-free, step-by-step guidance for complex tasks.",
            icon: "🏗️"
        },
        {
            title: "AR/VR & Metaverse Applications",
            description: "Gesture and spatial annotation enable natural human-computer interactions.",
            secondPoint: "Multimodal models trained with human feedback allow avatars and assistants to respond conversationally in immersive environments.",
            icon: "🥽"
        }
    ];

    return (
        <>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">Physical AI</span>
                                    <h2 className="color-black-text mt-10">
                                        Powering Physical AI with High-Quality Annotation <br />and Human Expertise
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        From robotics to AR/VR, we help train AI that understands, adapts, and interacts with the real world.
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

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Data Annotation Services" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Data Annotation Services</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li className="mb-8">2D & 3D Bounding Boxes, Segmentation</li>
                                            <li className="mb-8">Pose Estimation & Keypoints</li>
                                            <li className="mb-8">Video tracking for movement analysis</li>
                                            <li className="mb-8">Sensor fusion annotation (LiDAR + Camera + Depth)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage12/human2.png" 
                                            alt="Human-in-the-Loop" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Human-in-the-Loop (HITL)</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li className="mb-8">Continuous quality checks during training</li>
                                            <li className="mb-8">Edge-case handling with expert reviewers</li>
                                            <li className="mb-8">Iterative refinement of datasets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage12/human2.png" 
                                            alt="RLHF" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Reinforcement Learning with Human Feedback</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li className="mb-8">Teaching robots "preferred" actions through feedback loops</li>
                                            <li className="mb-8">Aligning machine responses with human expectations in physical tasks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                       { /* Second Row of Cards */}
                        <div className="row mt-30">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Supervised Fine-Tuning" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Supervised Fine-Tuning (SFT)</h4>
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

                {/* Compact Use Cases Section with Grid Layout */}
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-50">
                                <h2 className="color-brand-1 mb-20">Use Cases Across Industries</h2>
                                <p className="font-lg color-grey-500">Powering physical AI solutions in diverse sectors</p>
                            </div>
                        </div>
                        
                        {/* Compact Grid of Use Cases */}
                        <div className="row">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-30">
                                    <div className="card-small hover-up" style={{
                                        padding: '25px',
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb',
                                        height: '100%',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <h5 className="color-brand-1 mb-10" style={{ fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ fontSize: '24px' }}>
                                                {useCase.icon}
                                            </span>{useCase.title}
                                            
                                        </h5>

                                 
                                         <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li className="mb-8" style={{ lineHeight: '1.6' }}>
                                             {useCase.description}</li>
                                            <li className="mb-8" style={{ lineHeight: '1.6' }}>
                                             {useCase.secondPoint}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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