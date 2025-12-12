import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout/Layout';

const pageAbout = () => {
    return (
        <>
            <Head>
                <title>iori - About Us</title>
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
                                <h2 className="color-brand-1 mb-50">Our toolstack </h2>
                                <h6 className="color-brand-1 mb-20">We use a mix of open-source platforms, trusted third-party tools, and our own internal systems to support data annotation workflows and Human-in-the-Loop operations.</h6>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/basicimage.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/cvat.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/argilla.png" alt="iori" style={{ position: 'relative', top: '50px' }} /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/roboflow.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/dataloop.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/diffgram.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/encord.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/labelbox.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/labelstudio.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/segments.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/Superanno.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/supervisely.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/geti.png" alt="iori" style={{maxWidth: '100%', height: 'auto'}} /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/Voxel51.png" alt="iori" style={{maxWidth: '100%', height: 'auto'}} /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/images/tools/Opencv.png" alt="iori" style={{maxWidth: '50%', height: '20', transform: 'translateY(-10px)'}} /></div>
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
                                    <h2 className="color-brand-1 mt-15 mb-20">Unlock Higher-Quality Training Data</h2>
                                        <p className="font-md color-grey-500">From one-off projects to fully managed pipelines, our specialists help you scale with precision and speed. Contact us to explore how we can support your AI initiatives</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
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