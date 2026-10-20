// v2: root layout supplies the real navbar/footer. Classes come from components/ui.ts (live-site classes).
import type { Metadata } from 'next';
import { ui } from '@/components/proteinsnaps/calculators/ui';
import MacroCalculator from '@/components/proteinsnaps/calculators/MacroCalculator';

const URL = 'https://proteinsnaps.lumexforge.com/macro-calculator';
const OG = 'https://proteinsnaps.lumexforge.com/images/proteinsnaps/proteinsnaps-og.webp';

export const metadata: Metadata = {
  title: 'Macro Calculator: Protein, Carbs and Fat for Your Goal | ProteinSnaps',
  description: 'Free macro calculator. Get daily protein, carbs and fat in grams for maintaining, a gentle fat loss goal or building, based on published nutrition ranges. Estimate only.',
  alternates: { canonical: URL },
  openGraph: { title: 'Macro Calculator: Protein, Carbs and Fat', description: 'Turn your calories into grams of protein, carbs and fat.', url: URL, type: 'website', images: [{ url: OG, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: [OG] },
};

const faqs = [
  { q: 'How are my macros calculated?', a: 'First we estimate your calories (Mifflin-St Jeor × activity, plus your goal), or use the number you enter. Protein is set per kg of body weight, fat as a percentage of calories, and carbs fill the rest. Protein and carbs have 4 kcal per gram and fat has 9.' },
  { q: 'How much protein should I choose?', a: 'The RDA for adults is 0.8 g per kg per day. For people who exercise regularly, the ISSN (2017) recommends at minimum about 1.4–2.0 g per kg per day, and adds that “greater amounts may be needed for people attempting to restrict energy intake while maintaining fat-free mass.” That is why the app’s fat loss setting is 2.2 g/kg.' },
  { q: 'What are healthy ranges for carbs and fat?', a: 'The Institute of Medicine’s Acceptable Macronutrient Distribution Ranges for adults are 45–65% of calories from carbohydrate, 20–35% from fat and 10–35% from protein. Higher-protein plans often land below 45% carbs; these are general reference ranges.' },
  { q: 'Can I use Keto or other presets?', a: 'This page keeps fat within 20–35%. In the ProteinSnaps app you can choose Balanced, High Protein, Keto, Carnivore, Low Fat or Custom, or edit your split in Profile. Some presets fall outside the general ranges above, so check with a professional if you are unsure.' },
  { q: 'Is this medical advice?', a: 'No. It is a general estimate for healthy adults. If you are pregnant, breastfeeding, under 18, have a medical condition, or a history of disordered eating, please talk to a doctor or registered dietitian.' },
];
const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function Page() {
  return (
    <div className={ui.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className={ui.hero}>
        <h1 className={ui.h1}>Macro Calculator</h1>
        <p className={ui.lead}>See how much protein, carbs and fat could fit your day, in grams, for your goal. Protein comes first, then fat, and carbs fill the rest.</p>
      </header>
      <MacroCalculator />
      <h2 className={ui.h2}>How it works</h2>
      <p className={ui.body}>Protein (g) = weight (kg) × your protein setting. By default it follows your goal, using the ProteinSnaps app&apos;s settings: fat loss 2.2, maintain 1.6, build 1.8, recomp 2.0 g/kg. You can also pick 0.8 (RDA), 1.4, 1.6, 1.8, 2.0 or 2.2 g/kg yourself; your pick stays until you change the goal. Fat (g) = calories × fat% ÷ 9. Carbs (g) = (calories − protein × 4 − fat × 9) ÷ 4. Example: 1,800 kcal, 143 lb (65 kg), 1.6 g/kg protein, 30% fat → 104 g protein, 60 g fat, 211 g carbs. If you type your own calories, use a number between 800 and 6,000.</p>
      <p className={ui.body}>Don&apos;t know your calories? Try the <a className={ui.link} href="/calorie-calculator">calorie calculator</a>. Just need protein? Use the <a className={ui.link} href="/protein-calculator">protein calculator</a>.</p>
      <h2 className={ui.h2}>FAQ</h2>
      <div className={ui.faq}>{faqs.map(f => (<div key={f.q} className={ui.faqItem}><h3>{f.q}</h3><p>{f.a}</p></div>))}</div>
      <h2 className={ui.h2}>Sources</h2>
      <ul className={ui.sources}>
        <li><a className={ui.sourceLink} href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8" rel="noopener">Jäger R, et al. ISSN Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.</a></li>
        <li><a className={ui.sourceLink} href="https://extensionpubs.unl.edu/publication/g2207/2013/html/view" rel="noopener">University of Nebraska–Lincoln Extension: Nutrient Recommendations for Adults (IOM AMDRs).</a></li>
        <li><a className={ui.sourceLink} href="https://www.nal.usda.gov/programs/fnic" rel="noopener">USDA National Agricultural Library, FNIC: calories per gram.</a></li>
        <li><a className={ui.sourceLink} href="https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation" rel="noopener">Medscape (QxMD): Mifflin-St Jeor Equation Calculator.</a></li>
      </ul>
      <p className={ui.disclaimer}>Disclaimer: general estimates for healthy adults, not medical advice. Results are not guaranteed.</p>
    </div>
  );
}
