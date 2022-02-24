import {User} from './../types/types';
import {WinnerAction, USERS_SCORES_ACTION_TYPES} from '../types/types';
import {Dispatch} from 'redux';
/**
 * a redux action creator function that get the id,the name and the
 * score of the user and send an action object of user to the score
 * state on the redux store
 * @param id
 * @param name
 * @param score
 * @returnsa a dispatch action function to the thnk middleware and fire
 * the set user object to the reduser to insert new user into the score
 * array on the redux store
 */
export const setUserData =
  (id: User['id'], name: User['name'], score: User['score']) =>
  async (dispatch: Dispatch<WinnerAction>) => {
    dispatch({
      type: USERS_SCORES_ACTION_TYPES.ADD_USER_SCOR,
      payload: {
        id,
        name,
        score,
      },
    });
  };
