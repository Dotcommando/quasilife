import { COMMON_PARAMS_KEYS } from '../constants';
import {
  ICommonParameters,
  ICreateCharacterData,
  ICreateElfCharacterData,
  ICreateHumanCharacterData,
  ICreateMorphCharacterData,
} from '../interfaces';

export function commonParametersExtractor(
  data: ICreateCharacterData
    | ICreateElfCharacterData
    | ICreateHumanCharacterData
    | ICreateMorphCharacterData,
): Partial<ICommonParameters> {
  if (!data || !Object.keys(data).length) {
    return {};
  }

  const result: Partial<ICommonParameters> = {};

  for (const commonParameter of COMMON_PARAMS_KEYS) {
    if (commonParameter in data) {
      result[commonParameter] = data[commonParameter];
    }
  }

  return result;
}
