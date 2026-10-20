// v2: protein-page math (tested). Sources: RDA 0.8 g/kg and 1.4–2.0 g/kg, per-meal 0.25 g/kg (ISSN 2017).
import { LB_TO_KG } from './energyMath';
export type Level = 'rda' | 'active';
export type WeightUnit = 'lb' | 'kg';
export const DEFAULT_WEIGHT_UNIT: WeightUnit = 'lb';
export const WEIGHT_PLACEHOLDER: Record<WeightUnit, string> = { lb: 'e.g. 143', kg: 'e.g. 65' };
export const RANGES: Record<Level, [number, number]> = { rda: [0.8, 0.8], active: [1.4, 2.0] };
export function proteinRange(weight: number, unit: WeightUnit, level: Level):
  { lo: number; hi: number; meal: number } | { error: string } {
  const kg = unit === 'lb' ? weight * LB_TO_KG : weight;
  if (!(kg >= 30 && kg <= 300)) return { error: 'Please enter a weight between 66 and 660 lb (30–300 kg).' };
  const [a, b] = RANGES[level];
  return { lo: Math.round(kg * a), hi: Math.round(kg * b), meal: Math.round(kg * 0.25) };
}
