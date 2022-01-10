import {
  IAbstractCreatureFactory,
  ICreateElfCharacterData,
  ICreateHumanCharacterData,
  ICreateMorphCharacterData,
  IElf,
  IHuman,
  IMorph,
} from '../interfaces';

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

export class VampireCharacterFactory implements IAbstractCreatureFactory {
  public createHuman(data: ICreateHumanCharacterData): IHuman {
    return new VampireHuman(data);
  };

  public createElf(data: ICreateElfCharacterData): IElf {
    return new VampireElf(data);
  };

  public createMorph(data: ICreateMorphCharacterData): IMorph {
    return new VampireMorph(data);
  };
}

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
