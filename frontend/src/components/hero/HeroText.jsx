import { motion } from "framer-motion";
import { User, Code2, Rocket, Sparkles } from "lucide-react";
import { RESUME_LINK } from "../../data/links";
import { useState, useEffect } from "react";

export default function HeroText() {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "Frontend & MERN Developer",
        "React & Next.js Specialist",
        "Full Stack JavaScript Developer",
        "React Native Mobile Developer",
        "UI/UX Enthusiast",
        "Performance Optimizer"
    ];

    useEffect(() => {
        let timeout;

        const typeEffect = () => {
            const currentRole = roles[currentIndex];

            if (!isDeleting) {
                // Typing
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                    timeout = setTimeout(typeEffect, 50 + Math.random() * 30);
                } else {
                    // Pause at full text
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                        timeout = setTimeout(typeEffect, 50);
                    }, 2000);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                    timeout = setTimeout(typeEffect, 25 + Math.random() * 20);
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                    timeout = setTimeout(typeEffect, 100);
                }
            }
        };

        timeout = setTimeout(typeEffect, 20);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <div className="relative z-10 max-w-2xl">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-2 text-sm text-violet-400"
            >
                React • MERN • React Native
            </motion.span>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
                <motion.div
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative group shrink-0"
                >
                    <div className="relative h-24 w-24 rounded-2xl bg-(--primary) p-0.5 transition-all duration-300 sm:h-28 sm:w-28 md:h-30 md:w-30">
                        <a href="https://www.linkedin.com/in/biswajit-sahu-b8b79b281/">
                            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0B1120] relative">
                                <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-400/20" />
                                <div className="relative z-10">
                                    <User size={36} className="text-white/80" strokeWidth={1.5} />
                                </div>
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-violet-500/0"
                                    animate={{ borderColor: ["rgba(139,92,246,0)", "rgba(139,92,246,0.3)", "rgba(139,92,246,0)"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </a>
                    </div>

                    <motion.div
                        className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-[#0B1120] bg-green-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                    </motion.div>
                </motion.div>

                <div className="min-w-0">
                    <motion.h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Biswajit
                        <br className="block sm:hidden" />
                        <span className="hidden sm:inline">&nbsp;</span>
                        <span className="bg-(--primary) bg-clip-text text-transparent">Sahu</span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-violet-400" />
                        <span className="text-xs text-slate-400">Available for work</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Typing Effect Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex items-center gap-2"
            >
                <Code2 size={18} className="text-violet-400 shrink-0" />
                <h2 className="text-xl font-semibold text-slate-300 sm:text-2xl">
                    {displayText}
                    <span className="inline-block w-0.5 h-6 bg-violet-400 ml-1 animate-pulse" />
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
                Building fast, scalable and visually stunning web applications using React, MERN Stack and React Native.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-wrap gap-3 sm:gap-4"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="rounded-full bg-(--primary) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
                >
                    View Projects
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05, borderColor: "#8B5CF6" }}
                    whileTap={{ scale: 0.95 }}
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 sm:px-8 sm:py-4 sm:text-base"
                >
                    My Resume
                </motion.a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8"
            >
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-violet-500/10 p-2">
                        <Rocket size={18} className="text-violet-400" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">1.5+</p>
                        <p className="text-xs text-slate-400">Years Experience</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-fuchsia-500/10 p-2">
                        <Code2 size={18} className="text-fuchsia-400" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">10+</p>
                        <p className="text-xs text-slate-400">Projects Delivered</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-cyan-500/10 p-2">
                        <Sparkles size={18} className="text-cyan-400" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">100%</p>
                        <p className="text-xs text-slate-400">Client Satisfaction</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}