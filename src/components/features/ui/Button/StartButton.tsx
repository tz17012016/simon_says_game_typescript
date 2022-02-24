import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {OnPressEvent} from '../../../../app/hooks/DispalyTenBestScore/types/types';
interface StartButtonProps {
  startHandle: OnPressEvent;
}
/**
 * react function component that props.startHandle
 *  returns a tsx Touchable Opacity as button component
 * @param props.startHandle
 * @returns a tsx Touchable Opacity as button component
 */
const StartButton: React.FC<StartButtonProps> = ({startHandle}) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={startHandle}>
        <Text style={styles.buttonTitle}>Start</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: 'midnightblue',
    position: 'absolute',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
});
export default StartButton;
