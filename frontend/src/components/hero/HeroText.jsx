import { motion } from "framer-motion";
import { User, Code2, Rocket, Sparkles } from "lucide-react";
import { RESUME_LINK } from "../../data/links";

export default function HeroText() {
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

            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 text-xl font-semibold text-slate-300 sm:text-2xl">
                Frontend Engineer & MERN Stack Developer
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Building fast, scalable and visually stunning web applications using React, MERN Stack and React Native.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="rounded-full bg-(--primary) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base">
                    View Projects
                </motion.a>

                <motion.a whileHover={{ scale: 1.05, borderColor: "#8B5CF6" }} whileTap={{ scale: 0.95 }} href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 sm:px-8 sm:py-4 sm:text-base">
                    My Resume
                </motion.a>
            </motion.div>
        </div>
    );
}