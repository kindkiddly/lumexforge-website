import { ProductsShowcase } from "@/components/products/ProductsShowcase";
import { productsMetadata } from "@/lib/metadata";

export const metadata = productsMetadata;

export default function ProductsPage() {
  return <ProductsShowcase />;
}
