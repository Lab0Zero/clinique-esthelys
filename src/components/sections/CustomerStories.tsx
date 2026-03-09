"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-20 sm:py-28 md:py-36 border-t border-border-dark" id="resultats">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — featured quote */}
          <div className="lg:col-span-3">
            <span className="section-number">008</span>
            <h2 className="mt-3 text-light">
              Nos patientes{" "}
              <span className="italic">témoignent</span>
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-10 sm:mt-14"
              >
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-light leading-snug max-w-2xl">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-tertiary" />
                  <div>
                    <p className="text-sm font-medium text-light">
                      {story.name}
                    </p>
                    <p className="text-xs text-light-muted">{story.year}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — story list */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            {stories.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`w-full text-left py-5 border-t border-border-dark transition-all duration-300 group ${
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <p className="text-sm font-medium text-light">
                  {s.treatment}
                </p>
                <p className="mt-1 text-xs text-light-muted">{s.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
