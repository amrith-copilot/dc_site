import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Tab from '../components/elements/Tab';
import Tab1 from '../components/elements/Tab1';
import Tab2 from '../components/elements/tab2';
import Proccess from '../components/elements/Proccess';
import Offer2 from '../components/slider/Offer2';
import Offer3 from '../components/slider/Offer3';

const LLMEvals = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>  
            <Head>
                <title>LLM Evaluation-as-a-Service | Professional AI & RAG Benchmarking</title>
                <meta name="description" content="Stop guessing and start shipping. We provide decision-ready evaluations for LLMs, RAG pipelines, and Agents using your data. Get objective benchmarks, safety audits, and performance reports to deploy with confidence." />
                <meta name="keywords" content="LLM Evaluation-as-a-Service, RAG Benchmarking, AI Agent Testing, Prompt Optimization, Model Comparison, AI Safety Audits, LLM-as-a-Judge" />
                <meta property="og:title" content="LLM Evaluation-as-a-Service | Professional AI & RAG Benchmarking" />
                <meta property="og:description" content="Stop guessing and start shipping. We provide decision-ready evaluations for LLMs, RAG pipelines, and Agents using your data. Get objective benchmarks, safety audits, and performance reports to deploy with confidence." />
            </Head>
            <Layout>
            <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        Eliminate Uncertainty in Your AI Development Lifecycle.
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text ">
                                       Quantify the performance of your LLMs, RAG systems, and Agents. Our rigorous evaluation framework ensures your AI solutions meet enterprise standards for accuracy and reliability.</p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner align-items-center d-flex justify-content-center">
                               <img src="/assets/images/industry/AI Evals- hero.png" alt="AI Evals hero" style={{ width: '80%', height: 'auto'}} />
                            </div>
                        </div>
                    </div>
                </section>
              <section className="section mt-100 mb-50 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="text-center text-lg-start" style={{maxWidth: 920}}>
                                <h1 className="font-xl-bold color-white text-uppercase text-center">Custom Evaluation Frameworks</h1>
                                <h6 className="color-brand-2 mb-10 mt-15">
                                    Every AI architecture demands a unique validation strategy. We move beyond generic benchmarks to stress-test your specific models and RAG pipelines against your real-world data and custom performance requirements.
                                </h6>
                            </div>
                        </div>
                        <div className=" mb-60 d-flex justify-content-center">
                            <div style={{width: '100%', maxWidth: 1100}}>
                                <Tab1/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mb-100">
                    <div className="container">
                        <div className="box-business-rd">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="color-brand-1 mt-10 mb-15">Why Evals Matter</h3>
                                    <p className="font-xl color-grey-400">AI models don’t just fail when they’re inaccurate. They fail when:</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Datasets are mislabeled or biased</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Models hallucinate or produce unsafe content</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Edge cases and adversarial prompts go untested</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <p className="font-lg color-grey-400">Evals as a Service ensures your AI is trustworthy, robust, and aligned — before it reaches production.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 ml-20 text-start"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Talk to Our Evaluation Experts</Link></div>
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
             
                 

                {/* <section className="section mt-100 mb-50 bg-brand-1 pt-100 pb-100" style={{backgroundColor: '#0052CC'}}>
                    <div className="container">
                        <div className="text-center mb-80">
                            <h2 className="color-white mb-40" style={{fontSize: '42px', fontWeight: 700}}>The Evaluation Journey</h2>
                            <p className="color-white" style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto'}}>
                                Enterprise-Grade Validation Without the Engineering Overhead You shouldn't have to divert your core team to build complex internal benchmarking tools. We provide the infrastructure, the expertise, and the objective analysis, combining high-speed automated judging with expert human oversight to deliver decision-ready insights.
                            </p>
                        </div>
                        
                        <div className="row" style={{gap: '40px', maxWidth: '1200px', margin: '0 auto'}}>
                            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                                    <span style={{color: '#4ADE80', fontSize: '24px', fontWeight: 'bold', marginRight: '12px'}}>✓</span>
                                    <h3 className="color-white mb-0" style={{fontSize: '18px', fontWeight: 700}}>Scenario Definition & Data<br />Integration</h3>
                                </div>
                                <p className="color-white" style={{fontSize: '14px', lineHeight: '1.6', marginBottom: 0}}>
                                    Define your objectives. We begin by identifying the specific components of your stack you wish to validate—whether it is a complex RAG pipeline, multi-step autonomous agents, or a side-by-side comparison of evaluation models. The Input: You provide your target workflows, representative user queries, and any existing "Golden Sets" (ground-truth data).
                                    The Goal: We ensure the evaluation framework is perfectly aligned with your actual production environment.
                                </p>
                            </div>
                            
                            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                                    <span style={{color: '#4ADE80', fontSize: '24px', fontWeight: 'bold', marginRight: '12px'}}>✓</span>
                                    <h3 className="color-white mb-0" style={{fontSize: '18px', fontWeight: 700}}>Calibrated Review & Methodology<br />Selection</h3>
                                </div>
                                <p className="color-white" style={{fontSize: '14px', lineHeight: '1.6', marginBottom: 0}}>
                                    Customize your level of rigor. Accuracy requirements vary by use case. We offer a tiered approach to validation so you can balance speed with precision.
                                    LLM-as-a-Judge: Rapid, scalable scoring using advanced, proprietary evaluation prompts to detect hallucinations and relevance at scale.
                                    Expert Human Review: High-fidelity manual auditing for nuanced tasks where human judgment, empathy, unspecialized domain knowledge are non-negotiable.
                                    Hybrid validation: The gold standard—automated broad-spectrum testing verified by human-in-the-loop spot checks.
                                </p>
                            </div>
                            
                            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                                    <span style={{color: '#4ADE80', fontSize: '24px', fontWeight: 'bold', marginRight: '12px'}}>✓</span>
                                    <h3 className="color-white mb-0" style={{fontSize: '18px', fontWeight: 700}}>Decision-Ready Reporting &<br />Strategy</h3>
                                </div>
                                <p className="color-white" style={{fontSize: '14px', lineHeight: '1.6', marginBottom: 0}}>
                                    Identify the clear winner. We move beyond raw data to provide a comprehensive Evaluation Report that translates metrics into action.
                                    The Output: A clear, comparative analysis that identifies which model, prompt, or retrieval strategy outperformed the rest.
                                    Strategic Support: We don't just hand over a spreadsheet; we provide a post-evaluation consultation to help you interpret the results and optimize your next deployment phase.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className="section mt-50 mb-30 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center">
                            <span className="font-xl-bold color-white text-uppercase">What We Offer</span>
                                    <h2 className="color-brand-2 mb-60 mt-15">
                                        Our Evaluation Services
                                    </h2>
                        </div>
                        <div className="mt-30 mb-60">
                            <Tab2 />
                        </div>
                    </div>
                </section> */}
                {/* <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-brand-1 mb-15">Why Choose Us?</h3>
                                    <p className="font-md color-grey-400">We eliminate the technical friction of benchmarking so your team can focus on what matters, deploying AI products that your users can actually trust.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Human-first evaluations </h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Open-source powered</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’re honest, transparent and committed to doing what’s best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable workforce</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Custom eval design</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Being the world's leading commerce platform requires unrivaled vision, innovation and execution. We never settle. We challenge our ideas of what’s possible in order to better meet the needs of our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Do the right thing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. </p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Stronger united</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="section mt-20 mb-40 mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">How It Works</h2>
                                <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="box-process-eval">
                                <div className="process-eval -center">
                                    {/* Proccess component handles the process cards *
                                    <Proccess />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}
                
                
              <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mb-20" style={{ color: "#fff" }}>The Evaluation Journey</h2>
                                <p className="font-lg max-width-600 mx-auto" style={{ color: "#fff" }}>
                                   Enterprise-Grade Validation Without the Engineering Overhead
                                    You shouldn’t have to divert your core team to build complex internal benchmarking tools. We provide the infrastructure, the expertise, and the objective analysis, combining high-speed automated judging with expert human oversight to deliver decision-ready insights.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <span style={{width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#fff', color: '#3819a7', fontWeight: 700, marginRight: '15px', marginTop: '3px', flexShrink: 0}}>1</span>
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}> Scenario Definition & Data Integration</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Define your objectives. We begin by identifying the specific components of your stack you wish to validate—whether it is a complex RAG pipeline, multi-step autonomous agents, or a side-by-side comparison of foundation models.
                                        </p>
                                        <ul style={{ color: "#fff" }}>
                                            <li><strong>The Input:</strong> You provide your target workflows, representative user queries, and any existing "Golden Sets" (ground-truth data).</li>
                                            <li><strong>The Goal:</strong> We ensure the evaluation framework is perfectly aligned with your actual production environment. </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                 <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <span style={{width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#fff', color: '#3819a7', fontWeight: 700, marginRight: '15px', marginTop: '3px', flexShrink: 0}}>2</span>
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>  Calibrated Review & Methodology Selection</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Customize your level of rigor. Accuracy requirements vary by use case. We offer a tiered approach to validation so you can balance speed with precision.
                                        </p>
                                        <ul style={{ color: "#fff" }}>
                                            <li><strong>LLM-as-a-Judge:</strong> Rapid, scalable scoring using advanced, proprietary evaluation prompts to detect hallucinations and relevance at scale.</li>
                                            <li><strong>Expert Human Review:</strong> High-fidelity manual auditing for nuanced tasks where human judgment, empathy, and specialized domain knowledge are non-negotiable.</li>  
                                            <li><strong>Hybrid Validation:</strong>  The gold standard—automated broad-spectrum testing verified by human-in-the-loop spot checks.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                  <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <span style={{width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#fff', color: '#3819a7', fontWeight: 700, marginRight: '15px', marginTop: '3px', flexShrink: 0}}>3</span>
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>  Decision-Ready Reporting & Strategy</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                        Identify the clear winner. We move beyond raw data to provide a comprehensive Evaluation Report that translates metrics into action.
                                        </p>
                                        <ul style={{ color: "#fff" }}>
                                            <li><strong>The Output:</strong> A clear, comparative analysis that identifies which model, prompt, or retrieval strategy outperformed the rest.</li>
                                            <li><strong>Strategic Support: </strong>We don’t just hand over a spreadsheet; we provide a post-evaluation consultation to help you interpret the results and optimize your next deployment phase.</li>  
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
                                    Precision-engineered evaluations for high-stakes environments. We translate complex industry requirements into objective benchmarks, ensuring your AI solutions meet the specific safety, accuracy, and compliance standards of your sector.
                                </p>
                            </div>
                        </div>
                        <section className="section mt-30 mb-60">
                    <div className="container">
                        <div className="row justify-content-center mb-30">
                            <div className="col-12">
                                {/* Slider: shows 4 cards at a time, auto-advances every 1s */}
                                <SliderBlock />
                            </div>
                        </div>
                    </div>
                </section>
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
                                        <h2>Ready to Validate Your AI?</h2>
                                        <p className="font-md color-grey-500">Let our workforce evaluate your model with precision and care.</p>
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

