import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer9 from '../components/slider/Offer9';

const GenAI = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        Build reliable, productive generative models with human expertise.
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-black-text">
                                        We deliver scalable annotation, instruction-tuning datasets, evaluation & H-in-the-Loop (HITL) services that make LLM and multimodal models safer, more accurate, and production ready.
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
                                    <h3 className="color-black-text mt-10 mb-15">What we do</h3>
                                    <p className="font-md color-grey-400">We provide end-to-end human-centric services to train, fine-tune, evaluate and monitor generative AI.</p>
                                    <div className="mt-20">
                                        <p className="font-lg color-grey-400 pt-20">Our process-driven services bridge this gap by:</p>
                                        <ul className="list-ticks pt-15">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Instruction dataset creation (pair prompts & ideal responses for instruction-tuning / SFT)</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Human-in-the-Loop workflows for model improvement, online learning, and human review of model outputs</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Evaluation & red-teaming: scoring, edge-case identification, adversarial tests, hallucination checks</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Prompt engineering & dataset augmentation: curated pseudo-labels, synthetic data verification</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-md color-grey-400">Continuous quality pipelines and audit trails for compliance</p>
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
                                <h2 className="color-brand-1 mb-0">Types of Content Moderation We Offer</h2>
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
                                            src="assets/images/tools/gai_3.png" 
                                            alt="Cross Platform" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Instruction Tuning & Supervised Fine-Tuning (SFT)</h4>
                                        <p className='pb-10 font-lg'>We design and annotate instruction-response pairs tailored to your model objective:</p>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Prompt engineering & prompt variants to cover tone, format, and domain constraints</li>
                                            <li>Multi-turn conversations and context window construction</li>
                                            <li>Role-based responses (assistant/persona conditioning)</li>
                                            <li>Output format enforcement (JSON, tables, code blocks)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/images/tools/gai_3.png" 
                                            alt="Project Management" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Evaluation, QA & Red-teaming</h4>
                                        <p className='pb-10 font-lg'>Measure and harden model behavior:</p>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Automated and human evaluation metrics (accuracy, helpfulness, factuality, bias)</li>
                                            <li>Adversarial prompt generation & stress tests</li>
                                            <li>Hallucination detection workflows & factual grounding pipelines</li>
                                            <li>Annotator-led root cause analysis and mitigation plans</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/images/tools/gai_3.png" 
                                            alt="Analytics Dashboard" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-black-text mb-15">Annotation & Data Labeling</h4>
                                        <p className='pb-10 font-lg'>High-accuracy annotation across modalities:</p>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Text: intents, entities, spans, relation labels, toxicity/safety tags, correctness checks</li>
                                            <li>Code: docstring generation, code synthesis verification, unit test generation</li>
                                            <li>Multimodal: OCR + alignment, image captioning, bounding boxes, visual question answering pairs</li>
                                            <li>Audio: transcription with timestamps, speaker diarization, semantic tagging</li>
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
                                        <h4 className="color-black-text mb-15">Human-in-the-Loop (HITL)</h4>
                                        <p className='pb-10 font-lg'>Embed humans where models fail or where high-stakes decisions matter:</p>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Real-time human review for critical outputs</li>
                                            <li>Active learning loops — human labels guide sampling for next training batches</li>
                                            <li>Onboarding and calibration of reviewers to keep decision consistency</li>
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
                                        <h4 className="color-black-text mb-15">Synthetic Data & Augmentation</h4>
                                        <p className='pb-10 font-lg'>Generate controlled synthetic examples and validate them:</p>
                                        <ul className="custom-bullets font-md color-black-text mb-15 pl-15">
                                            <li>Bootstrapping prompt templates + human vetting</li>
                                            <li>Back-translation, paraphrase pools, and negative example mining</li>
                                            <li>Synthetic-to-real parity testing and drift monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100 mb-40 process-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Process</h2>
                                <p className="font-lg color-gray-500">We don't deliver technology—we deliver processes that make technology smarter. Our services are built around</p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Discovery & goal setting</h4>
                                            <p className="font-md color-grey-500">Define KPIs, personas, safety guardrails.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Sample design & pilot</h4>
                                            <p className="font-md color-grey-500">Produce a small labeled sample for your review.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Scale annotation</h4>
                                            <p className="font-md color-grey-500">trained annotators with continuous calibration and QA.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">HITL integration</h4>
                                            <p className="font-md color-grey-500">Plug annotated data into training cycles and model review UI.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                        <div className="process-number">5</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Evaluate & iterate</h4>
                                            <p className="font-md color-grey-500">Human + automated evaluation, then refine datasets.</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.5s" }}>
                                        <div className="process-number">6</div>
                                        <div>
                                            <h4 className="color-black-text mb-5">Handover & monitoring</h4>
                                            <p className="font-md color-grey-500">Deliver datasets, documentation, and optional ongoing support.</p>
                                        </div>
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
                                <h2 className="color-brand-1 mb-20">Use Cases</h2>
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
                                    <Offer9 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-black-text mb-20">Why choose us</h2>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Higher User Engagement</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Domain-matched annotators and SMEs, not generic crowdsourcing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Tight HITL integration</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">We don't just label — we design feedback loops that make models measurably better</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Reduced Churn</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Compliance, traceability, and enterprise SLAs for production deployments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-black-text mb-10"><Link className="color-black-text" href="Share updates instantly within our project management software, and get the entire team collaborating">Scalable Efficiency</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Transparent metrics and continuous improvement — you see quality changes across iterations</p>
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
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-black-text mt-15 mb-20">Let's make your search smarter and personalization sharper.</h2>
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

export default GenAI;