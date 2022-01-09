import { RACE, SIGN, SPECIES } from '../constants';
import { Creature } from './creature.class';

export class Character extends Creature {
  lastName: string;
  nickName: string;
  birthSign: SIGN;
  species: SPECIES;
  race: RACE;
}
