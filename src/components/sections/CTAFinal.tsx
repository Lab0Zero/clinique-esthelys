"use client";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTAFinal() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 border-t border-border-light"
      id="contact"
    >
      <div className="container-site text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Votre première consultation{" "}
          <span className="italic">offerte</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 max-w-md mx-auto"
        >
          Rencontrez nos médecins et définissez ensemble votre protocole
          personnalisé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8"
        >
          <MagneticButton as="a" href="#contact" className="btn-light" strength={0.2}>
            Prendre rendez-vous
          </MagneticButton>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="mx-auto mt-16 h-[1px] w-24 bg-border-light origin-center"
        />
      </div>
    </section>
  );
}
