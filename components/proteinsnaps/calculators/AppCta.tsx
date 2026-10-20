import Image from 'next/image';
import { proteinGlass, ui, PRICING, IOS, ANDROID } from './ui';

const BADGE_H = 48;
const APPLE_W = Math.round((119.66407 / 40) * BADGE_H);

function StoreBadgeBlock({
  href,
  badgeSrc,
  badgeWidth,
  badgeHeight,
  qrSrc,
}: {
  href: string;
  badgeSrc: string;
  badgeWidth: number;
  badgeHeight: number;
  qrSrc: string;
}) {
  return (
    <div className="flex w-[7.5rem] flex-col items-center sm:w-[8.5rem]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center leading-none"
      >
        <Image
          src={badgeSrc}
          alt={href === IOS ? 'Download on the App Store' : 'Get it on Google Play'}
          width={badgeWidth}
          height={badgeHeight}
          className="h-12 w-auto max-w-none object-contain object-left"
          unoptimized={badgeSrc.endsWith('.svg')}
        />
      </a>
      <Image
        src={qrSrc}
        alt=""
        width={80}
        height={80}
        className="mt-3 h-20 w-20 rounded-lg border border-black/[0.06] bg-white p-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        aria-hidden
      />
      <span className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-wide text-[#555555]">
        Scan to download
      </span>
    </div>
  );
}

export default function AppCta({
  text,
  headline = 'This page gives a first estimate. The ProteinSnaps app keeps adjusting from your real data.',
  glass = false,
}: {
  text: string;
  headline?: string;
  glass?: boolean;
}) {
  const cardClass = glass ? proteinGlass.cta : ui.cta;
  return (
    <div className={cardClass}>
      <div>
        <p className="font-serif text-xl font-semibold leading-snug text-[#1A1A1A] sm:text-2xl">
          {headline}
        </p>
        <p className={`${ui.body} mt-3`}>{text}</p>
        <p className={`${ui.note} mt-3`}>{PRICING}</p>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-6 sm:justify-end lg:gap-8">
        <StoreBadgeBlock
          href={IOS}
          badgeSrc="/images/proteinsnaps/badges/app-store.svg"
          badgeWidth={APPLE_W}
          badgeHeight={BADGE_H}
          qrSrc="/images/proteinsnaps/qr/app-store.svg"
        />
        <StoreBadgeBlock
          href={ANDROID}
          badgeSrc="/images/proteinsnaps/badges/google-play.png"
          badgeWidth={155}
          badgeHeight={BADGE_H}
          qrSrc="/images/proteinsnaps/qr/google-play.svg"
        />
      </div>
    </div>
  );
}
