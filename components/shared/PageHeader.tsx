import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

function withItalicEmphasis(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <em>{text}</em>;
  }
  const last = words.pop()!;
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
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
      <h1 className="heading-section font-bold lg:text-5xl">
        {withItalicEmphasis(title)}
      </h1>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl font-sans text-lg font-normal leading-[1.7] text-foreground-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
