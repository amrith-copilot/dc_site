import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';

const pageAbout = () => {
    return (
        <>
            <Head>
                <title>About DATACLAP DIGITAL | AI Data Annotation & Training Data Company</title>
                <meta name="description" content="DATACLAP DIGITAL is a leading AI training data and annotation company providing scalable, secure, and high-accuracy solutions for enterprise AI models." />
                <meta name="keywords" content="Dataclap, DATACLAP DIGITAL, AI data annotation company, AI training data company, machine learning data services, AI solutions provider" />
                <link rel="canonical" href="/about" />
                <meta property="og:title" content="About DATACLAP DIGITAL | AI Data Annotation & Training Data Company" />
                <meta property="og:description" content="DATACLAP DIGITAL provides precise, scalable data annotation and Human-in-the-Loop workflows to accelerate production-grade AI." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/about" />
                <meta property="og:image" content="/assets/imgs/page/about/hero.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About DATACLAP DIGITAL | AI Data Annotation & Training Data Company" />
                <meta name="twitter:description" content="DATACLAP DIGITAL provides precise, scalable data annotation and Human-in-the-Loop workflows to accelerate production-grade AI." />
            </Head>
            <Layout>
                <section className="section pt-90 banner-about" >
                    <div className="container text-center">
                        <h6 className="color-grey-400 mb-15">Who we are</h6>
                        <h2 className="color-brand-1 mb-15">We are a data-driven AI partner<br /> that solves the toughest data challenges<br className="d-none d-lg-block" /></h2>
                        <p className="font-md color-grey-400 mb-30">We support teams building computer vision, NLP, and multimodal systems with precise annotation, rigorous QA, and efficient Human-in-the-Loop workflows. Our specialists, tools, and processes are designed to eliminate bottlenecks, increase data quality, and help you ship reliable models faster. Whether you're scaling a new dataset or refining an existing pipeline, <br />we provide the expertise and infrastructure to keep your AI moving forward.</p>
                    </div>
                </section>
                <section className="section mt-90 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <h2 className="color-brand-1 mb-15">Core values</h2>
                                    <p className="font-md color-grey-400">With transparent processes and human-powered augmentation, we build the data foundation for world-class AI.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Customers First</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help organizations build world-class AI solutions. Every decision and every action is guided by how well it serves our customers and strengthens their ability to succeed.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Transparency Always</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We are honest, open, and direct. We build trust through clarity and fairness in everything we do, fostering long-term relationships with our customers, partners, and team members.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Ownership & Accountability</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We take full responsibility for our work and its outcomes. Each of us acts with ownership, ensuring we deliver with commitment and integrity while driving meaningful impact.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Commitment to Quality</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">True AI is built on high-quality data. We hold ourselves to the highest standards of accuracy, reliability, and excellence in every solution we create and every service we provide.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Empowering People</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We believe human augmentation is essential for AI. While others reduce jobs, we focus on creating them—training and employing people to unlock their potential and build stronger communities. Our goal is to provide employment opportunities to 1000+ people in the next five years.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">United for Impact</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We collaborate with organizations like MSME, institutions, and communities to create opportunities at scale. Together, we are stronger and capable of shaping a better future.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-8">
                               <h2 className="mb-50" style={{ color: '#000' }}>Our toolstack </h2>
                                <h6 className="mb-20" style={{ color: '#000' }}>We use a mix of open-source platforms, trusted third-party tools, and our own internal systems to support data annotation workflows and Human-in-the-Loop operations.</h6>
                              </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-12">
                                <Swiper
                                    modules={[Autoplay, Grid]}
                                    grid={{ rows: 2, fill: 'row' }}
                                    slidesPerView={6}
                                    spaceBetween={20}
                                    loop={true}
                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    breakpoints={{
                                        320: { slidesPerView: 2 },
                                        576: { slidesPerView: 3 },
                                        768: { slidesPerView: 4 },
                                        992: { slidesPerView: 6 },
                                    }}
                                    className="toolstack-swiper"
                                >
                                    {/* Row 1 */}
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/basicimage.png" alt="basic" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/cvat.png" alt="cvat" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/argilla.png" alt="argilla" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/roboflow.png" alt="roboflow" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/dataloop.png" alt="dataloop" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/diffgram.png" alt="diffgram" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/encord.png" alt="encord" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/labelbox.png" alt="labelbox" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/labelstudio.png" alt="labelstudio" style={{ maxWidth: '60%', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/segments.png" alt="segments" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Superanno.png" alt="superanno" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/supervisely.png" alt="supervisely" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/geti.png" alt="geti" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Voxel51.png" alt="voxel51" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Opencv.png" alt="opencv" style={{maxWidth: '30%', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Grafana.png" alt="grafana" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/helm.svg" alt="helm" style={{maxWidth: '30%', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Jenkins.svg" alt="jenkins" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/JetBrains_TeamCity.png" alt="teamcity" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/langflow.svg" alt="langflow" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/langfuse.svg" alt="langfuse" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Maven.png" alt="maven" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Microsoft-Azure.png" alt="azure" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/minikube.jpg" alt="minikube" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/mistral.png" alt="mistral" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/MScnd.png" alt="mscnd" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/n8n.png" alt="n8n" style={{maxWidth: 'calc(70% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/New_Relic.png" alt="newrelic" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/nocodb.svg" alt="nocodb" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/openai.svg" alt="openai" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/OpenShift.svg" alt="openshift" style={{maxWidth: '30%', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/OpenStack.png" alt="openstack" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/payload.svg" alt="payload" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/prometheus.png" alt="prometheus" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Puppet.png" alt="puppet" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/python.png" alt="python" style={{maxWidth: '30%', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Retool_logo.png" alt="retool" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/roboflow.png" alt="roboflow" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/sonarsource.png" alt="sonarsource" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Splunk.png" alt="splunk" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/strapi.png" alt="strapi" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/assure.png" alt="assure" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Automatisch.jpg" alt="automatisch" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/aws.jpg" alt="aws" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/awscp.png" alt="awscp" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/bb.svg" alt="bb" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Cloudflare.png" alt="cloudflare" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/containerd.png" alt="containerd" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Contrast.png" alt="contrast" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/crew-ai.png" alt="crew-ai" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/datadog.avif" alt="datadog" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/directus.png" alt="directus" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/Docker.jpg" alt="docker" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/flutterflow.webp" alt="flutterflow" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/gitlab.png" alt="gitlab" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/VMware.jpg" alt="vmware" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/vultr.png" alt="vultr" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/windmill.png" alt="windmill" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                    <SwiperSlide><div className="card-team mb-30"><div className="card-image"><img src="assets/images/tools/zapier.svg" alt="zapier" style={{maxWidth: 'calc(50% + 2px)', height: 'auto'}} /></div></div></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                   <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border" >
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="box-info-video">
                                        <h2 >Unlock Higher-Quality Training Data</h2>
                                        <p className="font-md color-grey-500" >
                                            From one-off projects to fully managed pipelines, our specialists help you scale with precision and speed. Contact us to explore how we can support your AI initiatives</p>
                                        <div className="box-button text-center mt-25"> <Link className="btn btn-brand-1 hover-up font-md" href="/contact">Get a demo</Link></div>
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

export default pageAbout;
