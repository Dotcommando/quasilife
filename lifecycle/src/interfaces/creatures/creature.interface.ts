import { CREATURE_TYPE, GENDER } from '../../constants';
import { ICommonParameters, IPermanentModifier, ITemporaryModifier } from './parameters.interface';

export interface ICreature {
  startParameters: ICommonParameters;
  permanentModifiers: IPermanentModifier[];
  temporaryModifiers: ITemporaryModifier[];
  totalCurrentParameters: ICommonParameters;
  gender: GENDER;
  type: CREATURE_TYPE;
  nickName: string;
}
