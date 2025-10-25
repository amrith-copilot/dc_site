// import React, { useState } from 'react';
// import Layout from "../components/layout/Layout";
// import Link from 'next/link';
// import ImageSlider from '../components/slider/ImageSlider';
// import Offer4 from '../components/slider/Offer4';
// import Knowledgebase2 from '../components/slider/KnowledgeBase2';
// import CWHITL from '../components/elements/CWHITL';

// const ContentMd = () => {
//     const [isOpen, setOpen] = useState(false)
//     return (
//         <>
//             <Layout>
//                 <section className="section banner-5">
//                     <div className="container">
//                         <div className="mt-65 mb-100">
//                             <div className="row align-items-end">
//                                 <div className="col-lg-6 mb-20">
//                                     <span className="title-line color-brand-2">CONTENT MODERATION</span>
//                                     <h2 className="color-brand-2 mt-10">
//                                         Safeguard Your Platform <br />with Scalable <br />Content Moderation
//                                     </h2>
//                                 </div>
//                                 <div className="col-lg-6 mb-20">
//                                     <p className="color-grey-50 font-md">
//                                         Deliver safer, trusted, and compliant user experiences with AI-powered and human-in-the-loop content moderation. From social media to marketplaces, gaming, and beyond—our solutions ensure your digital ecosystem stays secure, inclusive, and aligned with your brand values.
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
//                                 <h2 className="color-brand-1 mb-0">Types of Content Moderation We Offer</h2>
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
//                                         <p className="image-showcase-description-dynamic">
//                                            <h4 className="color-brand-1 mb-15">Text Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Profanity filtering</li>
//                                                 <li>Hate speech & harassment detection</li>
//                                                 <li>Misinformation & disinformation checks</li>
//                                                 <li>Spam & scam filtering</li>
//                                                 <li>Sentiment & toxicity analysis</li>
//                                             </ul>
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
//                                         <h4 className="color-brand-1 mb-15">Image Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Nudity & sexual content detection</li>
//                                                 <li>Graphic violence identification</li>
//                                                 <li>Child exploitation prevention</li>
//                                                 <li>Offensive symbols, gestures, and extremist imagery</li>
//                                             </ul>
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
//                                         <h4 className="color-brand-1 mb-15">Video Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Frame-by-frame analysis for explicit or violent content</li>
//                                                 <li>Contextual detection of unsafe scenes</li>
//                                                 <li>Logo, brand, and copyright violations</li>
//                                                 <li>Deepfake detection</li>
//                                             </ul>
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
//                                         <h4 className="color-brand-1 mb-15">Audio Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Transcription & profanity filtering</li>
//                                                 <li>Hate speech, extremism, and harassment detection</li>
//                                                 <li>Music or sound copyright violations</li>
//                                             </ul>
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
//                                         <h4 className="color-brand-1 mb-15">Profile & Metadata Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Username, bio, and profile picture <br />checks</li>
//                                                 <li>Hashtag and metadata analysis</li>
//                                                 <li>Fraudulent identity detection</li>
//                                             </ul>
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
//                                         <h4 className="color-brand-1 mb-15">Live Content Moderation</h4>
//                                             <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
//                                                 <li>Real-time monitoring for live streams and voice chats</li>
//                                                 <li>Instant flagging of violations</li>
//                                                 <li>Escalation workflows with human-in-the-loop review</li>
//                                             </ul>
//                                     </div>
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
//                                     <h3 className="color-brand-1 mb-15">Content Types We Moderate</h3>
//                                     <p className="font-md color-grey-400">Understand why our clients choose <br />to work with us</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4">
//                                 <ul className="list-core-value">
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Asynchronous</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">posts, comments, reviews, profiles, images.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Synchronous</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">live video, voice chat, real-time streams</p>
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
//                                         <h5 className="color-brand-1 mb-5">Metadata</h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">tags, product listings, ads.</p>
//                                         </div>
//                                     </li>
//                                     <li> <span className="ticked" />
//                                         <h5 className="color-brand-1 mb-5">Structured + unstructured data sources </h5>
//                                         <div className="box-border-dashed">
//                                             <p className="font-md color-grey-500 mb-20">(JSON, XML, APIs).</p>
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
//                                     <Offer4 />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section pt-80">
//                     <div className="container">
//                         <div className="text-center">
//                             <h2 className="color-brand-1 mb-20">Custom Workflows & Human-in-the-Loop (HITL)</h2>
//                             <p className="font-lg color-gray-500">
//                                 We understand no two platforms are alike.
//                                 That’s why we provide custom workflows:
//                             </p>
//                         </div>
//                         <div className="row mt-50 mb-50">
//                             <div className="col-xl-12 col-lg-12 position-relative">
//                                 <CWHITL />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section mt-40 pt-50 pb-15 bg-grey-80">
//                     <div className="container">
//                         <div className="box-swiper">
//                             <div className="text-center">
//                             <h2 className="color-brand-1 mb-20">Why Choose Us</h2>
//                             </div>
//                             <div className="swiper-container swiper-group-3">
//                                 <Knowledgebase2 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section mt-100 mb-100">
//                     <div className="container">
//                         <div className="box-radius-border box-radius-border-help">
//                             <div className="row align-items-center">
//                                 <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/help/answer.png" alt="iori" /></div>
//                                 <div className="col-xl-6 col-lg-6">
//                                     <div className="box-info-answer">
//                                         <h2 className="color-brand-1 mt-10 mb-15">Ready to Validate Your AI?</h2>
//                                         <p className="color-grey-500 font-xl">Let our workforce evaluate your model with precision and care.</p>
//                                         <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up font-md" href="#">Contact Us</Link></div>
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

