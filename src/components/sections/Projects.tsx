"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, FileText, BookOpen } from "lucide-react";
import { PROJECTS, IEEE_PUBLICATIONS, CERTIFICATIONS } from "@/lib/data";
import { useTilt } from "@/hooks/useTilt";
import TextReveal from "@/components/effects/TextReveal";

function ProjectCard({ project, index }: { project: any; index: number }) {
    const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(8);

    return (
        <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.1s ease-out",
            }}
            className="group relative glass-card glow-effect rounded-2xl overflow-hidden flex flex-col h-full"
        >
            <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-black/5 border border-black/10">
                        <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                            href={project.links.code}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-muted-foreground transition-colors"
                            title="View Code"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={project.links.demo}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-muted-foreground transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 mb-4">
                    {project.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-8 pb-8">
                <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start text-xs text-gray-400">
                            <span className="mr-2 mt-1 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <TextReveal text="Featured Work" className="text-3xl md:text-4xl font-bold mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A selection of projects demonstrating my expertise in AI, Cloud, and Full-Stack development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* IEEE Publications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="w-8 h-8 text-black" />
                        <h3 className="text-2xl md:text-3xl font-bold">IEEE Publications</h3>
                    </div>
                    
                    <div className="grid gap-6">
                        {IEEE_PUBLICATIONS.map((publication, index) => (
                            <motion.a
                                key={index}
                                href={publication.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group glass-card glow-effect p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="p-2 rounded-lg bg-black/5 border border-black/10 flex-shrink-0">
                                    <FileText className="w-5 h-5 text-black" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-black group-hover:text-black/80 transition-colors mb-2 leading-relaxed">
                                        {publication.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>IEEE Xplore</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="w-8 h-8 text-black" />
                        <h3 className="text-2xl md:text-3xl font-bold">Certifications</h3>
                    </div>

                    <div className="grid gap-6">
                        {CERTIFICATIONS.map((certification, index) => (
                            <motion.a
                                key={index}
                                href={certification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group glass-card glow-effect p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="p-2 rounded-lg bg-black/5 border border-black/10 flex-shrink-0">
                                    <FileText className="w-5 h-5 text-black" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-black group-hover:text-black/80 transition-colors mb-2 leading-relaxed">
                                        {certification.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>View Credential</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
