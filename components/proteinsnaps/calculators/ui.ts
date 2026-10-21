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
  cardPad: `${glassCard} relative z-[1] p-4 sm:p-5`,
  cardTitle: 'text-sm font-semibold text-[#1A1A1A]',
  ageNote: 'mb-1 text-[10px] leading-snug text-[#777777]',
  inputSelected:
    'outline outline-2 outline-[#00E6A8] shadow-[0_0_0_3px_rgba(0,230,168,0.25)] font-semibold text-[#1A1A1A]',
  optionBtn:
    'relative z-[1] flex h-12 max-h-12 min-h-12 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-white/80 bg-white/55 px-2.5 py-0 text-center text-[11px] font-medium leading-none text-[#555555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-150 ease-out hover:-translate-y-px hover:border-white active:scale-[0.98] focus:outline-none focus-visible:border-[#00E6A8] focus-visible:shadow-[0_0_0_3px_rgba(0,230,168,0.25)] whitespace-nowrap sm:px-3 sm:text-xs',
  optionBtnSelected:
    '!border-[#00E6A8] shadow-[0_0_0_3px_rgba(0,230,168,0.25)] font-semibold text-[#1A1A1A] bg-white/75 focus-visible:!border-[#00E6A8] focus-visible:shadow-[0_0_0_3px_rgba(0,230,168,0.25)]',
  inputRow: 'mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-[7.5rem_minmax(9rem,11rem)_1fr_auto] lg:items-end lg:gap-3',
  inputRowTablet: 'mt-3 grid gap-3 sm:grid-cols-2 lg:hidden',
  fieldLabel:
    'pointer-events-none absolute left-3 top-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#555555]',
  input:
    'relative z-[1] h-12 w-full rounded-xl border border-white/80 bg-white/70 px-3 pb-1.5 pt-5 text-sm text-[#1A1A1A] placeholder:text-[#555555]/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/20',
  selectWrap: 'relative',
  select:
    'relative z-[1] h-12 w-full appearance-none rounded-xl border border-white/80 bg-white/70 px-3 pb-1.5 pt-5 pr-9 text-sm text-[#1A1A1A] shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:border-[#00B386] focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/20',
  selectChevron:
    'pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]',
  toggle:
    'relative z-[1] inline-flex h-12 w-full shrink-0 rounded-full border border-white/80 bg-white/45 p-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] lg:w-[7.5rem]',
  toggleBtn:
    'relative z-[1] flex h-11 flex-1 cursor-pointer items-center justify-center rounded-full border-2 border-transparent px-2 text-center text-xs font-semibold text-[#555555] transition-all duration-150',
  toggleOn: 'bg-white/80',
  toggleOff: 'bg-white/55 font-medium hover:text-[#1A1A1A]',
  activityCol: 'grid gap-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1',
  pill:
    'relative z-[1] flex h-12 max-h-12 min-h-12 cursor-pointer items-center justify-center rounded-xl border border-white/80 bg-white/55 px-2.5 py-0 text-center text-[11px] font-medium leading-none text-[#555555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] whitespace-nowrap sm:px-3 sm:text-xs',
  pillOn: 'bg-white/75',
  cardGlowWrap: 'relative isolate',
  cardGlow:
    'pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-[#00E6A8]/[0.12] blur-2xl sm:-inset-4',
  cardGlowCyan:
    'pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-[#00C2FF]/[0.1] blur-2xl sm:-inset-4',
  heroChip:
    'flex min-h-[40px] items-center justify-center rounded-full border border-white/70 bg-white/50 px-3 py-2 text-center text-xs font-medium text-[#555555] shadow-[0_4px_14px_rgba(0,0,0,0.06)] backdrop-blur-md sm:text-[13px]',
  heroChipGrid: 'mt-5 grid grid-cols-1 gap-2 min-[480px]:grid-cols-3',
  heroImageWrap:
    'relative mx-auto mt-8 max-w-sm overflow-visible lg:mx-0 lg:mt-0 lg:max-w-none before:pointer-events-none before:absolute before:-inset-3 before:-z-10 before:rounded-[40%] before:bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,230,168,0.12),transparent_70%)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_90%_82%_at_50%_48%,transparent_42%,rgba(255,252,248,0.82)_100%)]',
  heroImage:
    'relative z-[1] h-auto w-full max-h-[220px] object-cover object-center opacity-[0.97] [mask-image:radial-gradient(ellipse_88%_80%_at_50%_46%,#000_48%,transparent_100%)] lg:max-h-[280px]',
  resultSplit: 'mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center',
  resultTile:
    'flex gap-3 rounded-[20px] border border-white/70 bg-white/[0.55] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[18px]',
  resultTileIcon:
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E6A8]/20 text-[#00B386]',
  badgeBox: 'flex h-12 w-40 items-center justify-center',
  badgeImg: 'h-full w-full object-contain object-center',
  ctaGrid:
    'grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start lg:gap-6 xl:gap-8',
  phoneFrame:
    'relative mx-auto w-[min(100%,200px)] rounded-[2rem] border-[6px] border-[#1A1A1A] bg-[#1A1A1A] p-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:w-[200px]',
  phoneScreen: 'overflow-hidden rounded-[1.4rem] bg-white',
  button:
    'inline-flex h-12 w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00B386] px-4 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E6A8]/45 focus-visible:ring-offset-2 lg:w-auto lg:min-w-[11.5rem]',
  chipRow: 'mt-4 grid grid-cols-2 gap-3',
  chip: `${glassCard} px-3 py-2.5`,
  heroBadge:
    'inline-flex items-center rounded-full border border-white/70 bg-white/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00785A] backdrop-blur-md',
  panel: `${glassCard} p-5 sm:p-6`,
  featureCard: `${glassCard} p-5`,
  faq: `${glassCard} divide-y divide-white/60 overflow-hidden`,
  faqItem: 'group',
  toolCard: `${glassCard} flex flex-col p-4 transition-colors hover:border-[#00B386]/30`,
  toolCardHere: 'border-[#00B386]/50 bg-white/60',
  cta: `${glassCard} p-5 sm:p-7`,
  sourcesCard: `${glassCard} p-5 sm:p-6`,
  resultTileGrid: 'mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3',
  resultTileMint:
    'relative overflow-hidden rounded-[20px] border border-white/70 bg-gradient-to-br from-white/60 to-[#00E6A8]/15 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[18px]',
  resultTileCyan:
    'relative overflow-hidden rounded-[20px] border border-white/70 bg-gradient-to-br from-white/60 to-[#00C2FF]/12 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[18px]',
  resultTileGreen:
    'relative overflow-hidden rounded-[20px] border border-white/70 bg-gradient-to-br from-white/55 to-[#00785A]/12 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[18px]',
  resultTileIconMint:
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00E6A8] to-[#00B386] text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  resultTileIconCyan:
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C2FF] to-[#00B386] text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  resultTileIconGreen:
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00785A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  goalFade: 'transition-opacity duration-200',
  goalHidden: 'pointer-events-none opacity-40',
} as const;

