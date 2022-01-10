import { ELVIAN_RACE, REGULAR_GENDER } from '../../constants';
import { ICreateCharacterData } from './create-character-data.interface';

export interface ICreateElfCharacterData extends ICreateCharacterData {
  race: ELVIAN_RACE;
  gender: REGULAR_GENDER;
}
