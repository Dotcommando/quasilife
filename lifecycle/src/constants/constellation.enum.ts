export enum WATER_SIGN {
  WATERFALL = 'waterfall',
  SHARK = 'shark',
  AMBER_BAY = 'amber bay',
  MAELSTROM = 'maelstrom',
}

export enum FIRE_SIGN {
  PYRE = 'pyre',
  LOVER = 'lover',
  IFRIT = 'ifrit',
  LADY = 'lady',
}

export enum AIR_SIGN {
  THUNDER = 'thunder',
  MISTRAL = 'mistral',
  SHADOW = 'shadow',
  THIEF = 'thief',
}

export enum EARTH_SIGN {
  STRONGHOLD = 'stronghold',
  EMERALD_ROCK = 'emerald rock',
  SNAKE = 'snake',
  MUDFLOW = 'mudflow',
}

export type SIGN = typeof WATER_SIGN
  | typeof FIRE_SIGN
  | typeof AIR_SIGN
  | EARTH_SIGN;
