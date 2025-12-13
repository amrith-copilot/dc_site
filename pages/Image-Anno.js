import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import ImageSlider from '../components/slider/ImageSlider';
import Offer3 from '../components/slider/Offer3';

const ImageAnno = () => {
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
                                        Make the most of your <br />Image Data
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                        We have worked on more than a million images and tens of thousands of hours of video data providing annotations for some of the most advanced applications of computer vision. DataClap's goal for consistent data handling will make your machine learning classifiers more accurate.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="box-video-banner-responsive">
                                <ImageSlider />
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .box-video-banner-responsive {
                            width: 100%;
                            margin: 40px 0 0 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        /* Desktop and tablet */
                        @media (min-width: 769px) {
                            .box-video-banner-responsive {
                                margin: 50px 0 0 0;
                            }
                        }

                        /* Mobile devices */
                        @media (max-width: 768px) {
                            .section.banner-5 .container {
                                padding-left: 15px;
                                padding-right: 15px;
                            }

                            .box-video-banner-responsive {
                                margin: 30px 0 0 0;
                                padding: 0;
                            }

                            /* Ensure text sections are also responsive */
                            .col-lg-6.mb-20 {
                                margin-bottom: 25px !important;
                            }

                            .mt-65 {
                                margin-top: 40px !important;
                            }

                            .mb-100 {
                                margin-bottom: 60px !important;
                            }
                        }

                        /* Small mobile devices */
                        @media (max-width: 480px) {
                            .section.banner-5 .container {
                                padding-left: 10px;
                                padding-right: 10px;
                            }

                            .box-video-banner-responsive {
                                margin: 25px 0 0 0;
                            }

                            .mt-65 {
                                margin-top: 30px !important;
                            }

                            .mb-100 {
                                margin-bottom: 40px !important;
                            }

                            .col-lg-6.mb-20 {
                                margin-bottom: 20px !important;
                            }

                            /* Adjust text for better mobile readability */
                            .color-brand-2.mt-10 {
                                font-size: 1.8rem;
                                line-height: 1.3;
                            }

                            .font-md {
                                font-size: 0.95rem;
                                line-height: 1.5;
                            }
                        }

                        /* Extra small devices */
                        @media (max-width: 360px) {
                            .section.banner-5 .container {
                                padding-left: 8px;
                                padding-right: 8px;
                            }

                            .box-video-banner-responsive {
                                margin: 20px 0 0 0;
                            }

                            .color-brand-2.mt-10 {
                                font-size: 1.6rem;
                            }

                            .font-md {
                                font-size: 0.9rem;
                            }
                        }
                    `}</style>
                </section>
                <section className="section mt-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Annotation Types</h2>
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
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Cross Platform" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Bounding Boxes</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Discover powerful features to boost your productivity. You are always welcome to visit our little den.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
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
                                        <h4 className="image-showcase-title-dynamic">Image Segmentation</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Streamline your team's workflow with advanced collaboration tools and seamless integration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Analytics Dashboard" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Semantic Segmentation</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Get comprehensive insights with detailed reporting and real-time performance metrics.
                                        </p>
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
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Project Management" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Cuboids</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Organize and track your projects with powerful management tools and intuitive workflows.
                                        </p>
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
                                        <h4 className="image-showcase-title-dynamic">Key Points</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Deliver exceptional customer experiences with comprehensive support and communication tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="image-showcase-card-dynamic">
                                    <div className="image-showcase-top-dynamic">
                                        <img 
                                            src="assets/imgs/page/homepage12/human3.png" 
                                            alt="Data Security" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="image-showcase-title-dynamic">Lines and splines</h4>
                                        <div className="image-showcase-divider-dynamic"></div>
                                        <p className="image-showcase-description-dynamic">
                                            Protect your valuable data with enterprise-grade security and compliance features.
                                        </p>
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
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer3 />
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
                                    <h3 className="color-brand-1 mb-15">Our Advantages</h3>
                                    <p className="font-md color-grey-400">Understand why our clients choose to work with us</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Optimized for Quality</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We have a two layer QC process that ensures the quality of the output. This is enabled by a short feedback loop process.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">End to End Solutions</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">From data collection and cleaning to data annotation, we offer ened to end solutions for your training data needs.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Cost Efficient</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our pricing is transparent and economical. We are more economical thatn contract workers and large annotation platforms.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Completely Managed</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our services are completely managed with dedicated account managers to ensure smooth operations.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable Workforce</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Start with a single person and grow with us. We scale up our team based on your demands.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Data Security</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Data security is of paramount importance. We are GDPR compliant and are ISO 27001 certified.</p>
                                        </div>
                                    </li>
                                </ul>
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Validate Your AI?</h2>
                                        <p className="font-md color-grey-500">Let our workforce evaluate your model with precision and care.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link></div>
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

export default ImageAnno;


















// import React, { useState, useEffect } from 'react';
// import Layout from "../components/layout/Layout";
// import Link from 'next/link';
// import ImageSlider from '../components/slider/ImageSlider';
// import Offer3 from '../components/slider/Offer3';

// const ImageAnno = () => {
//     const [isOpen, setOpen] = useState(false);
//     const [isClient, setIsClient] = useState(false);

//     // Ensure client-side rendering for dynamic components
//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     return (
//         <>
//             <Layout>
//                 <section className="section banner-5">
//                     <div className="container">
//                         <div className="mt-65 mb-100">
//                             <div className="row align-items-end">
//                                 <div className="col-lg-6 mb-20">
//                                     <span className="title-line color-black-text">Image Annotation</span>
//                                     <h2 className="color-black-text mt-10">
//                                         Make the most of your <br />Image Data
//                                     </h2>
//                                 </div>
//                                 <div className="col-lg-6 mb-20">
//                                     <p className="font-lg color-black-text">
//                                         We have worked on more than a million images and tens of thousands of hours of video data providing annotations for some of the most advanced applications of computer vision. DataClap's goal for consistent data handling will make your machine learning classifiers more accurate.
//                                     </p>
//                                 </div>
//                             </div>
                            
//                             <div className="box-video-banner-responsive">
//                                 <ImageSlider />
//                             </div>
//                         </div>
//                     </div>

//                     <style jsx>{`
//                         .box-video-banner-responsive {
//                             width: 100%;
//                             margin: 40px 0 0 0;
//                             padding: 0;
//                             display: flex;
//                             justify-content: center;
//                             align-items: center;
//                         }

//                         /* Desktop and tablet */
//                         @media (min-width: 769px) {
//                             .box-video-banner-responsive {
//                                 margin: 50px 0 0 0;
//                             }
//                         }

//                         /* Mobile devices */
//                         @media (max-width: 768px) {
//                             .section.banner-5 .container {
//                                 padding-left: 15px;
//                                 padding-right: 15px;
//                             }

//                             .box-video-banner-responsive {
//                                 margin: 30px 0 0 0;
//                                 padding: 0;
//                             }

//                             /* Ensure text sections are also responsive */
//                             .col-lg-6.mb-20 {
//                                 margin-bottom: 25px !important;
//                             }

//                             .mt-65 {
//                                 margin-top: 40px !important;
//                             }

//                             .mb-100 {
//                                 margin-bottom: 60px !important;
//                             }
//                         }

//                         /* Small mobile devices */
//                         @media (max-width: 480px) {
//                             .section.banner-5 .container {
//                                 padding-left: 10px;
//                                 padding-right: 10px;
//                             }

//                             .box-video-banner-responsive {
//                                 margin: 25px 0 0 0;
//                             }

//                             .mt-65 {
//                                 margin-top: 30px !important;
//                             }

//                             .mb-100 {
//                                 margin-bottom: 40px !important;
//                             }

//                             .col-lg-6.mb-20 {
//                                 margin-bottom: 20px !important;
//                             }

//                             /* Adjust text for better mobile readability */
//                             .color-brand-2.mt-10 {
//                                 font-size: 1.8rem;
//                                 line-height: 1.3;
//                             }

//                             .font-md {
//                                 font-size: 0.95rem;
//                                 line-height: 1.5;
//                             }
//                         }

//                         /* Extra small devices */
//                         @media (max-width: 360px) {
//                             .section.banner-5 .container {
//                                 padding-left: 8px;
//                                 padding-right: 8px;
//                             }

//                             .box-video-banner-responsive {
//                                 margin: 20px 0 0 0;
//                             }

//                             .color-brand-2.mt-10 {
//                                 font-size: 1.6rem;
//                             }

//                             .font-md {
//                                 font-size: 0.9rem;
//                             }
//                         }
//                     `}</style>
//                 </section>
//                 <section className="section mt-110">
//                     <div className="container">
//                         <div className="row align-items-end">
//                             <div className="col-lg-6 mb-20">
//                                 <h2 className="color-brand-1 mb-0">Annotation Types</h2>
//                                 <p className="color-grey-500 font-lg mt-20">
//                                     Here are some types of image annotations we provide.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* First Row of Cards */}
//                         <div className="row mt-45">
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage6/human1.png" 
//                                             alt="Cross Platform" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Bounding Boxes</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Discover powerful features to boost your productivity. You are always welcome to visit our little den.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage6/human2.png" 
//                                             alt="Team Collaboration" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Image Segmentation</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Streamline your team's workflow with advanced collaboration tools and seamless integration.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage6/human3.png" 
//                                             alt="Analytics Dashboard" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Semantic Segmentation</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Get comprehensive insights with detailed reporting and real-time performance metrics.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Row of Cards */}
//                         <div className="row mt-45">
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage12/human1.png" 
//                                             alt="Project Management" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Cuboids</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Organize and track your projects with powerful management tools and intuitive workflows.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage12/human2.png" 
//                                             alt="Customer Support" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Key Points</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Deliver exceptional customer experiences with comprehensive support and communication tools.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="col-lg-4">
//                                 <div className="image-showcase-card-dynamic">
//                                     <div className="image-showcase-top-dynamic">
//                                         <img 
//                                             src="assets/imgs/page/homepage12/human3.png" 
//                                             alt="Data Security" 
//                                             className="image-showcase-photo-dynamic"
//                                         />
//                                     </div>
//                                     <div className="image-showcase-content-dynamic">
//                                         <h4 className="image-showcase-title-dynamic">Lines and splines</h4>
//                                         <div className="image-showcase-divider-dynamic"></div>
//                                         <p className="image-showcase-description-dynamic">
//                                             Protect your valuable data with enterprise-grade security and compliance features.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section mt-100">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12 text-center">
//                                 <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
//                                 <p className="font-lg color-gray-500">
//                                     What makes us different from others? We give holistic solutions
//                                     <br className="d-none d-lg-block" />
//                                     with strategy, design &amp; technology.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="mt-50">
//                             <div className="box-swiper">
//                                 <div className="swiper-container swiper-group-4">
//                                     {/* Only render Offer3 on the client to prevent hydration mismatch */}
//                                     {isClient ? <Offer3 /> : (
//                                         <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <p>Loading industries...</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section mt-30 pb-50 bg-core-value">
//                     <div className="container">
//                         <div className="row box-list-core-value">
//                             <div className="col-lg-4 mb-70">
//                                 <div className="box-core-value">
//                                     <h3 className="color-brand-1 mb-15">Our Advantages</h3>
//                                     <p className="font-md color-grey-400">Understand why our clients choose to work with us</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4">
//                                 <ul className="list-core-value">
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Optimized for Quality</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">We have a two layer QC process that ensures the quality of the output. This is enabled by a short feedback loop process.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">End to End Solutions</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">From data collection and cleaning to data annotation, we offer ened to end solutions for your training data needs.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Cost Efficient</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">Our pricing is transparent and economical. We are more economical thatn contract workers and large annotation platforms.</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="col-lg-4">
//                                 <ul className="list-core-value">
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Completely Managed</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">Our services are completely managed with dedicated account managers to ensure smooth operations.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Scalable Workforce</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">Start with a single person and grow with us. We scale up our team based on our demands.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Data Security</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">Data security is of paramount importance. We are GDPR compliant and are ISO 27001 certified.</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section mt-50 pt-50 pb-40">
//                     <div className="container">
//                         <div className="box-cover-border">
//                             <div className="row align-items-center">
//                                 <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
//                                 <div className="col-lg-6">
//                                     <div className="box-info-video">
//                                         <h2 className="color-brand-1 mt-15 mb-20">Ready to Validate Your AI?</h2>
//                                         <p className="font-md color-grey-500">Let our workforce evaluate your model with precision and care.</p>
//                                         <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//         </>
//     );
// };

// export default ImageAnno;
