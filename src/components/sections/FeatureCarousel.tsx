"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Slide {
  title: string;
  description: string;
  image: string;
  stat: { value: string; label: string };
  quote: { text: string; author: string; role: string };
}

const slides: Slide[] = [
  {
    title: "Botox & Toxine Botulique",
    description:
      "Traitement de référence pour lisser les rides d'expression. Résultat naturel, visage détendu et rajeuni.",
    image: "/images/botox.jpg",
    stat: { value: "15 000+", label: "Injections réalisées" },
    quote: {
      text: "Un résultat bluffant de naturel. Mes rides du front ont disparu et personne ne s'en est rendu compte.",
      author: "Sophie M.",
      role: "Patiente depuis 2022",
    },
  },
  {
    title: "Acide Hyaluronique",
    description:
      "Restaurez les volumes, redessinez les contours du visage et repulpez les lèvres.",
    image: "/images/hyaluronique.jpg",
    stat: { value: "98%", label: "Taux de satisfaction" },
    quote: {
      text: "Le Dr. a su sublimer mes lèvres tout en gardant un résultat très naturel.",
      author: "Camille L.",
      role: "Patiente depuis 2023",
    },
  },
  {
    title: "Skinboosters & Mésothérapie",
    description:
      "Hydratation profonde, éclat retrouvé, peau lissée. Des protocoles personnalisés.",
    image: "/images/skinboosters.jpg",
    stat: { value: "30 min", label: "Durée moyenne" },
    quote: {
      text: "Après 3 séances, ma peau a complètement changé. Plus lumineuse, plus lisse.",
      author: "Marie D.",
      role: "Patiente depuis 2024",
    },
  },
];

const AUTOPLAY_MS = 3000;

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-play every 3 seconds, pause on hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="py-20 sm:py-28 md:py-36 border-t border-border-light"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-site">
        <ScrollReveal>
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
                  <h2>{slide.title}</h2>
                  <p className="mt-4 max-w-md leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Stat */}
                  <div className="mt-10 sm:mt-14">
                    <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-fg leading-none font-bold" style={{ letterSpacing: "-0.03em" }}>
                      {slide.stat.value}
                    </p>
                    <p className="mt-2 text-sm text-fg-muted uppercase tracking-wider">
                      {slide.stat.label}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="mt-10 pt-6 border-t border-border-light">
                    <p className="text-[15px] text-fg-secondary italic leading-relaxed">
                      &ldquo;{slide.quote.text}&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-medium text-fg">
                      —{slide.quote.author}
                    </p>
                    <p className="text-xs text-fg-muted">{slide.quote.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — image with clip-path transition + grayscale→color on hover */}
            <div className="relative overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  animate={{ clipPath: "inset(0 0 0 0)" }}
                  exit={{ clipPath: "inset(100% 0 0 0)" }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover grayscale transition-all duration-700 lg:group-hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots with progress bar */}
          <div className="flex items-center gap-3 mt-10 sm:mt-14">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative h-[2px] rounded-full transition-all duration-500 overflow-hidden ${
                  i === active
                    ? "w-10 bg-fg-dim"
                    : "w-3 bg-fg-dim hover:bg-fg-muted"
                }`}
                aria-label={`Slide ${i + 1}`}
              >
                {i === active && !paused && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-fg rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    key={`progress-${active}`}
                  />
                )}
                {i === active && paused && (
                  <div className="absolute inset-0 bg-fg rounded-full" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
