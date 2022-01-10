import { ICommonParameters } from './parameters.interface';

export interface ICreateCharacterData extends Partial<ICommonParameters> {
  nickName: string;
  firstName: string;
  lastName: string;
}
