import "./products.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lf-products">{children}</div>;
}
