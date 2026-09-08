import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact } from "../data/projects";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "jonathan-sakafu",
    href: contact.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "jonathansakafu",
    href: contact.github,
  },
];

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-4xl sm:text-5xl mb-6"
        >
          Let's build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/55 mb-14 max-w-lg mx-auto"
        >
          Open to freelance work, collaborations, or just talking shop about
          AI products. Reach out on whichever of these you use most.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-violet-400/40 hover:bg-white/[0.06] transition-colors text-left"
            >
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                <c.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-white/45">{c.label}</p>
                <p className="font-medium">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
