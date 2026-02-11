import React, { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../components/slider/VideoSlider'), { ssr: false });
const Offer5 = dynamic(() => import('../components/slider/Offer5'), { ssr: false });

const MLOps = () => {
    const [isOpen, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true);
    }, []);
    // Workflows used by the "Custom Workflows" partner-benefits block
    const workflows = [
        {
            title: 'AI + HITL Review',
            description: 'Automated filters handle scale; trained human moderators validate edge cases.'
        },
        {
            title: 'Escalation Pathways',
            description: 'Critical cases are flagged for immediate review and rapid resolution.'
        },
        {
            title: 'Red Teaming & Stress Testing',
            description: 'Simulate adversarial attacks and content evasion tactics to harden models.'
        },
        {
            title: 'Feedback Loops',
            description: 'Continuous improvement of models using annotated data from real cases.'
        },
        {
            title: 'Fast Deployment',
            description: 'Go live quickly with minimal setup using ready-to-integrate workflows.'
        },
        {
            title: 'Cost-Effective',
            description: 'Reduce operational costs without compromising quality; scale as needed.'
        }
    ];

    return (
        <Layout>
            <Head>
                <title>MLOps Services | Machine Learning Operations Solutions | Dataclap</title>
                <meta name="description" content="Scale AI efficiently with Dataclap’s MLOps services. We provide model deployment, monitoring, automation, CI/CD pipelines, and ML lifecycle management." />
                <meta name="keywords" content="MLOps services, machine learning operations, ML model deployment, ML lifecycle management, MLOps consulting" />
            </Head>
            <>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <h2 className="color-black-text mt-10">
                                        ML Momentum
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        Turn your ML experiments into production powerhouses. Build, deploy, and scale AI solutions with confidence through automated pipelines and continuous monitoring.
                                    </p>
                                </div>
                            </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner mt-50 text-center">
                                 <img src="/assets/images/industry/MLOps.png" alt="MLOps" style={{width: '80%', height: 'auto'}} />
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
                                                    What is MLOps?
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    MLOps (Machine Learning Operations) bridges the gap between ML development and production deployment. It combines machine learning, DevOps, and data engineering to streamline the ML lifecycle.<br /><br />MLOps ensures your models are:
                                                </p>
                                                <div className="mt-20">
                                                    <ul className="list-ticks">
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Deployed reliably and at scale
                                                        </li>
                                                        <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Monitored and maintained continuously
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Reproducible and version-controlled
                                                        </li>
                                                         <li className='font-md'>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>Automatically retrained and updated
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
                            <div className="col-lg-12 text-center mb-20">
                                <h2 className="color-brand-1 mb-0 text-center">Core MLOps Services</h2>
                                <p className="color-grey-500 font-lg mt-20 text-center max-width-600 mx-auto">
                                    Comprehensive MLOps solutions to accelerate your machine learning initiatives.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>MLOps Assessment and Strategy</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Evaluate and optimize your ML development and deployment processes. Identify gaps in the ML lifecycle management and develop a tailored MLOps implementation plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>ML Pipeline Automation</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Design and implement end-to-end automated ML pipelines. Automate data preprocessing, feature engineering, model training and set up continuous integration for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>Model Versioning and Experiment Tracking</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Implement version control and experiment tracking for ML models. Set up experiment tracking and management systems to enable reproducibility of ML experiments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-0">
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>Model Deployment and Serving</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Automate and scale model deployment processes. Implement scalable model serving solutions and set up A/B testing and canary deployments for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="left-aligned-card-wrapper">
                                        <div className="left-aligned-card-container" style={{padding: '18px'}}>
                                        <h4 className="left-card-title color-black-text" style={{fontSize: '20px', marginBottom: '10px'}}>ML Development</h4>
                                        <p className="left-card-description" style={{fontSize: '15px'}}>
                                            Custom ML model development and optimization. ML Model Optimization and ML Model Integration, Training & Validation for your specific business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                

                <section className="section mt-30 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h3 className="color-brand-1 mb-15">Why Companies Choose Us</h3>
                                    <p className="font-md color-grey-400">Expert MLOps services that help you build scalable and reliable ML systems in production.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">End-to-End Automation</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We automate the entire ML lifecycle from data ingestion to model deployment and monitoring.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable Infrastructure</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our solutions scale with your business needs and handle increasing data volumes.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Continuous Monitoring</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Real-time monitoring and alerting to ensure your models perform optimally in production.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Industry Expertise</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Deep expertise across industries with proven MLOps implementations.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Faster Time to Market</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Accelerate your ML project delivery with proven frameworks and best practices.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Cost Optimization</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Optimize infrastructure costs while maintaining high performance and reliability.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
          <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mt-20 mb-20" style={{ color: "#fff" }}>Advantages of Adopting MLOps</h2>
                                <p className="font-lg max-width-600 mx-auto" style={{ color: "#fff" }}>
                                    Unlock the full potential for your machine learning system
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Automated Pipeline</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Streamlined machine learning pipelines automate data preprocessing, model training, and deployment processes, significantly reducing manual intervention and errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Model Monitoring</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Continuous tracking of model performance and data drift ensures AI systems maintain accuracy and reliability in production environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Version Control</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                         Systematic tracking of datasets, model parameters, and code versions enables reproducible experiments and efficient collaboration among data scientists.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Scalable Infrastructure</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                          Dynamic resource allocation and containerized environments support efficient model training and serving across different computing infrastructures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Data Governance</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                          Automated data validation, lineage tracking, and quality checks ensure models are trained on reliable, consistent, and compliant datasets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-25 d-flex">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px', fontFamily: 'inherit'}}>
                                    <img src="/assets/imgs/page/about/tick.svg" alt="Tick" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Continuous Training</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                          Automated retraining pipelines keep models updated with fresh data, maintaining optimal performance and adapting to changing patterns.
                                        </p>
                                    </div>
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
                                    Comprehensive MLOps solutions across diverse industries, delivering scalable machine learning operations
                                    <br className="d-none d-lg-block" />
                                    with strategy, automation &amp; technology.
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

                {/* <section className="section mt-100 mb-40 process-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Process</h2>
                                <p className="font-lg color-gray-500">A systematic approach to implementing MLOps in your organization</p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Assessment</h4>
                                            <p className="font-md color-grey-500">Evaluate current ML infrastructure and identify improvement opportunities</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.1s" }}>
                                        <div className="process-number">2</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Strategy Development</h4>
                                            <p className="font-md color-grey-500">Create a tailored MLOps roadmap aligned with business goals</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.2s" }}>
                                        <div className="process-number">3</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Implementation</h4>
                                            <p className="font-md color-grey-500">Deploy automated pipelines and monitoring systems</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="process-row fade-up" style={{ animationDelay: "0.3s" }}>
                                        <div className="process-number">4</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Testing & Validation</h4>
                                            <p className="font-md color-grey-500">Comprehensive testing of ML pipelines and model performance</p>
                                        </div>
                                    </div>

                                    <div className="process-row fade-up" style={{ animationDelay: "0.4s" }}>
                                        <div className="process-number">5</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Optimization & Support</h4>
                                            <p className="font-md color-grey-500">Continuous optimization and ongoing support for your MLOps environment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center justify-content-center">
                               
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2>Transform Your ML Development into Production-Ready Systems</h2>
                                        <p className="font-md color-grey-500">MLOps is the key to scaling your machine learning initiatives. Build robust, automated, and reliable ML systems that deliver consistent business value.</p>
                                        <div className="box-button text-center mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
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

export default MLOps;