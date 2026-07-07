import { motion } from "framer-motion";
import {
  Download,
  ArrowUp,
  User,
  Briefcase,
  MessageSquare,
  FolderKanban,
  GitBranch,
  LucideNetwork,
  MailIcon,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050812]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I'm currently open to freelance projects, internships,
            full-time opportunities and exciting collaborations.
            If you have an idea, let's make it happen together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-(--primary) text-white font-semibold transition hover:scale-105"
            >
              Hire Me
            </a>

            <a
              href="https://drive.google.com/file/d/1yLD6r21taJT3r-t0l0dLWiVJ_8oaWAnM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:border-(--primary) transition"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Biswajit Sahu
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Full Stack MERN Developer passionate about building modern,
              scalable and user-friendly web applications with clean UI
              and excellent user experience.
            </p>

            <p className="mt-5 text-slate-500">
              📍 Odisha, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>

            <div className="space-y-4">

              <a
                href="#about"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <User size={18} />
                About
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <FolderKanban size={18} />
                Projects
              </a>

              <a
                href="#experience"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <Briefcase size={18} />
                Experience
              </a>

              <a
                href="#feedback"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <MessageSquare size={18} />
                Feedback
              </a>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Let's Connect
            </h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/Biswajit-45-Star"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-(--primary) hover:text-(--primary) transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/biswajit-sahu-b8b79b281/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-(--primary) hover:text-(--primary) transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:work.biswajitsahu@gmail.com"
                className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-(--primary) hover:text-(--primary) transition"
              >
                <MailIcon size={20} />
              </a>

            </div>

            <p className="mt-6 text-sm leading-6 text-slate-400">
              Enjoyed exploring my portfolio?
              I'd really appreciate your feedback.
              Every suggestion helps me improve future releases.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {year} Biswajit Sahu. Built with React, Vite & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
