import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const AdvancedAnnotationSlider = () => {
    const items = [
        {
            title: "Soil Texture & Moisture Condition Tagging",
            description: "Qualify soil type, compaction, wetness and irrigation status."
        },
        {
            title: "Plant Density & Canopy Coverage Analysis",
            description: "Measure stand count and canopy spread for seeding and spacing optimization."
        },
        {
            title: "Harvest Readiness Assessment",
            description: "Determine ripeness levels and maturity thresholds for various crops."
        },
        {
            title: "Row Alignment & Spacing Validation",
            description: "Verify planting uniformity and detect row deviations."
        },
        {
            title: "Machinery Operation State Detection",
            description: "Identify implement engagement, working states and mechanical anomalies."
        },
        {
            title: "Environmental Condition Annotation",
            description: "Record sunlight, cloud cover, dust levels and field microclimates."
        },
        {
            title: "Water Stress & Drought Pattern Tagging",
            description: "Label dry patches and irrigation inefficiencies."
        },
        {
            title: "Edge-Case & Rare Event Identification",
            description: "Flag atypical crop behavior, equipment failures and environmental abnormalities."
        }
    ];

    return (
        <>
            <section className="section mt-100 pt-60 pb-60 bg-grey-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="color-brand-1 mb-20">Advanced Agricultural Annotation Capabilities</h2>
                            <p className="font-lg color-grey-500 mb-40">
                                Specialized labeling services for precision agriculture and crop management
                            </p>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".annotation-prev",
                            nextEl: ".annotation-next",
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            575: { slidesPerView: 1 },
                            767: { slidesPerView: 1 },
                            991: { slidesPerView: 2 },
                            1199: { slidesPerView: 3 },
                            1350: { slidesPerView: 4 },
                        }}
                        className="swiper-annotation"
                    >
                        {items.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="annotation-card">
                                    <div className="annotation-card-content">
                                        <h6 className="annotation-card-title">{item.title}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="annotation-nav">
                        <div className="annotation-prev">
                            <svg width="26" height="26" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </div>
                        <div className="annotation-next">
                            <svg width="26" height="26" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .annotation-card {
                    min-height: 200px;
                    padding: 30px;
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    transition: 0.3s ease;
                }
                .annotation-card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .annotation-card-title {
                    color: #0017e3;
                    font-weight: 600;
                    font-size: 16px;
                    margin: 0;
                    line-height: 1.4;
                }
                .annotation-card p {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.5;
                }
                .annotation-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 24px rgba(0,0,0,0.15);
                }
                .annotation-nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 30px;
                }
                .annotation-prev,
                .annotation-next {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                    cursor: pointer;
                    transition: 0.2s ease;
                }
                .annotation-prev:hover,
                .annotation-next:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
};

export default AdvancedAnnotationSlider;
