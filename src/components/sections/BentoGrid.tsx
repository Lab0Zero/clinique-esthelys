"use client";
import { motion } from "framer-motion";

const items = [
  { title: "Médecins experts", description: "Une équipe formée aux techniques les plus avancées de la médecine esthétique." },
  { title: "Protocoles personnalisés", description: "Chaque traitement est adapté à votre morphologie, votre peau et vos attentes." },
  { title: "Résultats naturels", description: "Notre philosophie : sublimer sans transformer. Toujours avec élégance." },
];

export default function BentoGrid() {
  return (
    <section className="py-20 sm:py-28 md:py-36 border-t border-border-dark" id="clinique">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="aspect-[3/4] bg-dark-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-light-dim/30 text-sm tracking-widest uppercase">La Clinique</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <span className="section-number">007</span>
              <h2 className="mt-3 text-light">
                L&apos;expertise au service<br /><span className="italic">de votre beauté</span>
              </h2>
              <p className="mt-5 max-w-md text-light-secondary">
                Une clinique d&apos;exception au cœur de Paris, dédiée à la médecine esthétique haut de gamme.
              </p>
            </motion.div>

            <div className="mt-12 sm:mt-16 flex flex-col gap-0">
              {items.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="py-6 border-t border-border-dark group">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-light font-serif text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-light-muted max-w-sm">{item.description}</p>
                    </div>
                    <span className="text-light-dim group-hover:text-light transition-colors duration-300 mt-1 shrink-0">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
