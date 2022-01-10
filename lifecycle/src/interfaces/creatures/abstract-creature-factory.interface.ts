import { ICreateElfCharacterData } from './create-elf-character-data.interface';
import { ICreateHumanCharacterData } from './create-human-character-data.interface';
import { ICreateMorphCharacterData } from './create-morph-character-data.interface';
import { IElf } from './elf.interface';
import { IHuman } from './human.interface';
import { IMorph } from './morph.interface';

export interface IAbstractCreatureFactory {
  createHuman(data: ICreateHumanCharacterData): IHuman;
  createElf(data: ICreateElfCharacterData): IElf;
  createMorph(data: ICreateMorphCharacterData): IMorph;
}
