"use client";
import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "framer-motion";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    function update(data: { timestamp: number }) {
      lenis.raf(data.timestamp);
    }

    // Sync Lenis with Framer Motion's frame loop for smooth animations
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
