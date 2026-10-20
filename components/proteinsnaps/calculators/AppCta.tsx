import Image from 'next/image';
import {
  proteinGlass,
  ui,
  PRICING,
  IOS,
  ANDROID,
  STORE_BADGE_BOX,
  PROTEIN_CTA_PHONE_SRC,
} from './ui';

const { w: BADGE_W, h: BADGE_H } = STORE_BADGE_BOX;

function StoreBadgeBlock({
  href,
  badgeSrc,
  qrSrc,
}: {
  href: string;
  badgeSrc: string;
  qrSrc: string;
}) {
  return (
    <div className="flex w-[8.5rem] flex-col items-center sm:w-[9rem]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={proteinGlass.badgeBox}
      >
        <Image
          src={badgeSrc}
          alt={href === IOS ? 'Download on the App Store' : 'Get it on Google Play'}
          width={BADGE_W}
          height={BADGE_H}
          className={proteinGlass.badgeImg}
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

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={proteinGlass.phoneFrame}>
      <div className={proteinGlass.phoneScreen}>
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default function AppCta({
  text,
  headline = 'This page gives a first estimate. The ProteinSnaps app keeps adjusting from your real data.',
  glass = false,
  phoneSrc = PROTEIN_CTA_PHONE_SRC,
  phoneAlt = 'ProteinSnaps app showing protein and nutrition tracking',
}: {
  text: string;
  headline?: string;
  glass?: boolean;
  phoneSrc?: string;
  phoneAlt?: string;
}) {
  const cardClass = glass ? proteinGlass.cta : `${ui.cta} lg:!grid-cols-1`;
  const gridClass = `${proteinGlass.ctaGrid} lg:items-start`;

  return (
    <div className={cardClass}>
      <div className={gridClass}>
        <div>
          <p className="font-serif text-xl font-semibold leading-snug text-[#1A1A1A] sm:text-2xl">
            {headline}
          </p>
          <p className={`${ui.body} mt-3`}>{text}</p>
          <p className={`${ui.note} mt-3`}>{PRICING}</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:justify-center">
          <StoreBadgeBlock
            href={IOS}
            badgeSrc="/images/proteinsnaps/badges/app-store.svg"
            qrSrc="/images/proteinsnaps/qr/app-store.svg"
          />
          <StoreBadgeBlock
            href={ANDROID}
            badgeSrc="/images/proteinsnaps/badges/google-play.png"
            qrSrc="/images/proteinsnaps/qr/google-play.svg"
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup src={phoneSrc} alt={phoneAlt} />
        </div>
      </div>
    </div>
  );
}
