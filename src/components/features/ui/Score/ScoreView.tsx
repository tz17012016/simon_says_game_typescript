import React from 'react';
import {Text, View} from 'react-native';
import {InitPlay} from '../../../../app/hooks/customReducers/player/types/types';
import {ScaledSheet} from 'react-native-size-matters';
interface ScoreViewProps {
  score: InitPlay['score'];
}
/**
 * react function component that state.score as props
 * and return the score as tsx View component
 * @param props.score
 * @returns
 */
const ScoreView: React.FC<ScoreViewProps> = ({score}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>{score}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100@ms',
    height: '100@ms',
    borderWidth: 2,
    backgroundColor: 'midnightblue',
    position: 'absolute',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    color: '#fff',
    fontSize: '25@s',
    textAlign: 'center',
  },
});
export default ScoreView;
