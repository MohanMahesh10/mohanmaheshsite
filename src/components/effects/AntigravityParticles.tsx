"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
    color: string;
}

export default function AntigravityParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const colors = ["#4285F4", "#34A853", "#FBBC04", "#EA4335", "#666", "#999"];
        const gridSpacing = 60;

        const initParticles = () => {
            particlesRef.current = [];
            const cols = Math.ceil(canvas.width / gridSpacing);
            const rows = Math.ceil(canvas.height / gridSpacing);
            const particleCount = 100;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    if (particlesRef.current.length >= particleCount) break;
                    const x = i * gridSpacing + Math.random() * 20;
                    const y = j * gridSpacing + Math.random() * 20;
                    particlesRef.current.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        size: Math.random() * 2.5 + 1.5,
                        opacity: Math.random() * 0.4 + 0.3,
                        color: colors[Math.floor(Math.random() * colors.length)],
                    });
                }
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Track mouse position
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                // Apply repulsion force when mouse is near
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    const repelX = Math.cos(angle) * force * 50;
                    const repelY = Math.sin(angle) * force * 50;

                    particle.x = particle.baseX - repelX;
                    particle.y = particle.baseY - repelY;
                } else {
                    // Return to base position with spring effect
                    particle.x += (particle.baseX - particle.x) * 0.1;
                    particle.y += (particle.baseY - particle.y) * 0.1;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
}
