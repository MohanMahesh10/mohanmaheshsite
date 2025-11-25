"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 origin-left z-50"
            style={{ scaleX: progress / 100 }}
            initial={{ scaleX: 0 }}
        />
    );
}
