"use client";

export default function SocialBar() {
  return (
    <div className="fixed bottom-6 left-5 sm:left-8 lg:left-12 z-30 flex flex-col gap-4">
      {["Ig", "Fb", "Yt"].map((icon) => (
        <a
          key={icon}
          href="#"
          className="text-[11px] font-medium tracking-widest text-fg-dim hover:text-fg transition-colors duration-300 uppercase"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
