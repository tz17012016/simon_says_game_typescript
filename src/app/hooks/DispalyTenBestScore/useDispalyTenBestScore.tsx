import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTenBestScores} from '../../../utils/util';
import {displayActionCreators} from '../../redux/actions/index';
import {User, Users} from '../../redux/types/types';
import {TabParamsList} from '../../Routes/Types/Types';
import {OnPress, RenderUi, Ui} from './types/types';
import {ScaledSheet} from 'react-native-size-matters';
/**
 * react custom hook that display return
 * a flatlist tsx component of the best 10 score players
 * @returns  the scores array,
 *  renderUi tsx flatlist componnent,
 *  onPress function that navegit game screen and start a new game ,
 */
const useTenBestScore = () => {
  const dispatch = useDispatch();
  const {scores} = useSelector(state => ({
    ...state.usersScores,
  }));
  const {setGameOn} = bindActionCreators(displayActionCreators, dispatch);
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();
  //render the ui into the flatlist
  const ui: Ui = ({item}) => (
    <View style={styles.mainContainer}>
      <View style={styles.InnerContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.InnerContainer}>
        <Text style={styles.text}>{item.score}</Text>
      </View>
    </View>
  );
  //render the flat list to the winner screen
  const renderUi: RenderUi = () => {
    let tempScores: Users = getTenBestScores('score', scores);
    return (
      <FlatList
        data={tempScores}
        keyExtractor={(item: User) => item.id.toString()}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        renderItem={ui}
      />
    );
  };
  //onPress function that navegit game screen and start a new game
  const onPress: OnPress = () => {
    navigation.navigate('Game');
    setGameOn(true);
  };

  const UseTenBestScore: [Users, RenderUi, OnPress] = [
    scores,
    renderUi,
    onPress,
  ];

  return UseTenBestScore;
};
const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccccff',
    borderRadius: 10,
    marginTop: '10@ms',
    padding: '5@ms',
  },
  InnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    color: '#000',
    fontFamily: 'ComicSansMSBold',
  },
});
export default useTenBestScore;
