"use client";
import { useRef, useCallback, ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as: Tag = "button",
  href,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || "ontouchstart" in window) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  }, []);

  const props = {
    ref: ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>,
    className: `will-change-transform ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    ...(Tag === "a" ? { href } : {}),
  };

  return <Tag {...props}>{children}</Tag>;
}
