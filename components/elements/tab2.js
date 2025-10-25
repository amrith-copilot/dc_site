import React, { useState } from "react";


const Tab2 = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <ul className="list-buttons list-buttons-circle nav nav-tabs" role="tablist">
                <li onClick={() => handleOnClick(1)}>
                    <a className={activeIndex === 1 ? "active" : ""}>Data Quality Evals</a>
                </li>
                <li onClick={() => handleOnClick(2)}>
                    <a className={activeIndex === 2 ? "active" : ""}>Model Performance Evals</a>
                </li>
                <li onClick={() => handleOnClick(3)}>
                    <a className={activeIndex === 3 ? "active" : ""}>Robustness & Reliability Evals</a>
                </li>
                <li onClick={() => handleOnClick(4)}>
                    <a className={activeIndex === 4 ? "active" : ""}>Safety & Alignment Evals</a>
                </li>
                <li onClick={() => handleOnClick(5)}>
                    <a className={activeIndex === 5 ? "active" : ""}>Human Preference & UX Evals</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Data Quality Evals
                                    </h3>  
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Your model is only as good as the data it learns from.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Annotation accuracy checks</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Bias and coverage audits</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Outlier and noise detection</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Model Performance Evals
                                    </h3>  
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Beyond accuracy, we measure real-world effectiveness.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Benchmark testing with open datasets</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Accuracy, F1, BLEU, ROUGE, and custom metrics</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Generalization checks across domains</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Robustness & Rel Evals
                                    </h3>  
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">We stress-test your models to uncover hidden weaknesses.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Adversarial prompt and image testing</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Stress-testing with edge cases</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Consistency checks across queries</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Safety & Alignment Evals
                                    </h3>  
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">We ensure your AI meets ethical and compliance standards.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Toxicity and bias detection</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Hallucination audits for LLMs</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Sensitive data and compliance testing</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Human Preference & UX Evals
                                    </h3>  
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Measure not just performance, but user trust and satisfaction.</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">A/B testing of model outputs</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Helpfulness and clarity scoring</p>
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <p className="font-xl color-grey-400">Custom user acceptance testing</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tab2;