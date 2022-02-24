import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InitPlay} from '../../../../app/hooks/customReducers/player/types/types';
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

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: 'midnightblue',
    position: 'absolute',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
});
export default ScoreView;
