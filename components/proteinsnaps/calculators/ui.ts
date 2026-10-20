// Every class used by the calculators lives here, so styling is remapped in one place.
// Glass look = the site's own glass-panel values written as utilities (the shared .ps-glass-panel turns dark on mobile).
// Colors/fonts: cream theme, #1A1A1A / #555555 text, mint #00E6A8 / #00B386, cyan #00C2FF, Playfair + Inter.
const glass =
  'rounded-[20px] border border-white/70 bg-white/45 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]';
const glow =
  'transition-all duration-300 hover:border-[#00E6A8]/35 hover:shadow-[0_0_32px_-8px_rgba(0,230,168,0.35),0_0_48px_-12px_rgba(0,194,255,0.25)]';
const field =
  'mt-1 w-full rounded-[20px] border border-black/10 bg-white/60 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#555555]/60 focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/30';
const pill =
  'inline-flex cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1A1A1A] transition-all hover:border-[#00B386]/60';
const pillOn =
  '!border-[#00B386] !bg-[#00E6A8]/25 font-semibold shadow-[0_0_16px_-6px_rgba(0,230,168,0.7)]';

export const ui = {
  // page
  main: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-28 lg:pb-10',
  hero: 'ps-page-hero',
  heroGrid: 'grid items-center gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10',
  heroImage: 'relative hidden aspect-[4/3] overflow-hidden rounded-[20px] border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:block',
  h1: 'font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]',
  h2: 'font-serif text-xl sm:text-2xl font-semibold text-[#1A1A1A] mt-12',
  lead: 'mt-4 text-base leading-relaxed text-[#555555]',
  body: 'mt-3 text-sm sm:text-base leading-relaxed text-[#555555]',
  link: 'font-semibold text-[#00B386] transition-colors hover:text-[#00E6A8]',
  prose: 'mx-auto max-w-4xl',
  // layout
  grid: 'mt-8 grid gap-6 lg:grid-cols-2 lg:items-start',
  card: `${glass} ${glow} p-5 sm:p-7`,
  resultCard: `${glass} p-5 sm:p-7 lg:sticky lg:top-24`,
  cardTitle: 'font-serif text-lg font-semibold text-[#1A1A1A]',
  form: 'mt-4 grid gap-5',
  row: 'grid grid-cols-2 gap-3',
  // form controls
  label: 'block text-sm font-semibold text-[#1A1A1A]',
  fieldset: 'grid gap-2',
  legend: 'text-sm font-semibold text-[#1A1A1A]',
  hint: 'text-xs font-normal text-[#555555]',
  input: field,
  select: field,
  pillGroup: 'mt-2 flex flex-wrap gap-2',
  pill,
  pillOn,
  pillRadio: `${pill} has-[:checked]:!border-[#00B386] has-[:checked]:!bg-[#00E6A8]/25 has-[:checked]:font-semibold has-[:checked]:shadow-[0_0_16px_-6px_rgba(0,230,168,0.7)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#00E6A8]/40`,
  optionCard:
    'flex cursor-pointer items-start gap-3 rounded-[20px] border border-black/10 bg-white/60 px-4 py-3 text-sm text-[#1A1A1A] transition-all hover:border-[#00B386]/60 has-[:checked]:!border-[#00B386] has-[:checked]:!bg-[#00E6A8]/15 has-[:checked]:shadow-[0_0_16px_-6px_rgba(0,230,168,0.7)]',
  radio: 'accent-[#00B386]',
  toggle: 'inline-flex flex-wrap gap-2',
  toggleOn: `${pill} ${pillOn} !text-[#1A1A1A]`,
  toggleOff: pill,
  button: 'ps-btn solid ps-glow-button w-full sm:w-auto',
  note: 'text-xs leading-relaxed text-[#555555]',
  // result card
  resultLabel: 'text-xs font-semibold uppercase tracking-[0.12em] text-[#00B386]',
  big: 'mt-2 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-[#1A1A1A]',
  bigUnit: 'font-sans text-lg font-normal text-[#555555] sm:text-xl',
  resultLine: 'mt-3 text-sm leading-relaxed text-[#555555]',
  placeholder: 'flex min-h-[220px] flex-col items-center justify-center gap-3 text-center text-sm text-[#555555]',
  placeholderIcon: 'flex h-12 w-12 items-center justify-center rounded-full border border-[#00B386]/30 bg-[#00E6A8]/15 text-[#00B386]',
  chips: 'mt-5 grid gap-3 sm:grid-cols-2',
  chip: 'rounded-[16px] border border-white/70 bg-white/60 px-4 py-3',
  chipLabel: 'text-xs text-[#555555]',
  chipValue: 'font-serif text-lg font-semibold text-[#1A1A1A]',
  barTrack: 'relative mt-5 h-3 w-full rounded-full bg-black/[0.06]',
  barFill: 'absolute inset-y-0 left-0 right-0 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00C2FF]',
  barLabels: 'mt-2 flex justify-between text-xs text-[#555555]',
  macroCols: 'mt-5 grid grid-cols-3 gap-2 text-center sm:gap-4',
  macroPct: 'font-serif text-2xl font-semibold text-[#1A1A1A]',
  notes: 'mt-5 grid gap-3',
  // notices
  error: 'flex items-start gap-3 rounded-[20px] border border-red-300/70 bg-red-500/10 px-4 py-4 text-sm font-semibold leading-relaxed text-red-700 backdrop-blur',
  softNote: 'flex items-start gap-3 rounded-[16px] border border-[#00B386]/25 bg-[#00E6A8]/10 px-4 py-3 text-xs leading-relaxed text-[#555555]',
  // app CTA
  cta: `${glass} ${glow} mt-6 grid items-center gap-6 p-5 sm:p-7 md:grid-cols-[1fr_auto]`,
  ctaButtons: 'mt-4 flex flex-wrap gap-3',
  appStore: 'ps-appstore-button inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm',
  playStore: 'ps-play-button inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold !text-[#1A1A1A]',
  phone: 'relative mx-auto hidden aspect-[9/16] w-[150px] overflow-hidden rounded-[28px] border-[6px] border-[#1A1A1A] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] md:block',
  // content sections
  panel: `${glass} p-5 sm:p-6`,
  faq: 'mt-4 grid gap-3',
  faqItem: `${glass} group px-5 py-4`,
  faqSummary: 'flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-[#1A1A1A] [&::-webkit-details-marker]:hidden',
  faqAnswer: 'mt-3 text-sm leading-relaxed text-[#555555]',
  sources: 'ps-blog-sources-list mt-3 text-sm text-[#555555]',
  sourceLink: 'text-sm font-normal not-italic text-[#555555] underline decoration-[#00B386]/50 underline-offset-2 transition-colors hover:text-[#1A1A1A] hover:decoration-[#00E6A8]',
  disclaimer: 'ps-blog-disclaimer',
} as const;
export const PRICING = 'Free to download. Premium is $9.99/month or $59.99/year.';
export const IOS = 'https://apps.apple.com/us/app/proteinsnaps/id6801353318';
export const ANDROID = 'https://play.google.com/store/apps/details?id=com.proteinsnap.app';