/** Compact glass UI for calorie + macro calculators only (do not use on protein page). */
export const calcGlass = {
  section: 'mx-auto mt-4 flex w-full max-w-4xl flex-col gap-4',
  cardPad: `${glassCard} relative z-[1] rounded-2xl p-3 shadow-[0_8px_28px_rgba(0,0,0,0.07)] sm:p-3.5`,
  cardTitle: 'text-xs font-semibold uppercase tracking-[0.14em] text-[#555555]',
  cardGlowWrap: 'relative isolate',
  cardGlow:
    'pointer-events-none absolute -inset-2 -z-10 rounded-[26px] bg-gradient-to-br from-[#00E6A8]/22 via-[#00E6A8]/8 to-[#00C2FF]/12 blur-2xl',
  formStack: 'mt-2.5 grid gap-2',
  fieldLabel:
    'pointer-events-none absolute left-2.5 top-0.5 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#777777] sm:text-[8px]',
  input:
    'relative z-[1] h-10 w-full rounded-[10px] border border-white/90 bg-white/72 px-2.5 pb-0 pt-3.5 text-[13px] text-[#1A1A1A] placeholder:text-[#555555]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_4px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200 focus:border-[#00B386]/80 focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/25',
  selectWrap: 'relative',
  select:
    'relative z-[1] h-10 w-full appearance-none rounded-[10px] border border-white/90 bg-white/72 px-2.5 pb-0 pt-3.5 pr-7 text-[13px] text-[#1A1A1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_4px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200 focus:border-[#00B386]/80 focus:outline-none focus:ring-2 focus:ring-[#00E6A8]/25',
  selectChevron:
    'pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#555555]',
  optionBtn:
    'relative z-[1] flex h-9 min-h-9 max-h-9 w-full cursor-pointer items-center justify-center rounded-[10px] border border-white/85 bg-white/60 px-1 py-1 text-center text-[9px] font-medium leading-tight text-[#555555] shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out hover:-translate-y-px hover:border-white hover:bg-white/75 hover:shadow-[0_3px_8px_rgba(0,0,0,0.06)] active:scale-[0.97] focus:outline-none focus-visible:border-[#00E6A8] focus-visible:shadow-[0_0_0_3px_rgba(0,230,168,0.25)] sm:px-1.5 sm:text-[10px]',
  optionBtnSelected:
    '!border-[#00E6A8] !bg-white/85 font-semibold text-[#1A1A1A] shadow-[0_0_0_3px_rgba(0,230,168,0.22),0_2px_8px_rgba(0,230,168,0.12)] focus-visible:!border-[#00E6A8] focus-visible:shadow-[0_0_0_3px_rgba(0,230,168,0.25)]',
  toggle:
    'relative z-[1] inline-flex h-9 w-full max-w-[240px] shrink-0 rounded-full border border-white/85 bg-black/[0.04] p-0.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] sm:w-auto',
  toggleBtn:
    'relative z-[1] flex h-8 flex-1 cursor-pointer items-center justify-center rounded-full border border-transparent px-1 text-center text-[9px] font-semibold leading-tight text-[#555555] transition-all duration-200 ease-out sm:px-1.5 sm:text-[10px]',
  toggleOn:
    'border-white/90 bg-white text-[#1A1A1A] shadow-[0_1px_4px_rgba(0,0,0,0.08)]',
  toggleOff: 'font-medium hover:text-[#1A1A1A]',
  button:
    'inline-flex h-9 w-full shrink-0 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00B386] px-4 text-[13px] font-semibold text-white shadow-[0_3px_14px_rgba(0,184,130,0.35)] transition-all duration-200 hover:opacity-95 hover:shadow-[0_4px_16px_rgba(0,184,130,0.4)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E6A8]/45 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[9.5rem]',
  row2: 'grid grid-cols-2 gap-2',
  metrics4: 'grid grid-cols-2 gap-2 lg:grid-cols-4',
  topRow:
    'grid grid-cols-1 items-end gap-2 min-[420px]:grid-cols-[minmax(0,1fr)_auto]',
  legendTight: 'text-[11px] font-semibold text-[#1A1A1A]',
  legendMt: 'mt-1',
  offerPanel:
    'ps-glass-panel ps-3d-card mt-4 rounded-2xl border border-[#00C9A7]/45 bg-gradient-to-br from-white/78 via-[#00E6A8]/14 to-white/62 p-4 shadow-[0_10px_36px_rgba(0,139,125,0.2),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] sm:p-5',
  pillGridGoal: 'grid grid-cols-2 gap-1.5 sm:grid-cols-4',
  pillGridFat: 'grid grid-cols-4 gap-1.5',
  btnRow: 'flex justify-stretch pt-0.5 sm:justify-end',
} as const;

