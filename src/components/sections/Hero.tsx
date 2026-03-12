"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── helpers ─────────────────────────────────────────────── */

/** Split a string into an array of characters (keeps spaces) */
function splitChars(text: string) {
  return text.split("");
}

/** Variants for the reveal curtain */
const curtain = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 },
  },
};

/** Container for staggered children */
const staggerContainer = (delayBase: number) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: 0.035, delayChildren: delayBase },
  },
});

/** Single character reveal — clip from bottom */
const charReveal = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ── component ───────────────────────────────────────────── */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* parallax transforms */
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const line1 = "L'art de la";
  const line2 = "beauté naturelle";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* ── Reveal curtain ── */}
      <motion.div
        variants={curtain}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-30 bg-bg origin-top"
      />

      {/* ── Background image with Ken Burns zoom-out ── */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 bg-dark-secondary"
      >
        {/* Ken Burns : starts zoomed-in, eases out */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-bg.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-bg" />
        </motion.div>

        {/* Cinematic vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,10,10,0.6) 100%)",
          }}
        />
      </motion.div>

      {/* ── Hero content ── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-24"
      >
        <div className="container-site">
          {/* Section number */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="section-number-light block mb-4"
          >
            001
          </motion.span>

          {/* ── Decorative accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="origin-left w-12 h-[1px] bg-accent mb-6"
          />

          {/* ── Title — letter by letter reveal ── */}
          <h1 className="max-w-[900px] text-light">
            {/* Line 1: "L'art de la" */}
            <motion.span
              variants={staggerContainer(1.5)}
              initial="initial"
              animate="animate"
              className="inline-flex flex-wrap overflow-hidden"
            >
              {splitChars(line1).map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={charReveal}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>

            <br />

            {/* Line 2: "beauté naturelle" — italic, delayed */}
            <motion.span
              variants={staggerContainer(1.9)}
              initial="initial"
              animate="animate"
              className="inline-flex flex-wrap overflow-hidden italic"
            >
              {splitChars(line2).map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  variants={charReveal}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* ── Subtitle ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.6,
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-6 max-w-[420px] text-light-secondary text-[15px] leading-relaxed"
          >
            Médecine esthétique à Paris. Des traitements sur-mesure pour
            sublimer votre beauté, avec élégance et discrétion.
          </motion.p>

          {/* ── CTA link ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.6 }}
            className="mt-8"
          >
            <a href="#traitements" className="link-arrow-light">
              Découvrir <span>→</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-6 right-5 sm:right-8 lg:right-12 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-light-muted rotate-90 origin-center translate-y-4">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-light-muted/30 relative overflow-hidden mt-6">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/3 bg-light-muted"
              animate={{ y: ["0%", "300%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
