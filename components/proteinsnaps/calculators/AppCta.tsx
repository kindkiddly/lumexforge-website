import Image from 'next/image';
import { ui, PRICING, IOS, ANDROID } from './ui';

function AppleLogo() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.96.95-2.1 1.72-3.4 1.72-1.3 0-2.45-.77-3.4-1.72-1.9-1.88-3.05-4.46-3.05-7.28 0-2.82 1.15-5.4 3.05-7.28.95-.95 2.1-1.72 3.4-1.72s2.45.77 3.4 1.72c1.9 1.88 3.05 4.46 3.05 7.28 0 2.82-1.15 5.4-3.05 7.28zM12.03 3.5c.73-.88 1.22-2.1 1.08-3.5-1.04.04-2.3.72-3.05 1.6-.68.78-1.27 2.02-1.11 3.22 1.18.09 2.38-.6 3.08-1.32z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
  );
}

function StoreBlock({
  href,
  label,
  className,
  qrSrc,
}: {
  href: string;
  label: string;
  className: string;
  qrSrc: string;
}) {
  return (
    <div className={ui.ctaStoreBlock}>
      <div className={ui.ctaQr}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label === 'App Store' ? <AppleLogo /> : <PlayLogo />}
          {label === 'App Store' ? 'Download on the App Store' : 'Get it on Google Play'}
        </a>
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src={qrSrc}
            alt=""
            width={80}
            height={80}
            className={ui.ctaQrImg}
            aria-hidden
          />
          <span className={ui.ctaQrCaption}>Scan to download</span>
        </div>
      </div>
    </div>
  );
}

export default function AppCta({
  text,
  headline = 'This page gives a first estimate. The ProteinSnaps app keeps adjusting from your real data.',
}: {
  text: string;
  headline?: string;
}) {
  return (
    <div className={ui.cta}>
      <div>
        <p className="font-serif text-xl font-semibold leading-snug text-[#1A1A1A] sm:text-2xl">
          {headline}
        </p>
        <p className={`${ui.body} mt-3`}>{text}</p>
        <p className={`${ui.note} mt-3`}>{PRICING}</p>
      </div>
      <div className={ui.ctaStoreRow}>
        <StoreBlock
          href={IOS}
          label="App Store"
          className={ui.appStoreBtn}
          qrSrc="/images/proteinsnaps/qr/app-store.svg"
        />
        <StoreBlock
          href={ANDROID}
          label="Google Play"
          className={ui.playStoreBtn}
          qrSrc="/images/proteinsnaps/qr/google-play.svg"
        />
      </div>
    </div>
  );
}
