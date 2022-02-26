import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {OnPressEvent} from '../../../../app/hooks/DispalyTenBestScore/types/types';
import {ScaledSheet} from 'react-native-size-matters';
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

const styles = ScaledSheet.create({
  button: {
    width: '100@ms',
    height: '100@ms',
    borderWidth: 2,
    backgroundColor: 'midnightblue',
    position: 'absolute',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: '25@s',
    textAlign: 'center',
  },
});
export default StartButton;
