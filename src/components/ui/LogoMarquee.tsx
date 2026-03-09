export default function LogoMarquee() {
  const logos = [
    "Allergan",
    "Galderma",
    "Filorga",
    "SkinCeuticals",
    "Obagi",
    "Teoxane",
  ];

  return (
    <div className="relative overflow-hidden py-4 sm:py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee items-center gap-8 sm:gap-10 md:gap-14">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-foreground-tertiary text-xs sm:text-sm font-semibold tracking-wide opacity-40 select-none whitespace-nowrap"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
