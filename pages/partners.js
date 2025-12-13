import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';

const Partners = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Layout>
            <>
                {/* Hero Section */}
                <section className="section banner-5 pt-100 pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h1 className="color-brand-1 mt-20 mb-30">
                                    Amplify Your AI Capabilities
                                </h1>
                                <p className="font-lg color-grey-500 mb-35">
                                    A partnership program built for AI agencies, AI labs, and AI/ML platforms that want to extend their capabilities with scalable data annotation and Human In The Loop. Partners can refer, resell, or integrate our delivery pipelines and earn revenue through referral fees, revenue share, or white-label models.
                                </p>
                                <div className="mt-45">
                                    <Link className="btn btn-brand-1 hover-up mr-20" href="/contact">
                                        Become a Partner
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center mt-50 mt-lg-0">
                                <img src="/assets/imgs/page/partner/handshake.jpg" alt="Partners" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is For */}
                <section className="section mt-90 mb-70">
                    <div className="container">
                        <div className="text-center mb-60">
                            <h2 className="color-brand-1 mb-20">Who This Is For</h2>
                            <p className="font-lg color-grey-500 max-width-600 mx-auto">
                                Our partner program is designed for organizations at the forefront of AI innovation
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="card-small card-small-2 h-100">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-15">AI Agencies</h6>
                                        <p className="font-xs color-grey-500">Building custom AI products for enterprise clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="card-small card-small-2 h-100">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-15">AI Labs</h6>
                                        <p className="font-xs color-grey-500">Requiring human feedback for RLHF/RLAIF or evaluation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="card-small card-small-2 h-100">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-15">AI/ML Platforms</h6>
                                        <p className="font-xs color-grey-500">Need annotation capacity without managing workforce operations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="card-small card-small-2 h-100">
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-15">Tech Companies</h6>
                                        <p className="font-xs color-grey-500">Scaling AI/ML initiatives across multiple products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Models */}
                <section className="section mt-70 pt-90 pb-90 bg-grey-60">
                    <div className="container">
                        <div className="text-center mb-70">
                            <h2 className="color-brand-1 mb-20">Partnership Models</h2>
                            <p className="font-lg color-grey-500 max-width-600 mx-auto">
                                Flexible engagement models tailored to your business needs
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">01</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Referral / Finder's Fee</h5>
                                                <p className="font-md color-grey-500 mb-15">
                                                    Simple introduction model where you connect us with a potential client. 
                                                    Earn a commission on closed deals with no ongoing involvement required.
                                                </p>
                                                <ul className="list-dots font-sm color-grey-500 mb-0">
                                                    <li className="mb-10">One-time referral fee or % of first year revenue</li>
                                                    <li className="mb-10">No post-introduction responsibilities</li>
                                                    <li>Fast payout upon deal closure</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">02</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Revenue Share</h5>
                                                <p className="font-md color-grey-500 mb-15">
                                                    Ongoing partnership where you maintain the client relationship while we handle delivery. 
                                                    Perfect for agencies wanting recurring revenue streams.
                                                </p>
                                                <ul className="list-dots font-sm color-grey-500 mb-0">
                                                    <li className="mb-10">10-25% recurring revenue share</li>
                                                    <li className="mb-10">You own client relationship</li>
                                                    <li>Quarterly or monthly payouts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">03</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Reseller / White-Label</h5>
                                                <p className="font-md color-grey-500 mb-15">
                                                    Sell our services under your brand with custom pricing and packaging. 
                                                    Full control over positioning and client experience.
                                                </p>
                                                <ul className="list-dots font-sm color-grey-500 mb-0">
                                                    <li className="mb-10">White-labeled reports and deliverables</li>
                                                    <li className="mb-10">Custom pricing and margins</li>
                                                    <li>Co-branded or fully rebranded options</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-40">
                                <div className="box-border-single hover-up-2 h-100">
                                    <div className="box-border-inner">
                                        <div className="d-flex align-items-start">
                                            <div className="box-border-number">
                                                <span className="number-fixed color-brand-2">04</span>
                                            </div>
                                            <div className="ml-20">
                                                <h5 className="color-brand-1 mb-20">Embedded Delivery</h5>
                                                <p className="font-md color-grey-500 mb-15">
                                                    Deep integration where our teams become an extension of your delivery capability. 
                                                    For platforms needing seamless annotation infrastructure.
                                                </p>
                                                <ul className="list-dots font-sm color-grey-500 mb-0">
                                                    <li className="mb-10">API-first integration with your platform</li>
                                                    <li className="mb-10">Joint SLAs and support escalation</li>
                                                    <li>Custom workflows and QA protocols</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="section mt-90 mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Core Annotation Services</h3>
                                <p className="font-md color-grey-500 mb-35">
                                    Comprehensive data labeling and annotation across all major modalities to power your AI models.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Image, video, LiDAR, 3D annotation</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Text and document extraction</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Audio transcription and diarization</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Multimodal dataset curation</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Human-in-the-Loop (HITL)</h3>
                                <p className="font-md color-grey-500 mb-35">
                                    Expert-level human feedback and validation to align, evaluate, and continuously improve AI systems.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">RLHF, RLAIF, preference ranking</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Real-time human validation for agentic systems</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Expert-level annotation (medical, legal, financial)</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Red-teaming, evaluation, bias analysis</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Cloud & Platform Engineering</h3>
                                <p className="font-md color-grey-500 mb-35">
                                    Build and manage reliable, cost-efficient cloud foundations for high-growth teams.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Scalable VPC/network design</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Multi-account governance, IAM, and policy automation</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Cost optimization and cloud efficiency audits</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Managed Kubernetes platform setup</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Core DevOps Services</h3>
                                <p className="font-md color-grey-500 mb-35">
                                    End-to-end infrastructure automation and operational support for scalable software delivery.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">CI/CD pipeline design and optimization</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Infrastructure-as-code (Terraform, CloudFormation)</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Cloud provisioning and hardening (AWS, GCP, Azure)</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Containerization (Docker, Kubernetes)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Core MLOps Services</h3>
                                <p className="font-md color-grey-500 mb-35">
                                    Full lifecycle support for training, deploying, and maintaining production-grade ML systems.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">ML pipeline design (Airflow, Kubeflow, Prefect)</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Model deployment automation (batch, realtime, edge)</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Feature store setup and data workflow automation</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Model performance tracking and drift detection</span>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mt-15">
                                            <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                            <span className="font-md color-grey-500 mb-0"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-40">
                                <h3 className="color-brand-1 mt-20 mb-25">Reliability & Security Engineering</h3>
                                <p className="font-md color-grey-500 mb-25">
                                    Increase uptime, resilience, and compliance for critical infrastructure and ML systems.
                                </p>
                                <div className="list-icons">
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">SRE framework (SLIs/SLOs/SLA definitions)</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Observability stack (Prometheus, Grafana, Datadog)</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Automated backup, disaster recovery, and failover</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-15">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">DevSecOps pipeline integration and security policy automation</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="color-brand-1" style={{marginRight: '15px', fontWeight: 'bold'}}>•</span>
                                        <span className="font-md color-grey-500 mb-0">Compliance hardening (SOC2, HIPAA, GDPR)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Benefits */}
                <section className="section mt-70 pt-60 pb-60 bg-brand-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-40">
                                <h2 className="mb-20" style={{ color: "#fff" }}>Partner Benefits</h2>
                                <p className="font-lg max-width-600 mx-auto" style={{ color: "#fff" }}>
                                    What you gain by partnering with us
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/expand.svg" alt="Expand" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Expand Your Offerings</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Add enterprise-grade annotation and HITL services <br />without hiring or managing annotation staff.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/prioritycapacity.svg" alt="Priority Capacity" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Priority Capacity</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Priority capacity allocation and SLA-backed delivery <br /> for your clients' projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/support.svg" alt="Support" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Dedicated Support</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Dedicated partner manager and technical onboarding <br /> to ensure smooth collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/comarketing.svg" alt="Co-Marketing" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Co-Marketing Support</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Co-marketing opportunities, case studies, and <br />sales enablement materials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/flexible.svg" alt="Flexible" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Flexible Commercial Terms</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Flexible commercial structures for recurring or <br /> project-based work arrangements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6 mb-25">
                                <div className="card-feature-2 h-100 d-flex align-items-start" style={{padding: '25px'}}>
                                    <img src="assets/imgs/page/partner/revgrowth.svg" alt="Revenue Growth" style={{width: '30px', height: '30px', marginRight: '15px', marginTop: '3px', flexShrink: 0}} />
                                    <div>
                                        <h5 className="mb-25" style={{ color: "#fff" }}>Revenue Growth</h5>
                                        <p className="font-sm mb-0" style={{ color: "#fff" }}>
                                            Unlock new revenue streams without capital investment <br /> in annotation infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-90 mb-90">
                    <div className="container">
                        <div className="text-center mb-60">
                            <h2 className="color-brand-1 mb-20">End-Client Benefits</h2>
                            <p className="font-lg color-grey-500 max-width-600 mx-auto">
                                How your clients benefit from our partnership
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-1 h-100">
                                    <div className="number-box">
                                        <span>01</span>
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Faster Delivery</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Combined human + automation workflows accelerate time-to-market for AI initiatives.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-2 h-100">
                                    <div className="number-box">
                                        <span>02</span>
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Higher Accuracy</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Multi-layer QA and expert validation ensure superior model accuracy and performance.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-3 h-100">
                                    <div className="number-box">
                                        <span>03</span>
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Scalable Capacity</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Elastic workforce capacity supports continuous training cycles and project peaks.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="box-step step-4 h-100">
                                    <div className="number-box">
                                        <span>04</span>
                                    </div>
                                    <h5 className="color-brand-1 mb-20 mt-25">Full Compliance</h5>
                                    <p className="font-md color-grey-500 mb-0">
                                        Complete audit trails, QC analytics, and compliance documentation for regulated industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-70 mb-70">
                    <div className="container">
                        <div className="box-cover-border-2 p-60">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-30 mb-lg-0 text-center">
                                    <img src="assets/imgs/page/homepage2/img-marketing.png" alt="Core Annotation" className="img-fluid" />
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="color-brand-1 mb-25">Ready to Partner With Us?</h2>
                                    <p className="font-lg color-grey-500 mb-25">
                                        Join our partner ecosystem and unlock new revenue opportunities while delivering world-class AI solutions to your clients. Let's discuss how we can collaborate to accelerate your growth.
                                    </p>
                                    <Link className="btn btn-brand-1 hover-up d-inline-block" href="/contact">
                                        Schedule a Call
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default Partners;