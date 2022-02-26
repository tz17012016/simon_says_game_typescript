import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import useDispalyTenBestScore from '../../app/hooks/DispalyTenBestScore/useDispalyTenBestScore';
import {ScaledSheet} from 'react-native-size-matters';
interface WinnerScreenProps {}
/**
 * react function component that acting as the scond screan of the app
 * this screan have the winner list component and the state that neded in order to show
 * the best 10 scores
 * @returns return UI to the user as the winner list screen
 */
const WinnerScreen: React.FC<WinnerScreenProps> = () => {
  //////////////////////////////////////////////////////////////////////////////////
  /**
   * Hook
   */

  //use Dispaly Ten Best Score hook
  const [scores, renderUi, onPress] = useDispalyTenBestScore();

  /////////////////////////////////////////////////////////////////////////////////
  /**
   * render UI
   */

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.titleTextTitle}>The Best 10 Score 😻</Text>
      </View>
      <View style={styles.mainTableContainer}>
        <View style={styles.mainTableTitleContainer}>
          {scores.length > 0 ? (
            <>
              <Text style={styles.titleText}>Player Name</Text>
              <Text style={styles.titleText}>Score</Text>
            </>
          ) : null}
        </View>
        <View style={styles.mainTableBodyContainer}>
          {scores.length > 0 ? (
            renderUi()
          ) : (
            <Text
              style={styles.ErortitleText}>{`You Can Be The One... :)`}</Text>
          )}
        </View>
      </View>
      <View style={styles.mainButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Start New Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
    height: '90%',
  },
  mainTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  mainTableContainer: {
    paddingBottom: '20@ms',
    maxHeight: '100%',
    minHeight: '70%',
  },
  mainTableTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainTableBodyContainer: {
    maxHeight: '75%',

    justifyContent: 'center',
  },
  mainButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: '14@s',
    backgroundColor: '#ee5a24',
    borderRadius: '10@s',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  titleText: {
    margin: '20@s',
    maxWidth: '250@s',
    fontSize: '20@s',
    fontFamily: 'ComicSansMSBold',
  },
  ErortitleText: {
    alignSelf: 'center',
    paddingTop: '40@ms',
    fontSize: '20@s',
    fontFamily: 'ComicSansMSBold',
  },
  titleTextTitle: {
    color: 'red',
    paddingTop: '40@ms',
    fontSize: '22@s',
    fontFamily: 'ComicSansMSBold',
  },
  text: {
    fontFamily: 'ComicSansMSBold',
  },
});

export default WinnerScreen;
