"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200/50 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-100/50 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-gray-50/50 rounded-full blur-[100px] animate-pulse-slow delay-500" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <Image
                            src="/mohanmaheshsite/profile.jpg"
                            alt="Mohan Mahesh"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-black/5 border border-black/5 text-sm font-medium text-gray-600 mb-6 backdrop-blur-md">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600">
                        AI & Software
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400">
                        Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Building production-ready APIs, scalable AI systems, and data-driven
                    web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black text-white px-8 font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]"
                    >
                        <span className="mr-2">View Projects</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="group inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-black/5 px-8 font-medium text-black transition-all duration-300 hover:bg-black/10 hover:scale-105 hover:border-black/20"
                    >
                        <Mail className="mr-2 w-4 h-4" />
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-black/20 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 rounded-full bg-black"
                    />
                </div>
            </motion.div>
        </section>
    );
}
