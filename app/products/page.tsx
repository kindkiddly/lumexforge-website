import { ProductCard } from "@/components/products/ProductCard";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { PageHeader } from "@/components/shared/PageHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/constants";
import { productsMetadata } from "@/lib/metadata";

export const metadata = productsMetadata;

export default function ProductsPage() {
  const featured = PRODUCTS[0];
  const rest = PRODUCTS.slice(1);

  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
      <GradientMesh variant="section" className="top-0 h-[50vh]" />

      <Container>
        <PageHeader
          eyebrow="Ecosystem"
          title="Products"
          description="A growing ecosystem of software, AI solutions, automation systems, and digital experiences."
        />

        <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-2">
          <StaggerItem className="lg:col-span-2">
            <div id={featured.id}>
              <ProductCard product={featured} featured />
            </div>
          </StaggerItem>

          {rest.map((product) => (
            <StaggerItem key={product.id}>
              <div id={product.id}>
                <ProductCard product={product} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
