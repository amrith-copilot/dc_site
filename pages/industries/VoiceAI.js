import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import VideoSlider from '../../components/slider/VideoSlider';
import AnnotationSlider from '../../components/slider/AnnotationSlider';
import Link from 'next/link';

const VoiceAI = () => {
    const [isOpen, setOpen] = useState(false)

    // Slider data for Voice AI annotation capabilities (point-wise descriptions)
    const annotationItems = [
        {
            title: "Accent/Dialect Tagging",
            description: [
                "Accent-ID labels",
                "Dialect-variant tokens",
                "Pronunciation-shift markers"
            ]
        },
        {
            title: "Prompt/Response Linking",
            description: [
                "Query–reply pair IDs",
                "Turn-level link markers",
                "Context-chain labels"
            ]
        },
        {
            title: "Topic Clustering",
            description: [
                "Topic-category tags",
                "Conversation-domain IDs",
                "Cluster-membership markers"
            ]
        },
        {
            title: "Context Window Labeling",
            description: [
                "Multi-turn dependency IDs",
                "Context-span markers",
                "Utterance-linkage labels"
            ]
        },
        {
            title: "Call Outcome Metadata",
            description: [
                "Resolution-status tags",
                "Escalation flags",
                "Outcome-category markers"
            ]
        },
        {
            title: "Multilingual Utterance Classification",
            description: [
                "Language-ID tokens",
                "Code-switch segments",
                "Multilingual phrase labels"
            ]
        },
        {
            title: "Acoustic Feature Tagging",
            description: [
                "Pitch contour labels",
                "Background-noise classes",
                "Energy-intensity markers"
            ]
        },
        {
            title: "Rare Speech Anomalies",
            description: [
                "Overlap-speech markers",
                "Stutter-segment labels",
                "Audio-distortion tags"
            ]
        }
    ];
    return (
        <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-100 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-6 mb-20">
                                
                                        
                               
                                <h3 className="color-black-text mt-10 mb-30">Training Data for Voice AI, Speech Recognition and Conversational Systems</h3>
                                </div>
                 
                                <div className="col-lg-6 mt-40 mb-20">
                                <p className="font-lg color-black-text">
                                     High-precision transcripts, speaker labels, acoustic features and intent tagging — built for global voice interfaces.

                                 </p>
                                </div>
                             
                        </div>
                            
                            {/* VideoSlider replaces the original video banner */}
                            <div className="box-video-banner">
                                <VideoSlider
                                caption={"Structured annotation of audio, call data, accents, dialects and noise conditions powering speech-to-text, assistants and call automation."}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Core Perception Tasks - Image Cards */}
                <section className="section mt-70 mb-50">
                    <div className="container">
                        <div className="text-center mb-50">
                            <h2 className="color-brand-1 mb-15">Core Voice AI Tasks</h2>
                            <p className="font-lg color-grey-500">
                                Specialized annotation capabilities for speech and conversational AI systems
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Speaker Diarization" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Speaker Diarization</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify and segment speakers in multi-party audio.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Intent & Utterance Tagging" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Intent & Utterance Tagging</h6>
                                        <p className="font-sm color-grey-500">
                                            Label user intents and utterance classifications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Emotion & Tone Detection" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Emotion & Tone Detection</h6>
                                        <p className="font-sm color-grey-500">
                                            Detect emotional states and tonal variations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Phoneme-Level Annotation" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Phoneme-Level Annotation</h6>
                                        <p className="font-sm color-grey-500">
                                            Label individual phonemes and sound units.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="Noise Condition Classification" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Noise Condition Classification</h6>
                                        <p className="font-sm color-grey-500">
                                            Classify background noise and audio quality.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human3.png" 
                                            alt="Call Flow Mapping" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Call Flow Mapping</h6>
                                        <p className="font-sm color-grey-500">
                                            Map conversation flows and dialogue structures.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human1.png" 
                                            alt="Voiceprint Identification" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">Voiceprint Identification</h6>
                                        <p className="font-sm color-grey-500">
                                            Label unique voice characteristics for speaker ID.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="image-showcase-card-dynamic" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className="image-showcase-top-dynamic" style={{width: '100%', height: '480px', overflow: 'hidden'}}>
                                        <img 
                                            src="/assets/imgs/page/homepage6/human2.png" 
                                            alt="ASR Error Pattern Tagging" 
                                            className="image-showcase-photo-dynamic"
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className="image-showcase-content-dynamic" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="color-brand-1 mb-15">ASR Error Pattern Tagging</h6>
                                        <p className="font-sm color-grey-500">
                                            Identify and classify speech recognition errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Voice AI Annotation Capabilities"
                    subtitle="Specialized labeling services for speech recognition and conversational AI"
                    navId="voiceai"
                />

                {/* CTA Section */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="image-container" style={{width: '100%', maxWidth: '100%'}}>
                                        <img className="d-block" src="/assets/imgs/page/homepage2/img-marketing.png" alt="Voice AI Solutions" style={{width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="box-info-video">
                                        <h2 className="color-brand-1 mt-15 mb-20">Ready to Power Your Voice AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for speech recognition, conversational AI and voice assistants.
                                        </p>
                                        <div className="box-button text-start mt-40">
                                            <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
    );
};

export default VoiceAI;
