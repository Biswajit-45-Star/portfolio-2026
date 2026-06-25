import { motion } from "framer-motion";

export default function SkillCard({ skill, isActive }) {
    const Icon = skill.icon;
    const isActived = Boolean(isActive);

    return (
        <motion.div
            className="relative h-full"
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
        >
            <motion.div
                className="
                    rounded-3xl
                    border border-white/10
                    bg-linear-to-br from-white/3 to-transparent
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    h-full
                    relative
                    overflow-hidden
                    group
                "
                animate={{
                    borderColor: isActived ? skill.color : "rgba(255,255,255,0.1)",
                    boxShadow: isActived
                        ? `0 8px 40px ${skill.color}20`
                        : "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                {/* Background Glow */}
                <motion.div
                    className="absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                        background: isActived 
                            ? `radial-gradient(circle, ${skill.color}20, transparent 70%)` 
                            : "transparent",
                    }}
                />

                {/* Icon Container */}
                <motion.div
                    className="
                        flex h-16 w-16
                        items-center justify-center
                        rounded-2xl
                        bg-linear-to-br
                        from-violet-500/20
                        to-cyan-500/20
                        relative
                    "
                    animate={{
                        rotate: isActived ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon
                        size={32}
                        className="text-cyan-400 relative z-10"
                        style={{
                            color: isActived ? skill.color : "var(--primary)",
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-2xl opacity-20"
                        animate={{
                            background: isActived 
                                ? `radial-gradient(circle, ${skill.color}, transparent)` 
                                : "transparent",
                        }}
                    />
                </motion.div>

                {/* Skill Name */}
                <h3
                    className="
                        mt-4
                        font-semibold
                        text-white
                        text-lg
                    "
                >
                    {skill.name}
                </h3>

                {/* Category Badge */}
                <span className="
                    inline-block
                    mt-2
                    text-xs
                    px-2 py-1
                    rounded-full
                    bg-white/5
                    text-slate-400
                ">
                    {skill.category}
                </span>

                {/* Skill Level Bar */}
                <div className="mt-4">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: isActived ? `${skill.level}%` : "0%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                        boxShadow: isActived 
                            ? `inset 0 0 30px ${skill.color}20` 
                            : "inset 0 0 0px transparent",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}