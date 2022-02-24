import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import Uicontainerview from '../../components/features/ui/UiContainer/UiContainerView';
import GameScreen from '../../components/screens/GameScreen';
import WinnerScreen from '../../components/screens/WinnerScreen';

import {TabParamsList, RoutesProps} from './Types/Types';
import {useColorScheme} from 'react-native';

//create tab navigator
const Tab = createBottomTabNavigator<TabParamsList>();
/**
 * react function component that handle the navigation between screans
 * @returns navigation tab between game screen and winner screen
 */
export const Routes: React.FC<RoutesProps> = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          screenOptions={({route}) => {
            //function that change the icons and the color of the
            // icons based on the focus of the active tab
            return {
              tabBarIcon: ({focused, color, size}) => {
                let iconName: string | undefined;
                if (route.name === 'Game') {
                  iconName = focused ? 'pie' : 'basketball';
                } else if (route.name === 'WinnerList') {
                  iconName = focused ? 'menu' : 'list';
                }
                return (
                  <Icon
                    android={`md-${iconName}`}
                    ios={`ios-${iconName}`}
                    size={size}
                    color={color}
                  />
                );
              },
            };
          }}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Game">
            {props => (
              <Uicontainerview>
                <GameScreen {...props} />
              </Uicontainerview>
            )}
          </Tab.Screen>
          <Tab.Screen name="WinnerList">
            {props => (
              <Uicontainerview>
                <WinnerScreen {...props} />
              </Uicontainerview>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
