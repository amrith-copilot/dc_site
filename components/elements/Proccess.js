import React from 'react';

const Proccess = () => {
    const stages = [
        {
            id: 1,
            title: "Define goals",
            description: "Accuracy? Robustness? Safety?",
            icon: "assets/imgs/page/homepage1/cross.png"
        },
        {
            id: 2,
            title: "Design evals",
            description: "Benchmarks + custom test sets.",
            icon: "assets/imgs/page/homepage1/cross2.png"
        },
        {
            id: 3,
            title: "Run evaluations",
            description: "Automated checks + human review.",
            icon: "assets/imgs/page/homepage1/cross3.png"
        },
        {
            id: 4,
            title: "Deliver insights",
            description: "Reports with actionable recommendations.",
            icon: "assets/imgs/page/homepage1/cross4.png"
        }
    ];

    return (
        <section className="section mt-100 mb-40 process-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-start">
                        <h2 className="color-brand-1 mb-20">Process Structure</h2>
                        <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                    </div>
                </div>

                <div className="process-list mt-60">
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            {stages.map((stage, idx) => (
                                <div
                                    key={stage.id}
                                    className="process-row fade-up d-flex align-items-center justify-content-start text-start mb-4"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className="process-number me-3">{stage.id}</div>
                                    <div>
                                        <h4 className="color-brand-1 mb-5">{stage.title}</h4>
                                        <p className="font-md color-grey-500">{stage.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proccess;