// export default ContentMd;





































import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import ImageSlider from '../components/slider/ImageSlider';
import Offer4 from '../components/slider/Offer4';
import Knowledgebase2 from '../components/slider/KnowledgeBase2';
import CWHITL from '../components/elements/CWHITL';

const ContentMd = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-black-text">CONTENT MODERATION</span>
                                    <h2 className="color-black-text mt-10">
                                        Safeguard Your Platform <br />with Scalable <br />Content Moderation
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="color-black-text font-lg">
                                        Deliver safer, trusted, and compliant user experiences with AI-powered and human-in-the-loop content moderation. From social media to marketplaces, gaming, and beyond—our solutions ensure your digital ecosystem stays secure, inclusive, and aligned with your brand values.
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
                                <h2 className="color-brand-1 mb-0">Types of Content Moderation We Offer</h2>
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
                                        <h4 className="color-brand-1 mb-15">Text Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Profanity filtering</li>
                                            <li>Hate speech & harassment detection</li>
                                            <li>Misinformation & disinformation checks</li>
                                            <li>Spam & scam filtering</li>
                                            <li>Sentiment & toxicity analysis</li>
                                        </ul>
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
                                        <h4 className="color-brand-1 mb-15">Image Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Nudity & sexual content detection</li>
                                            <li>Graphic violence identification</li>
                                            <li>Child exploitation prevention</li>
                                            <li>Offensive symbols, gestures, and extremist imagery</li>
                                        </ul>
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
                                        <h4 className="color-brand-1 mb-15">Video Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Frame-by-frame analysis for explicit or violent content</li>
                                            <li>Contextual detection of unsafe scenes</li>
                                            <li>Logo, brand, and copyright violations</li>
                                            <li>Deepfake detection</li>
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
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Project Management" 
                                            className="image-showcase-photo-dynamic"
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic">
                                        <h4 className="color-brand-1 mb-15">Audio Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Transcription & profanity filtering</li>
                                            <li>Hate speech, extremism, and harassment detection</li>
                                            <li>Music or sound copyright violations</li>
                                        </ul>
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
                                        <h4 className="color-brand-1 mb-15">Profile & Metadata Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Username, bio, and profile picture <br />checks</li>
                                            <li>Hashtag and metadata analysis</li>
                                            <li>Fraudulent identity detection</li>
                                        </ul>
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
                                        <h4 className="color-brand-1 mb-15">Live Content Moderation</h4>
                                        <ul className="custom-bullets font-lg color-grey-500 mb-15 pl-15">
                                            <li>Real-time monitoring for live streams and voice chats</li>
                                            <li>Instant flagging of violations</li>
                                            <li>Escalation workflows with human-in-the-loop review</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-40 pt-50 pb-15 bg-grey-80">
                    <div className="container">
                        <div className="box-swiper">
                            <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Why Choose Us</h2>
                            </div>
                            <div className="swiper-container swiper-group-3">
                                <Knowledgebase2 />
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
                                    <Offer4 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Custom Workflows & <br />Human-in-the-Loop (HITL)</h2>
                                <p className="font-lg pt-10 color-gray-500">We understand no two platforms are alike. That’s why we provide <strong>custom workflows</strong></p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">AI + HITL Review</h4>
                                        <p className="font-md color-grey-500 mb-15">Automated filters handle scale; trained human moderators validate edge cases.</p>
                                        <div className="box-button-offer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Escalation Pathways</h4>
                                        <p className="font-md color-grey-500 mb-15">Critical cases are flagged for immediate review.</p>
                                        <div className="box-button-offer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Red Teaming & Stress Testing</h4>
                                        <p className="font-md color-grey-500 mb-15">Simulate adversarial attacks and content evasion tactics.</p>
                                        <div className="box-button-offer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Feedback Loops</h4>
                                        <p className="font-md color-grey-500 mb-15">Continuous improvement of AI models using annotated data from real cases.</p>
                                        <div className="box-button-offer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Multilingual Support</h4>
                                        <p className="font-md color-grey-500 mb-15">Moderation across 20+ languages and dialects.</p>
                                        <div className="box-button-offer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Feedback Loops</h4>
                                        <p className="font-md color-grey-500 mb-15">Continuous improvement of AI models using annotated data from real cases.</p>
                                        <div className="box-button-offer"></div>
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
                                    <h3 className="color-brand-1 mb-15">Why Choose Us</h3>
                                    <p className="font-md color-grey-400">Hear from our users who have saved thousands on their Startup and SaaS solution spend.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Scalable</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Handle millions of content items daily.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Accurate</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">AI trained on diverse datasets, reducing bias and false positives.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Compliant</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Stay aligned with global and regional regulations.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Flexible</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Custom workflows tailored to your platform’s risk profile.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Human-Centric</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Expert moderators ensure nuanced understanding and fairness.</p>
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
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Validate Your AI?</h2>
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

export default ContentMd;