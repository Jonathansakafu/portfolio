import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import TiltCard from "./TiltCard";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
    >
      <TiltCard className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 h-full flex flex-col overflow-hidden">
        {/* Soft glow in the project's accent color, revealed on hover */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
          style={{ background: project.accent }}
        />

        <div className="relative">
          <p className="text-sm font-medium mb-2" style={{ color: project.accent }}>
            {project.tagline}
          </p>
          <h3 className="font-display font-bold text-2xl mb-4">{project.name}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-auto flex items-center gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <GithubIcon size={16} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl mb-16 max-w-2xl"
        >
          A few things I've shipped
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
