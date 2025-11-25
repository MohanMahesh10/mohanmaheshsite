"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-28 h-28 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] mx-auto group animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <Image
                            src="/profile.jpg"
                            alt="Mohan Mahesh"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            priority
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-black/5 border border-black/5 text-xs md:text-sm font-medium text-gray-600 mb-4 md:mb-6 backdrop-blur-md">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 inline-block animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                        AI & Software
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 inline-block animate-gradient-shift" style={{ backgroundSize: "200% 200%", animationDelay: "1s" }}>
                        Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
                >
                    Building production-ready APIs, scalable AI systems, and data-driven
                    web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-4"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex h-11 md:h-12 items-center justify-center overflow-hidden rounded-full bg-black text-white px-6 md:px-8 font-medium text-sm md:text-base transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] w-full md:w-auto"
                    >
                        <span className="mr-2">View Projects</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="group inline-flex h-11 md:h-12 items-center justify-center rounded-full border border-black/10 bg-black/5 px-6 md:px-8 font-medium text-sm md:text-base text-black transition-all duration-300 hover:bg-black/10 hover:scale-105 hover:border-black/20 w-full md:w-auto"
                    >
                        <Mail className="mr-2 w-4 h-4" />
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
