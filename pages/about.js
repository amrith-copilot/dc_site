import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageAbout = () => {
    return (
        <>
            <Head>
                <title>iori - About Us</title>
            </Head>
            <Layout>
                <section className="section pt-90 banner-about">
                    <div className="container text-center">
                        <h6 className="color-grey-400 mb-15">Who we are</h6>
                        <h2 className="color-brand-1 mb-15">We are a data-driven AI partner that solves the toughest data challenges<br className="d-none d-lg-block" /></h2>
                        <p className="font-md color-grey-400 mb-30">High-quality training data powers true AI, <br className="d-none d-lg-block" /> and we make it accessible, reliable, and impactful.</p>
                        <div className="box-radius-border mt-50">
                            <div className="box-list-numbers">
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">10M+</h2>
                                    <p className="color-brand-1 font-lg">Annotations created</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">5M+</h2>
                                    <p className="color-brand-1 font-lg">Frames Annotated</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">60+</h2>
                                    <p className="color-brand-1 font-lg">Team Members</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">4.7/5</h2>
                                    <p className="color-brand-1 font-lg">Rating by Clients</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">80+</h2>
                                    <p className="color-brand-1 font-lg">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-90 pb-50 bg-core-value">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <div className="shape-left shape-1" />
                                    <h3 className="color-brand-1 mb-15">Core values</h3>
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
                            <div className="col-lg-6">
                                <h2 className="color-brand-1 mb-50">Our toolstack </h2>
                                <h6 className="color-brand-1 mb-20">We work with a number of opensource, 3rd party tools and our in house systems for annottions and Human in the Loop operations.</h6>
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
                                    <div className="card-image"><img src="assets/images/tools/argilla.png" alt="iori" /></div>
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
                        </div>
                    </div>
                </section>
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="box-image-newsletter"> <img className="img-main" src="assets/imgs/template/newsletter_img.png" alt="iori" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <button class="contact-button">Contact Us</button>
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