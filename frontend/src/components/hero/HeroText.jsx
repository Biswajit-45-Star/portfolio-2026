import { motion } from "framer-motion";
import { User, Code2, Rocket, Sparkles } from "lucide-react";
import { RESUME_LINK } from "../../data/links";

export default function HeroText() {
    return (
        <div className="relative z-10">

            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                    inline-flex
                    rounded-full
                    border
                    border-violet-500
                    bg-violet-500/10
                    px-4
                    py-2
                    text-sm
                    text-violet-400
                "
            >
                React • Mern • React Native
            </motion.span>

            {/* Avatar + Name Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 flex items-center gap-6"
            >
                {/* Avatar */}
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                >
                    {/* Avatar Container with Gradient Border */}
                    <div className="
                        relative
                        h-30 w-30
                        rounded-2xl
                        bg-(--primary)
                        p-0.5
                        transition-all
                        duration-300
                    ">
                        {/* Inner Avatar */}
                        <a href="https://www.linkedin.com/in/biswajit-sahu-b8b79b281/"><div className="
                            h-full w-full
                            rounded-2xl
                            bg-[#0B1120]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            relative
                        ">
                            {/* Profile Image Placeholder - Replace with your image */}
                            <div className="
                                absolute inset-0
                                bg-linear-to-br
                                from-violet-500/20
                                via-fuchsia-500/20
                                to-cyan-400/20
                            " />

                            {/* Avatar Content */}
                            <div className="relative z-10">
                                <User
                                    size={40}
                                    className="text-white/80"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Animated Ring Effect */}
                            <motion.div
                                className="
                                    absolute inset-0
                                    rounded-2xl
                                    border-2
                                    border-violet-500/0
                                "
                                animate={{
                                    borderColor: ['rgba(139,92,246,0)', 'rgba(139,92,246,0.3)', 'rgba(139,92,246,0)'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </div></a>
                    </div>

                    {/* Status Dot */}
                    <motion.div
                        className="
                            absolute
                            -bottom-1
                            -right-1
                            h-5 w-5
                            rounded-full
                            bg-green-500
                            border-2
                            border-[#0B1120]
                        "
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                    </motion.div>
                </motion.div>

                {/* Name Section */}
                <div>
                    <motion.h1
                        className="
                        ml-5
                        text-5xl
                        font-black
                        leading-tight
                        text-white
                        md:text-7xl
                    "
                    >
                        Biswajit

                        {/* Mobile Line Break */}
                        <br className="block md:hidden" />

                        {/* Desktop Space */}
                        <span className="hidden md:inline">&nbsp;</span>

                        <span
                            className="
                            bg-(--primary)
                            bg-clip-text
                            text-transparent
                            "
                        >
                            Sahu
                        </span>
                    </motion.h1>

                    {/* Small badge below name */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-1 ml-5 flex items-center gap-2"
                    >
                        <Sparkles size={14} className="text-violet-400" />
                        <span className="text-xs text-slate-400">
                            Available for work
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
                    mt-6
                    text-2xl
                    font-semibold
                    text-slate-300
                "
            >
                Frontend Engineer & MERN Stack Developer
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                    mt-6
                    max-w-xl
                    text-lg
                    leading-relaxed
                    text-slate-400
                "
            >
                Building fast, scalable and visually
                stunning web applications using React,
                MERN Stack and React Native.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-wrap gap-4"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="
                        rounded-full
                        bg-(--primary)
                        px-8
                        py-4
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                    "
                >
                    View Projects
                </motion.a>

                <motion.a
                    whileHover={{
                        scale: 1.05,
                        borderColor: '#8B5CF6',
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        rounded-full
                        border
                        border-white/10
                        px-8
                        py-4
                        text-white
                        backdrop-blur-xl
                        hover:border-violet-500
                        transition-all
                        duration-300
                    "
                >
                    My Resume
                </motion.a>
            </motion.div>
        </div>
    );
}