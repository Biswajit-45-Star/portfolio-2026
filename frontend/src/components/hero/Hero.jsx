import HeroCanvas from "./HeroCanvas";
import HeroText from "./HeroText";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        let mouseX = -1000;
        let mouseY = -1000;

        // Resize canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Mouse interaction - repulsion
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    this.x += (dx / distance) * force * 0.5;
                    this.y += (dy / distance) * force * 0.5;
                }
            }

            draw() {
                const pulse = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
                const currentOpacity = this.opacity * pulse;
                
                // Glow effect
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 4
                );
                gradient.addColorStop(0, `rgba(139, 92, 246, ${currentOpacity})`);
                gradient.addColorStop(0.5, `rgba(139, 92, 246, ${currentOpacity * 0.3})`);
                gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
                ctx.fill();

                // Core dot
                ctx.fillStyle = `rgba(167, 139, 250, ${currentOpacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.3;
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Large glowing orbs
            drawGlowingOrbs(ctx);

            animationId = requestAnimationFrame(animate);
        };

        // Draw glowing orbs
        const drawGlowingOrbs = (ctx) => {
            const time = Date.now() / 10000;
            const orbs = [
                {
                    x: canvas.width * 0.15,
                    y: canvas.height * 0.2,
                    radius: 200,
                    color: 'rgba(139, 92, 246, 0.08)',
                    speed: 0.3,
                },
                {
                    x: canvas.width * 0.85,
                    y: canvas.height * 0.3,
                    radius: 250,
                    color: 'rgba(168, 85, 247, 0.06)',
                    speed: -0.2,
                },
                {
                    x: canvas.width * 0.5,
                    y: canvas.height * 0.8,
                    radius: 300,
                    color: 'rgba(124, 58, 237, 0.05)',
                    speed: 0.4,
                },
                {
                    x: canvas.width * 0.3,
                    y: canvas.height * 0.7,
                    radius: 180,
                    color: 'rgba(167, 139, 250, 0.07)',
                    speed: -0.3,
                },
            ];

            orbs.forEach((orb, index) => {
                const x = orb.x + Math.sin(time * orb.speed + index) * 50;
                const y = orb.y + Math.cos(time * orb.speed * 0.8 + index) * 40;
                
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(0.5, orb.color);
                gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, orb.radius, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <section
            id="intro"
            className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28"
        >
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Static Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl animate-pulse delay-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <HeroText />
                <HeroCanvas />
            </div>
        </section>
    );
}