import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';
import Offer3 from '../components/slider/Offer3';

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
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/HITL.png" alt="HITL hero" style={{ width: '80%', height: 'auto'}} />
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

              

                {/* <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Annotation Types</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    (Placeholder cards)
                                </p>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-30">
                                <div style={{height: '100%'}}>
                                    <div style={{width: '100%', height: '480px', border: '1px dashed #e6eef8', borderRadius: 8, background: '#fff'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-brand-1 mb-15">Our Advantages</h3>
                                    <p className="font-md color-grey-400">Understand why our clients choose to work with us</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Optimized for Quality</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We have a two layer QC process that ensures the quality of the output. This is enabled by a short feedback loop process.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">End to End Solutions</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">From data collection and cleaning to data annotation, we offer ened to end solutions for your training data needs.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Cost Efficient</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our pricing is transparent and economical. We are more economical thatn contract workers and large annotation platforms.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Completely Managed</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our services are completely managed with dedicated account managers to ensure smooth operations.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable Workforce</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Start with a single person and grow with us. We scale up our team based on your demands.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Data Security</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Data security is of paramount importance. We are GDPR compliant and are ISO 27001 certified.</p>
                                        </div>
                                    </li>
                                </ul>
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
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  {/* <section className="section mt-100">
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
                </section> */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" style={{width: '100%', height: 'auto'}} />
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