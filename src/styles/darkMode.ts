import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
//coustom dark mod
const darkMode = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#262626',
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
    top: '10%',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: '#4d4d4d',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: '14@ms',
    paddingBottom: '30@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hr: {
    width: '100%',
    height: '2@ms',
    backgroundColor: '#262626',
    marginTop: '6@ms',
  },
  input: {
    width: '100%',
    fontFamily: 'ComicSansMSBold',
    height: '40@ms',
    backgroundColor: '#595959',
    borderRadius: 4,
    paddingHorizontal: '10@ms',
  },
});

export default darkMode;
