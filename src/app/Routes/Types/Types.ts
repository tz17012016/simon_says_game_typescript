import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type TabParamsList = {
  Game: undefined;
  WinnerList: undefined;
};
export type TabNavigation = BottomTabNavigationProp<TabParamsList>;

export type TabNavigationProp<T extends keyof TabParamsList> = {
  navigation: BottomTabNavigationProp<TabParamsList, T>;
};
export interface RoutesProps {}
