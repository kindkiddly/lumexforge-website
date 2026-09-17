import "./contact.css";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lf-contact">{children}</div>;
}
