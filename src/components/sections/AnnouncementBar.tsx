import Link from "next/link";

export default function AnnouncementBar({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block w-full bg-foreground text-white text-center
                 py-2.5 px-5 text-xs sm:text-sm font-medium
                 transition-colors hover:bg-foreground/90 group"
    >
      <span className="inline-flex items-center gap-2">
        {text}
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
