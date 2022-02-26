import React from 'react';
import {Pressable, GestureResponderEvent} from 'react-native';
import useSound from 'react-native-use-sound';
import {Color} from '../../../../app/redux/types/types';
import {ScaledSheet} from 'react-native-size-matters';

interface ColorCradViewProps {
  color: Color;
  flashColor: string;
  Disable: boolean;
  onPress: (event: GestureResponderEvent) => void;
}
/**
 * react function component that take state.color,props.flashColor
 * props.Disable,props.onPress, the function returns a tsx Pressable
 * component that indicate the color and the sound
 * that need to be played and shown accordingly
 * @param props.color
 * @param props.flashColor
 * @param props.Disable
 * @param props.onPress
 * @returns a tsx Pressable
 * component that indicate the color and the sound
 * that need to be played and shown accordingly
 */
const ColorCradView: React.FC<ColorCradViewProps> = ({
  color,
  flashColor,
  Disable,
  onPress,
}) => {
  //indicate if the flash color is flashing and make sound accordingly
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [soundName, setSoundName] = React.useState('');
  const [play, pause, stop, data] = useSound(color.soundValue, {
    volume: 1, //set the volume to the hightes volume of the device
    interrupt: false, //the sound wont interruptif it false
  });

  //indicate the flash color object and handle the sound
  //state and the flashe state if the color mache

  React.useEffect(() => {
    const runFlash = () => {
      flashColor === color.value
        ? (setIsPlaying(true), setSoundName(color.soundValue))
        : (setIsPlaying(false), setSoundName(''));
    };
    runFlash();
  }, [flashColor]);

  //indicate if it flashing state has changed and play sound accordingly
  React.useEffect(() => {
    soundName.length > 0 && isPlaying === true
      ? data.isPlaying
        ? pause()
        : play()
      : null;
  }, [isPlaying, soundName]);
  //the color to be flashe
  let tempFlashColor: any =
    flashColor === color.value
      ? {backgroundColor: flashColor}
      : {backgroundColor: color.color};

  return (
    <Pressable
      disabled={Disable}
      style={[tempFlashColor, styles.button]}
      onPress={onPress}
    />
  );
};
const styles = ScaledSheet.create({
  button: {
    width: '135@ms',
    height: '135@ms',
    borderWidth: 2,
    elevation: 5,
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.5,
    borderRadius: 50,
  },
});
export default ColorCradView;
