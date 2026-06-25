import { motion, AnimatePresence } from "framer-motion";
import {
    BriefcaseBusiness,
    Cpu,
    FolderKanban,
    Mail,
    Menu,
    UserRound,
    X,
    FileText,
    Briefcase,
    ChevronRight,
    ArrowRight,
    ChevronDown,
    Code,
    Database,
    Smartphone,
    Zap,
    Palette,
    Cloud,
    BarChart3,
    Users,
    TrendingUp,
    CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";
import { RESUME_LINK } from "../../data/links";

const navItems = [
    {
        name: "About",
        href: "#about",
        icon: UserRound,
    },
    {
        name: "Experience",
        href: "#experience",
        icon: BriefcaseBusiness,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: FolderKanban,
    },
    {
        name: "Tech Stack",
        href: "#skills",
        icon: Cpu,
    },
    {
        name: "Contact",
        href: "#contact",
        icon: Mail,
    },
];

// Comprehensive services data
const services = [
    {
        id: "frontend-dev",
        title: "Frontend Development",
        icon: <Code className="w-5 h-5" />,
        iconEmoji: "🚀",
        description: "Building responsive, modern and high-performance web applications using React.js, Next.js, JavaScript and Tailwind CSS.",
        features: [
            "Responsive Web Design",
            "SPA Development",
            "Performance Optimization",
            "Cross-Browser Compatibility"
        ],
        tags: ["React", "Next.js", "Tailwind", "TypeScript"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        id: "mern-stack",
        title: "MERN Stack Development",
        icon: <Database className="w-5 h-5" />,
        iconEmoji: "⚡",
        description: "Developing full-stack applications with MongoDB, Express.js, React.js and Node.js, from database design to deployment.",
        features: [
            "Full-Stack Architecture",
            "REST API Development",
            "Database Design",
            "Deployment & DevOps"
        ],
        tags: ["MongoDB", "Express", "React", "Node.js"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-400"
    },
    {
        id: "react-native",
        title: "React Native Apps",
        icon: <Smartphone className="w-5 h-5" />,
        iconEmoji: "📱",
        description: "Creating cross-platform mobile applications with React Native for Android and iOS with a native-like experience.",
        features: [
            "Cross-Platform Development",
            "Native Features Integration",
            "App Store Deployment",
            "Performance Optimization"
        ],
        tags: ["React Native", "Expo", "iOS", "Android"],
        gradient: "from-purple-500/20 to-pink-500/20",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        id: "api-integration",
        title: "API Integration",
        icon: <Cloud className="w-5 h-5" />,
        iconEmoji: "🔌",
        description: "Integrating REST APIs, handling authentication, state management, and building seamless frontend-backend communication.",
        features: [
            "REST API Integration",
            "Authentication & Auth",
            "State Management",
            "Error Handling"
        ],
        tags: ["REST", "GraphQL", "Axios", "Redux"],
        gradient: "from-indigo-500/20 to-blue-500/20",
        iconBg: "bg-indigo-500/20",
        iconColor: "text-indigo-400"
    },
    {
        id: "performance-opt",
        title: "Performance Optimization",
        icon: <Zap className="w-5 h-5" />,
        iconEmoji: "⚡",
        description: "Improving application speed, bundle size, rendering performance, and overall user experience.",
        features: [
            "Bundle Size Optimization",
            "Lazy Loading",
            "Code Splitting",
            "Core Web Vitals"
        ],
        tags: ["Lighthouse", "Web Vitals", "Optimization"],
        gradient: "from-yellow-500/20 to-orange-500/20",
        iconBg: "bg-yellow-500/20",
        iconColor: "text-yellow-400"
    },
    {
        id: "ui-ux",
        title: "UI/UX Implementation",
        icon: <Palette className="w-5 h-5" />,
        iconEmoji: "🎨",
        description: "Transforming Figma and design concepts into pixel-perfect, interactive and production-ready user interfaces.",
        features: [
            "Pixel-Perfect Implementation",
            "Interactive Prototypes",
            "Design Systems",
            "Accessibility"
        ],
        tags: ["Figma", "Adobe XD", "Tailwind", "Framer"],
        gradient: "from-pink-500/20 to-rose-500/20",
        iconBg: "bg-pink-500/20",
        iconColor: "text-pink-400"
    }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    return (
        <>
            <nav className={`fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 transition-all duration-300 ${scrolled ? "top-2" : "top-5"
                }`}>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-center justify-between rounded-2xl border border-white/10 px-6 py-4 backdrop-blur-xl transition-all duration-300 ${scrolled
                        ? "bg-[#0B1120]/90 shadow-2xl shadow-violet-500/5"
                        : "bg-[#0B1120]/60"
                        }`}
                >
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <a href="https://www.linkedin.com/in/biswajit-sahu-b8b79b281/">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl font-bold text-white bg-violet-600 relative overflow-hidden">
                                <span className="relative z-10">BS</span>
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-transparent via-white/10 to-transparent"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            </div>
                        </a>

                        <div className="hidden sm:block">
                            <h3 className="font-semibold text-white">
                                Biswajit Sahu
                            </h3>
                            <p className="text-xs text-slate-400">
                                Software Engineer
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Nav */}
                    <ul className="hidden items-center gap-1 lg:flex">


                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.substring(1);

                            return (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={item.href}
                                        className={`
                                            flex items-center gap-2
                                            rounded-full
                                            px-4 py-2
                                            text-sm
                                            transition-all duration-300
                                            relative
                                            ${isActive
                                                ? "text-white bg-white/10"
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                            }
                                        `}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-full bg-white/5"
                                                transition={{ type: "spring", duration: 0.5 }}
                                            />
                                        )}
                                        <Icon size={16} className="relative z-10" />
                                        <span className="relative z-10">{item.name}</span>
                                    </a>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Right side actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        {/* Resume Button */}
                        {/* <motion.a
                            whileTap={{ scale: 0.95 }}
                            href={RESUME_LINK}
                            target="_blank"
                            className="
                                flex items-center gap-2
                                rounded-full
                                bg-violet-600
                                px-6 py-2.5
                                text-sm font-semibold
                                text-white
                                hover:bg-violet-500
                                transition-all duration-300
                                shadow-lg shadow-violet-500/20
                            "
                        >
                            <FileText size={16} />
                            <span>Resume</span>
                        </motion.a> */}
                        {/* Services Dropdown - Enhanced Premium Version */}
                        <div className="relative">
                            <div className="group">
                                <button
                                    className="
                                        flex items-center gap-2 
                                        rounded-full px-5 py-2.5 
                                        text-sm font-medium
                                        text-slate-300 
                                        hover:bg-white/5 hover:text-white 
                                        transition-all duration-300
                                        relative
                                        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]
                                    "
                                    aria-haspopup="menu"
                                >
                                    {/* <Briefcase size={16} className="transition-colors duration-300 group-hover:text-violet-400" /> */}
                                    <span className="tracking-wide">Let's Build</span>
                                    <ChevronDown
                                        size={14}
                                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="
                                    invisible opacity-0 scale-95 
                                    group-hover:visible group-hover:opacity-100 group-hover:scale-100
                                    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                                    pointer-events-none group-hover:pointer-events-auto
                                    absolute right-0 top-full pt-3
                                    w-100
                                    rounded-2xl 
                                    border border-white/10 
                                    bg-[#0B1120]/95 backdrop-blur-xl
                                    p-2
                                    shadow-2xl shadow-violet-500/10
                                    max-h-[80vh] overflow-y-auto
                                ">
                                    {/* Decorative gradient line at top */}
                                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-violet-500/40 to-transparent rounded-full" />

                                    {/* Header */}
                                    <div className="px-3 pt-3 pb-2 border-b border-white/5">
                                        <span className="text-[10px] font-mono text-violet-400/60 uppercase tracking-[0.2em]">
                                            ✦ What I Offer
                                        </span>
                                    </div>

                                    {/* Services Grid */}
                                    <div className="grid gap-1 p-1 max-h-100 overflow-y-auto custom-scrollbar">
                                        {services.map((s, index) => (
                                            <a href="/#contact">
                                                <motion.div
                                                    key={s.id}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="
                                                    group/item
                                                    relative
                                                    rounded-xl 
                                                    p-3.5 
                                                    transition-all duration-200
                                                    hover:bg-white/5
                                                    cursor-pointer
                                                    border border-transparent
                                                    hover:border-white/5
                                                "
                                                >
                                                    {/* Hover glow */}
                                                    <div className="
                                                    absolute inset-0 rounded-xl 
                                                    opacity-0 group-hover/item:opacity-100
                                                    transition-opacity duration-300
                                                    bg-linear-to-r from-violet-500/5 to-cyan-500/5
                                                " />

                                                    <div className="relative flex items-start gap-3.5">
                                                        {/* Icon with gradient background */}
                                                        <div className={`
                                                        shrink-0
                                                        w-10 h-10 
                                                        rounded-xl 
                                                        flex items-center justify-center
                                                        ${s.iconBg}
                                                        border border-white/5
                                                        group-hover/item:border-violet-500/20
                                                        transition-all duration-300
                                                        ${s.iconColor}
                                                    `}>
                                                            {s.icon}
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="
                                                            text-sm font-semibold 
                                                            text-white 
                                                            group-hover/item:text-violet-300
                                                            transition-colors duration-200
                                                        ">
                                                                {s.title}
                                                            </h4>
                                                            <p className="
                                                            text-xs 
                                                            text-slate-400 
                                                            group-hover/item:text-slate-300
                                                            transition-colors duration-200
                                                            leading-relaxed
                                                            mt-0.5
                                                            line-clamp-2
                                                        ">
                                                                {s.description}
                                                            </p>

                                                            {/* Tech tags */}
                                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                                {s.tags.slice(0, 3).map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="
                                                                        text-[9px] 
                                                                        px-2 py-0.5 
                                                                        rounded-full 
                                                                        bg-white/5 
                                                                        text-slate-500
                                                                        border border-white/5
                                                                        font-mono
                                                                        tracking-wide
                                                                    "
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Arrow indicator */}
                                                        <ChevronRight
                                                            size={14}
                                                            className="
                                                            shrink-0
                                                            text-slate-600 
                                                            group-hover/item:text-violet-400
                                                            transition-all duration-200
                                                            opacity-0 group-hover/item:opacity-100
                                                            -translate-x-1 group-hover/item:translate-x-0
                                                            mt-1
                                                        "
                                                        />
                                                    </div>
                                                </motion.div></a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white p-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>
                </motion.div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        transition={{ duration: 0.2 }}
                        className="
                            fixed inset-0 z-40
                            flex items-center justify-center
                            bg-black/70 backdrop-blur-md
                            lg:hidden
                        "
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="
                                w-[90%] max-w-md
                                rounded-3xl
                                border border-white/10
                                bg-[#0B1120]
                                p-6
                                shadow-2xl
                                mt-22.5
                                max-h-[90vh] overflow-y-auto
                            "
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="
                                            flex items-center justify-center gap-3
                                            text-center
                                            text-lg
                                            text-slate-300
                                            hover:text-white
                                            hover:bg-white/5
                                            py-3 px-4
                                            rounded-xl
                                            transition-all duration-300
                                        "
                                        onClick={() => setOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <item.icon size={20} />
                                        {item.name}
                                    </motion.a>
                                ))}

                                {/* Mobile Services Collapsible */}
                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-center gap-3 text-lg text-slate-300 hover:text-white hover:bg-white/5 py-3 px-4 rounded-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Briefcase size={20} />
                                            <span>Services</span>
                                        </div>
                                        <ChevronDown size={18} className={`${mobileServicesOpen ? "rotate-180" : ""} transition-transform`} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-3 space-y-3 px-2 overflow-hidden"
                                            >
                                                {services.map((s) => (
                                                    <div key={s.id} className="rounded-xl p-4 bg-white/5 border border-white/5">
                                                        <div className="flex items-center gap-2 mb-1.5">
                                                            <span className={s.iconColor}>{s.icon}</span>
                                                            <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                                                        </div>
                                                        <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                                                        <div className="flex flex-wrap gap-1 mt-2">
                                                            {s.tags.slice(0, 3).map((tag) => (
                                                                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-500 font-mono">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <motion.a
                                    href={RESUME_LINK}
                                    target="_blank"
                                    className="
                                        mt-2
                                        rounded-xl
                                        bg-violet-600
                                        py-3.5
                                        text-center
                                        font-semibold
                                        text-white
                                        hover:bg-violet-500
                                        transition-all duration-300
                                    "
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setOpen(false)}
                                >
                                    Download Resume
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(168, 85, 247, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(168, 85, 247, 0.5);
                }
            `}</style>
        </>
    );
}