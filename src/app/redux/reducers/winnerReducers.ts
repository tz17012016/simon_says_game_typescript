import {
  initialUsersScoresState,
  UsersScoresInterface,
  WinnerAction,
  USERS_SCORES_ACTION_TYPES,
} from '../types/types';
/**
 * a redux Winner reduser function that update the
 * Winner score array state in the redux store
 * @param state
 * @param action
 * @returns inser new user to the score array in the redux store
 */
export const setWinnerReducer = (
  state = initialUsersScoresState,
  action: WinnerAction,
): UsersScoresInterface => {
  switch (action.type) {
    case USERS_SCORES_ACTION_TYPES.ADD_USER_SCOR:
      return {
        ...state,
        scores: [...state.scores, {...action.payload}],
      };

    default:
      return state;
  }
};
