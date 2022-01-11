import {
  IAbstractCreatureFactory,
  ICreateElfCharacterData,
  ICreateHumanCharacterData,
  ICreateMorphCharacterData,
  IElf,
  IHuman,
  IMorph,
} from '../interfaces';

export class WerewolfCharacterFactory implements IAbstractCreatureFactory {
  public createHuman(data: ICreateHumanCharacterData): IHuman {
    return new WerewolfHuman(data);
  };

  public createElf(data: ICreateElfCharacterData): IElf {
    return new WerewolfElf(data);
  };

  public createMorph(data: ICreateMorphCharacterData): IMorph {
    return new WerewolfMorph(data);
  };
}
