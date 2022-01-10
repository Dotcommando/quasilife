export enum REGULAR_GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

export enum THREE_SEXED_GENDER {
  FEMALE = 'female',
  PRIMO_MALE = 'primo male',
  SECONDO_MALE = 'secondo male',
}

export enum MORPH_GENDER {
  INTERSEX = 'intersex',
  MALE = 'male',
  FEMALE = 'female',
}

export type GENDER = typeof REGULAR_GENDER | typeof THREE_SEXED_GENDER | typeof MORPH_GENDER;
