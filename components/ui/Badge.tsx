import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/types";

interface BadgeProps {
  status: ProductStatus;
  className?: string;
}

const statusStyles: Record<ProductStatus, string> = {
  Launching: "bg-success/10 text-success border-success/20",
  "Coming Soon": "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
  "In Development": "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
};

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
