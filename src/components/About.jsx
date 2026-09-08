import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full-stack by default",
    text: "Comfortable owning a product from database schema to deployed UI — frontend, backend, and everything wiring them together.",
  },
  {
    icon: Rocket,
    title: "AI-native products",
    text: "I build with LLMs as a core part of the product, not a bolt-on — retrieval-augmented generation, tool-calling, and real-time signal fusion.",
  },
  {
    icon: ShieldCheck,
    title: "Ships across platforms",
    text: "Web, native mobile (Capacitor/Android), and native desktop (.NET/C#) — picking the right platform for what the product actually needs.",
  },
];

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4">About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-2xl mb-16">
            I like building things that solve a real, specific problem —
            <span className="text-white/40"> then getting them in front of real users.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <Icon size={22} className="text-violet-400 mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
