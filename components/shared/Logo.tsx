import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md";
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { img: 32, className: "h-8 w-8" },
  md: { img: 44, className: "h-10 w-10 sm:h-11 sm:w-11" },
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const { img, className: imgClass } = sizes[size];

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 transition-opacity hover:opacity-90", className)}
    >
      <Image
        src={IMAGES.logo}
        alt={`${SITE_NAME} logo`}
        width={img}
        height={img}
        className={cn(imgClass, "object-contain")}
        priority
      />
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          {SITE_NAME}
        </span>
      )}
    </Link>
  );
}
