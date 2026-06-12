import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: PageHeaderProps) {
  return (
    <AnimatedSection
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="heading-section lg:text-5xl">{title}</h1>
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
