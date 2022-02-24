import {DisplayAction, DISPLAY_ACTION_TYPES} from '../types/types';
import {Dispatch} from 'redux';
/**
 * a redux action creator function that send an action object of
 * togle to set the game on
 * @param isOn
 * @returns  a dispatch action function to the thnk middleware and fire
 * the set togle on reduser to change the isOn state on the redux store
 */
export const setGameOn =
  (isOn: boolean) => async (dispatch: Dispatch<DisplayAction>) => {
    dispatch({type: DISPLAY_ACTION_TYPES.SET_GAME_ON, payload: {isOn}});
  };
/**
 * a redux action creator function that send an action object of
 * togle to set the game off
 * @param isOn
 * @returns  a dispatch action function to the thnk middleware and fire
 * the set togle off reduser to change the isOn state on the redux store
 */
export const setGameOff =
  (isOn: boolean) => async (dispatch: Dispatch<DisplayAction>) => {
    dispatch({type: DISPLAY_ACTION_TYPES.SET_GAME_OFF, payload: {isOn}});
  };
