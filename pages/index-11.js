import React, { useState } from 'react';
import Accordion2 from "../components/elements/Accordion2";
import Layout from "../components/layout/Layout";
import Testimonial2 from "../components/slider/Testimonial2";
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import HeroSlider from '../components/slider/HeroSlider';
import VideoSlider from '../components/slider/VideoSlider';

const HomePage11 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                    <section className="section banner-5">
                        <div className="container">
                            <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                <span className="title-line color-brand-2">Great sales platform</span>
                                <h2 className="color-brand-2 mt-10">
                                    #1 Intelligence Software to Accelerate Your SaaS Sales
                                </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                <p className="font-md color-grey-50">
                                    We're lively, not corporate. We have the energy and boldness of a startup 
                                    and the expertise and pragmatism of a scale-up. All in one place.
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
                <section className="section bg-brand-1 box-why-trusted-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 mb-30">
                                <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                <h2 className="color-white mb-5">See why we are <br className="d-none d-lg-block" />trusted the <br className="d-none d-lg-block" />world over</h2>
                            </div>
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <p className="font-sm color-white mb-20">Et quaerat deserunt et numquam voluptatem et laborum consectetur non consequatur temporibus ea repellat nihil vel consectetur dolores et rerum voluptas. Nam voluptas reiciendis non laborum perspiciatis eum omnis cumque ab impedit earum ex quos porro sit dolorem cupiditate ut ducimus autem.</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">469k</h2>
                                        <p className="font-lg color-white">Social followers</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">25k+</h2>
                                        <p className="font-lg color-white">Happy Clients</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">756+</h2>
                                        <p className="font-lg color-white">Project Done</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">100+</h2>
                                        <p className="font-lg color-white">Global branch</p>
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
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Cross Platform</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. Qui sequi porro in tempore nemo et itaque eligendi qui iusto saepe et suscipit sint et pariatur dolor.</p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image-bottom mb-35"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Business trategy</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. </p>
                                            <div className="box-button-offer"><Link className="btn btn-default font-sm-bold pl-0 color-grey-900" href='#'>Contact Us
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage11/social.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Cross Platform</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. Qui sequi porro in tempore nemo et itaque eligendi qui iusto saepe et suscipit sint et pariatur dolor.</p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img3.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Cross Platform</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. Qui sequi porro in tempore nemo et itaque eligendi qui iusto saepe et suscipit sint et pariatur dolor.</p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image-bottom mb-35"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Business trategy</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. </p>
                                            <div className="box-button-offer"><Link className="btn btn-default font-sm-bold pl-0 color-grey-900" href='#'>Contact Us
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage11/social.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Cross Platform</h4>
                                            <p className="font-sm color-grey-500 mb-15">Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. Qui sequi porro in tempore nemo et itaque eligendi qui iusto saepe et suscipit sint et pariatur dolor.</p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img3.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section mt-30">
                    <div className="container">
                        <div className="mt-30">
                            <ul className="list-partners list-partners-6">
                                <li><img src="assets/imgs/page/homepage1/placed.png" alt="iori" /></li>
                                <li><img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" /></li>
                                <li><img src="assets/imgs/page/homepage1/factual.png" alt="iori" /></li>
                                <li><img src="assets/imgs/page/homepage1/placeiq.png" alt="iori" /></li>
                                <li><img src="assets/imgs/page/homepage1/airmeet.png" alt="iori" /></li>
                                <li><img src="assets/imgs/page/homepage1/spen.png" alt="iori" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section mt-80 pt-50 pb-90">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video bd-rd0">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 pr-mb-0"><img className="d-block" src="assets/imgs/page/homepage1/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Business</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                        <p className="font-md color-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button-video">
                                            <a className="btn btn-play font-sm-bold popup-youtube hover-up" onClick={() => setOpen(true)}>Play Video</a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-1 box-cover-video box-cover-video-convert bd-rd0">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Business</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                        <p className="font-md color-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button-video">
                                            <a className="btn btn-play font-sm-bold popup-youtube hover-up" onClick={() => setOpen(true)}>Play Video</a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-mb-0"><img className="d-block" src="assets/imgs/page/homepage4/img-video.png" alt="iori" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 bg-grey-60">
                    <div className="container">
                        <div className="pt-120 pb-120">
                            <h2 className="color-brand-1">What our loving users are <br className="d-none d-lg-block" />saying about us</h2>
                            <div className="mt-50">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-2">
                                        <Testimonial2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-80">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                            <p className="font-lg color-gray-500">Feeling inquisitive? Have a read through some of our FAQs or<br className="d-none d-lg-block" /> contact our supporters for help</p>
                        </div>
                        <div className="row mt-50 mb-50">
                            <div className="col-xl-12 col-lg-12 position-relative">
                                <Accordion2 />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-30">
                                <div className="card-guide bg-4">
                                    <div className="card-image"><img src="assets/imgs/page/homepage7/payment.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-1 mb-15">Secure payment</h5>
                                        <p className="font-md color-grey-500">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus</p>
                                        <div className="mt-10"><Link className="btn btn-default font-sm-bold pl-0" href="#">Learn more
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <div className="card-guide bg-5">
                                    <div className="card-image"><img src="assets/imgs/page/homepage7/money.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-1 mb-15">Save money</h5>
                                        <p className="font-md color-grey-500">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus</p>
                                        <div className="mt-10"><Link className="btn btn-default font-sm-bold pl-0" href="#">Learn more
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <div className="card-guide bg-7">
                                    <div className="card-image"><img src="assets/imgs/page/homepage7/support.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-1 mb-15">Quick support</h5>
                                        <p className="font-md color-grey-500">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus</p>
                                        <div className="mt-10"><Link className="btn btn-default font-sm-bold pl-0" href="#">Learn more
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
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
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><a className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section mt-50">
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
                </section> */}
            </Layout>
        </>
    );
};

export default HomePage11;
