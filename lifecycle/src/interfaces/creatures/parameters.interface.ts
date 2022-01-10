export interface ICommonParameters {
  power: number;          // [0, 99.99]
  intellect: number;      // [0, 99.99]
  attentiveness: number;  // [0, 99.99]
  learnability: number;   // [0, 99.99]
  agility: number;        // [0, 99.99]
  empathy: number;        // [0, 99.99]
  regeneration: number;   // [0, 99.99]
  health: number;         // [0, 99.99]
  lifespan: number;       // [0, 99.99]
  childhoodLength: number; // [0, 99.99]
  memory: number;         // [0, 99.99]
  bodyType: number;       // [0, 99.99], 0 - thin, 99.99 - thick
  behaviorTrend: number;  // [0, 99.99], 0 - introversion, 99.99 - extroversion
  proactivity: number;    // [0, 99.99], 0 - prefers rest, 99.99 - prefers actions
  knowledgeChannel: number; // [0, 99.99], 0 - experimentation, 99.99 - observation
  willPower: number;      // [0, 99.99], 0 - prefers act by inertia, 99.99 - prefers to strain
  curiosity: number;      // [0, 99.99]
  analysis: number;       // [0, 99.99]
  emotionality: number;   // [0, 99.99]
  greed: number;          // [0, 99.99]
  libido: number;         // [0, 99.99]
  aggressiveness: number; // [0, 99.99]
  gaiety: number;         // [0, 99.99]
  moralStandards: number; // [0, 99.99]
  beauty: number;         // [0, 99.99]
  luck: number;           // [0, 99.99]
}

export enum EFFECT_STATUS {
  ACTIVE = 'active',
  COOLDOWN = 'cooldown',
  MUTED = 'muted',
}

export interface IParameterEffect {
  [ key: string ]: number;
  value: number;
}

export interface IPermanentModifier {
  appliedAt: number;
  effects: IParameterEffect[];
}

export interface ITemporaryModifier extends IPermanentModifier {
  cooldown: number;
  expiresIn: number;
  status: EFFECT_STATUS;
}
