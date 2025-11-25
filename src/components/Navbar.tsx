"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-center">
                <div
                    className={`flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${scrolled
                        ? "bg-white/60 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] w-full md:w-auto md:min-w-[600px]"
                        : "bg-white/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] w-full"
                        }`}
                >
                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-black/10 group-hover:border-black/20 transition-colors">
                            <Image
                                src="/profile.jpg"
                                alt="Mohan Mahesh"
                                fill
                                className="object-cover"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                            />
                        </div>
                        <span className="text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            MOHAN MAHESH
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                        <div className="w-px h-6 bg-black/10" />
                        <div className="flex items-center gap-4">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors hover:scale-110 transform duration-200"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors hover:scale-110 transform duration-200"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-600 hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-black/10 my-2" />
                            <div className="flex gap-6">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
