import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const timelineData = [
  {
    year: "2025-26",
    title: "Software Engineer",
    company: "Andolasoft .inc",
    url: "https://www.andolasoft.com",
    icon: BriefcaseBusiness,
    description:
      "Frontend Engineer specializing in React.js and Next.js, with 1.5+ years of experience delivering enterprise applications, business solutions, and customer-facing products. Skilled in building scalable UI architectures, API integrations, state management, performance optimization, and transforming complex requirements into intuitive user experiences.",
  },
  {
    year: "2024-25",
    title: "SDE Trainee",
    company: "Nirmalya Labs",
    url: "https://www.nirmalyalabs.com",
    icon: BriefcaseBusiness,
    description:
      "Developed and enhanced Inventory and Procurement modules for NERP, an enterprise ERP platform. Built reusable React components, integrated REST APIs, managed complex application state with Redux Toolkit, optimized performance, and delivered responsive user interfaces for business-critical workflows.",
  },
  {
    year: "Learning Phase",
    title: "Full Stack Engineering Journey",
    company: "Self Learning",
    url: "/",
    icon: GraduationCap,
    description:
      "Embarked on a self-driven journey to master modern web development through the MERN stack. Built full-stack applications, explored real-world development workflows, strengthened problem-solving abilities, and laid the foundation for a career focused on creating impactful digital products.",
  }
];

export default function Timeline() {
  return (
<div className="relative mx-auto max-w-3xl">

      {/* Vertical Line */}
      <div
        className="
          absolute
          left-5
          top-0
          h-full
          w-0.5
          bg-(--primary)
        "
      />

      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Icon */}
              <div
                className="
                  absolute
                  left-0
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-(--primary)
                  text-white
                "
              >
                <Icon size={18} />
              </div>

              {/* Card */}
              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/3
                  p-5
                  sm:p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-500/30
                  hover:bg-white/5
                "
              >
                <span
                  className="
                    text-sm
                    text-cyan-400
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

               <div className="group mt-1">
  <a
    href={item.url}
    // target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2
      text-violet-300
      transition-all
      duration-300
      hover:text-cyan-400
    "
  >
    <span>{item.company}</span>
    <ExternalLink
      size={14}
      className="
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
    />
  </a>
</div>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-slate-400
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}