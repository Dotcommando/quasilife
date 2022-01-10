import { HUMAN_RACE, REGULAR_GENDER } from '../../constants';
import { ICreateCharacterData } from './create-character-data.interface';

export interface ICreateHumanCharacterData extends ICreateCharacterData {
  race: HUMAN_RACE;
  gender: REGULAR_GENDER;
}
