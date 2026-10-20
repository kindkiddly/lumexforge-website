// Shared, framework-free math for /calorie-calculator and /macro-calculator.
// Sources: see calorie-macro-v1.md. Goal adjustments are the ProteinSnaps app's own settings (owner-confirmed), not health advice.
export type Sex = 'female' | 'male';
export type Activity = 'sedentary' | 'light' | 'moderate' | 'active' | 'very';
export type Goal = 'fatloss' | 'maintain' | 'recomp' | 'gain';

// SINGLE SOURCE for activity factors (owner: developer confirming these match the app; swap here only).
// Mifflin-St Jeor 1990 activity scale as published on Medscape/QxMD calculator page.
export const ACTIVITY: Record<Activity, { factor: number; label: string }> = {
  sedentary: { factor: 1.2, label: 'Mostly sitting, little exercise' },
  light: { factor: 1.375, label: 'Lightly active' },
  moderate: { factor: 1.55, label: 'Moderately active' },
  active: { factor: 1.725, label: 'Active' },
  very: { factor: 1.9, label: 'Very active' },
};
// App settings (kcal/day vs estimated maintenance). Recomp = maintenance ±100.
export const GOAL: Record<Goal, { delta: number; label: string }> = {
  fatloss: { delta: -400, label: 'Fat loss goal (gentle deficit)' },
  maintain: { delta: 0, label: 'Maintain' },
  recomp: { delta: 0, label: 'Recomp (around maintenance)' },
  gain: { delta: 350, label: 'Build / gain' },
};
export const LB_TO_KG = 0.45359237;
export const IN_TO_CM = 2.54;

export function bmr(sex: Sex, kg: number, cm: number, age: number): number {
  return 10 * kg + 6.25 * cm - 5 * age + (sex === 'female' ? -161 : 5);
}

export function validate(kg: number, cm: number, age: number): string | null {
  if (!(age >= 18 && age <= 100)) return 'Please enter an age between 18 and 100.';
  if (!(cm >= 120 && cm <= 230)) return 'Please enter a height between 4 ft 0 in and 7 ft 6 in (120–230 cm).';
  if (!(kg >= 30 && kg <= 300)) return 'Please enter a weight between 66 and 660 lb (30–300 kg).';
  return null;
}

export interface EnergyResult { bmr: number; tdee: number; low: number; high: number; belowBmr: boolean }
export function energy(sex: Sex, kg: number, cm: number, age: number, act: Activity, goal: Goal): EnergyResult {
  const b = bmr(sex, kg, cm, age);
  const t = b * ACTIVITY[act].factor;
  const target = t + GOAL[goal].delta;
  const low = goal === 'recomp' ? t - 100 : target;
  const high = goal === 'recomp' ? t + 100 : target;
  return { bmr: Math.round(b), tdee: Math.round(t), low: Math.round(low), high: Math.round(high), belowBmr: low < b };
}

// Macros: protein g/kg (ISSN 0.8 RDA or 1.4–2.0), fat % of kcal (AMDR 20–35), carbs = remainder. 4/4/9 kcal per g (USDA).
export interface Macros { protein: number; fat: number; carbs: number; pPct: number; fPct: number; cPct: number; warnings: string[] }
export function macros(kcal: number, kg: number, proteinPerKg: number, fatPct: number): Macros {
  const pK = kg * proteinPerKg * 4;
  const fK = kcal * fatPct / 100;
  const cK = Math.max(0, kcal - pK - fK);
  const pct = (x: number) => Math.round((x / kcal) * 100);
  const m: Macros = { protein: Math.round(pK / 4), fat: Math.round(fK / 9), carbs: Math.round(cK / 4), pPct: pct(pK), fPct: pct(fK), cPct: pct(cK), warnings: [] };
  if (kcal - pK - fK < 0) m.warnings.push('Protein and fat already use all of these calories. Try a lower protein or fat setting.');
  if (m.pPct > 35) m.warnings.push('Protein is above 35% of calories, the top of the adult AMDR (10–35%).');
  if (m.cPct < 45) m.warnings.push('Carbs are below 45% of calories, the low end of the adult AMDR (45–65%). Many higher-protein plans do this; it is a general reference range, not a rule.');
  if (m.cPct > 65) m.warnings.push('Carbs are above 65% of calories, the top of the adult AMDR.');
  return m;
}
