import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
    project,
    onSelect,
}) {
    return (
        <motion.div
            whileHover={{
                y: -10,
            }}
            onClick={() => onSelect(project)}
            className="group h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl"
        >
            <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64" />
            </div>

            <div className="flex h-full flex-col p-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="
                                rounded-full
                                bg-violet-500/10
                                px-3
                                py-1
                                text-xs
                                text-violet-300
                            "
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}