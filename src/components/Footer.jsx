function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Jonathan Sakafu. Built with React &amp; Three.js.</p>
        <a href="#top" className="hover:text-white/70 transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
