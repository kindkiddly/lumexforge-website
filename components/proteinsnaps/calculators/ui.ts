// Calculator UI tokens (reference v3: cream, floating shadows, no glow).
const shadow = 'shadow-[0_4px_14px_rgba(0,0,0,0.06)]';
const card = `rounded-[20px] border border-black/[0.06] bg-white ${shadow}`;

export const ui = {
  main: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-10 lg:pt-28 lg:pb-12',
  stack: 'mt-6 flex flex-col gap-6',
  h1: 'font-serif text-[2rem] font-semibold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem]',
  h1Mint: 'text-[#00B386]',
  h2: 'font-serif text-xl font-semibold text-[#1A1A1A] sm:text-2xl mt-10 mb-4',
  lead: 'mt-4 max-w-3xl text-base leading-relaxed text-[#555555] sm:text-lg',
  body: 'text-sm leading-relaxed text-[#555555] sm:text-[15px]',
  link: 'font-semibold text-[#00B386] underline-offset-2 transition-colors hover:text-[#00785A] hover:underline',
  prose: 'mx-auto max-w-6xl',
  badge:
    'inline-flex items-center rounded-full border border-[#00B386]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00785A]',
  heroChips: 'mt-5 flex flex-wrap gap-2',
  heroChip:
    'rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-medium text-[#555555] sm:text-[13px]',
  card,
  cardPad: `${card} p-5 sm:p-6 lg:p-8`,
  cardTitleRow: 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
  cardTitle: 'font-serif text-xl font-semibold text-[#1A1A1A] sm:text-2xl',
  form: 'mt-5 grid gap-4 sm:gap-5',
  row2: 'grid grid-cols-1 gap-4 sm:grid-cols-2',
  row3: 'grid grid-cols-1 gap-4 sm:grid-cols-3',
  // inline label field
  field: 'relative',
  fieldLabel:
    'pointer-events-none absolute left-4 top-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#555555]',
  input:
    'w-full rounded-2xl border border-black/[0.08] bg-white px-4 pb-3 pt-7 font-sans text-base text-[#1A1A1A] placeholder:text-[#555555]/50 focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/25',
  select:
    'w-full appearance-none rounded-2xl border border-black/[0.08] bg-white px-4 pb-3 pt-7 font-sans text-sm text-[#1A1A1A] focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/25',
  selectWrap: 'relative',
  selectChevron:
    'pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]',
  legend: 'text-sm font-semibold text-[#1A1A1A]',
  hint: 'mt-1.5 text-xs leading-relaxed text-[#555555]',
  note: 'text-xs leading-relaxed text-[#555555]',
  // pills
  pillRow: 'flex flex-wrap gap-2',
  pillEqual: 'grid grid-cols-2 gap-2',
  pill:
    'flex min-h-[48px] cursor-pointer items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-3 py-2.5 text-center text-sm font-medium leading-snug text-[#555555] transition-colors',
  pillOn:
    'border-[#00B386] bg-[#00E6A8]/15 font-semibold text-[#1A1A1A]',
  pillRadio: 'sr-only',
  activityPill: 'col-span-1 sm:col-span-1',
  toggle:
    'inline-flex w-full max-w-[280px] rounded-full border border-black/[0.08] bg-[#ebe6de] p-1 sm:w-auto',
  toggleBtn:
    'flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold text-[#555555] transition-colors sm:px-4 sm:text-sm',
  toggleOn: 'bg-white text-[#1A1A1A] shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  toggleOff: 'hover:text-[#1A1A1A]',
  button:
    'inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00B386] px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-95 sm:w-auto',
  // result
  resultGrid: 'grid gap-8 lg:grid-cols-[1fr_minmax(240px,320px)] lg:items-center',
  resultLabel: 'text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555]',
  big: 'mt-2 font-serif text-4xl font-semibold leading-none text-[#1A1A1A] sm:text-5xl',
  bigSuffix: 'font-sans text-lg font-normal text-[#555555] sm:text-xl',
  resultLine: 'mt-3 text-sm leading-relaxed text-[#555555]',
  chips: 'mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3',
  chip: `${card} px-4 py-3`,
  chipLabel: 'text-[10px] font-semibold uppercase tracking-[0.1em] text-[#555555]',
  chipValue: 'mt-1 font-serif text-2xl font-semibold text-[#1A1A1A]',
  sideChips: 'mt-4 grid gap-3 sm:mt-0',
  // notices
  error:
    'flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-relaxed text-red-800',
  warnBox:
    'flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800',
  softNote:
    'flex items-start gap-3 rounded-2xl border border-[#00B386]/20 bg-[#00E6A8]/10 px-4 py-3 text-xs leading-relaxed text-[#555555]',
  // macro bars
  macroBarRow: 'mt-4 space-y-4',
  macroBarHead: 'mb-1 flex items-center justify-between text-sm',
  macroBarTrack: 'h-2.5 w-full overflow-hidden rounded-full bg-black/[0.06]',
  // CTA
  cta: `${card} mt-0 grid gap-6 bg-gradient-to-br from-white to-[#f7faf8] p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center`,
  ctaStoreRow: 'flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start',
  ctaStoreBlock: 'flex flex-1 flex-col items-stretch gap-2 sm:min-w-[200px] sm:max-w-[240px]',
  ctaQr: 'flex items-center gap-3 sm:flex-col sm:items-start',
  ctaQrImg: 'h-[80px] w-[80px] shrink-0 rounded-lg border border-black/[0.06] bg-white p-1',
  ctaQrCaption: 'text-[10px] font-medium uppercase tracking-wide text-[#555555]',
  appStoreBtn:
    'inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90',
  playStoreBtn:
    'inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-black/[0.03]',
  // sections
  panel: `${card} p-5 sm:p-6`,
  featureGrid: 'mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  featureCard: `${card} p-5`,
  featureIcon:
    'mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E6A8]/15 text-[#00B386]',
  featureTitle: 'font-serif text-lg font-semibold text-[#1A1A1A]',
  toolsGrid: 'mt-4 grid gap-3 sm:grid-cols-3',
  toolCard: `${card} flex flex-col p-4 transition-colors hover:border-[#00B386]/30`,
  toolCardHere: 'border-[#00B386]/40 bg-[#00E6A8]/8',
  faq: 'mt-4 divide-y divide-black/[0.06] overflow-hidden rounded-[20px] border border-black/[0.06] bg-white',
  faqItem: 'group',
  faqSummary:
    'flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-base font-semibold text-[#1A1A1A] [&::-webkit-details-marker]:hidden',
  faqChevron:
    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00E6A8]/20 text-[#00B386] transition-transform group-open:rotate-180',
  faqAnswer: 'px-5 pb-4 text-sm leading-relaxed text-[#555555]',
  sources: 'mt-3 list-none space-y-2 p-0',
  sourceLink:
    'inline-flex items-center gap-2 text-sm text-[#555555] underline decoration-[#00B386]/40 underline-offset-2 hover:text-[#1A1A1A]',
  disclaimer: 'mt-8 text-xs leading-relaxed text-[#555555]',
} as const;

export const PRICING = 'Free to download. Premium is $9.99/month or $59.99/year.';
export const IOS = 'https://apps.apple.com/us/app/proteinsnaps/id6801353318';
export const ANDROID =
  'https://play.google.com/store/apps/details?id=com.proteinsnap.app';

/** Protein calculator page only (glass + compact). Do not use on calorie/macro yet. */
const glassCard =
  'rounded-[20px] border border-white/70 bg-white/[0.55] shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)]';

export const proteinGlass = {
  page: 'relative overflow-x-hidden bg-[#f2ede4]',
  blobWrap: 'pointer-events-none absolute inset-0 overflow-hidden',
  blobMint:
    'absolute rounded-full bg-[#00E6A8]/[0.14] blur-3xl [-webkit-filter:blur(64px)]',
  blobCyan:
    'absolute rounded-full bg-[#00C2FF]/[0.12] blur-3xl [-webkit-filter:blur(64px)]',
  content: 'relative z-[1]',
  card: `${glassCard}`,
  cardPad: `${glassCard} p-4 sm:p-5`,
  cardTitle: 'text-sm font-semibold text-[#1A1A1A]',
  inputRow: 'mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-[7.5rem_minmax(9rem,11rem)_1fr_auto] lg:items-end lg:gap-3',
  inputRowTablet: 'mt-3 grid gap-3 sm:grid-cols-2 lg:hidden',
  fieldLabel:
    'pointer-events-none absolute left-3 top-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#555555]',
  input:
    'h-11 w-full rounded-xl border border-white/80 bg-white/70 px-3 pb-1.5 pt-5 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/20',
  toggle:
    'inline-flex h-11 w-full shrink-0 rounded-full border border-white/80 bg-white/45 p-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] lg:w-[7.5rem]',
  toggleBtn:
    'flex-1 rounded-full px-2 py-2 text-center text-xs font-semibold text-[#555555] transition-colors',
  toggleOn: 'bg-white/90 text-[#1A1A1A] shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
  toggleOff: 'hover:text-[#1A1A1A]',
  activityCol: 'grid gap-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1',
  pill:
    'flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl border border-white/80 bg-white/65 px-2.5 py-2 text-center text-[11px] font-medium leading-snug text-[#555555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:text-xs lg:text-[11px]',
  pillOn: 'border-[#00B386]/80 bg-[#00E6A8]/20 font-semibold text-[#1A1A1A]',
  button:
    'inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00B386] px-4 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-95 lg:w-auto lg:min-w-[11.5rem]',
  chipRow: 'mt-4 grid grid-cols-2 gap-3',
  chip: `${glassCard} px-3 py-2.5`,
  heroBadge:
    'inline-flex items-center rounded-full border border-white/70 bg-white/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00785A] backdrop-blur-md',
  heroChip:
    'rounded-full border border-white/70 bg-white/50 px-3 py-1.5 text-xs font-medium text-[#555555] backdrop-blur-md sm:text-[13px]',
  panel: `${glassCard} p-5 sm:p-6`,
  featureCard: `${glassCard} p-5`,
  faq: `${glassCard} divide-y divide-white/60 overflow-hidden`,
  faqItem: 'group',
  toolCard: `${glassCard} flex flex-col p-4 transition-colors hover:border-[#00B386]/30`,
  toolCardHere: 'border-[#00B386]/50 bg-white/60',
  cta: `${glassCard} grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-start`,
} as const;
