// v2: every class used by the calculators lives here, so the developer can remap in one place.
// ps-* names below are the live site's OWN classes (from /_next/static/css/9308ac51e38e1c1c.css).
// Tailwind utilities were seen in the live HTML of /, /features, /how-it-works (see STYLE-ELEMENTS.md).
export const ui = {
  main: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28',
  hero: 'ps-page-hero',
  h1: 'font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1A1A]',
  h2: 'font-serif text-xl font-semibold text-[#1A1A1A] mt-10',
  lead: 'mt-4 text-base leading-relaxed text-[#555555]',
  body: 'mt-3 text-sm sm:text-base leading-relaxed text-[#555555]',
  link: 'font-semibold text-[#00B386] transition-colors hover:text-[#00E6A8]',
  card: 'ps-glass-panel ps-glow-card mt-8 p-6 sm:p-8',
  form: 'grid gap-4',
  row: 'grid grid-cols-2 gap-3',
  label: 'block text-sm font-semibold text-[#1A1A1A]',
  fieldset: 'grid gap-2',
  legend: 'text-sm font-semibold text-[#1A1A1A]',
  radio: 'inline-flex items-center gap-2 text-sm text-[#555555]',
  // developer to map: the live site has no styled form inputs; these use only site colors.
  input: 'mt-1 w-full rounded-[20px] border border-black/10 bg-white/60 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#555555]/60 focus:border-[#00B386] focus:outline-none',
  select: 'mt-1 w-full rounded-[20px] border border-black/10 bg-white/60 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#555555]/60 focus:border-[#00B386] focus:outline-none',
  toggle: 'inline-flex flex-wrap gap-2',
  toggleOn: 'ps-play-button inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold',
  toggleOff: 'ps-pill',
  button: 'ps-btn solid ps-glow-button w-full sm:w-auto',
  result: 'ps-blog-quick-answer mt-6 block',
  big: 'font-serif text-3xl font-semibold text-[#1A1A1A]',
  note: 'mt-3 text-xs leading-relaxed text-[#555555]',
  // developer to map: closest live colors are .bg-red-500/10 and .text-red-600 (410eaed6f992b30e.css).
  error: 'mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-600',
  cta: 'ps-glass-panel mt-6 p-6',
  ctaButtons: 'mt-4 flex flex-wrap gap-3',
  appStore: 'ps-appstore-button inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2 text-sm',
  playStore: 'ps-play-button inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-[#0A0A0A]',
  formula: 'ps-blog-calc',
  faq: 'ps-blog-faq',
  faqItem: 'ps-blog-faq-item',
  sources: 'ps-blog-sources-list mt-3 text-sm text-[#555555]',
  disclaimer: 'ps-blog-disclaimer',
} as const;
export const PRICING = 'Free to download. Premium is $9.99/month or $59.99/year.';
export const IOS = 'https://apps.apple.com/us/app/proteinsnaps/id6801353318';
export const ANDROID = 'https://play.google.com/store/apps/details?id=com.proteinsnap.app';
