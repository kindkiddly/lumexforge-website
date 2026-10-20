// v2: framework-free macro-page logic (tested).
import type { Goal } from './energyMath';
// 0.8 = RDA; 1.4–2.0 = ISSN 2017 range for exercising people; 2.2 = ISSN 2017 "greater amounts may be needed
// for people attempting to restrict energy intake while maintaining fat-free mass."
export const PROTEIN_OPTIONS = [0.8, 1.4, 1.6, 1.8, 2.0, 2.2] as const;
// The ProteinSnaps app's settings (owner-confirmed), not a health recommendation.
export const GOAL_PROTEIN: Record<Goal, number> = { fatloss: 2.2, maintain: 1.6, gain: 1.8, recomp: 2.0 };
export const FAT_OPTIONS = [20, 25, 30, 35] as const;
export const CAL_MIN = 800, CAL_MAX = 6000;
export const CAL_RANGE_MSG = 'Please enter calories between 800 and 6,000, or leave blank to estimate.';

export interface ProteinPick { value: number; manual: boolean }
/** Initial state follows the default goal. */
export const initialProtein = (goal: Goal): ProteinPick => ({ value: GOAL_PROTEIN[goal], manual: false });
/** User picked a value from the dropdown: keep it until the goal changes. */
export const pickProtein = (value: number): ProteinPick => ({ value, manual: true });
/** Goal changed: always reset to that goal's app setting (overrides an earlier manual pick). */
export const onGoalChange = (goal: Goal): ProteinPick => ({ value: GOAL_PROTEIN[goal], manual: false });

export function proteinLabel(v: number, goal: Goal): string {
  const base = `${v.toFixed(1)} g per kg`;
  if (v === 0.8) return `${base} (RDA, general adult baseline)`;
  if (v === GOAL_PROTEIN[goal]) return `${base} (the ProteinSnaps app's settings for this goal)`;
  if (v === 2.2) return `${base} (higher, e.g. while in a calorie deficit)`;
  return `${base} (exercising regularly)`;
}

/** Optional "known calories" field. Blank → estimate. Out of range → message, no silent ignore. */
export function parseKnownCalories(raw: string): { kcal: number | null; error: string | null } {
  const t = raw.trim();
  if (t === '') return { kcal: null, error: null };
  const n = Number(t);
  if (!Number.isFinite(n) || n < CAL_MIN || n > CAL_MAX) return { kcal: null, error: CAL_RANGE_MSG };
  return { kcal: Math.round(n), error: null };
}
