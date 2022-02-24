import React from 'react';
import {StyleSheet, View, Dimensions, useColorScheme} from 'react-native';
import darkMode from '../../../../styles/darkMode';

interface UiContainerViewProps {}
/**
 * react function component that accepts children as props
 * and returns the general design tsx template to each component
 * @param props.children
 * @returns the general design template to each component
 */
const UiContainerView: React.FC<UiContainerViewProps> = ({children}) => {
  const colorScheme = useColorScheme();
  return (
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
          {children}
        </View>
      </View>
    </View>
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
    top: '10%',
  },
  contentContainer: {
    width: '90%',
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
});

export default UiContainerView;
