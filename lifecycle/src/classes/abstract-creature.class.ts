import { CREATURE_TYPE, GENDER } from '../constants';
import { IAbstractCreature, ICommonParameters, IPermanentModifier, ITemporaryModifier } from '../interfaces';
import { AbstractBattleClass } from './abstract-battle.class';
import { AbstractEmotionsClass } from './abstract-emotions.class';
import { AbstractEnergyClass } from './abstract-energy.class';
import { AbstractHealthClass } from './abstract-health.class';
import { AbstractMovingControlClass } from './abstract-moving-control.class';
import { AbstractPermanentModifiersClass } from './abstract-permanent-modifiers.class';
import { AbstractTemporaryModifiersClass } from './abstract-temporary-modifiers.class';

export abstract class AbstractCreatureClass implements IAbstractCreature {
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
