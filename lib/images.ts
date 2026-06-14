export const IMAGES = {
  logo: "/images/lumexforge-logo.png",
  hero: "/images/lumexforge-hero.jpg",
  og: "/images/og-image.jpg",
  appleTouchIcon: "/images/apple-touch-icon.png",
  favicon: "/images/favicon.png",
  products: {
    proteinsnap: "/images/proteinsnap-hero.jpg",
    proteinsnapWide: "/images/proteinsnap-hero-wide.jpg",
    amora: "/images/amora-artwork.jpg",
    kepaso: "/images/kepaso-artwork.jpg",
    future: "/images/future-products-artwork.jpg",
  },
  proteinsnapMobile: "/images/proteinsnap-mobile.png",
  proteinsnapScreenshot2: "/images/proteinsnap-screenshot-2.jpg",
} as const;

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  proteinsnap: IMAGES.products.proteinsnap,
  amora: IMAGES.products.amora,
  kepaso: IMAGES.products.kepaso,
  future: IMAGES.products.future,
};

export const PRODUCT_FEATURED_IMAGE_MAP: Record<string, string> = {
  proteinsnap: IMAGES.products.proteinsnapWide,
};
