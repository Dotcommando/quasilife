import { CREATURE_TYPE, HUMAN_LIKE_SPECIES } from '../../constants';
import { IAbstractCreature } from './abstract-creature.interface';

export interface IHuman extends IAbstractCreature {
  type: CREATURE_TYPE.HUMAN_LIKE;
  species: HUMAN_LIKE_SPECIES.HUMANS;
  firstName: string;
  lastName: string;
}
