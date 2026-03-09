"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    number: "002",
    title: "Injections & Volumétrie",
    description: "Botox, acide hyaluronique, profils harmonieux. Des résultats naturels pour sublimer chaque trait de votre visage.",
    linkText: "Explorer",
    href: "#traitements",
  },
  {
    number: "003",
    title: "Soins de la Peau",
    description: "Peelings, mésothérapie, skinboosters. Retrouvez un teint éclatant et une peau revitalisée en profondeur.",
    linkText: "Découvrir",
    href: "#traitements",
  },
];

export default function FeatureDuo() {
  return (
    <section className="py-20 sm:py-28 md:py-36" id="traitements">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature: f, index: i }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group ${i === 1 ? "md:mt-24" : ""}`}>
      <a href={f.href} className="block">
        <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-dark-secondary">
          <motion.div style={{ y: imgY }}
            className="absolute inset-[-15%] bg-dark-tertiary flex items-center justify-center">
            <span className="text-light-dim/30 text-sm tracking-widest uppercase">Image {i + 1}</span>
          </motion.div>
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
        </div>
        <div className="mt-5 sm:mt-6 md:mt-8 px-1">
          <span className="section-number">{f.number}</span>
          <h3 className="mt-2 text-light font-serif">{f.title}</h3>
          <p className="mt-3 max-w-sm text-light-secondary">{f.description}</p>
          <div className="mt-5">
            <span className="link-arrow text-[13px]">{f.linkText} <span>→</span></span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
