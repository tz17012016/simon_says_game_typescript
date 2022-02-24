import {Colors} from '../../../../redux/types/types';
// InitPlay object
export interface InitPlay {
  isDisplay: boolean;
  colors: Colors;
  score: number;
  userPlay: boolean;
  userColors: Colors;
}
export const initPlay: InitPlay = {
  isDisplay: false,
  colors: [],
  score: 0,
  userPlay: false,
  userColors: [],
};
/// enum action types
export enum PLAYER_ACTION_TYPES {
  DISPLAY_ON = 'DISPLAY_ON',
  DISPLAY_OFF = 'DISPLAY_OFF',
  SET_USER_PLAY_ON = 'SET_USER_PLAY_ON',
  SET_USER_PLAY_OFF = 'SET_USER_PLAY_OFF',
  SET_SIMON_COLORS = 'SET_SIMON_COLORS',
  SET_USER_COLORS = 'SET_USER_COLORS',
  SET_USER_SCORE = 'SET_USER_SCORE',
  SET_USER_COLORS_RESET = 'SET_USER_COLORS_RESET',
  SET_USER_FINISH_SCORE = 'SET_USER_FINISH_SCORE',
  PLAYER_RESET = 'PLAYER_RESET',
}

//player actions(OBJECTS)
export type Init = InitPlay;

export type DisplayOn = InitPlay['isDisplay'];

export type DisplayOff = InitPlay['isDisplay'];

export type UserPlayOn = InitPlay['userPlay'];

export type UserPlayOff = InitPlay['userPlay'];

export type SetSimonColors = InitPlay['colors'];
export type SetUserColors = InitPlay['userColors'];

export type SetUserScore = InitPlay['score'];

export type SetUserFinishScore = InitPlay['score'];

export type SetUserColorsReset = InitPlay['userColors'];

//actions createors
export type InitAC = {
  type: PLAYER_ACTION_TYPES.PLAYER_RESET;
  payload?: Init;
};
export type DisplayOnAC = {
  type: PLAYER_ACTION_TYPES.DISPLAY_ON;
  payload?: DisplayOn;
};
export type DisplayOffAC = {
  type: PLAYER_ACTION_TYPES.DISPLAY_OFF;
  payload?: DisplayOff;
};
export type UserPlayOnAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_PLAY_ON;
  payload?: UserPlayOn;
};
export type UserPlayOffAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_PLAY_OFF;
  payload?: UserPlayOff;
};
export type SetSimonColorsAC = {
  type: PLAYER_ACTION_TYPES.SET_SIMON_COLORS;
  payload: SetSimonColors;
};
export type SetUserColorsAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_COLORS;
  payload: SetUserColors;
};
export type SetUserScoreAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_SCORE;
  payload: SetUserScore;
};
export type SetUserFinishScoreAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_FINISH_SCORE;
  payload: SetUserFinishScore;
};
export type SetUserColorsResetAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_COLORS_RESET;
  payload?: SetUserColorsReset;
};
export type UnknownActionAC = {
  type: PLAYER_ACTION_TYPES.SET_USER_COLORS_RESET;
  payload?: {};
};

export type PlayerActions =
  | InitAC
  | DisplayOnAC
  | DisplayOffAC
  | UserPlayOnAC
  | UserPlayOffAC
  | SetSimonColorsAC
  | SetUserColorsAC
  | SetUserScoreAC
  | SetUserFinishScoreAC
  | SetUserColorsResetAC
  | UnknownActionAC;
