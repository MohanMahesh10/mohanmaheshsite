"use client";

import { useState, useRef, MouseEvent } from "react";

export function useTilt(maxTilt = 15) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = ((y - centerY) / centerY) * maxTilt;
        const tiltY = ((centerX - x) / centerX) * maxTilt;

        setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return { ref, tilt, handleMouseMove, handleMouseLeave };
}
