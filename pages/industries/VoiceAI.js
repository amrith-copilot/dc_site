import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import('../../components/slider/VideoSlider'), { ssr: false });
const AnnotationSlider = dynamic(() => import('../../components/slider/AnnotationSlider'), { ssr: false });
const CardSlider = dynamic(() => import('../../components/slider/CardSlider'), { ssr: false });
import Link from 'next/link';

const VoiceAI = () => {
    const [isOpen, setOpen] = useState(false)

    const cardItems = [{"title": "Speaker Diarization", "description": "Identify and segment speakers in multi-party audio.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Speaker Diarization"}, {"title": "Intent & Utterance Tagging", "description": "Label user intents and utterance classifications.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Intent & Utterance Tagging"}, {"title": "Emotion & Tone Detection", "description": "Detect emotional states and tonal variations.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Emotion & Tone Detection"}, {"title": "Phoneme-Level Annotation", "description": "Label individual phonemes and sound units.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Phoneme-Level Annotation"}, {"title": "Noise Condition Classification", "description": "Classify background noise and audio quality.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "Noise Condition Classification"}, {"title": "Call Flow Mapping", "description": "Map conversation flows and dialogue structures.", "img": "/assets/imgs/page/homepage6/human3.png", "alt": "Call Flow Mapping"}, {"title": "Voiceprint Identification", "description": "Label unique voice characteristics for speaker ID.", "img": "/assets/imgs/page/homepage6/human1.png", "alt": "Voiceprint Identification"}, {"title": "ASR Error Pattern Tagging", "description": "Identify and classify speech recognition errors.", "img": "/assets/imgs/page/homepage6/human2.png", "alt": "ASR Error Pattern Tagging"}];

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
        <>
            <Head>
                <title>Voice AI Data Annotation Services | Speech & Audio Labeling | Dataclap</title>
                <meta name="description" content="Enhance speech recognition models with Dataclap’s voice AI annotation services including audio transcription, speech tagging, and NLP data labeling." />
                <meta name="keywords" content="voice AI annotation, audio data labeling, speech recognition annotation, audio transcription services, NLP data annotation, speech-to-text training data, voice dataset collection, intent labeling services, multilingual audio annotation, conversational AI datasets" />
            </Head>
            <Layout>
           
                {/* Hero Section */}
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-25 mb-100">
                        <div className="row align-items-start">
                                <div className="col-lg-12 mb-20">
                                    <h1 className="color-black-text mt-10 mb-20">Training Data for Voice AI, Speech Recognition and Conversational Systems</h1>
                                </div>

                                <div className="col-lg-12 mt-10 mb-20">
                                    <p className="font-lg color-black-text" style={{ textAlign: 'left' }}>
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
                            <CardSlider cards={cardItems} pageId="voiceai" />
                        </div>
                    </div>
                </section>
                
                 <section className="section mt-10 pb-0 bg-core-value">
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
                <div style={{marginTop: '-40px'}}></div>
                <AnnotationSlider
                    items={annotationItems}
                    title="Advanced Voice AI Annotation Capabilities"
                    subtitle="Specialized labeling services for speech recognition and conversational AI"
                    navId="voiceai"
                />
                <div style={{marginTop: '-70px'}}></div>   
                {/* CTA Section */}
                   <section className="section mt-20 pt-30 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="box-info-video" style={{textAlign: 'center'}}>
                                        <h2 style={{textAlign: 'center'}}>Ready to Power Your Voice AI?</h2>
                                        <p className="font-md color-grey-500">
                                            Partner with us to get high-quality training data for speech recognition, conversational AI and voice assistants.</p>
                                        <div className="box-button text-center mt-40">
                                            <Link className="btn btn-brand-1 hover-up" href="/contact">Contact Us</Link>
                                        </div>
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

export default VoiceAI;
