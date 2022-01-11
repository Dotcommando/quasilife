import { COMMON_PARAMS_KEYS } from '../constants';
import { ICommonParameters, IRaceDefaults } from '../interfaces';
import { generateRandomIntegerFromRange } from './generate-random-integer-from-range.helper';

export function fillParametersByDefault(
  extracted: Partial<ICommonParameters>,
  defaults: IRaceDefaults,
): ICommonParameters {
  const result: Partial<ICommonParameters> = {};

  for (const commonParameter of COMMON_PARAMS_KEYS) {
    if (commonParameter in extracted) {
      result[commonParameter] = extracted[commonParameter];
    } else {
      const delta: number = defaults.delta?.[commonParameter];
      const value: number = defaults.value?.[commonParameter];

      if (delta === 0) {
        result[commonParameter] = value;
      } else {
        result[commonParameter] = generateRandomIntegerFromRange(value - delta, value + delta);
      }
    }
  }

  return result as ICommonParameters;
}
