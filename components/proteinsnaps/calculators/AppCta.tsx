// Shared CTA: always both stores. Classes from the live site (see ui.ts / STYLE-ELEMENTS.md).
import { ui, PRICING, IOS, ANDROID } from './ui';
export default function AppCta({ text, headline = 'This page gives a first estimate. The ProteinSnaps app keeps adjusting from your real data.' }: { text: string; headline?: string }) {
  return (
    <div className={ui.cta}>
      <p className={ui.body}><strong className="text-[#1A1A1A]">{headline}</strong> {text}</p>
      <div className={ui.ctaButtons}>
        <a href={IOS} className={ui.appStore} target="_blank" rel="noopener noreferrer">Download on the App Store</a>
        <a href={ANDROID} className={ui.playStore} target="_blank" rel="noopener noreferrer">Get it on Google Play</a>
      </div>
      <p className={ui.note}>{PRICING}</p>
    </div>
  );
}
