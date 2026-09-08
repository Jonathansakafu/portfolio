import { motion } from "framer-motion";
import { skills } from "../data/projects";

function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl mb-16"
        >
          Tools I reach for
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl border border-white/10 hover:border-violet-400/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
