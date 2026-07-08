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
    CheckCircle2,
    LineSquiggle,
    MessageSquareHeart
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    {
        name: "Intro",
        href: "#intro",
        icon: UserRound,
    },
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
        name: "Feedbacks",
        href: "#feedback",
        icon: MessageSquareHeart,
    },
    {
        name: "Contact",
        href: "#contact",
        icon: Mail,
    },
];

const services = [
    {
        id: "frontend-dev",
        title: "Frontend Development",
        icon: <Code className="w-4 h-4" />,
        description: "Responsive web applications with React, Next.js, and modern CSS frameworks.",
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        id: "mern-stack",
        title: "MERN Stack Development",
        icon: <Database className="w-4 h-4" />,
        description: "Full-stack applications with MongoDB, Express.js, React, and Node.js.",
        tags: ["MongoDB", "Express", "React", "Node"],
    },
    {
        id: "react-native",
        title: "React Native Apps",
        icon: <Smartphone className="w-4 h-4" />,
        description: "Cross-platform mobile applications for Android and iOS.",
        tags: ["React Native", "Expo"],
    },
    {
        id: "api-integration",
        title: "API Integration",
        icon: <Cloud className="w-4 h-4" />,
        description: "REST API integration, authentication, and state management.",
        tags: ["REST", "GraphQL", "Redux"],
    },
    {
        id: "performance-opt",
        title: "Performance Optimization",
        icon: <Zap className="w-4 h-4" />,
        description: "Speed optimization, bundle size reduction, and Core Web Vitals.",
        tags: ["Optimization", "Web Vitals"],
    },
    {
        id: "ui-ux",
        title: "UI/UX Implementation",
        icon: <Palette className="w-4 h-4" />,
        description: "Pixel-perfect implementation of design concepts and prototypes.",
        tags: ["Figma", "Framer", "Tailwind"],
    }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

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

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

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
            <nav className={`fixed left-1/2 top-5 z-50 w-[95%] max-w-7xl -translate-x-1/2 transition-all duration-300 ${scrolled ? "top-2" : "top-5"}`}>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-between rounded-xl border border-gray-200/20 px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 sm:py-3.5 bg-(--bg)}`}
                >
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--primary) text-white font-bold text-sm">
                            BS
                        </div>
                        <div className="hidden sm:block">
                            <h3 className="font-semibold text-(--text) text-sm">
                                Biswajit Sahu
                            </h3>
                            <p className="text-xs text-(--muted)">
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
                                <a
                                    href={item.href}
                                    className={`
                                        relative
                                        flex items-center gap-2
                                        px-3 py-1
                                        transition-colors duration-300
                                        ${isActive
                                            ? "text-(--text)"
                                            : "text-gray-500 hover:text-(--text)"
                                        }
                                    `}
                                >
                                    <Icon size={16} />
                                    <span className="text-sm">{item.name}</span>

                                    {isActive && (
                                        <motion.span
                                            layoutId="navbar-indicator"
                                            className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-(--primary)"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </ul>

                    {/* Right side actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        {/* Services Dropdown */}
                        <div className="relative">
                            <div className="group">
                                <button
                                    className="
                                        flex items-center gap-1.5
                                        rounded-full px-3 py-1
                                        text-gray-600
                                        hover:text-(--text)
                                        transition-all duration-200
                                    "
                                >
                                    <Briefcase size={15} />
                                    <span className="text-sm">Services</span>
                                    <ChevronDown size={14} className="ml-0.5 transition-transform duration-200 group-hover:rotate-180" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="
                                    invisible opacity-0 scale-95 
                                    group-hover:visible group-hover:opacity-100 group-hover:scale-100
                                    transition-all duration-200 ease-in-out
                                    pointer-events-none group-hover:pointer-events-auto
                                    absolute right-0 top-full pt-2
                                    w-72
                                    rounded-xl
                                    border border-gray-200/30
                                    bg-(--bg)
                                    p-1.5
                                ">
                                    <div className="grid gap-0.5">
                                        {services.map((s, index) => (
                                            <a key={s.id} href="#contact">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.03 }}
                                                    className="
                                                        group/item
                                                        rounded-lg
                                                        p-3
                                                        transition-all duration-150
                                                        cursor-pointer
                                                    "
                                                >
                                                    <div className="flex items-start gap-3 hover:text-(--text)">
                                                        <div className="shrink-0 w-8 h-8 rounded-lg bg-(--primary) flex items-center justify-center text-(--text)">
                                                            {s.icon}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-sm font-medium text-(--primary)">
                                                                {s.title}
                                                            </h4>
                                                            {/* <p className="text-xs text-gray-500 leading-relaxed mt-0.5 line-clamp-2">
                                                                {s.description}
                                                            </p> */}
                                                            {/* <div className="flex flex-wrap gap-1 mt-1.5">
                                                                {s.tags.slice(0, 3).map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-(--primary) font-mono"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div> */}
                                                        </div>
                                                        <ChevronRight size={14} className="shrink-0 text-gray-300 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 mt-1" />
                                                    </div>
                                                </motion.div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="
                                flex items-center gap-1.5
                                rounded-full
                                bg-(--primary)
                                px-5 py-1.5
                                text-sm font-medium
                                text-white
                                transition-all duration-200
                            "
                        >
                            <FileText size={15} />
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-gray-600 p-1.5 hover:bg-(--bg) rounded-lg transition-all duration-200 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.05 }}
                            className="fixed top-23 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-xl border border-gray-200/30 bg-(--bg) p-4 max-h-[80vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="
                                            flex items-center gap-3
                                            text-(--text)
                                            py-2.5 px-3
                                            rounded-lg
                                            transition-all duration-150
                                        "
                                        onClick={() => setOpen(false)}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                    >
                                        <item.icon size={18} />
                                        <span className="text-sm">{item.name}</span>
                                    </motion.a>
                                ))}

                                {/* Mobile Services Collapsible */}
                                <div className="mt-1">
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-between text-(--text) py-2.5 px-3 rounded-lg transition-all duration-150"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Briefcase size={18} />
                                            <span className="text-sm">Services</span>
                                        </div>
                                        <ChevronDown size={16} className={`${mobileServicesOpen ? "rotate-180" : ""} transition-transform duration-200`} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="space-y-2 px-3 pb-2">
                                                    {services.map((s) => (
                                                        <div onClick={() => setOpen(false)} key={s.id} className="rounded-lg p-3 bg-(--bg) border border-gray-100">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-(--primary)">{s.icon}</span>
                                                                <h4 className="text-sm text-(--text)">{s.title}</h4>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="
                                        mt-3
                                        rounded-lg
                                        bg-(--primary)
                                        py-2.5
                                        text-center
                                        text-sm font-medium
                                        text-white
                                        hover:bg-(--primary)
                                        transition-all duration-200
                                    "
                                    onClick={() => setOpen(false)}
                                >
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}