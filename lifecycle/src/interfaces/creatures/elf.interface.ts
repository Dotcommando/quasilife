import { CREATURE_TYPE, HUMAN_LIKE_SPECIES } from '../../constants';
import { IAbstractCreature } from './abstract-creature.interface';

export interface IElf extends IAbstractCreature {
  type: CREATURE_TYPE.HUMAN_LIKE;
  species: HUMAN_LIKE_SPECIES.ELVES;
  firstName: string;
  lastName: string;
}
