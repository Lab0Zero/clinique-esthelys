"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ClipReveal from "@/components/ui/ClipReveal";

const items = [
  { title: "Médecins experts", description: "Une équipe formée aux techniques les plus avancées de la médecine esthétique." },
  { title: "Protocoles personnalisés", description: "Chaque traitement est adapté à votre morphologie, votre peau et vos attentes." },
  { title: "Résultats naturels", description: "Notre philosophie : sublimer sans transformer. Toujours avec élégance." },
];

export default function BentoGrid() {
  return (
    <section className="py-20 sm:py-28 md:py-36 border-t border-border-light" id="clinique">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ClipReveal direction="left" delay={0.1} duration={1.2}>
            <div className="aspect-[3/4] relative overflow-hidden group">
              <Image src="/images/clinique.jpg" alt="Clinique Esthelys" fill className="object-cover grayscale transition-all duration-700 lg:group-hover:grayscale-0" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
            </div>
          </ClipReveal>

          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <h2>
                L&apos;expertise au service<br /><span className="italic">de votre beauté</span>
              </h2>
              <p className="mt-5 max-w-md">
                Une clinique d&apos;exception au cœur de Paris, dédiée à la médecine esthétique haut de gamme.
              </p>
            </motion.div>

            <div className="mt-12 sm:mt-16 flex flex-col gap-0">
              {items.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="py-6 border-t border-border-light group">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-fg-muted max-w-sm">{item.description}</p>
                    </div>
                    <span className="text-fg-dim group-hover:text-fg transition-colors duration-300 mt-1 shrink-0">→</span>
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
