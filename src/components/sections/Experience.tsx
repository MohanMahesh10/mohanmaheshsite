"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Journey</h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        My path in the tech industry, marked by impactful contributions and continuous learning.
                    </p>
                </motion.div>

                <div className="relative border-l border-black/10 ml-3 md:ml-6 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-black ring-4 ring-white" />

                            <div className="glass-card p-6 md:p-8 rounded-2xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                        <p className="text-gray-700 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 bg-black/5 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-600">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-black/50 shrink-0" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
