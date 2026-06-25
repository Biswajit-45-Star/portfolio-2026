import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({
    project,
    onClose,
}) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                        fixed inset-0 z-100
                        flex items-center justify-center
                        bg-black/80
                        backdrop-blur-md
                        p-6
                    "
                >
                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        className="
                            max-h-[90vh]
                            w-full
                            max-w-4xl
                            overflow-auto
                            rounded-3xl
                            bg-[#0B1120]
                        "
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                                h-87.5
                                w-full
                                object-cover
                            "
                        />

                        <div className="p-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-4xl font-bold text-white">
                                    {project.title}
                                </h2>

                                <button
                                    onClick={onClose}
                                    className="text-white"
                                >
                                    <X />
                                </button>
                            </div>

                            <p className="mt-6 text-slate-400">
                                {project.longDescription}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}