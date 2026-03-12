"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stories = [
  {
    name: "Isabelle R.",
    treatment: "Rajeunissement visage",
    quote:
      "J'avais des complexes sur mes rides du lion depuis des années. En une seule séance de Botox, mon regard s'est ouvert. Le résultat est tellement naturel que mes collègues pensent juste que j'ai bien dormi.",
    year: "Patiente depuis 2021",
  },
  {
    name: "Camille L.",
    treatment: "Lèvres sublimées",
    quote:
      "Des lèvres repulpées sans le moindre effet artificiel. Le Dr a parfaitement compris ce que je voulais.",
    year: "Patiente depuis 2023",
  },
  {
    name: "Nathalie K.",
    treatment: "Éclat retrouvé",
    quote:
      "Les skinboosters ont transformé la qualité de ma peau. Tout le monde me demande mon secret beauté.",
    year: "Patiente depuis 2024",
  },
];

export default function CustomerStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className="py-20 sm:py-28 md:py-36 border-t border-border-light" id="resultats">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — featured quote */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2>
                Nos patientes{" "}
                <span className="italic">témoignent</span>
              </h2>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-10 sm:mt-14"
              >
                {/* Large quote mark */}
                <div className="font-serif text-6xl sm:text-7xl text-fg-dim/30 leading-none select-none mb-2">&ldquo;</div>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-fg leading-snug max-w-2xl -mt-8">
                  {story.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-[1px] h-8 bg-border-light" />
                  <div>
                    <p className="text-sm font-medium text-fg">
                      {story.name}
                    </p>
                    <p className="text-xs text-fg-muted">{story.year}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — story list */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            {stories.map((s, i) => (
              <motion.button
                key={s.name}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full text-left py-5 border-t border-border-light transition-all duration-300 group ${
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-fg">
                      {s.treatment}
                    </p>
                    <p className="mt-1 text-xs text-fg-muted">{s.name}</p>
                  </div>
                  <motion.span
                    animate={{ x: i === active ? 4 : 0 }}
                    className="text-fg-dim group-hover:text-fg transition-colors duration-300"
                  >
                    →
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
