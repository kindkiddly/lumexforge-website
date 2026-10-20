// Shared CTA: always both stores. Shown only after a result.
import Image from 'next/image';
import { ui, PRICING, IOS, ANDROID } from './ui';
export default function AppCta({ text, image, headline = 'This page gives a first estimate. The ProteinSnaps app keeps adjusting from your real data.' }: { text: string; image: string; headline?: string }) {
  return (
    <div className={ui.cta}>
      <div>
        <p className="font-serif text-xl font-semibold leading-snug text-[#1A1A1A] sm:text-2xl">{headline}</p>
        <p className={ui.body}>{text}</p>
        <div className={ui.ctaButtons}>
          <a href={IOS} className={ui.appStore} target="_blank" rel="noopener noreferrer">Download on the App Store</a>
          <a href={ANDROID} className={ui.playStore} target="_blank" rel="noopener noreferrer">Get it on Google Play</a>
        </div>
        <p className={`${ui.note} mt-3`}>{PRICING}</p>
      </div>
      <div className={ui.phone}>
        <Image src={image} alt="ProteinSnaps app screen" fill sizes="150px" className="object-cover object-top" />
      </div>
    </div>
  );
}
