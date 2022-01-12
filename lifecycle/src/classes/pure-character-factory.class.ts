import {
  IAbstractCreatureFactory,
  ICreateElfCharacterData,
  ICreateHumanCharacterData,
  ICreateMorphCharacterData,
  IElf,
  IHuman,
  IMorph,
} from '../interfaces';
import { PureElf } from './pure-elf.class';
import { PureHuman } from './pure-human.class';
import { PureMorph } from './pure-morph.class';

export class PureCharacterFactory implements IAbstractCreatureFactory {
  public createHuman(data: ICreateHumanCharacterData): IHuman {
    return new PureHuman(data);
  };

  public createElf(data: ICreateElfCharacterData): IElf {
    return new PureElf(data);
  };

  public createMorph(data: ICreateMorphCharacterData): IMorph {
    return new PureMorph(data);
  };
}
