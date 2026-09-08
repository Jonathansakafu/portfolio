import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Hero3D from "./Hero3D";
import { contact } from "../data/projects";

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <Hero3D />
      {/* Radial vignette so text stays legible over the 3D scene regardless
          of where the blob/particles land behind it. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05050a_75%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-7xl leading-[1.05] mb-6"
        >
          Jonathan Sakafu
          <br />
          <span className="gradient-text">builds AI-powered</span>
          <br />
          products end to end.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg text-white/60 max-w-xl mb-10"
        >
          From AI trading platforms to endpoint security systems — I design,
          build, and ship full-stack applications across web, mobile, and
          native desktop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-[#05050a] font-semibold hover:bg-white/90 transition-colors"
          >
            View my work
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}

export default Hero;
