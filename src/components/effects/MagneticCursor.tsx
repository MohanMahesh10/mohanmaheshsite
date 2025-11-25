"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) return;

        setIsVisible(true);

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const mouseEnter = () => {
            const target = event?.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setCursorVariant("hover");
            }
        };

        const mouseLeave = () => {
            setCursorVariant("default");
        };

        window.addEventListener("mousemove", mouseMove);
        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", mouseEnter);
            el.addEventListener("mouseleave", mouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", mouseEnter);
                el.removeEventListener("mouseleave", mouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            width: 16,
            height: 16,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        hover: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            width: 40,
            height: 40,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none rounded-full mix-blend-difference z-[9999]"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 pointer-events-none rounded-full bg-black z-[9999]"
                animate={{
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 30,
                }}
            />
        </>
    );
}
