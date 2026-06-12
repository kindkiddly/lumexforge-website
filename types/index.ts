export type ProductStatus = "Launching" | "Coming Soon" | "In Development";

export interface Product {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
  href?: string;
  variant?: "proteinsnap" | "amora" | "kepaso" | "future";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BuildCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyCard {
  title: string;
  description: string;
}

export interface RoadmapItem {
  year: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
