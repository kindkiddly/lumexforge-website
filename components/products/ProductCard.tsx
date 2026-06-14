"use client";

import { ArtworkImage } from "@/components/shared/ArtworkImage";
import { Badge } from "@/components/ui/Badge";
import { PRODUCT_IMAGE_MAP } from "@/lib/images";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
}

export function ProductCard({ product, className, featured = false }: ProductCardProps) {
  const imageSrc = PRODUCT_IMAGE_MAP[product.id] || PRODUCT_IMAGE_MAP.future;

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 shine",
        "hover:border-white/[0.12] hover:bg-white/[0.04]",
        featured && "lg:col-span-2",
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-background-secondary",
          featured ? "aspect-[21/9] sm:aspect-[2.2/1]" : "aspect-[16/10]"
        )}
      >
        <ArtworkImage
          src={imageSrc}
          alt={`${product.name} artwork`}
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <Badge status={product.status} />
          {product.status === "Launching" && (
            <span className="hidden text-xs font-medium text-success sm:block">
              Launching 2026
            </span>
          )}
        </div>
      </div>

      <div className={cn("p-6 sm:p-7", featured && "sm:p-8")}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={cn(
                "font-semibold tracking-tight text-foreground",
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {product.name}
            </h3>
            <p
              className={cn(
                "mt-2 leading-relaxed text-foreground-secondary",
                featured ? "text-base max-w-2xl" : "text-sm"
              )}
            >
              {product.description}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-all duration-300 group-hover:text-accent-secondary"
        >
          Learn More
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
