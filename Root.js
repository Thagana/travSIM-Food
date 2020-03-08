import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
 } from 'react-navigation';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { useStoreState } from 'easy-peasy';

import WelcomeScreen from './components/screens/WelcomeScreen';
import DashboarcScreen from './components/screens/DashboardScreen';
import FeedStack from './components/screens/FeedStack';
import ProfileStack from './components/screens/ProfileStack';
import SettingsStack from './components/screens/SettingsStack';
import Icon from '@expo/vector-icons/Ionicons';

const DashboardTabNavigator = createBottomTabNavigator({
  Menu: FeedStack,
  Profile: ProfileStack,
  Setting: SettingsStack
},{
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle : routeName
    }
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
},{
  defaultNavigationOptions :({ navigation }) => {
    return {
      headerLeft: <Icon name="md-menu" size={30}  styel={{padding : 15}} onPress={() => navigation.openDrawer()}/>
    }
  }
})

const AppDrawerNavigation = createDrawerNavigator({
  Dashboard : {
    screen : DashboardStackNavigator
  }
})


const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen : WelcomeScreen },
  Dashboard : { screen : AppDrawerNavigation }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const defaulttheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const darktheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}


export default function App() {
    const isDark = useStoreState(state => state.isDark);
    return (
      <PaperProvider theme={isDark ? darktheme : defaulttheme}>
        <AppContainer />
      </PaperProvider>
    );
}

