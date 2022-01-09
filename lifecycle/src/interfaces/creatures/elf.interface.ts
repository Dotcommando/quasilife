import { CREATURE_TYPE, HUMAN_LIKE_SPECIES } from '../../constants';
import { ICreature } from './creature.interface';

export interface IElf extends ICreature {
  type: CREATURE_TYPE.HUMAN_LIKE;
  species: HUMAN_LIKE_SPECIES.ELVES;
  firstName: string;
  lastName: string;
}
