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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
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
                        className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl bg-[#0B1120]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-56 w-full object-cover sm:h-72 md:h-80"
                        />

                        <div className="p-5 sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                    {project.title}
                                </h2>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close project details"
                                    className="text-white"
                                >
                                    <X />
                                </button>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base">
                                {project.longDescription}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}