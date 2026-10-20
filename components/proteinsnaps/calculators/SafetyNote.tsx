import { ui } from './ui';
import { ErrorBox, SoftNote } from './Parts';
export default function SafetyNote({ belowBmr }: { belowBmr?: boolean }) {
  return (<div className={ui.notes}>
    {belowBmr && <ErrorBox>This target is below your estimated resting energy (BMR). Please consider a gentler goal, and talk to a registered dietitian or doctor before eating this little.</ErrorBox>}
    <SoftNote>An estimate for healthy adults, not medical advice. Formulas can be off for individuals. Avoid very low intakes. If you are pregnant, breastfeeding, under 18, have a medical condition, or have a history of disordered eating, please talk to a doctor or registered dietitian instead of using a calorie target.</SoftNote>
  </div>);
}
