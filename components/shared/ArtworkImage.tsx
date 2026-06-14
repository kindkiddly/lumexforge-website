import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArtworkImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
}

const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

export function ArtworkImage({
  src,
  alt,
  className,
  priority = false,
  fit = "cover",
  sizes = DEFAULT_SIZES,
}: ArtworkImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={cn(
        fit === "cover" ? "object-cover object-center" : "object-contain object-center",
        className
      )}
      priority={priority}
    />
  );
}
