import { ContactShowcase } from "@/components/contact/ContactShowcase";
import { contactMetadata } from "@/lib/metadata";

export const metadata = contactMetadata;

export default function ContactPage() {
  return <ContactShowcase />;
}
