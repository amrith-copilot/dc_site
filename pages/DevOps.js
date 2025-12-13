import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import VideoSlider from '../components/slider/VideoSlider';
import Offer5 from '../components/slider/Offer5';

const DevOps = () => {
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
                                        Transform Your Software Delivery
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        Experience the power of automated workflows, seamless collaboration, and continuous innovation with enterprise-grade DevOps solutions. Transform your software delivery from months to minutes.
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
                                                <span className="title-line line-48">DevOps Solutions</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    DevOps without the hassle
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Let our DevOps and SRE experts handle your infrastructure, operations, and CI/CD pipeline. We provide a custom-built Kubernetes platform, fully managed services, 24/7 support, and guaranteed SLAs.<br /><br />This means you get a reliable, high-performing development environment with constant support.
                                                </p>
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
                                <h2 className="color-brand-1 mb-0">DevOps Services</h2>
                                <p className="color-grey-500 font-lg mt-20">
                                    Comprehensive DevOps solutions to accelerate your software delivery.
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
                                            alt="DevOps Assessment" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">DevOps Assessment and Strategy</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15 pb-15">
                                            <li>Evaluate current development and operations processes</li>
                                            <li>Identify bottlenecks and areas for improvement</li>
                                            <li>Develop a customized DevOps roadmap aligned with business goals</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="CI/CD Pipeline" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Continuous Integration and Continuous Deployment (CI/CD)</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15 pb-15">
                                            <li>Design and implement automated CI/CD pipelines</li>
                                            <li>Set up version control and code review processes</li>
                                            <li>Integrate automated testing and quality assurance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Infrastructure as Code" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Infrastructure as Code (IaC)</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15 pb-15">
                                            <li>Develop and maintain infrastructure templates</li>
                                            <li>Implement version control for infrastructure</li>
                                            <li>Automate provisioning and configuration of cloud resources</li>
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
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Monitoring and Observability" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Monitoring and Observability</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15 pb-15">
                                            <li>Implement comprehensive monitoring solutions</li>
                                            <li>Set up log aggregation and analysis</li>
                                            <li>Create custom dashboards for real-time insights</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Cloud Migration" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Cloud Migration and Optimization</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <ul className="custom-bullets font-md color-grey-500 mb-15 pl-15 pb-15">
                                            <li>Assess and plan cloud migration strategies</li>
                                            <li>Execute seamless migrations to cloud platforms</li>
                                            <li>Optimize cloud infrastructure for cost and performance</li>
                                        </ul>
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
                                    <h3 className="color-brand-1 mb-15">Advantages of adopting DevOps</h3>
                                    <p className="font-md color-grey-400">Transform your software delivery with proven DevOps practices that accelerate innovation and improve quality.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Faster Deployment</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Automated deployment pipelines significantly reduce release cycles, allowing teams to push updates to production with minimal manual intervention.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Enhanced Collaboration</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Breaking down silos between development and operations teams fosters better communication, shared responsibility, and improved problem-solving across organizations.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Continuous Integration</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Regular code integration and automated testing catch bugs early, reducing debugging time and ensuring higher quality software releases.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Infrastructure Automation</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Standardized infrastructure configuration through code eliminates manual setup errors and enables consistent environments across development, testing, and production.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Rapid Recovery</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Automated monitoring and incident response systems help teams quickly identify, isolate, and resolve issues before they impact users.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Cost Optimization</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Efficient resource utilization, automated scaling, and streamlined processes reduce operational costs while maintaining high service quality standards.</p>
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
                                <h2 className="color-brand-1 mb-20">Industries that we serve</h2>
                                <p className="font-lg color-gray-500">
                                    Comprehensive DevOps solutions across diverse industries, delivering seamless software delivery
                                    <br className="d-none d-lg-block" />
                                    with automation, collaboration &amp; innovation.
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
                                <p className="font-lg color-gray-500">A systematic approach to implementing DevOps in your organization</p>
                            </div>
                        </div>

                        <div className="process-list mt-60">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="process-row fade-up">
                                        <div className="process-number">1</div>
                                        <div>
                                            <h4 className="color-brand-1 mb-5">Assessment</h4>
                                            <p className="font-md color-grey-500">Evaluate current development and operations processes</p> 
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
                                    <div className="image-container">
                                        <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Accelerate with Automation</h2>
                                        <p className="font-md color-grey-500">STransform your development pipeline while maximizing your technology investment.</p>
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

export default DevOps;