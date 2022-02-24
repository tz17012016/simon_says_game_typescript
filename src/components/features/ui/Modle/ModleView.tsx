import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Dimensions,
  useColorScheme,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {InitPlay} from '../../../../app/hooks/customReducers/player/types/types';
import {OnPress} from '../../../../app/hooks/DispalyTenBestScore/types/types';
import {winnerActionCreators} from '../../../../app/redux/actions';
import darkMode from '../../../../styles/darkMode';

interface ModleViewProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeHandle: OnPress;
  score: InitPlay['score'];
}
/**
 * react function component that state.score , showModal, setShowModal,
 * and closeHandle as props and return a form modle component that
 * the user can enter his/her name into winner list
 * @param props.showModal
 * @param props.setShowModal
 * @param props.closeHandle
 * @param props.score
 * @returns a form modle component that the user can enter
 *  his/her name into winner list
 */
import useAutoFocusInputs from 'use-auto-focus-inputs';
const ModleView: React.FC<ModleViewProps> = ({
  showModal,
  setShowModal,
  closeHandle,
  score,
}) => {
  const dispatch = useDispatch();
  const {setUserData} = bindActionCreators(winnerActionCreators, dispatch);
  const colorScheme = useColorScheme();
  const getAutoFocusableInputProps = useAutoFocusInputs();
  const [name, setName] = React.useState<string>('');

  //send the new user to the redux store
  const onPress = (name: string, score: number): void => {
    if (name && name.length > 1) {
      const id: number = Math.ceil(Math.random() * 100);
      setUserData(id, name, score);
      setShowModal(false);
      closeHandle();
    }
  };

  return (
    <Modal
      transparent={false}
      visible={showModal}
      animationType="slide"
      onRequestClose={closeHandle}>
      <View
        style={colorScheme == 'light' ? styles.container : darkMode.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View
            style={
              colorScheme == 'light'
                ? styles.contentContainer
                : darkMode.contentContainer
            }>
            <Text style={styles.ModleTitleText}>
              Your Final Score: ( <Text style={styles.score}>{score}</Text> )
            </Text>
            <View
              style={colorScheme == 'light' ? styles.hr : darkMode.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Player Name</Text>
              <TextInput
                {...getAutoFocusableInputProps({
                  style: colorScheme == 'light' ? styles.input : darkMode.input,
                  placeholder: 'Your Name...',
                  value: name,
                  onChangeText: setName,
                })}
              />
            </View>
            <TouchableOpacity
              style={styles.ModleButton}
              onPress={() => onPress(name, score)}>
              <Text style={styles.ModleButtonText}>Go To The Winner Bord</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '25%',
  },
  contentContainer: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ModleTitleText: {
    textAlign: 'center',
    fontFamily: 'ComicSansMSBold',
    fontSize: 26,
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 2,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    fontFamily: 'ComicSansMSBold',
  },
  input: {
    width: '100%',
    height: 40,
    fontFamily: 'ComicSansMSBold',
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  ModleButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  ModleButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ComicSansMSBold',
    fontSize: 20,
  },
  score: {
    color: 'red',
    fontFamily: 'ComicSansMSBold',
  },
});
export default ModleView;
