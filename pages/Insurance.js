import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer10 from '../components/slider/Offer10';

const Insurance = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="color-grey-300">Insurance</span>
                                    <h2 className="color-black-text mt-10">
                                        AI that understands risk — powered by accurate data and human judgment.
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-black-text">
                                        Accurate annotations, real-world data collection, and expert human-in-the-loop pipelines that make models reliable where it matters most: pricing, claims, fraud detection and customer care.
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
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">Why insurers choose us</h2>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-black-text mb-10"><Link className="color-black-text" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Domain-aware data</Link></h5>
                                        <p className="font-md color-grey-500 mb-5">Taxonomies, policy language, and claim types created with insurance SMEs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-black-text mb-10"><Link className="color-black-text" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Human-in-the-loop (HITL)</Link></h5>
                                        <p className="font-md color-grey-500 mb-5">Expert reviewers correct, adjudicate edge cases, and retrain models incrementally.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-black-text mb-10"><Link className="color-black-text" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Operational compliance</Link></h5>
                                        <p className="font-md color-grey-500 mb-5">PII-safe processes, data residency options, and auditable pipelines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-black-text mb-10"><Link className="color-black-text" href="Share updates instantly within our project management software, and get the entire team collaborating">End-to-end delivery</Link></h5>
                                        <p className="font-md color-grey-500 mb-5">From data collection to model-ready datasets, validation suites, and continuous feedback loops.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-black-text mt-10 mb-15">Common insurance challenges we solve</h3>
                                    <div className="mt-20">
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Inaccurate claims triage leading to higher loss ratios</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Slow claims processing and poor customer satisfaction</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Missed fraud signals and false positives that waste resources</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Poor NLP performance on policy language and unstructured documents</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Underwriting models biased by sparse or noisy historical data</p>
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
                                <h2 className="color-black-text mb-0">Our Services</h2>
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
                                        <h4 className="color-black-text mb-15">Data Collection & Ingestion</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Structured and unstructured sources: policy documents, claim forms, inspection photos, adjuster notes, call transcripts, emails, SMS.</li>
                                            <li>Field data capture: mobile apps for scene photos, vehicle damage, property inspections with GPS & metadata.</li>
                                            <li>Synthetic data generation for rare events and balanced class representation.</li>
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
                                        <h4 className="color-black-text mb-15">Annotation & Labeling (beyond boxes)</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Document parsing: multi-page policy extraction, clause identification, limit/endorsement extraction.</li>
                                            <li>NLP tasks: entity extraction (insured name, limits, dates), intent classification (claim, inquiry, escalation), sentiment & urgency scoring.</li>
                                            <li>Computer vision: damage segmentation, severity scoring, object detection (vehicles, structural damage).</li>
                                            <li>Audio: call transcription, speaker diarization, intent tagging, and compliance checks.</li>
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
                                        <h4 className="color-black-text mb-15">Human-in-the-Loop (HITL) Workflows</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Active learning: models surface low-confidence cases; humans label the most informative examples to accelerate learning.</li>
                                            <li>Adjudication layer: expert underwriters/adjusters resolve ambiguous cases; decisions are logged and used to update models.</li>
                                            <li>Quality gates: continuous sampling, blind review, and escalation rules to maintain X% label accuracy (we tailor targets per project).</li>
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
                                        <h4 className="color-black-text mb-15">QA, Validation & Monitoring</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Holdout test sets that mirror production distributions.</li>
                                            <li>Bias & fairness checks for underwriting models.</li>
                                            <li>Drift detection and retraining triggers tied to business KPIs (e.g., claims processing time, FN/FP rates).</li>
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
                                        <h4 className="color-black-text mb-15">Data Privacy & Compliance</h4>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>PII redaction, tokenization, and secure enclaves for sensitive workflows.</li>
                                            <li>Consent management, PII minimization, secure storage, and options for differential privacy or on-prem/air-gapped transfers.</li>
                                            <li>Consent management, PII minimization, secure storage, and options for differential privacy or on-prem/air-gapped transfers.</li>
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
                                <p className="font-lg color-gray-500">Deliverables include labeling guidelines, model-ready datasets (CSV/JSON/COCO), validation reports, and an operations playbook.</p>
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
                                                        <h4 className="color-black-text mb-15">Discovery & scoping</h4>
                                                        <p className="font-ls color-grey-500">Map data sources, business KPIs, and compliance constraints.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Pilot</h4>
                                                        <p className="font-ls color-grey-500">Small, fast experiment (4–6 weeks) to demonstrate lift and set labeling conventions.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Scale</h4>
                                                        <p className="font-ls color-grey-500">Extend datasets, build HITL loops, integrate with your CI/CD for models.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-black-text mb-15">Operate</h4>
                                                        <p className="font-ls color-grey-500">Production monitoring, periodic audits, and continuous improvement sprints.</p>
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
                <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-black-text mb-15">Insurance use cases</h3>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-black-text mb-5">Automated claims triage</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Route simple claims for straight-through processing and escalate complex ones to adjusters.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-black-text mb-5">Damage assessment</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Use images + expert labels for fast, consistent severity scoring.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-black-text mb-5">Fraud detection</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Combine text, image, and behavioral data to flag suspicious claims with lower false positives.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-black-text mb-5">Policy understanding</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Extract clauses, exclusions, and effective dates from legacy PDFs and scanned documents..</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-black-text mb-5">Customer experience</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Train chatbots and voice assistants with real transcripts and HITL corrections for higher NPS. </p>
                                        </div>
                                    </li>
                                </ul>
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
                                        <h2 className="color-black-text mt-15 mb-20">Ready to get started?</h2>
                                        <p className="font-md color-grey-500"><strong>Book a 30-minute scoping call -</strong>We’ll review sample data and map a pilot.</p>
                                        <p className="font-md color-grey-500"><strong>Request a sample labeling spec - </strong>Send one policy/claim PDF and we’ll return a suggested schema.</p>
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

export default Insurance;
