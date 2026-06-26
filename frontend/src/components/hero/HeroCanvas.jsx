import { motion } from "framer-motion";
import {
    Atom,
    Code2,
    Database,
    Smartphone,
} from "lucide-react";

export default function HeroCanvas() {
    return (
        <div
            className="
        relative
        hidden
        h-[600px]
        items-center
        justify-center
        lg:flex
      "
        >

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
                className="
          absolute
          flex
          h-56
          w-56
          items-center
          justify-center
          rounded-full
          border
          border-violet-500/20
        "
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
                className="
          absolute
          top-10
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
        "
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
                className="
          absolute
          right-10
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
        "
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
                className="
          absolute
          bottom-10
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
        "
            >
                <Smartphone size={40} />
            </motion.div>

            {/* Glow */}
            <div
                className="
          absolute
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[100px]
        "
            />
        </div>
    );
}