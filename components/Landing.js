import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
 } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import DashboarcScreen from './screens/DashboardScreen';
import FeedStack from './screens/FeedStack';
import ProfileStack from './screens/ProfileStack';
import SettingsStack from './screens/SettingsStack';
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

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

