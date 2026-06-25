import {
    Atom,
    Database,
    FileCode,
    GitBranch,
    Globe,
    Server,
    Smartphone,
    Wind,
    // Docker - This might not exist, use Box or Container instead
    Cloud,
    Braces,
    Code2,
    Workflow,
    Beaker,
    Paintbrush,
    Terminal,
    Layers,
    Cpu,
    Zap,
    Shield,
    Sparkles,
    Rocket,
    Box,        // For Docker
    Coffee,     // For Express
    Hexagon,    // Alternative icon
    Package,    // Alternative icon
} from "lucide-react";

import SkillCard from "./SkillCard";
import SkillOrbit from "./SkillOrbit";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
    {
        name: "React",
        icon: Atom,
        level: 95,
        category: "Frontend",
        color: "#61DAFB",
    },
    {
        name: "JavaScript",
        icon: FileCode,
        level: 90,
        category: "Frontend",
        color: "#F7DF1E",
    },
    {
        name: "TypeScript",
        icon: Braces,
        level: 85,
        category: "Frontend",
        color: "#3178C6",
    },
    {
        name: "Next.js",
        icon: Layers,
        level: 80,
        category: "Frontend",
        color: "#339933",
    },
    {
        name: "Node.js",
        icon: Server,
        level: 85,
        category: "Backend",
        color: "#339933",
    },
    {
        name: "MongoDB",
        icon: Database,
        level: 80,
        category: "Database",
        color: "#47A248",
    },
    {
        name: "Express.js",
        icon: Globe, // Using Globe instead of Coffee (more professional)
        level: 85,
        category: "Backend",
        color: "#06B6D4",
    },
    {
        name: "React Native",
        icon: Smartphone,
        level: 75,
        category: "Mobile",
        color: "#61DAFB",
    },
    {
        name: "Tailwind CSS",
        icon: Wind,
        level: 90,
        category: "Frontend",
        color: "#06B6D4",
    },
    {
        name: "Git",
        icon: GitBranch,
        level: 85,
        category: "Tools",
        color: "#F05032",
    },
    {
        name: "Docker",
        icon: Package, // Using Package instead of Docker
        level: 70,
        category: "DevOps",
        color: "#2496ED",
    },
    {
        name: "GraphQL",
        icon: Workflow,
        level: 75,
        category: "API",
        color: "#E10098",
    },
    {
        name: "Redis",
        icon: Zap,
        level: 65,
        category: "Database",
        color: "#DC382D",
    },
    {
        name: "Jest",
        icon: Beaker,
        level: 70,
        category: "Testing",
        color: "#C21325",
    },
    {
        name: "Figma",
        icon: Paintbrush,
        level: 80,
        category: "Design",
        color: "#F24E1E",
    },
    {
        name: "AWS",
        icon: Cloud,
        level: 65,
        category: "DevOps",
        color: "#FF9900",
    },
    {
        name: "Python",
        icon: Code2,
        level: 75,
        category: "Backend",
        color: "#3776AB",
    },
    {
        name: "PostgreSQL",
        icon: Database,
        level: 70,
        category: "Database",
        color: "#4169E1",
    },
    {
        name: "Kubernetes",
        icon: Hexagon,
        level: 60,
        category: "DevOps",
        color: "#326CE5",
    },
    {
        name: "Framer Motion",
        icon: Sparkles,
        level: 85,
        category: "Frontend",
        color: "#FF6B6B",
    },
    {
        name: "Webpack",
        icon: Cpu,
        level: 70,
        category: "Tools",
        color: "#8DD6F9",
    },
    {
        name: "ESLint",
        icon: Shield,
        level: 75,
        category: "Tools",
        color: "#4B32C3",
    },
    {
        name: "Vite",
        icon: Rocket,
        level: 80,
        category: "Tools",
        color: "#646CFF",
    },
    {
        name: "GitHub",
        icon: GitBranch,
        level: 85,
        category: "Tools",
        color: "#181717",
    },
];

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [activeMobileIndex, setActiveMobileIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    const updateActiveMobileIndex = useCallback(() => {
        if (!isMobile) return;

        const centerY = window.innerHeight / 2;
        let closestIndex = null;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, index) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - centerY);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveMobileIndex(closestIndex);
    }, [isMobile]);

    useEffect(() => {
        updateActiveMobileIndex();
        window.addEventListener("scroll", updateActiveMobileIndex, { passive: true });
        return () => window.removeEventListener("scroll", updateActiveMobileIndex);
    }, [updateActiveMobileIndex, filteredSkills.length]);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative px-6 py-32 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="
                            inline-block
                            rounded-full
                            border border-violet-500/20
                            bg-violet-500/10
                            px-6 py-2.5
                            text-sm
                            text-violet-300
                            backdrop-blur-sm
                            relative
                        "
                    >
                        <span className="relative z-10">Tech Stack</span>
                        <motion.div
                            className="absolute inset-0 rounded-full bg-violet-500/5"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Skills &
                        <motion.span
                            className="
                                block
                                bg-(--primary)
                                bg-clip-text
                                text-transparent
                            "
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                backgroundSize: "200% 200%",
                            }}
                        >
                            Technologies
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-lg
                            text-slate-400
                        "
                    >
                        Technologies and tools I use to build modern,
                        scalable and performant applications.
                    </motion.p>
                </motion.div>

                {/* Orbit Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20"
                >
                    <SkillOrbit />
                </motion.div>

                {/* Skill Cards Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                ref={(el) => (cardRefs.current[index] = el)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                onMouseEnter={() => !isMobile && setHoveredSkill(skill.name)}
                                onMouseLeave={() => !isMobile && setHoveredSkill(null)}
                            >
                                <SkillCard
                                    skill={skill}
                                    isActive={isMobile ? activeMobileIndex === index : hoveredSkill === skill.name}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skill Level Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                </motion.div>
            </div>
        </section>
    );
}