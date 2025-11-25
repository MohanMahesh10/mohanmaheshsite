"use client";

import { useEffect, useRef } from "react";

export default function AnimatedGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let animationFrameId: number;
        let offset = 0;

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gridSize = 40;
            const lineWidth = 1;

            ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
            ctx.lineWidth = lineWidth;

            // Vertical lines
            for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            offset += 0.2;
            animationFrameId = requestAnimationFrame(drawGrid);
        };

        drawGrid();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{ zIndex: 0 }}
        />
    );
}
