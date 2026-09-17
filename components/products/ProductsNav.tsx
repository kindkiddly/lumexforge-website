"use client";

import { useEffect, useState } from "react";

type NavProduct = {
  id: string;
  indexLabel: string;
  name: string;
};

export function ProductsNav({ products }: { products: NavProduct[] }) {
  const [activeId, setActiveId] = useState(products[0]?.id ?? "");

  useEffect(() => {
    const nodes = products
      .map((p) => document.getElementById(p.id))
      .filter(Boolean) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // product list is static for the page lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="lf-prod-nav-wrap" aria-label="Jump to product">
      <div className="lf-prod-nav">
        {products.map((product) => (
          <a
            key={product.id}
            href={`#${product.id}`}
            className={`lf-prod-nav-chip${activeId === product.id ? " is-active" : ""}`}
          >
            <span className="lf-prod-nav-num">{product.indexLabel}</span>
            {product.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
