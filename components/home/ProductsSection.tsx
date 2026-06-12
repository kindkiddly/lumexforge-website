import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { PRODUCTS } from "@/lib/constants";

export function ProductsSection() {
  const homeProducts = PRODUCTS.filter((p) => p.id !== "future");

  return (
    <Section id="products">
      <SectionHeader
        eyebrow="Ecosystem"
        title="Products"
        description="A growing ecosystem of innovative digital products."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homeProducts.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
