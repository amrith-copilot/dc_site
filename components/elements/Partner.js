import React from 'react';
import { Award, Users, Layers, FileBarChart, Shield } from 'lucide-react';

export default function PartnerSection() {
    const themeColor = "from-blue-500 to-indigo-500";

    const benefits = [
        { icon: Award, text: "Proven expertise in both language and vision models" },
        { icon: Users, text: "Human-in-the-loop quality assurance" },
        { icon: Layers, text: "Flexible engagement models, from pilots to enterprise rollouts" },
        { icon: FileBarChart, text: "Actionable insights with clear, easy-to-use reports" },
        { icon: Shield, text: "Commitment to safety, fairness, and compliance" }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-slate-900 mb-4">
                        Why Partner With Us?
                    </h2>
                    <div className={`w-24 h-1 bg-gradient-to-r ${themeColor} mx-auto mt-6`}></div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${themeColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                                
                                {/* Icon Container */}
                                <div className="relative mb-6">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${themeColor} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                                        {/* Icon color set to white (lucide-react uses currentColor) */}
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <p className="relative text-lg text-slate-700 leading-relaxed font-medium">
                                    {benefit.text}
                                </p>

                               
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
