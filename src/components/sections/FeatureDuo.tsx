"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ClipReveal from "@/components/ui/ClipReveal";

const features = [
  {
    title: "Injections &\nVolumétrie",
    description: "Botox, acide hyaluronique, profils harmonieux. Des résultats naturels pour sublimer chaque trait de votre visage.",
    linkText: "Explorer",
    href: "#traitements",
    image: "/images/injections.jpg",
  },
  {
    title: "Soins de\nla Peau",
    description: "Peelings, mésothérapie, skinboosters. Retrouvez un teint éclatant et une peau revitalisée en profondeur.",
    linkText: "Découvrir",
    href: "#traitements",
    image: "/images/skincare.jpg",
  },
];

export default function FeatureDuo() {
  return (
    <section className="py-20 sm:py-28 md:py-36" id="traitements">
      <div className="container-site flex flex-col gap-24 sm:gap-32 md:gap-40">
        {features.map((f, i) => (
          <FeatureRow key={f.title} feature={f} index={i} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ feature: f, index: i, reversed }: { feature: (typeof features)[0]; index: number; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
      {/* Title block — staggered reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`lg:col-span-3 flex flex-col justify-start pt-4 ${reversed ? "lg:order-3" : "lg:order-1"}`}
      >
        <h2 className="whitespace-pre-line">{f.title}</h2>
      </motion.div>

      {/* Large center image — clip-path reveal */}
      <div className="lg:col-span-6 lg:order-2">
        <a href={f.href} className="block group">
          <ClipReveal direction={reversed ? "left" : "bottom"} delay={0.1} duration={1.1}>
            <div className="relative aspect-[3/4] sm:aspect-[4/5]">
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <Image src={f.image} alt={f.title} fill className="object-cover grayscale transition-all duration-700 lg:group-hover:grayscale-0" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
              </motion.div>
            </div>
          </ClipReveal>
        </a>
      </div>

      {/* Description block — staggered reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={`lg:col-span-3 flex flex-col justify-start pt-4 ${reversed ? "lg:order-1" : "lg:order-3"}`}
      >
        <p className="max-w-sm">{f.description}</p>
        <div className="mt-5">
          <a href={f.href} className="link-arrow text-[13px]">{f.linkText} <span>→</span></a>
        </div>
      </motion.div>
    </div>
  );
}
