import {
  AUSIE_DEFAULTS,
  CREATURE_TYPE,
  ELDER_DEFAULTS,
  HUMAN_LIKE_SPECIES,
  HUMAN_RACE,
  NORD_DEFAULTS,
  SINIE_DEFAULTS,
} from '../constants';
import { commonParametersExtractor, fillParametersByDefault } from '../helpers';
import { ICommonParameters, ICreateHumanCharacterData, IHuman } from '../interfaces';
import { AbstractCreatureClass } from './abstract-creature.class';

export class PureHuman extends AbstractCreatureClass implements IHuman {
  constructor(data: ICreateHumanCharacterData) {
    super(data);

    const race: HUMAN_RACE = data.race;
    const partialCommonParameters: Partial<ICommonParameters> = commonParametersExtractor(data);
    let fullCommonParameters: ICommonParameters;

    switch (race) {
      case HUMAN_RACE.AUSIE:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, AUSIE_DEFAULTS);
        break;
      case HUMAN_RACE.ELDER:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, ELDER_DEFAULTS);
        break;
      case HUMAN_RACE.NORD:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, NORD_DEFAULTS);
        break;
      case HUMAN_RACE.SINIE:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, SINIE_DEFAULTS);
        break;
      default:
        fullCommonParameters = fillParametersByDefault(partialCommonParameters, ELDER_DEFAULTS);
        break;
    }

    this.startParameters = { ...fullCommonParameters };
    this.totalCurrentParameters = { ...fullCommonParameters };
    this.race = race;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  public type: CREATURE_TYPE.HUMAN_LIKE;
  public species: HUMAN_LIKE_SPECIES.HUMANS;
  public race: HUMAN_RACE;
  public firstName: string;
  public lastName: string;
}
