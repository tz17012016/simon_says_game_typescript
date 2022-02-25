import {PLAYER_ACTION_TYPES} from '../app/hooks/customReducers/player/types/types';
import {ColorsArr} from '../../assets/constants/colorsConstants';
import {Color, Colors, Users} from '../app/redux/types/types';
import {
  CardClickHandle,
  DisplayColors,
  FindByColor,
  GetArrRevers,
  GetRandomColorByIndex,
  GetTenBestScores,
  RunSimonColors,
  Timeout,
} from './types/types';
/**
 * A helper function that returns timeout of ms
 * @param ms
 * @returns timeout of ms
 */
export const timeout: Timeout = ms => {
  return new Promise<void>(resolve => setTimeout(() => resolve(), ms));
};
/**
 * A function that accepts an object of color and an array of colors
 * and returns the object of color
 * @param color
 * @param arr
 * @returns  a color object
 */
export const findByColor: FindByColor = (color, arr) => {
  return arr.find((cl: Color) => cl.color === color.color);
};

/**
 *A function that receives an array and returns a new array in reverse order
 * @param arr
 * @returns a new array in reverse order
 */
export const getArrRevers: GetArrRevers = arr => {
  const newArr = [...arr].reverse();
  return newArr;
};
/**
 * A function that receives an array of colors and it randomly selects
 * an object of color and returns a new array with the new random object
 * @param arr
 * @returns a new array with the new random object
 */
export const getRandomColorByIndex: GetRandomColorByIndex = arr => {
  let newColor: Color = ColorsArr[Math.floor(Math.random() * 4)];
  return [...arr, newColor];
};
/**
 * Function that receives a string type and array of users The function
 * sorts the array from the smallest to the largest according to the key
 * name and returns a new array of 10 users from the end of the sorted array.
 * @param key
 * @param arr
 * @returns a new array of 10 users from the end of the sorted array.
 */
export const getTenBestScores: GetTenBestScores = (key, arr) => {
  let newScores = arr.sort((x: any, y: any) => x[key] - y[key]);
  let revArr: Users = getArrRevers(newScores.slice(-10));
  return revArr;
};
/**
 * A function that accepts dispatch and state and selects a random color and
 * dispatch the new array of colors width the random color into simon's color
 * array in the state
 * @param dispatch
 * @param state
 */
export const runSimonColors: RunSimonColors = (dispatch, state) => {
  const copyColors = getRandomColorByIndex(state.colors);
  dispatch({type: PLAYER_ACTION_TYPES.SET_SIMON_COLORS, payload: copyColors});
};
/**
 * Function that gets state and dispatch and setFlashColor, The function goes
 * through the whole color array of simon's and finds the color to flash,
 * it's flash it with a timeout of 1000 ms and then it disappears,
 * finally it takes the array of SIMON'S and enters it in reverse order to the
 * color array of the user and then changes The queue for the user's queue
 * @param state
 * @param dispatch
 * @param setFlashColor
 */
export const displayColors: DisplayColors = async (
  state,
  dispatch,
  setFlashColor,
) => {
  const {colors} = state;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    const newFlashColor: Color = findByColor(color, ColorsArr);
    setFlashColor(newFlashColor.value);
    await timeout(1000);
    setFlashColor('');
    await timeout(1000);
    //chack if this is the last color
    if (i === colors.length - 1) {
      const copyColors: Colors = getArrRevers(colors);
      dispatch({type: PLAYER_ACTION_TYPES.DISPLAY_OFF});
      dispatch({type: PLAYER_ACTION_TYPES.SET_USER_PLAY_ON});
      dispatch({
        type: PLAYER_ACTION_TYPES.SET_USER_COLORS,
        payload: copyColors,
      });
    }
  }
};
/**
 * Function that gets state and color dispatch and setFlashColor and setShowModal
 *  and setSuccess and setIsPlaying, The function takes the colors out of the user's
 *  array presents them to the user.
 *  The user must select
 *  the appropriate color that flashes for him, the function checks if the color that
 *  the user clicted is the last color from the user array if so then it checks if there
 *  are more colors left in the user's array if not, then the function does a timeout of 1000ms
 *  to display the flash color and determine the level of The game and if the user make mistake
 *  then he goes to a model that he can register in the winner list
 * @param color
 * @param state
 * @param dispatch
 * @param setFlashColor
 * @param setShowModal
 * @param setSuccess
 * @param setIsPlaying
 */
export const cardClickHandle: CardClickHandle = async (
  color,
  state,
  dispatch,
  setFlashColor,
  setShowModal,
  setSuccess,
  setIsPlaying,
) => {
  //if it is the user now playing
  if (!state.isDisplay && state.userPlay) {
    const copyUserColors = [...state.userColors];
    const lastColor = copyUserColors.pop();
    const newFlashColor: Color = findByColor(color, ColorsArr);
    setFlashColor(newFlashColor.value);
    //if the user lost the game
    if (color !== lastColor) {
      //set the user his finele score before the game ends
      setSuccess(false);
      setIsPlaying(true);
      await timeout(1000);
      setFlashColor('');
      setIsPlaying(false);
      dispatch({
        type: PLAYER_ACTION_TYPES.SET_USER_FINISH_SCORE,
        payload: state.colors.length,
      });
    }
    //if the user steal playing and his winning
    if (color === lastColor) {
      //set the score of the user and get the user to the next level
      if (!copyUserColors.length) {
        await timeout(1000);
        setIsPlaying(true);
        setFlashColor('');
        await timeout(1000);
        dispatch({type: PLAYER_ACTION_TYPES.DISPLAY_ON});
        dispatch({type: PLAYER_ACTION_TYPES.SET_USER_PLAY_OFF});
        dispatch({
          type: PLAYER_ACTION_TYPES.SET_USER_SCORE,
          payload: state.colors.length,
        });
        setSuccess(true);
        setIsPlaying(false);
        dispatch({type: PLAYER_ACTION_TYPES.SET_USER_COLORS_RESET});
        await timeout(2000);
      }
      //get all the colors that in the array
      if (copyUserColors.length) {
        dispatch({
          type: PLAYER_ACTION_TYPES.SET_USER_COLORS,
          payload: copyUserColors,
        });
      }
    }
    //open the modle
    await timeout(1000);
    setFlashColor('');
    setShowModal(true);
  }
};
