import React from 'react';
import {StyleSheet, Pressable, GestureResponderEvent} from 'react-native';
import useSound from 'react-native-use-sound';
import {Color} from '../../../../app/redux/types/types';
import {flashColorButton} from '../../../../utils/util';
import {BackgroundColor} from './types/types';

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
  const [ColorFlash, setColorFlash] = React.useState<BackgroundColor | null>();
  //indicate if the flash color is flashing and make sound accordingly
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [soundName, setSoundName] = React.useState('');
  const [play, pause, stop, data] = useSound(
    isPlaying === true ? soundName : '',
    {
      volume: 1, //set the volume to the hightes volume of the device
      interrupt: false, //the sound wont interruptif it false
    },
  );
  //play the sound
  const handlePlay = () => {
    if (data.isPlaying) pause();
    else play();
  };
  //indicate the flash color object and handle the sound
  //state and the flashe state if the color mache
  React.useEffect(() => {
    const runFlash = async () => {
      const getFlash: BackgroundColor = await flashColorButton(
        color,
        flashColor,
      );
      flashColor === color.value
        ? isPlaying === true
          ? null
          : (setIsPlaying(true), setSoundName(color.soundValue))
        : isPlaying === false
        ? null
        : (setIsPlaying(false), setSoundName(''));
      setColorFlash(() => getFlash);
    };
    runFlash();
  }, [flashColor, isPlaying, soundName]);
  //indicate if it flashing state has changed and play sound accordingly
  React.useEffect(() => {
    const runHandlePlay = () => {
      !isPlaying ? handlePlay() : null;
    };
    runHandlePlay();
  }, [isPlaying]);

  return (
    <Pressable
      disabled={Disable}
      style={[
        ColorFlash ? ColorFlash : {backgroundColor: color.color},
        styles.button,
      ]}
      onPress={onPress}
    />
  );
};
const styles = StyleSheet.create({
  button: {
    width: 135,
    height: 135,
    borderWidth: 2,
    elevation: 5,
    shadowColor: '#000',
    opacity: 0.7,
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
