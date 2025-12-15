"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, PenTool, Calendar } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { WEB3FORMS_CONFIG } from "@/lib/config";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Store form reference before async operation
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Add your Web3Forms access key here
        // Get it from: https://web3forms.com
        formData.append("access_key", WEB3FORMS_CONFIG.accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                form.reset(); // Use stored reference instead of e.currentTarget
            } else {
                console.error("Form submission error:", data);
                alert("Failed to send message. Please try again or email me directly.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Email</p>
                                <a
                                    href={`mailto:${SOCIAL_LINKS.email}`}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    {SOCIAL_LINKS.email}
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Availability</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-lg font-medium text-green-500">{SOCIAL_LINKS.availability}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    📍 {SOCIAL_LINKS.location} • 🕒 {SOCIAL_LINKS.timezone}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Socials</p>
                                <div className="flex gap-4 mt-2">
                                    <a
                                        href={SOCIAL_LINKS.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-white transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={SOCIAL_LINKS.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-white transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href={SOCIAL_LINKS.medium}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-green-400 transition-colors font-medium flex items-center gap-1"
                                    >
                                        <PenTool className="w-4 h-4" />
                                        Medium Blog
                                    </a>
                                    <a
                                        href={SOCIAL_LINKS.topmate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-orange-400 transition-colors font-medium flex items-center gap-1"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Book a Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <CheckCircle className="w-16 h-16 text-black mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">
                                    Thanks for reaching out. I'll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
