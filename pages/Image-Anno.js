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
                                        Make the most of your data <br /> across every modality Image
                                    </h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-lg color-black-text">
                                     We provide high-quality data annotation across image, video, text, audio, LLM, LiDAR, and time-series data. Our workflows are built to support training, evaluation, and production deployment for modern AI systems.
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
                    <style jsx>{`
                        .image-showcase-content-dynamic {
                            padding: 18px 16px;
                        }
                        .image-showcase-content-dynamic h6 {
                            font-size: 16px;
                            font-weight: 700;
                            margin: 0 0 10px 0;
                            line-height: 1.4;
                        }
                        .image-showcase-content-dynamic > p:first-of-type {
                            margin: 0 0 10px 0;
                            font-size: 13px;
                        }
                        .image-showcase-content-dynamic > p:nth-of-type(2) {
                            margin: 8px 0 6px 0;
                            font-size: 13px;
                            font-weight: 600;
                        }
                        .annotation-methods {
                            margin: 0 0 0 1.1rem;
                            padding: 0;
                            list-style-type: disc;
                            color: #6b7280;
                            line-height: 1.5;
                            font-size: 13px;
                        }
                        .annotation-methods li {
                            margin-bottom: 4px;
                        }
                        @media (max-width: 991px) {
                            .image-showcase-content-dynamic {
                                padding: 16px 14px;
                            }
                            .image-showcase-content-dynamic h6 {
                                font-size: 15px;
                            }
                        }
                    `}</style>
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h2 className="color-brand-1 mb-0">Annotation Types</h2>
                                <p className="color-grey-500 font-lg mt-20"> </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Bounding Boxes" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Image Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Pixel-accurate and object-level annotations for computer vision models across structured and unstructured imagery.
                                        </p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p>
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Bounding Boxes</li>
                                            <li>Polygons</li>
                                            <li>Semantic Segmentation</li>
                                            <li>Keypoints And Landmarks</li>
                                            <li>Lines, Splines And Contours</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human2.png" 
                                            alt="Image Segmentation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Video Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Frame-level and temporal annotations for motion-aware and sequence-based models.
                                        </p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p>
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Object tracking across frames</li>
                                            <li>Action and activity recognition</li>
                                            <li>Event detection with timestamps</li>
                                            <li>Frame-by-frame segmentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human3.png" 
                                            alt="Semantic Segmentation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Text Annotation (NLP)</h6>
                                          <p className="font-sm color-grey-500">
                                            Structured labeling for training and evaluating NLP and language understanding models.
                                        </p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p>
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Named entity recognition</li>
                                            <li>Intent & slot labeling</li>
                                            <li>Relation extraction</li>
                                            <li>Document-level classification</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage6/human1.png" 
                                            alt="Depth & 3D" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">LLM Data Annotation & Evaluation</h6>
                                        <p className="font-sm color-grey-500">Human-in-the-loop data creation and evaluation for large language models and generative systems.                                        </p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p> 
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Prompt–response labeling</li>
                                            <li>Preference ranking</li>
                                            <li>Instruction tuning datasets</li>
                                            <li>Safety, bias, and policy evaluation</li>
                                        </ul>                  
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="row mt-45">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Cuboids" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Audio & Speech Annotation</h6>
                                        <p className="font-sm color-grey-500"> Speech and audio labeling for ASR, TTS, and audio intelligence systems.</p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p> 
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Transcription (verbatim, clean, phonetic)</li>
                                            <li>Speaker diarization</li>
                                            <li>Intent and emotion tagging</li>
                                            <li>Noise and acoustic event labeling</li>
                                        </ul>                  
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage12/human2.png" 
                                            alt="Key Points" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                       <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">iDAR & Point Cloud Annotation</h6>
                                        <p className="font-sm color-grey-500"> 3D annotation for spatial understanding in autonomous and robotics systems.</p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p> 
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>3D bounding boxes</li>
                                            <li>Point-wise segmentation</li>
                                            <li>Object classification</li>
                                            <li>Sensor fusion (camera + LiDAR)</li>
                                        </ul>                  
                                    </div>
                                </div>
                            </div> 
                            
                             <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage12/human3.png" 
                                            alt="Lines and splines" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                       <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Time-Series Annotation</h6>
                                        <p className="font-sm color-grey-500">Labeling of sequential and sensor-based data for forecasting, anomaly detection, and monitoring models.</p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p> 
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Event tagging</li>
                                            <li>Anomaly labeling</li>
                                            <li>Change-point detection</li>
                                            <li>Window-based classification</li>
                                        </ul>                  
                                    </div>
                                </div>
                            </div>
                             
                             <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="assets/imgs/page/homepage12/human1.png" 
                                            alt="Thermal & Multispectral" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                       <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Multimodal Annotation (Often Overlooked)</h6>
                                        <p className="font-sm color-grey-500"> Cross-modal annotation where multiple data types must align. </p>
                                        <p className="font-sm color-grey-500"><strong>Annotation methods:</strong></p> 
                                        <ul className="font-sm color-grey-500 annotation-methods">
                                            <li>Image + text grounding</li>
                                            <li>Video + audio synchronization</li>
                                            <li>Sensor + visual data alignment</li>
                                            <li>Multimodal prompt-response datasets</li>
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

