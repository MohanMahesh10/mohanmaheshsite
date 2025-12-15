"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Zap, Globe, Rocket, Shield } from "lucide-react";

const cards = [
    { icon: Code2, text: "Full Stack", color: "bg-blue-500/10 border-blue-500/20", delay: 0 },
    { icon: Brain, text: "AI/ML", color: "bg-purple-500/10 border-purple-500/20", delay: 0.2 },
    { icon: Zap, text: "Performance", color: "bg-yellow-500/10 border-yellow-500/20", delay: 0.4 },
    { icon: Globe, text: "Scalable", color: "bg-green-500/10 border-green-500/20", delay: 0.6 },
    { icon: Rocket, text: "Innovation", color: "bg-red-500/10 border-red-500/20", delay: 0.8 },
    { icon: Shield, text: "Security", color: "bg-indigo-500/10 border-indigo-500/20", delay: 1 },
];

const FloatingCard = ({ icon: Icon, text, color, delay, index }: { 
    icon: any; 
    text: string; 
    color: string; 
    delay: number; 
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                x: [0, Math.sin(index) * 10, 0],
                rotate: [0, Math.cos(index) * 2, 0]
            }}
            transition={{
                duration: 0.6,
                delay,
                x: {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                rotate: {
                    duration: 6 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className={`
                absolute p-4 rounded-xl border backdrop-blur-md
                ${color}
                shadow-lg hover:shadow-xl
                transition-all duration-300 hover:scale-110
                cursor-pointer group
            `}
            style={{
                left: `${10 + (index % 3) * 30}%`,
                top: `${20 + Math.floor(index / 3) * 40}%`,
            }}
            whileHover={{ 
                scale: 1.15, 
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
            <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">{text}</span>
            </div>
        </motion.div>
    );
};

export default function FloatingCards() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                {cards.map((card, index) => (
                    <div key={card.text} className="pointer-events-auto">
                        <FloatingCard {...card} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}