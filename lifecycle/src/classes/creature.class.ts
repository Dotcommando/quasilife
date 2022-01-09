import { CREATURE_TYPE, GENDER } from '../constants';
import { ICommonParameters, ICreature, IPermanentModifier, ITemporaryModifier } from '../interfaces';

export abstract class Creature implements ICreature {
  startParameters: ICommonParameters;
  permanentModifiers: IPermanentModifier[];
  temporaryModifiers: ITemporaryModifier[];
  totalCurrentParameters: ICommonParameters;

  // Species Identity
  gender: GENDER;
  type: CREATURE_TYPE;
  nickName: string;
}
