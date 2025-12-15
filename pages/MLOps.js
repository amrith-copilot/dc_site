import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';

const MLOps = () => {
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
                                 <img src="/assets/imgs/page/MLOps/MLOps.png" alt="MLOps" style={{width: '80%', height: 'auto'}} />
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
                                                <span className="title-line line-48">MLOps Solutions</span>
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
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Core MLOps Services</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Comprehensive MLOps solutions to accelerate your machine learning initiatives.
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross2.png" alt="MLOps Assessment" />
                                        </div>
                                        <h4 className="left-card-title">MLOps Assessment and Strategy</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Evaluate and optimize your ML development and deployment processes. Identify gaps in the ML lifecycle management and develop a tailored MLOps implementation plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross.png" alt="ML Pipeline Automation" />
                                        </div>
                                        <h4 className="left-card-title">ML Pipeline Automation</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Design and implement end-to-end automated ML pipelines. Automate data preprocessing, feature engineering, model training and set up continuous integration for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage2/identity.png" alt="Model Versioning" />
                                        </div>
                                        <h4 className="left-card-title">Model Versioning and Experiment Tracking</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
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
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross4.png" alt="Model Deployment" />
                                        </div>
                                        <h4 className="left-card-title">Model Deployment and Serving</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Automate and scale model deployment processes. Implement scalable model serving solutions and set up A/B testing and canary deployments for ML models.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mb-20">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/imgs/page/homepage1/cross5.png" alt="ML Development" />
                                        </div>
                                        <h4 className="left-card-title">ML Development</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Custom ML model development and optimization. ML Model Optimization and ML Model Integration, Training & Validation for your specific business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section mt-70 pt-60 pb-60 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="color-brand-1 mb-20">Advantages of Adopting MLOps</h2>
                                <p className="font-lg max-width-600 mx-auto color-grey-500">
                                    Unlock the full potential of your machine learning systems
                                </p>
                            </div>
                        </div>
                        {/* First Row */}
                        <div className="row mlops-advantages-row">
                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/pipe.svg" alt="Automated Pipeline" />
                                        </div>
                                        <h4 className="left-card-title">Automated Pipeline</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Streamlined machine learning pipelines automate data preprocessing, model training, and deployment processes, significantly reducing manual intervention and errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/monitor.svg" alt="Model Monitoring" />
                                        </div>
                                        <h4 className="left-card-title">Model Monitoring</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Continuous tracking of model performance and data drift ensures AI systems maintain accuracy and reliability in production environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/version.svg" alt="Version Control" />
                                        </div>
                                        <h4 className="left-card-title">Version Control</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Systematic tracking of datasets, model parameters, and code versions enables reproducible experiments and efficient collaboration among data scientists.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row mlops-advantages-row" style={{marginTop: '0px'}}>
                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/expand.svg" alt="Scalable Infrastructure" />
                                        </div>
                                        <h4 className="left-card-title">Scalable Infrastructure</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Dynamic resource allocation and containerized environments support efficient model training and serving across different computing infrastructures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/account.svg" alt="Data Governance" />
                                        </div>
                                        <h4 className="left-card-title">Data Governance</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Automated data validation, lineage tracking, and quality checks ensure models are trained on reliable, consistent, and compliant datasets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="left-aligned-card-wrapper">
                                    <div className="left-aligned-card-container">
                                        <div className="left-card-icon">
                                            <img src="/assets/images/tools/continous.svg" alt="Continuous Training" />
                                        </div>
                                        <h4 className="left-card-title">Continuous Training</h4>
                                        <div className="left-card-divider"></div>
                                        <p className="left-card-description">
                                            Automated retraining pipelines keep models updated with fresh data, maintaining optimal performance and adapting to changing patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .mlops-advantages-row .left-aligned-card-wrapper {
                            height: auto;
                        }
                        
                        .mlops-advantages-row .left-aligned-card-container {
                            height: auto;
                            min-height: 280px;
                            max-height: 320px;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .mlops-advantages-row .left-card-description {
                            flex-grow: 1;
                            overflow: hidden;
                        }
                        
                        .mlops-advantages-row {
                            display: flex;
                            align-items: flex-start;
                        }
                        
                        .mlops-advantages-row [class*="col-"] {
                            display: flex;
                        }
                    `}</style>
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

                <section className="section mt-100">
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
                </section>

                <section className="section mt-100 mb-40 process-section">
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Transform Your ML Development into Production-Ready Systems</h2>
                                        <p className="font-md color-grey-500">MLOps is the key to scaling your machine learning initiatives. Build robust, automated, and reliable ML systems that deliver consistent business value.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Contact Us</Link></div>
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