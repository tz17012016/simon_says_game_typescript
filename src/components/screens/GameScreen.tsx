import React from 'react';
import {Text, View} from 'react-native';
import useSound from 'react-native-use-sound';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {soundObj} from '../../assets/sound/soundObj';
import {SoundObj} from '../../assets/sound/types/types';
import playerReduser from '../../app/hooks/customReducers/player/playerReduser';
import {
  InitPlay,
  initPlay,
  PlayerActions,
  PLAYER_ACTION_TYPES,
} from '../../app/hooks/customReducers/player/types/types';
import useResetGame from '../../app/hooks/ResetGame/useResetGame';
import {ColorsArr} from '../../assets/constants/colorsConstants';
import StartButton from '../features/ui/Button/StartButton';
import ColorCradView from '../features/ui/ColorCrad/ColorCradView';
import ModleView from '../features/ui/Modle/ModleView';
import ScoreView from '../features/ui/Score/ScoreView';

interface GameScreenProps {}

import {runSimonColors, displayColors, cardClickHandle} from '../../utils/util';
/**
 * react function component that acting as the main screan of the app
 * this screan have the game component and the state that neded in order to play
 * @returns return UI to the user as the game screen
 */
const GameScreen: React.FC<GameScreenProps> = () => {
  //////////////////////////////////////////////////////////////////////////////////
  /**
   * Hooks
   */

  //player reduser
  const [state, dispatch] = React.useReducer<
    React.Reducer<InitPlay, PlayerActions>
  >(playerReduser, initPlay);
  //redux game on or of state
  const {isOn = false} = useSelector(state => ({
    ...state.displayState,
  }));
  //flash Color
  const [flashColor, setFlashColor] = React.useState<string>('');
  //show Modal
  const [showModal, setShowModal] = React.useState<boolean>(false);
  //toggle if user success or not
  const [success, setSuccess] = React.useState(true);
  //toggle if user is still Playing or not
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  //sound name
  const [soundName] = React.useState<SoundObj>(soundObj);
  //useSound hooks
  const [play, pause, stop, data] = useSound(
    !isPlaying && success === true ? soundName.success : soundName.fail,
    {
      volume: 1,
      interrupt: false,
    },
  );
  //useResetGame hook
  const [startHandle, closeHandle] = useResetGame(
    dispatch,
    setSuccess,
    setShowModal,
  );

  /////////////////////////////////////////////////////////////////////////////////
  /**
   * Methods
   */

  /**
   *play the sound that geiven in the sound name
   */
  const handlePlay = () => {
    data.isPlaying ? pause() : play();
  };
  //if the ColorCradView butoun will be Disable if its the user tourn or not
  const Disable: boolean =
    state.isDisplay === false && state.userPlay === true ? false : true;
  console.log('Disable', Disable);
  console.log(
    'state.isDisplay === false && state.userPlay === true',
    state.isDisplay === false && state.userPlay === true,
  );

  //////////////////////////////////////////////////////////////////////////////////
  /**
   * LifeCycle Methods
   */

  /**
   * lifecycle of toggle if game is on or of from redux
   * and then display the start Button if game is on
   */
  React.useEffect(() => {
    isOn
      ? dispatch({type: PLAYER_ACTION_TYPES.DISPLAY_ON})
      : dispatch({type: PLAYER_ACTION_TYPES.DISPLAY_OFF});
  }, [isOn]);

  /**
   * lifecycle of isOn and state.isDisplay ,if the game is on and the user
   * clicked on the start butoun this will run the runSimonColors function
   * to pick a random color and add it to the syimons colors array
   */
  React.useEffect(() => {
    isOn && state.isDisplay && runSimonColors(dispatch, state);
  }, [isOn, state.isDisplay]);

  /**
   * lifecycle of isOn and state.isDisplay and state.colors.length,if the game is on
   * and the user clicked on the start butoun, and the simons array has a color inside,
   * it will run the displayColors function to show the colors to the user
   * and insert the colors in revers order from the simon's array to the user array
   */
  React.useEffect(() => {
    isOn &&
      state.isDisplay &&
      state.colors.length &&
      displayColors(state, dispatch, setFlashColor);
  }, [isOn, state.isDisplay, state.colors.length]);

  /**
   * lifecycle of success and isPlaying to see if the user is playing and winning
   * or losing the game and play sounds accordingly
   */
  React.useEffect(() => {
    !success || (success && isPlaying === true) ? handlePlay() : null;
  }, [success, isPlaying]);
  //////////////////////////////////////////////////////////////////////////////////
  /**
   * render the colors arrays to the UI
   */
  const renderColorCrad = ColorsArr.map(color => (
    <ColorCradView
      key={color.id}
      color={color}
      flashColor={flashColor}
      Disable={Disable}
      onPress={() => {
        cardClickHandle(
          color,
          state,
          dispatch,
          setFlashColor,
          setShowModal,
          setSuccess,
          setIsPlaying,
        );
      }}
    />
  ));
  //////////////////////////////////////////////////////////////////////////////////
  /**
   * render UI
   */
  return (
    <View style={styles.gameContainer}>
      <View style={styles.gameTitleContainer}>
        <Text style={styles.title}>Simon Says....</Text>
      </View>
      <View style={styles.gameContainerAliment}>
        <View style={styles.colorCardContainer}>
          {ColorsArr && renderColorCrad}
        </View>
        {isOn && !state.isDisplay && !state.userPlay && state.score ? (
          <ModleView
            showModal={showModal}
            setShowModal={setShowModal}
            closeHandle={closeHandle}
            score={state.score}
          />
        ) : null}
        {!isOn && !state.score && <StartButton startHandle={startHandle} />}
        {isOn && (state.isDisplay || state.userPlay) && (
          <ScoreView score={state.score} />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  gameContainer: {
    height: '90%',
  },
  gameContainerAliment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
  gameTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  colorCardContainer: {
    maxWidth: '273@ms',
    borderWidth: 1,
    borderColor: '#ccccff',
    backgroundColor: '#ccccff',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexWrap: 'wrap',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.5,
  },
  title: {
    color: 'red',
    paddingTop: '10@ms',
    fontSize: '25@s',
    textAlign: 'center',
    fontFamily: 'ComicSansMSBold',
  },
});
export default GameScreen;
