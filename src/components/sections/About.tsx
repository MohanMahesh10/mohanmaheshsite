"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Aspiring AI and Software Engineer skilled in machine learning, deep
                        learning, and full-stack development. Experienced in building
                        production-ready APIs, containerized deployments, and data-driven
                        features. Strong foundation in data structures, algorithms, and OOP.
                        Seeking SDE/AI roles to ship impactful features efficiently.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Brain className="w-8 h-8 text-primary" />,
                            title: "AI & ML",
                            desc: "Building intelligent agents and predictive models using TensorFlow and Vertex AI.",
                        },
                        {
                            icon: <Code2 className="w-8 h-8 text-black" />,
                            title: "Full Stack",
                            desc: "Crafting responsive, high-performance web apps with Next.js, React, and Tailwind.",
                        },
                        {
                            icon: <Rocket className="w-8 h-8 text-black" />,
                            title: "Cloud Native",
                            desc: "Deploying scalable microservices on Google Cloud and Azure using Docker.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
