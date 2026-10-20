import { LB_TO_KG, IN_TO_CM } from './energyMath';
import type { BodyState } from './BodyInputs';
export function toMetric(s: BodyState) {
  const kg = s.unit === 'metric' ? parseFloat(s.kg) : parseFloat(s.lb) * LB_TO_KG;
  const cm = s.unit === 'metric' ? parseFloat(s.cm) : ((parseFloat(s.ft) || 0) * 12 + (parseFloat(s.inch) || 0)) * IN_TO_CM;
  return { kg, cm, age: parseFloat(s.age) };
}
