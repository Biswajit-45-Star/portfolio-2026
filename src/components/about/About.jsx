import { motion } from "framer-motion";
import Stats from "./Stats";

export default function About() {
    return (
        <section
            id="about"
            className="
                relative
                py-32
                px-6
            "
        >
            <div className="mx-auto max-w-7xl">

                <div
                    className="
                        grid
                        gap-16
                        lg:grid-cols-2
                        items-center
                    "
                >

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span
                            className="
                                rounded-full
                                border border-(--primary)
                                bg-violet-500/10
                                px-4 py-2
                                text-sm
                                text-(--primary)
                            "
                        >
                            About Me
                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                font-black
                                text-white
                                md:text-5xl
                            "
                        >
                            Frontend Engineer &
                            <span
                                className="
                                    block
                                    bg-(--primary)
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                MERN Developer
                            </span>
                        </h2>

                        <p
                            className="
                                mt-6
                                text-lg
                                leading-relaxed
                                text-slate-400
                            "
                        >
                            Frontend Engineer | React.js, Next.js & MERN Stack Developer | 1.5+ Years of Experience Building Enterprise Applications, ERP Solutions, Business Platforms & Customer-Facing Products | Skilled in Scalable UI Architecture, REST API Integration, Redux Toolkit, Performance Optimization & Modern Web Development | Passionate About Creating Impactful Digital Experiences, Continuous Learning, and AI-Assisted Engineering
                        </p>

                        <p
                            className="
                                mt-4
                                text-lg
                                leading-relaxed
                                text-slate-400
                            "
                        >
                            Currently seeking exciting opportunities and open to relocation across Bangalore, Hyderabad, Pune, and Mumbai. Passionate about coding and software engineering, with a strong desire to learn, build, and grow every day. Always ready to take ownership, embrace challenges, and contribute wherever impactful work is being done.
                        </p>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Stats />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}