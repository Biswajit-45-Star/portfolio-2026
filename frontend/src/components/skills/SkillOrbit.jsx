import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Code2,
  Braces,
  Terminal,
  Server,
  Database,
  Shield,
  Smartphone,
  Palette,
  GitBranch,
  Container,
  Workflow,
  Globe,
  Cloud,
  Sparkles,
} from "lucide-react";

const orbitSkills = [
  { name: "React", color: "#61DAFB", icon: Code2 },
  { name: "JavaScript", color: "#F7DF1E", icon: Braces },
  { name: "TypeScript", color: "#3178C6", icon: Terminal },
  { name: "Node.js", color: "#339933", icon: Server },
  { name: "Express", color: "#ffffff", icon: Shield },
  { name: "React Native", color: "#61DAFB", icon: Smartphone },
  { name: "Tailwind", color: "#06B6D4", icon: Palette },
  { name: "Git", color: "#F05032", icon: GitBranch },
  { name: "Docker", color: "#2496ED", icon: Container },
  { name: "GraphQL", color: "#E10098", icon: Workflow },
  { name: "Next.js", color: "#ffffff", icon: Globe },
  { name: "AWS", color: "#FF9900", icon: Cloud },
  { name: "MongoDB", color: "#47A248", icon: Database },
  { name: "Python", color: "#3776AB", icon: Cloud },
];

export default function SkillOrbit() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse tracking for parallax
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = (e.clientY - rect.top - rect.height / 2) / 10;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform for parallax effect
  const rotateX = useTransform(springY, (y) => -y * 0.5);
  const rotateY = useTransform(springX, (x) => x * 0.5);

  return (
    <>
      {/* Mobile: Enhanced Marquee */}
      <div
        className="mx-auto block lg:hidden w-full overflow-hidden py-8 px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 w-max"
          animate={{
            x: isPaused ? 0 : ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...orbitSkills, ...orbitSkills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="
                  shrink-0
                  rounded-full
                  border-2
                  bg-[#0B1120]/90
                  backdrop-blur-xl
                  px-5 py-2.5
                  text-sm
                  font-medium
                  shadow-lg
                  flex items-center gap-2.5
                  transition-all
                  duration-300
                "
                style={{
                  color: skill.color,
                  borderColor: skill.color + "40",
                  boxShadow: `0 0 30px ${skill.color}15`,
                }}
              >
                <Icon size={18} className="shrink-0" />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Desktop: 3D Holographic Orbit */}
      <div
        ref={containerRef}
        className="relative mx-auto hidden h-150 w-150 lg:block"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full"
        >
          {/* Background Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl animate-pulse" />
         
          {/* Outer Orbit Rings with Gradient */}
          {[1, 2, 3, 4].map((ring) => {
            const colors = [
              "border-violet-500/10",
              "border-fuchsia-500/10",
              "border-cyan-500/10",
              "border-blue-500/10",
            ];
            const sizes = [100, 82, 64, 46];
            const tops = [0, 9, 18, 27];
            
            return (
              <motion.div
                key={ring}
                animate={{
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 30 + ring * 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`
                  absolute rounded-full border-2 
                  ${colors[ring - 1]}
                `}
                style={{
                  width: `${sizes[ring - 1]}%`,
                  height: `${sizes[ring - 1]}%`,
                  top: `${tops[ring - 1]}%`,
                  left: `${tops[ring - 1]}%`,
                }}
              />
            );
          })}

          {/* Orbiting Skills with 3D Effect - AUTOMATED */}
          <motion.div
            animate={{
              rotate: isPaused ? 0 : 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {orbitSkills.map((skill, index) => {
              const angle = (index / orbitSkills.length) * 360;
              const radius = 240;
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <motion.div
                    className={`
                      relative
                      rounded-2xl
                      border-2
                      bg-[#0B1120]/80
                      backdrop-blur-xl
                      px-5 py-3
                      text-sm
                      font-medium
                      shadow-xl
                      flex items-center gap-3
                      transition-all
                      duration-300
                      ${isPaused ? 'cursor-pointer hover:scale-110 hover:-translate-y-2' : 'cursor-default'}
                    `}
                    style={{
                      color: skill.color,
                      borderColor: skill.color + "30",
                      boxShadow: `0 0 20px ${skill.color}10`,
                    }}
                    whileHover={isPaused ? {
                      scale: 1.25,
                      y: -8,
                      borderColor: skill.color,
                      boxShadow: `0 0 80px ${skill.color}40`,
                    } : {}}
                  >
                    {/* Glow ring on hover (only when paused) */}
                    {isPaused && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        whileHover={{
                          boxShadow: [
                            `0 0 20px ${skill.color}20`,
                            `0 0 40px ${skill.color}40`,
                            `0 0 20px ${skill.color}20`,
                          ],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    
                    <Icon 
                      size={20} 
                      className="shrink-0 transition-all duration-300"
                      strokeWidth={2}
                    />
                    
                    {/* Floating indicator (only when paused) */}
                    {isPaused && (
                      <motion.div
                        className="absolute -top-6 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, y: 5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        <div className="w-1 h-1 rounded-full bg-current animate-ping" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Center - Enhanced with rotating border */}
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-48 w-48
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center
              rounded-full
              bg-[#0B1120]/90
              backdrop-blur-2xl
              shadow-2xl
              border-2
              overflow-hidden
            "
            style={{
              borderColor: "rgba(168, 85, 247, 0.2)",
              boxShadow: "0 0 80px rgba(168, 85, 247, 0.1)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 100px rgba(168, 85, 247, 0.2)",
            }}
          >

            {/* Center glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <Sparkles className="w-8 h-8 mx-auto text-(--primary) mb-1 animate-pulse" />
              <motion.span
                className="
                  text-4xl
                  font-black
                  bg-(--primary)
                  bg-clip-text
                  text-transparent
                  tracking-tight
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
                className="block text-xs text-(--primary) mt-1 font-medium tracking-widest uppercase"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Stack
              </motion.span>
              
              <motion.div
                className="w-12 h-0.5 mx-auto mt-3 rounded-full bg-(--primary)"
                animate={{
                  width: ["12px", "48px", "12px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}