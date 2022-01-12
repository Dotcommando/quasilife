import {
  CREATURE_TYPE,
  FACESTEALER_DEFAULTS,
  HUMAN_LIKE_SPECIES,
  MORPHIAN_RACE,
  SHIFTER_DEFAULTS,
} from '../constants';
import { commonParametersExtractor, fillParametersByDefault } from '../helpers';
import { ICommonParameters, ICreateMorphCharacterData, IMorph } from '../interfaces';
import { AbstractCreatureClass } from './abstract-creature.class';

export class PureMorph extends AbstractCreatureClass implements IMorph {
  constructor(data: ICreateMorphCharacterData) {
    super(data);

    const race: MORPHIAN_RACE = data.race;
    const partialCommonParameters: Partial<ICommonParameters> = commonParametersExtractor(data);
    let fullCommonParameters: ICommonParameters;

    switch (race) {
      case MORPHIAN_RACE.FACESTEALER:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, FACESTEALER_DEFAULTS);
        break;
      case MORPHIAN_RACE.SHIFTER:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, SHIFTER_DEFAULTS);
        break;
      default:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, SHIFTER_DEFAULTS);
        break;
    }

    this.startParameters = { ...fullCommonParameters };
    this.totalCurrentParameters = { ...fullCommonParameters };
    this.race = race;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  public type: CREATURE_TYPE.HUMAN_LIKE;
  public species: HUMAN_LIKE_SPECIES.MORPHS;
  public race: MORPHIAN_RACE;
  public firstName: string;
  public lastName: string;
}