export default LLMEvals;

// SliderBlock component
function SliderBlock(){
    const cards = [
        {
            title: 'Automotive & Infrastructure',
            bullets: [
                {strong: 'ADAS:', text: ' Edge-case validation for computer vision models and sensor fusion reliability under diverse weather and lighting conditions.'},
                {strong: 'Mapping:', text: ' Precision audits for autonomous navigation, ensuring sub-centimeter accuracy in spatial data and real-time attribute labeling.'},
                {strong: 'Geo Spatial:', text: ' Validation of change-detection algorithms for satellite imagery, focusing on rural vs. urban classification accuracy.'}
            ]
        },
        {
            title: 'Heavy Industry & Operations',
            bullets: [
                {strong: 'Manufacturing:', text: ' Stress-testing predictive maintenance models to reduce false-positive downtime alerts in high-throughput environments.'},
                {strong: 'Agriculture:', text: ' Accuracy checks for crop-yield forecasting and pest-detection models using multi-spectral imagery.'},
                {strong: 'RPA :', text: ' Logic-validation for document-processing agents to ensure 100% grounding in automated financial or data-entry workflows.'}
            ]
        },
        {
            title: 'Consumer & Digital Services',
            bullets: [
                {strong: 'Retail:', text: ' A/B testing recommendation engines to measure "discoverability" and the reduction of search friction for end consumers.'},
                {strong: 'Social Media:', text: ' Moderation audits for toxicity, bias, and multi-modal content safety (text, image, and video) across global dialects.'},
                {strong: 'E-Commerce and Content:', text: ' Evaluated "helpfulness" scores for AI-generated product descriptions and SEO-optimized marketing copy.'}
            ]
        },
        {
            title: 'Healthcare & Finance',
            bullets: [
                {strong: 'Medical AI:', text: ' Rigorous factuality and compliance audits for clinical summarization tools, ensuring zero hallucination in patient data processing.'},
                {strong: 'Fintech:', text: ' Robustness testing for credit-scoring models and fraud-detection agents, focused on removing algorithmic bias and ensuring regulatory alignment.'},
                {strong: 'Insurance:', text: ' Validation of automated claims-processing agents for policy grounding and accurate damage assessment from user-submitted photos.'}
            ]
        },
        {
            title: 'Emerging Tech',
            bullets: [
                {strong: 'Physical AI :', text: ' Benchmarking "sim-to-real" transfer success rates for robotic manipulation and spatial reasoning in unstructured environments.'},
                {strong: 'Voice AI:', text: ' Linguistic accuracy and emotional resonance testing for conversational IVR and real-time translation services.'},
                {strong: 'Sports & Media:', text: ' Precision audits for automated player-tracking data and real-time highlight generation algorithms.'},
                {strong: 'Asset Management:', text: ' Stress-testing LLM-driven market sentiment analysis tools against historical volatility sets to ensure reliable investment signaling.'}
            ]
        }
    ];

    const origLen = cards.length;
    const getVisible = () => {
        if (typeof window === 'undefined') return 4;
        const w = window.innerWidth;
        if (w < 576) return 1;
        if (w < 992) return 2;
        return 4;
    };
    const [visible, setVisible] = useState(getVisible());
    useEffect(() => {
        const onResize = () => setVisible(getVisible());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Prepend last `visible` and append first `visible` for seamless bidirectional loop
    const slides = [...cards.slice(-visible), ...cards, ...cards.slice(0, visible)];

    // start at the first real slide position
    const startIndex = visible;
    const [index, setIndex] = useState(startIndex);
    const [withTransition, setWithTransition] = useState(true);
    const indexRef = React.useRef(index);
    indexRef.current = index;

    const [selectedCard, setSelectedCard] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(()=>{
        const id = setInterval(()=>{
            setIndex(prev => prev + 1);
        }, 3000);
        return ()=> clearInterval(id);
    }, [visible]);

    // when visible changes (responsive), reset index to the new start
    useEffect(()=>{
        setWithTransition(false);
        setIndex(visible);
        requestAnimationFrame(()=> setTimeout(()=> setWithTransition(true), 20));
    }, [visible]);

    function handleTransitionEnd(){
        // moved past the end clones
        if(indexRef.current >= origLen + startIndex){
            setWithTransition(false);
            setIndex(startIndex);
            requestAnimationFrame(()=> setTimeout(()=> setWithTransition(true), 20));
        }
        // moved before the start clones
        if(indexRef.current < startIndex){
            setWithTransition(false);
            setIndex(indexRef.current + origLen);
            requestAnimationFrame(()=> setTimeout(()=> setWithTransition(true), 20));
        }
    }

    function prev(){
        setIndex(prev => prev - 1);
    }
    function next(){
        setIndex(prev => prev + 1);
    }

    const cardPercent = 100 / visible;
    const trackStyle = {
        display: 'flex',
        transition: withTransition ? 'transform 480ms ease' : 'none',
        transform: `translateX(-${(index * cardPercent)}%)`
    };

    const cardStyle = {
        flex: `0 0 ${cardPercent}%`,
        boxSizing: 'border-box',
        padding: '0 12px',
        display: 'flex'
    };

    const innerCardStyle = {padding: '28px', border: '1px solid #e6eef6', borderRadius: '14px', background: '#fff', minHeight: '220px', boxShadow: '0 4px 12px rgba(16,24,40,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', transition: 'all 0.3s ease', cursor: 'pointer'};

    // Add dragging state for cursor
    const [isDragging, setIsDragging] = useState(false);
    return (
        <div style={{position: 'relative'}}>
            <div
                style={{overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab'}}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                <div style={trackStyle} onTransitionEnd={handleTransitionEnd}>
                    {slides.map((c, i) => {
                        const origIdx = ((i - startIndex) + origLen) % origLen;
                        const isSelected = selectedCard === origIdx;
                        const isHovered = hoveredCard === origIdx;
                        const mergedInner = Object.assign({}, innerCardStyle, isHovered ? {boxShadow: '0 8px 24px rgba(11, 95, 255, 0.15)', transform: 'translateY(-4px)'} : {});
                        return (
                        <div key={i} style={cardStyle}>
                            <div style={mergedInner} 
                                onClick={()=> setSelectedCard(origIdx)}
                                onMouseEnter={() => setHoveredCard(origIdx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h4 style={{color: '#1e3bf8', fontWeight: 700, marginBottom: '10px'}}>{c.title}</h4>
                                <ul className="font-sm" style={{paddingLeft: '0', marginTop: '6px', color: '#6b7280', listStyle: 'none'}}>
                                    {c.bullets.map((b, j)=> (
                                        <li key={j} style={{marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                                            <span style={{width: '5px', height: '5px', borderRadius: '50%', background: '#000000', marginTop: '8px', flexShrink: 0}} />
                                            <div>
                                                <strong style={{color: 'inherit'}}>{b.strong}</strong>{b.text}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-48px', display: 'flex', gap: '20px'}}>
                <button onClick={prev} aria-label="prev" className="slider-nav-btn" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #d1dae5', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111827', fontWeight: 700, lineHeight: 1, padding: 0, transition: 'all 0.3s ease', fontSize: '22px'}}>
                    ←
                </button>
                <button onClick={next} aria-label="next" className="slider-nav-btn" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #d1dae5', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111827', fontWeight: 700, lineHeight: 1, padding: 0, transition: 'all 0.3s ease', fontSize: '22px'}}>
                    →
                </button>
            </div>
        </div>
    );
}
