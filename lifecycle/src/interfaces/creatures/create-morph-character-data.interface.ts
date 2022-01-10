import { MORPH_GENDER, MORPHIAN_RACE } from '../../constants';
import { ICreateCharacterData } from './create-character-data.interface';

export interface ICreateMorphCharacterData extends ICreateCharacterData {
  race: MORPHIAN_RACE;
  gender: MORPH_GENDER;
}
