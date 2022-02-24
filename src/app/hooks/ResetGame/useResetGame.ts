import React from 'react';
import {TabParamsList} from '../../Routes/Types/Types';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {displayActionCreators} from '../../redux/actions/index';
import {PLAYER_ACTION_TYPES} from '../customReducers/player/types/types';
import {OnPress} from '../DispalyTenBestScore/types/types';
/**
 * react custom hook that react dispatch,setSuccess,setShowModal function
 * the function dispatch an actions of start game or close game as nedded,
 * and on close it navigate to 'WinnerList' screen.
 * the function reterns startHandle and  closeHandle to the component that
 * need those functions
 * @param dispatch
 * @param setSuccess
 * @param setShowModal
 * @returns startHandle and  closeHandle to the component that
 * need those functions
 */
const useResetGame = (
  dispatch: React.Dispatch<{type: PLAYER_ACTION_TYPES.PLAYER_RESET}>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatchRedux = useDispatch();
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();

  const {setGameOn, setGameOff} = bindActionCreators(
    displayActionCreators,
    dispatchRedux,
  );
  // a function that send a redux action to start a new game and
  // reast the Success state
  const startHandle: OnPress = () => {
    setGameOn(true);
    setSuccess(true);
  };
  // a function that send a redux action to close the game and
  // reast the Success state ,the modle state,player state and send
  // the user to the Winner List screen
  const closeHandle: OnPress = () => {
    setGameOff(false);
    setShowModal(false);
    setSuccess(true);
    dispatch({type: PLAYER_ACTION_TYPES.PLAYER_RESET});
    navigation.navigate('WinnerList');
  };
  const UseResetGame: [OnPress, OnPress] = [startHandle, closeHandle];
  return UseResetGame;
};

export default useResetGame;
