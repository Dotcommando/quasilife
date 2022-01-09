export enum HUMAN_LIKE_SPECIES {
  HUMANS = 'humans',
  ELVES = 'elves',
  MORPHS = 'morphs',
}

export enum ANIMAL_LIKE_SPECIES {
  COW = 'cow',
  SHEEP = 'sheep',
  PIG = 'pig',
  GOAT = 'goat',
}

export enum INANIMATE_NATURE_SPECIES {
  ELEMENTAL = 'elemental',
  ETHER = 'ether',
}

export type SPECIES = typeof HUMAN_LIKE_SPECIES | typeof ANIMAL_LIKE_SPECIES | INANIMATE_NATURE_SPECIES;
