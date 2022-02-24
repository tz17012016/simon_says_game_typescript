import {
  initialDisplayState,
  DisplayStateInterface,
  DisplayAction,
  DISPLAY_ACTION_TYPES,
} from '../types/types';
/**
 * a redux display reduser function that update the
 * display state in the redux store
 * @param state
 * @param action
 * @returns toggle between game on or off in the redux store
 */
export const displayStateReducer = (
  state = initialDisplayState,
  action: DisplayAction,
): DisplayStateInterface => {
  switch (action.type) {
    case DISPLAY_ACTION_TYPES.SET_GAME_ON:
      return {...state, isOn: action.payload.isOn};
    case DISPLAY_ACTION_TYPES.SET_GAME_OFF:
      return {...state, isOn: action.payload.isOn};
    default:
      return state;
  }
};
