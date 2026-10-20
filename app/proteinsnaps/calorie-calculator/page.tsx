import type { Metadata } from 'next';
import { proteinGlass, ui } from '@/components/proteinsnaps/calculators/ui';
import CalorieCalculator from '@/components/proteinsnaps/calculators/CalorieCalculator';
import {
  CalcGlassHero,
  FaqList,
  FeatureCards,
  MoreFreeTools,
  ProteinGlassBackdrop,
  SourceItem,
  SourceLinks,
} from '@/components/proteinsnaps/calculators/Parts';

const URL = 'https://proteinsnaps.lumexforge.com/calorie-calculator';
const OG = 'https://proteinsnaps.lumexforge.com/images/proteinsnaps/proteinsnaps-og.webp';

export const metadata: Metadata = {
  title: 'Calorie Calculator (TDEE): How Many Calories Do I Need? | ProteinSnaps',
  description:
    'Free TDEE calorie calculator using the Mifflin-St Jeor equation. Estimate your daily calories to maintain, gently lose fat or build. An estimate only, not medical advice.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'How Many Calories Do I Need a Day?',
    description: 'Estimate your daily calories (TDEE) in seconds.',
    url: URL,
    type: 'website',
    images: [{ url: OG, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
};

const faqs = [
  {
    q: 'What is TDEE?',
    a: 'TDEE (total daily energy expenditure) is an estimate of the calories you use in a day. This calculator first estimates your resting energy (BMR) with the Mifflin-St Jeor equation, then multiplies it by an activity factor from 1.2 (mostly sitting) to 1.9 (very active).',
  },
  {
    q: 'Which formula does this calculator use?',
    a: 'The Mifflin-St Jeor equation (1990). Women: 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161. Men: the same, but +5 instead of −161.',
  },
  {
    q: 'How are the goal calories set?',
    a: "We use the same settings as the ProteinSnaps app: a fat loss goal is a gentle 400 kcal below maintenance, build is 350 kcal above, recomp is about maintenance (±100 kcal), and maintain is no change. These are app settings, not medical advice.",
  },
  {
    q: 'How accurate is it?',
    a: 'It is a starting estimate. Everyone is different, so your real needs may be higher or lower. In the ProteinSnaps app, after about two weeks of logging, your intake is compared with your weight trend to estimate your real maintenance calories.',
  },
  {
    q: 'Who should not use a calorie target?',
    a: 'If you are pregnant, breastfeeding, under 18, have a medical condition, or have a history of disordered eating, please talk to a doctor or registered dietitian instead.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <div className={`${ui.main} ${proteinGlass.page}`}>
      <ProteinGlassBackdrop />
      <div className={proteinGlass.content}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CalcGlassHero
          badge="FREE TOOL · MIFFLIN-ST JEOR"
          titleBefore="Calorie "
          titleMint="Calculator (TDEE)"
          intro="Get a friendly first estimate of how many calories your body uses each day, and a target for your goal, whether that is maintaining, a gentle fat loss goal, or building strength."
          chips={['BMR + TDEE', 'Goal target', 'lb / ft + in or kg / cm']}
          imageSrc="/images/proteinsnaps/calculators/grain-bowl.webp"
          imageAlt="Balanced grain bowl with vegetables and protein"
        />
        <CalorieCalculator />
        <div className={ui.prose}>
        <h2 className={ui.h2}>Keep your numbers on track</h2>
        <FeatureCards />
        <h2 className={ui.h2}>How it works</h2>
        <div className={ui.panel}>
          <p className={ui.body}>
            1. Resting energy (BMR) with Mifflin-St Jeor: women 10 × kg + 6.25 × cm − 5 × age − 161;
            men … + 5. 2. TDEE = BMR × activity factor (1.2, 1.375, 1.55, 1.725 or 1.9). 3. Goal:
            the app&apos;s settings of −400 (fat loss), 0 (maintain), ±100 (recomp) or +350 kcal
            (build). Example: a 30-year-old woman, 165 cm, 65 kg has a BMR of about 1,370 kcal;
            lightly active, that&apos;s about 1,884 kcal to maintain.
          </p>
          <p className={`${ui.body} mt-3`}>
            Next: <a className={ui.link} href="/macro-calculator">split your calories into macros</a>{' '}
            or <a className={ui.link} href="/protein-calculator">find your daily protein</a>.
          </p>
        </div>
        <h2 className={ui.h2}>FAQ</h2>
        <FaqList items={faqs} />
        <h2 className={ui.h2}>Sources</h2>
        <SourceLinks>
          <SourceItem href="https://doi.org/10.1093/ajcn/51.2.241">
            Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure
            in healthy individuals. Am J Clin Nutr. 1990;51(2):241-7.
          </SourceItem>
          <SourceItem href="https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation">
            Medscape (QxMD): Mifflin-St Jeor Equation Calculator, formula and activity factors.
          </SourceItem>
        </SourceLinks>
        <p className={ui.disclaimer}>
          Disclaimer: this calculator gives general estimates for healthy adults and is not medical
          advice. It does not diagnose or treat any condition, and results are not guaranteed.
        </p>
        <h2 className={ui.h2}>More free tools</h2>
        <MoreFreeTools current="calorie" />
        </div>
      </div>
    </div>
  );
}
