export enum HUMAN_RACE {
  NORD = 'nord',   // european
  SINIE = 'sinie', // asian
  AUSIE = 'ausie', // australian
  ELDER = 'elder', // african
}

export enum ELVIAN_RACE {
  HIGH = 'high',
  WOOD = 'wood',
  DARK = 'dark',
}

export enum MORPHIAN_RACE {
  SHIFTER = 'shifter',
  FACESTEALER = 'facestealer',
}

export type RACE = typeof HUMAN_RACE | typeof ELVIAN_RACE | typeof MORPHIAN_RACE;
