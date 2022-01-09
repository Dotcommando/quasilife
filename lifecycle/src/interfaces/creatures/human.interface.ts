import { CREATURE_TYPE, HUMAN_LIKE_SPECIES } from '../../constants';
import { ICreature } from './creature.interface';

export interface IHuman extends ICreature {
  type: CREATURE_TYPE.HUMAN_LIKE;
  species: HUMAN_LIKE_SPECIES.HUMANS;
  firstName: string;
  lastName: string;
}
