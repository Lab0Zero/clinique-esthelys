import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "16/11" | "16/10" | "4/3" | "3/4" | "1/1";
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = "16/10",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
  priority = false,
  className = "",
}: ResponsiveImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-image ${className}`}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
