"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    setVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");
      setHovering(!!isInteractive);
    };

    const animate = () => {
      circlePos.current.x += (mouse.current.x - circlePos.current.x) * 0.1;
      circlePos.current.y += (mouse.current.y - circlePos.current.y) * 0.1;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePos.current.x - 20}px, ${circlePos.current.y - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    const raf = requestAnimationFrame(animate);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-fg mix-blend-difference transition-[width,height] duration-200"
        style={{ width: hovering ? 12 : 8, height: hovering ? 12 : 8 }}
      />
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border mix-blend-difference transition-[width,height,opacity] duration-300"
        style={{
          width: hovering ? 50 : 40,
          height: hovering ? 50 : 40,
          borderColor: hovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
          marginLeft: hovering ? -5 : 0,
          marginTop: hovering ? -5 : 0,
        }}
      />
    </>
  );
}
