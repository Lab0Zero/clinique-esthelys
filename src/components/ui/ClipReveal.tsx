"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "bottom" | "left" | "right" | "top";

const clipPaths: Record<Direction, { initial: string; animate: string }> = {
  bottom: { initial: "inset(100% 0 0 0)", animate: "inset(0% 0 0 0)" },
  top: { initial: "inset(0 0 100% 0)", animate: "inset(0 0 0 0)" },
  left: { initial: "inset(0 100% 0 0)", animate: "inset(0 0 0 0)" },
  right: { initial: "inset(0 0 0 100%)", animate: "inset(0 0 0 0)" },
};

export default function ClipReveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 1,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const clip = clipPaths[direction];

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: clip.initial }}
      whileInView={{ clipPath: clip.animate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Inner scale animation for zoom-out effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: duration + 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
