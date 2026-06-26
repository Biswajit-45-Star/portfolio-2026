import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        py-32
        px-6
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="
              rounded-full
              border
              border-(--primary)
              bg-violet-500/10
              px-4
              py-2
              text-sm
              text-(--primary)
            "
          >
            My Journey
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
            Professional
            <span
              className="
                block
                bg-(--primary)
                bg-clip-text
                text-transparent
              "
            >
              Experience
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-slate-400
            "
          >
            My journey from learning web
            development to building scalable
            frontend applications and MERN stack
            projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20">
          <Timeline />
        </div>

      </div>
    </section>
  );
}