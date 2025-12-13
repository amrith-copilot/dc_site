import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';

const HITL = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Layout>
            <>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">Human-in-the-Loop</span>
                                    <h2 className="color-black-text mt-10">
                                        Annotation That Scales 
                                    </h2>
                                    <h4 className="color-black-text mb-20">
                                        Accurate, auditable, and SLA-backed. 
                                    </h4>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        We combine skilled human reviewers with automated tooling to deliver high-quality labeled data for computer vision, NLP, audio, LiDAR and multimodal ML workflows — at scale and with guaranteed SLAs.
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

                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start mt-50">
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-1">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">
                                                
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    What we deliver
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Our Human-in-the-Loop annotation services ensure your ML models are trained on the highest quality data:
                                                </p>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>High accuracy via multi-pass HITL workflows (annotate → review → QA → adjudicate)
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Flexible scale: from pilot batches to continuous pipelines supporting hundreds of thousands of items/month
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Security & compliance: role-based access, encrypted data transfer, and ISO-grade controls for sensitive projects
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up font-md" href="/help">Talk to our Experts</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="iori" />
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
                                <h2 className="color-brand-1 mb-0">Types of tasks and <br /> data we handle</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Comprehensive annotation services across all data modalities
                                </p>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Image & Video" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Image & Video</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Bounding boxes, polygons, instance & semantic segmentation</li>
                                            <li>Keypoints/pose, temporal tracking, activity/event tagging</li>
                                            <li>Video frame sequencing, interpolation checks, per-frame QA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="3D & Sensor" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">3D & Sensor</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>LiDAR point cloud labeling, voxelization</li>
                                            <li>Sensor fusion alignment</li>
                                            <li>3D bounding boxes and segmentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Text & NLP" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Text & NLP</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Named entity recognition (NER), intent labeling</li>
                                            <li>Pairwise comparison, summarization verification</li>
                                            <li>Prompt-response evaluation, content classification, hallucination checks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Audio" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Audio</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Transcription, speaker diarization</li>
                                            <li>Keyword spotting, sound event labeling</li>
                                            <li>Multi-language support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Documents" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Documents</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>OCR correction, form field extraction</li>
                                            <li>Table parsing, semantic restructuring</li>
                                            <li>Redaction and data masking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
                                <p className="font-lg color-gray-500">
                                    Delivering Human-in-the-Loop annotation solutions across diverse industries
                                    <br className="d-none d-lg-block" />
                                    with accuracy, speed &amp; guaranteed SLAs.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer5 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container">
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Deploy HITL safeguards in minutes.</h2>
                                        <p className="font-md color-grey-500">Get high-quality labeled data at scale with our Human-in-the-Loop annotation services. From pilot projects to production-scale pipelines, we deliver accurate annotations with guaranteed SLAs.</p>
                                        <p className="font-md color-grey-500 mt-20">Our multi-pass workflow ensures every annotation meets your quality standards, so you can train better models faster.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default HITL;