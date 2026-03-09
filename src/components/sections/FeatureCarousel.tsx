"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  number: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  quote: { text: string; author: string; role: string };
}

const slides: Slide[] = [
  {
    number: "004",
    title: "Botox & Toxine Botulique",
    description:
      "Traitement de référence pour lisser les rides d'expression. Résultat naturel, visage détendu et rajeuni.",
    stat: { value: "15 000+", label: "Injections réalisées" },
    quote: {
      text: "Un résultat bluffant de naturel. Mes rides du front ont disparu et personne ne s'en est rendu compte.",
      author: "Sophie M.",
      role: "Patiente depuis 2022",
    },
  },
  {
    number: "005",
    title: "Acide Hyaluronique",
    description:
      "Restaurez les volumes, redessinez les contours du visage et repulpez les lèvres.",
    stat: { value: "98%", label: "Taux de satisfaction" },
    quote: {
      text: "Le Dr. a su sublimer mes lèvres tout en gardant un résultat très naturel.",
      author: "Camille L.",
      role: "Patiente depuis 2023",
    },
  },
  {
    number: "006",
    title: "Skinboosters & Mésothérapie",
    description:
      "Hydratation profonde, éclat retrouvé, peau lissée. Des protocoles personnalisés.",
    stat: { value: "30 min", label: "Durée moyenne" },
    quote: {
      text: "Après 3 séances, ma peau a complètement changé. Plus lumineuse, plus lisse.",
      author: "Marie D.",
      role: "Patiente depuis 2024",
    },
  },
];

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section className="py-20 sm:py-28 md:py-36 border-t border-border-dark">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="section-number">{slide.number}</span>
                <h2 className="mt-3 text-light">{slide.title}</h2>
                <p className="mt-4 max-w-md text-light-secondary leading-relaxed">
                  {slide.description}
                </p>

                {/* Stat */}
                <div className="mt-10 sm:mt-14">
                  <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-light leading-none">
                    {slide.stat.value}
                  </p>
                  <p className="mt-2 text-sm text-light-muted uppercase tracking-wider">
                    {slide.stat.label}
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-10 pt-6 border-t border-border-dark">
                  <p className="text-[15px] text-light-secondary italic leading-relaxed">
                    &ldquo;{slide.quote.text}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-medium text-light">
                    —{slide.quote.author}
                  </p>
                  <p className="text-xs text-light-muted">{slide.quote.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6 }}
                className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-dark-secondary relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-light-dim/30 text-sm tracking-widest uppercase">
                    Image {active + 1}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots — Redbone style: line active, dots inactive */}
        <div className="flex items-center gap-3 mt-10 sm:mt-14">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === active
                  ? "w-10 bg-light"
                  : "w-3 bg-light-dim hover:bg-light-muted"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
