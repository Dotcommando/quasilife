import { CREATURE_TYPE, HUMAN_LIKE_SPECIES } from '../../constants';
import { IAbstractCreature } from './abstract-creature.interface';

export interface IMorph extends IAbstractCreature {
  type: CREATURE_TYPE.HUMAN_LIKE;
  species: HUMAN_LIKE_SPECIES.MORPHS;
  nickName: string;
  firstName: string;
  lastName: string;
}
