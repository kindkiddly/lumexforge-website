import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={cn(
        "mb-14 sm:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4">{eyebrow}</p>
      )}
      <h2 className="heading-section">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed text-foreground-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
