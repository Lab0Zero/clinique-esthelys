"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Traitements", href: "#traitements" },
  { label: "La Clinique", href: "#clinique" },
  { label: "Résultats", href: "#resultats" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-dark/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="relative z-50 font-serif text-2xl text-light tracking-wide">
            Esthelys
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-light-muted hover:text-light transition-colors duration-300">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="#contact" className="btn-dark text-[12px] py-2.5 px-5 min-h-[36px]">
              Rendez-vous
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex lg:hidden items-center justify-center w-11 h-11"
            aria-label="Menu" aria-expanded={mobileOpen}>
            <div className="flex flex-col justify-center items-center w-6 h-5">
              <span className={`block h-[1px] w-6 bg-light transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
              <span className={`block h-[1px] w-6 bg-light transition-all duration-300 mt-[7px] ${
                mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-dark lg:hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="font-serif text-[15vw] text-light/[0.03] leading-none tracking-tight">Esthelys</span>
            </div>
            <nav className="relative flex flex-col items-center justify-center h-full gap-1 px-5">
              {navLinks.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Link href={l.href} onClick={() => setMobileOpen(false)}
                    className="block py-3 font-serif text-4xl sm:text-5xl text-light hover:text-accent transition-colors duration-300">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }} className="mt-10">
                <Link href="#contact" onClick={() => setMobileOpen(false)} className="btn-dark">
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
