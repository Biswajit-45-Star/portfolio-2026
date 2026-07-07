import { motion } from "framer-motion";
import enterprise_dashboard_image from "../../assets/enterprise-dashboard.avif"


export default function ProjectShowcase() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            className="mb-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/3 sm:mb-16 sm:rounded-[40px]"
        >
            <div className="grid lg:grid-cols-2">

                <img src={enterprise_dashboard_image} alt="Featured" className="h-60 w-full object-cover sm:h-72" />

                <div className="p-6 sm:p-8 lg:p-10">
                    <span className="text-(--primary)">
                        Featured Project
                    </span>

                    <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                        Enterprise Dashboard
                    </h2>

                    <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                        A scalable enterprise dashboard
                        built using React, REST APIs,
                        reusable architecture and
                        modern UI patterns.
                    </p>

                    <div className="mt-6 flex gap-3 flex-wrap">
                        {[
                            "React",
                            "JavaScript",
                            "REST API",
                            "Tailwind",
                        ].map((item) => (
                            <span
                                key={item}
                                className="
                                    rounded-full
                                    bg-cyan-500/10
                                    px-3 py-1
                                    text-(--primary)
                                "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}