import {
  PLAYER_ACTION_TYPES,
  InitPlay,
  initPlay,
  PlayerActions,
} from './types/types';
import {Reducer} from 'react';
/**
 * a reducer function for the player,
 *  the function take state and player actions and returns
 *  the appropriate actions that needed and change the state accordingly
 * @param state
 * @param action
 * @returns the appropriate actions that needed and change the state accordingly
 */
export const playerReduser: Reducer<InitPlay, PlayerActions> = (
  state: InitPlay,
  action: PlayerActions,
): InitPlay => {
  switch (action.type) {
    case PLAYER_ACTION_TYPES.DISPLAY_ON:
      return {...state, isDisplay: true};
    case PLAYER_ACTION_TYPES.DISPLAY_OFF:
      return {...state, isDisplay: false};
    case PLAYER_ACTION_TYPES.SET_USER_PLAY_ON:
      return {...state, userPlay: true};
    case PLAYER_ACTION_TYPES.SET_USER_PLAY_OFF:
      return {...state, userPlay: false};
    case PLAYER_ACTION_TYPES.SET_SIMON_COLORS:
      return {...state, colors: action.payload};
    case PLAYER_ACTION_TYPES.SET_USER_COLORS:
      return {...state, userColors: action.payload};
    case PLAYER_ACTION_TYPES.SET_USER_SCORE:
      return {...state, score: action.payload};
    case PLAYER_ACTION_TYPES.SET_USER_FINISH_SCORE:
      return {...initPlay, score: action.payload};
    case PLAYER_ACTION_TYPES.SET_USER_COLORS_RESET:
      return {...state, userColors: []};
    case PLAYER_ACTION_TYPES.PLAYER_RESET:
      return {...initPlay};
    default:
      return state;
  }
};
export default playerReduser;
