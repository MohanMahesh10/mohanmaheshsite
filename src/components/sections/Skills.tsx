"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const SkillCategory = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="mb-12 last:mb-0"
    >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: delay + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-black/5 border border-black/5 text-sm font-medium text-gray-700 hover:bg-black/10 hover:border-black/20 transition-colors cursor-default"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        A comprehensive toolkit for building scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <SkillCategory title="Languages" skills={SKILLS.languages} delay={0.1} />
                        <SkillCategory title="Frameworks & Libraries" skills={SKILLS.frameworks} delay={0.2} />
                        <SkillCategory title="Databases" skills={SKILLS.databases} delay={0.3} />
                    </div>
                    <div>
                        <SkillCategory title="Cloud & DevOps" skills={SKILLS.cloud} delay={0.4} />
                        <SkillCategory title="Concepts & Architecture" skills={SKILLS.concepts} delay={0.5} />
                    </div>
                </div>
            </div>
        </section>
    );
}
