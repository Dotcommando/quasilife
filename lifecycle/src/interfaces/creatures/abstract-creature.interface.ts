import {
  AbstractBattleClass,
  AbstractEmotionsClass,
  AbstractEnergyClass,
  AbstractHealthClass,
  AbstractMovingControlClass,
  AbstractPermanentModifiersClass,
  AbstractTemporaryModifiersClass,
} from '../../classes';
import { CREATURE_TYPE, GENDER } from '../../constants';
import { ICommonParameters, IPermanentModifier, ITemporaryModifier } from './parameters.interface';

export interface IAbstractCreature {
  energyService: AbstractEnergyClass;
  emotionsService: AbstractEmotionsClass;
  battleService: AbstractBattleClass;
  healthService: AbstractHealthClass;
  movingControlService: AbstractMovingControlClass;
  permanentModifiersService: AbstractPermanentModifiersClass;
  temporaryModifiersService: AbstractTemporaryModifiersClass;

  startParameters: ICommonParameters;
  permanentModifiers: IPermanentModifier[];
  temporaryModifiers: ITemporaryModifier[];
  totalCurrentParameters: ICommonParameters;
  gender: GENDER;
  type: CREATURE_TYPE;
  nickName: string;
}
