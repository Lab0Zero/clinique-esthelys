"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-border-dark"
      id="contact"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-20%] bg-dark-secondary"
      >
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-light-dim/20 text-sm tracking-widest uppercase">
            Photo clinique
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-number">009</span>
          <h2 className="mt-4 text-light max-w-2xl mx-auto">
            Votre première consultation{" "}
            <span className="italic">offerte</span>
          </h2>
          <p className="mt-5 text-light-secondary max-w-md mx-auto">
            Rencontrez nos médecins et définissez ensemble votre protocole
            personnalisé.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-light">
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
