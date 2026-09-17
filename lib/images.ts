export const IMAGES = {
  logo: "/images/lumexforge-logo.png",
  hero: "/images/lumexforge-hero.jpg",
  og: "/images/og-image.jpg",
  appleTouchIcon: "/images/apple-touch-icon.png",
  favicon: "/images/favicon.png",
  products: {
    proteinsnap: "/images/lumexforge/LF-products/Products-PS.webp",
    proteinsnapWide: "/images/lumexforge/LF-products/Products-PS.webp",
    amora: "/images/lumexforge/LF-products/Products-AM.webp",
    ammora: "/images/lumexforge/LF-products/Products-AM.webp",
    kepaso: "/images/proteinsnaps/BG-3.webp",
    future: "/images/proteinsnaps/BG-1.webp",
    posthunt: "/images/lumexforge/LF-products/Products-PH.webp",
    mipaw: "/images/lumexforge/LF-products/Products-MP.webp",
    admina: "/images/lumexforge/LF-products/Products-Admina.webp",
  },
  proteinsnapMobile: "/images/proteinsnap-mobile.png",
  proteinsnapScreenshot2: "/images/proteinsnap-screenshot-2.jpg",
  kepasoArtwork2: "/images/proteinsnaps/BG-8.webp",
} as const;

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  proteinsnap: IMAGES.products.proteinsnap,
  amora: IMAGES.products.amora,
  ammora: IMAGES.products.ammora,
  kepaso: IMAGES.products.kepaso,
  future: IMAGES.products.future,
  posthunt: IMAGES.products.posthunt,
  mipaw: IMAGES.products.mipaw,
  admina: IMAGES.products.admina,
};

export const PRODUCT_FEATURED_IMAGE_MAP: Record<string, string> = {
  proteinsnap: IMAGES.products.proteinsnapWide,
};
