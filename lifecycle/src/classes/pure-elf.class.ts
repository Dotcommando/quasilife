import {
  CREATURE_TYPE,
  DARK_DEFAULTS,
  ELVIAN_RACE,
  HIGH_DEFAULTS,
  HUMAN_LIKE_SPECIES,
  WOOD_DEFAULTS,
} from '../constants';
import { commonParametersExtractor, fillParametersByDefault } from '../helpers';
import { ICommonParameters, ICreateElfCharacterData, IElf } from '../interfaces';
import { AbstractCreatureClass } from './abstract-creature.class';

export class PureElf extends AbstractCreatureClass implements IElf {
  constructor(data: ICreateElfCharacterData) {
    super(data);

    const race: ELVIAN_RACE = data.race;
    const partialCommonParameters: Partial<ICommonParameters> = commonParametersExtractor(data);
    let fullCommonParameters: ICommonParameters;

    switch (race) {
      case ELVIAN_RACE.DARK:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, DARK_DEFAULTS);
        break;
      case ELVIAN_RACE.HIGH:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, HIGH_DEFAULTS);
        break;
      case ELVIAN_RACE.WOOD:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, WOOD_DEFAULTS);
        break;
      default:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, WOOD_DEFAULTS);
        break;
    }

    this.startParameters = { ...fullCommonParameters };
    this.totalCurrentParameters = { ...fullCommonParameters };
    this.race = race;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  public type: CREATURE_TYPE.HUMAN_LIKE;
  public species: HUMAN_LIKE_SPECIES.ELVES;
  public race: ELVIAN_RACE;
  public firstName: string;
  public lastName: string;
}
