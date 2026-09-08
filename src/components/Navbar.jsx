import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#05050a]/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          Jonathan<span className="gradient-text">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-white/70">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
