"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 bg-dark-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-light-dim/30 text-sm tracking-widest uppercase">Photo hero</span>
        </div>
      </motion.div>

      <motion.div style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-24">
        <div className="container-site">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }} className="section-number block mb-4">
            001
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[900px] text-light">
            L&apos;art de la<br /><span className="italic">beauté naturelle</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 max-w-[420px] text-light-secondary text-[15px] leading-relaxed">
            Médecine esthétique à Paris. Des traitements sur-mesure
            pour sublimer votre beauté, avec élégance et discrétion.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }} className="mt-8">
            <a href="#traitements" className="link-arrow">Découvrir <span>→</span></a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 right-5 sm:right-8 lg:right-12 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-light-muted rotate-90 origin-center translate-y-4">Scroll</span>
          <div className="w-[1px] h-12 bg-light-muted/30 relative overflow-hidden mt-6">
            <motion.div className="absolute top-0 left-0 w-full h-1/3 bg-light-muted"
              animate={{ y: ["0%", "300%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
