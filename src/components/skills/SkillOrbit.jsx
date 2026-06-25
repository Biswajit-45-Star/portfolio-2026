import { motion } from "framer-motion";
import { useState } from "react";

const orbitSkills = [
    { name: "React", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Express", color: "#fff" },
    { name: "React Native", color: "#61DAFB" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Git", color: "#F05032" },
    { name: "Docker", color: "#2496ED" },
    { name: "GraphQL", color: "#E10098" },
    { name: "Next.js", color: "#fff" },
    { name: "AWS", color: "#FF9900" },
    { name: "Python", color: "#3776AB" },
];

export default function SkillOrbit() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className="
                relative
                mx-auto
                hidden
                h-[500px]
                w-[500px]
                lg:block
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 blur-2xl" />

            {/* Outer Orbit Rings */}
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 40 + ring * 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`
                        absolute inset-0 rounded-full border 
                        ${ring === 1 && "border-white/5"}
                        ${ring === 2 && "border-violet-500/10"}
                        ${ring === 3 && "border-cyan-500/10"}
                    `}
                    style={{
                        width: `${100 - ring * 15}%`,
                        height: `${100 - ring * 15}%`,
                        top: `${ring * 7.5}%`,
                        left: `${ring * 7.5}%`,
                    }}
                />
            ))}

            {/* Orbiting Skills */}
            <motion.div
                animate={{
                    rotate: isPaused ? 0 : 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0"
            >
                {orbitSkills.map((skill, index) => {
                    const angle = (index / orbitSkills.length) * 360;
                    const radius = 230;

                    return (
                        <motion.div
                            key={skill.name}
                            style={{
                                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.div
                                className="
                                    rounded-full
                                    border 
                                    bg-[#0B1120]/80
                                    backdrop-blur-xl
                                    px-4 py-2
                                    text-sm
                                    shadow-lg
                                    cursor-pointer
                                    transition-all
                                    duration-300
                                "
                                style={{color: skill.color, borderColor: skill.color}}
                                whileHover={{
                                    borderColor: skill.color,
                                    boxShadow: `0 0 30px ${skill.color}40`,
                                }}
                            >
                                {skill.name}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Inner Orbit with Icons */}
            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0"
            >
                {[0, 1, 2, 3].map((i) => {
                    const angle = i * 90;
                    const radius = 120;

                    return (
                        <div
                            key={i}
                            style={{
                                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                        >
                            <div className="w-3 h-3 rounded-full bg-violet-400/50 animate-pulse" />
                        </div>
                    );
                })}
            </motion.div>

            {/* Center */}
            <motion.div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-44 w-44
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border border-violet-500/20
                    bg-[#0B1120]/80
                    backdrop-blur-xl
                    shadow-2xl
                "
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 60px rgba(139, 92, 246, 0.2)",
                }}
            >
                <motion.span
                    className="
                        text-3xl
                        font-black
                        bg-(--primary)
                        bg-clip-text
                        text-transparent
                    "
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundSize: "200% 200%",
                    }}
                >
                    MERN
                </motion.span>
                <motion.span
                    className="text-xs text-slate-400 mt-1"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    Stack
                </motion.span>
            </motion.div>
        </div>
    );
}