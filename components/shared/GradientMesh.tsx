import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  variant?: "hero" | "section" | "cta";
}

export function GradientMesh({ className, variant = "section" }: GradientMeshProps) {
  const variants = {
    hero: (
      <>
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-hero-glow-cyan" />
        <div className="absolute inset-0 mesh-grid opacity-60" />
      </>
    ),
    section: (
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.04] via-transparent to-transparent" />
    ),
    cta: (
      <>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/15 via-transparent to-accent-secondary/10" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/10 blur-[100px]" />
      </>
    ),
  };

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden="true">
      {variants[variant]}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