/** Mint glassmorphism input card (calorie + macro calculators). Matches TDEE mock. */
const mintGlassCard =
  'rounded-[26px] border border-white/85 bg-gradient-to-br from-white/62 via-white/48 to-white/38 shadow-[0_20px_60px_rgba(0,139,125,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[24px] [-webkit-backdrop-filter:blur(24px)]';

export const calcMint = {
  page:
    'bg-gradient-to-b from-[#E4F5EF] via-[#EDF8F4] to-[#F4FAF7] max-lg:from-[#f5edd8] max-lg:via-[#f5edd8] max-lg:to-[#f5edd8]',
  section: 'mt-6 flex w-full max-w-none flex-col gap-6',
  cardGlowWrap: 'relative isolate w-full max-lg:overflow-x-hidden lg:overflow-visible',
  cardGlow:
    'ps-calc-card-glow pointer-events-none absolute -inset-x-1 -inset-y-3 -z-10 rounded-[32px] bg-[radial-gradient(ellipse_80%_70%_at_50%_55%,rgba(0,230,168,0.42),rgba(0,168,142,0.14)_50%,transparent_72%)] blur-2xl',
  card: `${mintGlassCard} relative z-[1] w-full p-5 sm:p-7 lg:p-8 max-lg:box-border max-lg:overflow-x-hidden max-lg:p-4 lg:overflow-visible`,
  cardHeader: 'mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/40 pb-4 sm:mb-5',
  cardTitle: 'flex items-center gap-2.5 text-[15px] font-semibold text-[#1A1A1A] sm:text-base',
  cardTitleIcon:
    'flex h-9 w-9 items-center justify-center rounded-full bg-[#00E6A8]/22 text-[#008B7D] shadow-[0_2px_8px_rgba(0,139,125,0.12)]',
  unitTrack:
    'inline-flex max-w-full rounded-full border border-white/70 bg-white/50 p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]',
  unitBtn:
    'rounded-full px-3 py-2 text-[10px] font-semibold leading-tight transition-all duration-200 sm:px-4 sm:text-[11px]',
  unitOn:
    'bg-gradient-to-r from-[#00C9A7] to-[#008B7D] text-white shadow-[0_3px_14px_rgba(0,139,125,0.4)]',
  unitOff: 'text-[#555555] hover:text-[#1A1A1A]',
  fieldsStack: 'relative flex min-w-0 w-full flex-col gap-4 max-lg:overflow-x-hidden sm:gap-5 lg:overflow-visible',
  sectionLabel: 'mb-2 text-xs font-semibold text-[#1A1A1A]',
  sexTrack:
    'grid grid-cols-2 gap-0 rounded-full border border-white/60 bg-white/55 p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]',
  sexBtn:
    'flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 sm:h-12',
  sexOn:
    'bg-gradient-to-r from-[#00E6A8] to-[#008B7D] text-white shadow-[0_4px_18px_rgba(0,139,125,0.32)]',
  sexOff: 'bg-transparent text-[#555555]',
  metrics4: 'grid grid-cols-2 gap-3 lg:grid-cols-4',
  metrics3: 'grid grid-cols-1 gap-3 sm:grid-cols-3',
  metricsRows: 'flex flex-col gap-3',
  metrics2: 'grid grid-cols-2 gap-3',
  fieldBox:
    'min-h-[68px] w-full min-w-0 max-w-full rounded-[14px] border border-[#ECECEC] bg-white px-3 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] focus-within:border-[#ECECEC] focus-within:outline-none focus-within:ring-0 sm:min-h-[72px] sm:px-4',
  fieldInner: 'flex h-full min-h-[52px] items-center gap-2.5 sm:gap-3',
  fieldIcon:
    'flex h-10 w-8 shrink-0 items-center justify-center text-[#00A88E] sm:w-9',
  fieldLabel: 'block text-[10px] font-medium text-[#999999]',
  fieldInput:
    'mt-0.5 w-full min-w-0 border-0 bg-transparent p-0 text-lg font-semibold leading-tight text-[#1A1A1A] shadow-none outline-none ring-0 [appearance:textfield] placeholder:font-normal placeholder:text-[#BBBBBB] focus:border-0 focus:shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [-webkit-tap-highlight-color:transparent] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  stepper: 'flex shrink-0 flex-col justify-center gap-0.5 border-l border-black/[0.07] pl-2.5',
  stepperBtn:
    'flex h-[22px] w-7 items-center justify-center rounded-md text-[#999999] transition-colors hover:bg-[#00E6A8]/15 hover:text-[#008B7D]',
  activityBox:
    'relative z-[1] min-h-[68px] w-full min-w-0 max-w-full rounded-[14px] border border-[#ECECEC] bg-white px-3 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow,background-color] sm:min-h-[72px] sm:px-4',
  activityBoxIdle: 'hover:border-[#00C9A7]/35 hover:shadow-[0_4px_16px_rgba(0,139,125,0.08)]',
  activityBoxOpen:
    'z-[50] border-[#00C9A7]/45 bg-white/95 shadow-[0_6px_24px_rgba(0,139,125,0.14),inset_0_1px_0_rgba(255,255,255,0.9)]',
  activityTrigger:
    'w-full cursor-pointer rounded-[10px] text-left transition-colors hover:bg-white/55 [-webkit-tap-highlight-color:transparent]',
  activityValue: 'mt-0.5 truncate text-[15px] font-semibold text-[#1A1A1A] sm:text-base',
  activityChevron: 'h-5 w-5 shrink-0 text-[#999999] transition-transform duration-200',
  activityMenuPortal:
    'max-h-[min(18rem,70vh)] overflow-y-auto rounded-[14px] border border-white/85 bg-white/58 p-1.5 shadow-[0_16px_48px_rgba(0,139,125,0.22),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-[22px] [-webkit-backdrop-filter:blur(22px)]',
  activityOption:
    'flex w-full items-start justify-between gap-3 rounded-[10px] px-3 py-2.5 text-left text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-white/80 hover:shadow-[0_2px_8px_rgba(0,139,125,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E6A8]/45',
  activityOptionOn:
    'bg-[#00E6A8]/16 font-semibold text-[#008B7D] shadow-[inset_0_0_0_1px_rgba(0,201,167,0.25)]',
  activityOptionMeta: 'shrink-0 text-xs font-semibold tabular-nums text-[#888888]',
  activityOptionMetaOn: 'text-[#00A88E]',
  goalHeading: 'mb-2.5 flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]',
  goalGrid: 'grid grid-cols-2 gap-2.5 lg:grid-cols-4',
  fatPillGrid: 'grid grid-cols-4 gap-1 max-lg:gap-1 lg:gap-2.5',
  goalBtn:
    'flex min-h-[46px] min-w-0 flex-row items-center justify-center gap-1.5 rounded-full border border-[#E8E8E8] bg-white px-2 py-2.5 text-center text-[10px] font-medium leading-tight text-[#555555] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#00E6A8]/40 max-lg:px-1.5 max-lg:text-[9px] sm:min-h-[48px] sm:gap-2 sm:px-3 sm:text-[11px]',
  goalBtnOn:
    'border-2 border-[#00C9A7] bg-white font-semibold text-[#008B7D] shadow-[0_0_0_4px_rgba(0,230,168,0.2),0_4px_14px_rgba(0,139,125,0.14)]',
  submitWrap: 'relative z-0 mt-6 flex w-full justify-start',
  submitGlow:
    'pointer-events-none absolute -bottom-2 left-8 h-12 w-[min(100%,22rem)] rounded-full bg-[#00E6A8]/50 blur-2xl',
  submitBtn:
    'relative z-0 inline-flex min-h-[50px] w-full min-w-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#00E6A8] via-[#00B895] to-[#008B7D] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_32px_rgba(0,139,125,0.5)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E6A8]/50 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[min(100%,360px)]',
  inlineSelect:
    'w-full appearance-none border-0 bg-transparent py-0.5 pr-6 text-sm font-semibold text-[#1A1A1A] outline-none focus:ring-0',
  macroExtra: 'mt-4 min-w-0 w-full max-lg:overflow-x-hidden gap-4 border-t border-white/50 pt-4',
  hint: 'mt-1.5 text-xs leading-relaxed text-[#666666]',
} as const;

export const STORE_BADGE_BOX = { w: 160, h: 48 } as const;
export const PROTEIN_CTA_PHONE_SRC = '/images/proteinsnaps/homepageCards-PS2.webp';
