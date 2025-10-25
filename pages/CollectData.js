import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer10 from '../components/slider/Offer10';

const ColectData = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="color-grey-300">Data Collection</span>
                                    <h2 className="color-black-text mt-10">
                                        Bespoke data collection for every model stage
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-black-text">
                                        From prototype experiments to production-grade foundation models, we deliver fit-for-purpose datasets that reduce bias, improve performance, and speed time-to-insight.
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
                                    <h3 className="color-black-text mt-10 mb-15">What we offer</h3>
                                    <div className="mt-20">
                                        <p className="font-lg color-grey-400 pt-20">Primary benefits</p>
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Tailored sampling and demographic targeting</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Multi-modal support (text, speech, image, video, sensors, IoT)</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Strong QA, audit trails and compliance (GDPR, CCPA, HIPAA where needed)</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Fast turnaround and flexible delivery formats (CSV, JSON, TFRecord, COCO, custom)</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 ml-20 text-start"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Experts</Link></div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="box-business-service">
                                        <div className="box-number-1 shape-2">
                                            <div className="cardNumber bg-white">
                                                <h3>25k+</h3>
                                                <p className="font-xs color-brand-1">Happy Clients</p>
                                            </div>
                                        </div>
                                        <div className="box-image-1 shape-3"> <img src="assets/imgs/page/service/img1.png" alt="iori" /></div>
                                        <div className="box-image-2 shape-2"> <img src="assets/imgs/page/service/img2.png" alt="iori" /></div>
                                        <div className="box-image-3 shape-1"> <img src="assets/imgs/page/service/img4.png" alt="iori" />
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
                                <h2 className="color-black-text mb-0">What We Offer</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Here are some types of image annotations we provide.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Cross Platform" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Custom data collection programs</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Design and execute end-to-end collection plans: target profile, recruitment, scripts/instruments, pilot runs, full capture and handoff.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Project Management" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Multimodal capture</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li><strong>Text: </strong> web scraping, curated corpora, conversational transcripts, domain-specific corpora</li>
                                            <li><strong>Speech & audio: </strong> scripted/natural speech, environmental sounds, speaker metadata</li>
                                            <li><strong>Image & video: </strong>controlled shoots, crowdsourced capture, dashcam/robotics feeds</li>
                                            <li><strong>Sensor & telemetry: </strong>LIDAR, IMU, CANbus, time-series from industrial/automotive devices.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Analytics Dashboard" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Panel & participant recruitment</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Targeted recruitment for demographic, geographic and behavioral cohorts — screening, consent, incentives and scheduling.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Team Collaboration" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Annotation-ready collection</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Collect with annotation in mind: bounding boxes, segmentation masks, multi-label taxonomies, speaker timestamps, intent/slot markers.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human2.png" 
                                            alt="Customer Support" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Privacy-first data handling</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Consent management, PII minimization, secure storage, and options for differential privacy or on-prem/air-gapped transfers.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human2.png" 
                                            alt="Customer Support" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Quality assurance & validation</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Multi-tier QA (automated checks + human review), inter-annotator agreement monitoring, sample audits and statistical validation reports.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human2.png" 
                                            alt="Customer Support" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Delivery & integration</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Custom formats, sample indices, metadata, API access, and integration support for ML pipelines and MLOps tools.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20 mb-40 mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">How we work</h2>
                                <p className="font-lg color-gray-500">Simple, transparent process</p>
                            </div>
                        </div>
                        <div className="table-box-help mt-50">
                            <div className="table-responsive">
                                <table className="table table-forum">
                                    <thead>
                                        <tr>
                                            <th className="width-50">Process Structure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Kickoff & Requirements</h4>
                                                        <p className="font-ls color-grey-500">Ddefine success metrics, target populations, and constraints.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Design & Pilot</h4>
                                                        <p className="font-ls color-grey-500">Create collection instruments, run pilots, measure quality and adjust.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Scale & Capture</h4>
                                                        <p className="font-ls color-grey-500">Full launch with monitoring dashboards and live QA.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Validate & Clean</h4>
                                                        <p className="font-ls color-grey-500">Automated filtering + human review, produce QA reports.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Deliver & Support</h4>
                                                        <p className="font-ls color-grey-500">Hand off data, integrate into your pipeline, provide follow-up sampling as models evolve.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">Use Cases</h2>
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
                                    <Offer10 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-center card-no-border">
                            <div className="col-lg-6 mb-30">
                                <h2 className="color-black-text">Quality, compliance & security</h2>
                                <div className="mb-10 mt-10 font-md">Personalization is more than recommending “similar items.” It’s about adapting to user behavior, context, and evolving intent. We support personalization efforts through:</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up ">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Transparent QA metrics :</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Error rates, agreement scores, coverage reports.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Reproducible pipelines: </Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Capturable provenance, versioning and sample snapshots for audits.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image mt-15"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info mt-15">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Share updates instantly within our project management software, and get the entire team collaborating">Regulatory alignment: </Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Flexible privacy controls, exportable consent records, ability to work under NDAs and DPA terms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-black-text mt-15 mb-20">Let’s make your search smarter and personalization sharper.</h2>
                                        <p className="font-md color-grey-500">Talk to us about building ML-ready processes that turn relevance into results.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
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

export default ColectData;
