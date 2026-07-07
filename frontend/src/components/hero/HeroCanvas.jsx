import { motion } from "framer-motion";
import {
    Atom,
    Code2,
    Database,
    Smartphone,
} from "lucide-react";

export default function HeroCanvas() {
    return (
        <div className="relative hidden h-88 w-full items-center justify-center lg:flex lg:h-128 lg:max-w-136">

            {/* Center Circle */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute flex h-40 w-40 items-center justify-center rounded-full border border-violet-500/20 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            >
                <Atom
                    size={80}
                    className="text-cyan-400"
                />
            </motion.div>

            {/* Top */}
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                className="absolute top-10 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4"
            >
                <Code2 size={40} />
            </motion.div>

            {/* Right */}
            <motion.div
                animate={{
                    y: [10, -10, 10],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute right-10 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4"
            >
                <Database size={40} />
            </motion.div>

            {/* Bottom */}
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute bottom-10 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4"
            >
                <Smartphone size={40} />
            </motion.div>

            {/* Glow */}
            <div
                className="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:h-72 sm:w-72"
            />
        </div>
    );
}