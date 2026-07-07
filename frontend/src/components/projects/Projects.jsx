import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectShowcase from "./ProjectShowcase";
import employe_mangement_image from "../../assets/employee-management.avif"
import e_commerce_image from "../../assets/e-commerce-platform.avif"


const projects = [
    {
        id: 1,
        title: "Employee Management",
        description:
            "Employee management platform.",
        longDescription:
            "Complete employee management application with authentication, dashboard and reporting features.",
        image: employe_mangement_image,
        tech: [
            "React",
            "Node",
            "MongoDB",
        ],
        github: "#",
        live: "#",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description:
            "Modern shopping application.",
        longDescription:
            "Full MERN stack ecommerce application.",
        image: e_commerce_image,
        tech: [
            "React",
            "Express",
            "MongoDB",
        ],
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] =
        useState(null);

    return (
        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center sm:mb-16">
                    <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
                        Projects
                    </h2>

                    <p className="mt-4 text-base text-slate-400 sm:text-lg">
                        Selected work and
                        engineering solutions.
                    </p>
                </div>

                <ProjectShowcase />

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={
                                setSelectedProject
                            }
                        />
                    ))}
                </div>

                <ProjectModal
                    project={selectedProject}
                    onClose={() =>
                        setSelectedProject(null)
                    }
                />
            </div>
        </section>
    );
}