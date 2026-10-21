import type { Metadata } from 'next';
import { BrandName } from '@/components/proteinsnaps/calculators/BrandName';
import { calcMint, proteinGlass, ui } from '@/components/proteinsnaps/calculators/ui';
import MacroCalculator from '@/components/proteinsnaps/calculators/MacroCalculator';
import {
  CalcHomeGlassFaq,
  CalcHomeGlassFeatures,
  CalcHomeGlassPanel,
  CalcHomeGlassSources,
  CalcHomeGlassTools,
} from '@/components/proteinsnaps/calculators/CalcHomeGlassSections';
import {
  CalcGlassHero,
  ProteinGlassBackdrop,
  SourceItem,
  SourceLinks,
} from '@/components/proteinsnaps/calculators/Parts';

const URL = 'https://proteinsnaps.lumexforge.com/macro-calculator';
const OG = 'https://proteinsnaps.lumexforge.com/images/proteinsnaps/proteinsnaps-og.webp';

export const metadata: Metadata = {
  title: 'Macro Calculator: Protein, Carbs and Fat for Your Goal | ProteinSnaps',
  description:
    'Free macro calculator. Get daily protein, carbs and fat in grams for maintaining, a gentle fat loss goal or building, based on published nutrition ranges. Estimate only.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Macro Calculator: Protein, Carbs and Fat',
    description: 'Turn your calories into grams of protein, carbs and fat.',
    url: URL,
    type: 'website',
    images: [{ url: OG, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
};

const faqs = [
  {
    q: 'How are my macros calculated?',
    a: 'First we estimate your calories (Mifflin-St Jeor × activity, plus your goal), or use the number you enter. Protein is set per kg of body weight, fat as a percentage of calories, and carbs fill the rest. Protein and carbs have 4 kcal per gram and fat has 9.',
  },
  {
    q: 'How much protein should I choose?',
    a: 'The RDA for adults is 0.8 g per kg per day. For people who exercise regularly, the ISSN (2017) recommends at minimum about 1.4–2.0 g per kg per day, and adds that “greater amounts may be needed for people attempting to restrict energy intake while maintaining fat-free mass.” That is why the app’s fat loss setting is 2.2 g/kg.',
  },
  {
    q: 'What are healthy ranges for carbs and fat?',
    a: 'The Institute of Medicine’s Acceptable Macronutrient Distribution Ranges for adults are 45–65% of calories from carbohydrate, 20–35% from fat and 10–35% from protein. Higher-protein plans often land below 45% carbs; these are general reference ranges.',
  },
  {
    q: 'Can I use Keto or other presets?',
    a: 'This page keeps fat within 20–35%. In the ProteinSnaps app you can choose Balanced, High Protein, Keto, Carnivore, Low Fat or Custom, or edit your split in Profile. Some presets fall outside the general ranges above, so check with a professional if you are unsure.',
  },
  {
    q: 'Is this medical advice?',
    a: 'No. It is a general estimate for healthy adults. If you are pregnant, breastfeeding, under 18, have a medical condition, or a history of disordered eating, please talk to a doctor or registered dietitian.',
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
    <div
      className={`${ui.main} ${proteinGlass.page} ${calcMint.page} ps-calc-page max-lg:min-w-0 max-lg:w-full max-lg:max-w-[100vw] max-lg:overflow-x-clip`}
    >
      <ProteinGlassBackdrop />
      <div className={proteinGlass.content}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CalcGlassHero
          badge="FREE TOOL · ISSN + IOM RANGES"
          titleBefore="Macro "
          titleMint="Calculator"
          intro="See how much protein, carbs and fat could fit your day, in grams, for your goal. Protein comes first, then fat, and carbs fill the rest."
          chips={['Protein, carbs and fat', 'Follows your goal', 'Grams and %']}
          imageSrc="/images/proteinsnaps/calculators/calculator-2.webp"
          imageAlt="Salmon poke bowl with rice, edamame and vegetables"
        />
        <MacroCalculator />
        <CalcHomeGlassFeatures />
        <div className={ui.prose}>
        <h2 className={ui.h2}>How it works</h2>
        <CalcHomeGlassPanel>
          <p className={ui.body}>
            Protein (g) = weight (kg) × your protein setting. By default it follows your goal, using
            the <BrandName /> app&apos;s settings: fat loss 2.2, maintain 1.6, build 1.8, recomp 2.0
            g/kg. You can also pick 0.8 (RDA), 1.4, 1.6, 1.8, 2.0 or 2.2 g/kg yourself; your pick
            stays until you change the goal. Fat (g) = calories × fat% ÷ 9. Carbs (g) = (calories −
            protein × 4 − fat × 9) ÷ 4. Example: 1,800 kcal, 143 lb (65 kg), 1.6 g/kg protein, 30%
            fat → 104 g protein, 60 g fat, 211 g carbs. If you type your own calories, use a number
            between 800 and 6,000.
          </p>
          <p className={`${ui.body} mt-3`}>
            Don&apos;t know your calories? Try the{' '}
            <a className={ui.link} href="/calorie-calculator">calorie calculator</a>. Just need
            protein? Use the <a className={ui.link} href="/protein-calculator">protein calculator</a>.
          </p>
        </CalcHomeGlassPanel>
        <h2 className={ui.h2}>FAQ</h2>
        <CalcHomeGlassFaq items={faqs} />
        <h2 className={ui.h2}>Sources</h2>
        <CalcHomeGlassSources>
          <SourceLinks>
            <SourceItem href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8">
              Jäger R, et al. ISSN Position Stand: protein and exercise. J Int Soc Sports Nutr.
              2017;14:20.
            </SourceItem>
            <SourceItem href="https://extensionpubs.unl.edu/publication/g2207/2013/html/view">
              University of Nebraska–Lincoln Extension: Nutrient Recommendations for Adults (IOM AMDRs).
            </SourceItem>
            <SourceItem href="https://www.nal.usda.gov/programs/fnic">
              USDA National Agricultural Library, FNIC: calories per gram.
            </SourceItem>
            <SourceItem href="https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation">
              Medscape (QxMD): Mifflin-St Jeor Equation Calculator.
            </SourceItem>
          </SourceLinks>
        </CalcHomeGlassSources>
        <p className={ui.disclaimer}>
          Disclaimer: general estimates for healthy adults, not medical advice. Results are not
          guaranteed.
        </p>
        <h2 className={ui.h2}>More free tools</h2>
        <CalcHomeGlassTools current="macro" />
        </div>
      </div>
    </div>
  );
}
