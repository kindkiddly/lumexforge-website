import type { Metadata } from 'next';
import { ui } from '@/components/proteinsnaps/calculators/ui';
import ProteinCalculator from '@/components/proteinsnaps/calculators/ProteinCalculator';
import {
  CalcHero,
  FaqList,
  FeatureCards,
  MoreFreeTools,
  SourceItem,
  SourceLinks,
} from '@/components/proteinsnaps/calculators/Parts';

const URL = 'https://proteinsnaps.lumexforge.com/protein-calculator';
const OG = 'https://proteinsnaps.lumexforge.com/images/proteinsnaps/proteinsnaps-og.webp';

export const metadata: Metadata = {
  title: 'Protein Calculator: How Much Protein Do I Need a Day? | ProteinSnaps',
  description:
    'Free protein calculator. Enter your weight and activity to see a daily protein range based on published sports-nutrition guidance. Estimate only, not medical advice.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'How Much Protein Do I Need a Day?',
    description: 'Get a daily protein range in seconds.',
    url: URL,
    type: 'website',
    images: [{ url: OG, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
};

const faqs = [
  {
    q: 'How much protein do I need a day?',
    a: 'The RDA for adults is 0.8 g of protein per kg of body weight per day. For people who exercise regularly, the International Society of Sports Nutrition (ISSN, 2017) recommends at minimum about 1.4–2.0 g per kg per day.',
  },
  {
    q: 'How much protein should I eat per meal?',
    a: 'The ISSN position stand gives a general recommendation of about 0.25 g of high-quality protein per kg of body weight per meal, or an absolute dose of 20–40 g.',
  },
  {
    q: 'Do I need more protein when trying to lose weight?',
    a: 'The ISSN notes that greater amounts than 1.4–2.0 g/kg may be needed for people restricting energy intake while trying to maintain lean mass. Talk to a dietitian about what is right for you.',
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This calculator gives a general estimate for healthy adults. If you are pregnant, breastfeeding or have a medical condition such as kidney disease, speak to your doctor or a registered dietitian.',
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
    <div className={`${ui.main} bg-[#f2ede4]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CalcHero
        badge="FREE TOOL · ISSN-BASED"
        titleBefore="Protein "
        titleMint="Calculator"
        intro="Find out roughly how much protein you need each day. Enter your weight, choose your activity, and get a range in grams."
        chips={['Daily range in grams', 'Per-meal guide', 'lb or kg']}
      />
      <ProteinCalculator />
      <div className={ui.prose}>
        <h2 className={ui.h2}>Keep your numbers on track</h2>
        <FeatureCards />
        <h2 className={ui.h2}>How it works</h2>
        <div className={ui.panel}>
          <p className={ui.body}>
            Daily protein = body weight (kg) × a factor. We use 0.8 g/kg (the RDA) for adults who are
            not regularly exercising, and 1.4–2.0 g/kg for people who exercise regularly, from the
            ISSN 2017 position stand. Pounds are converted at 1 lb = 0.4536 kg.
          </p>
        </div>
        <h2 className={ui.h2}>FAQ</h2>
        <FaqList items={faqs} />
        <h2 className={ui.h2}>Source</h2>
        <SourceLinks>
          <SourceItem href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8">
            Jäger R, et al. International Society of Sports Nutrition Position Stand: protein and
            exercise. J Int Soc Sports Nutr. 2017;14:20.
          </SourceItem>
        </SourceLinks>
        <h2 className={ui.h2}>More free tools</h2>
        <MoreFreeTools current="protein" />
      </div>
    </div>
  );
}
