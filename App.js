/**
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useStoreState, createStore, StoreProvider } from "easy-peasy";
import STORE from "./src/Store/model";
const store = createStore(STORE);

import WelcomeScreen from "./src/screens/WelcomeScreen";
import Dashboard from "./src/screens/DashboardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUp from "./src/screens/Register";
import FeedScreen from "./src/screens/FeedStack";
import ProfileScreen from "./src/screens/ProfileStack";
import DashboardScreen from "./src/screens/DashboardScreen";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={FeedScreen} />
    </Drawer.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = (props) => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const AppStack = createStackNavigator();
const AppStackScreen = (props) => {
  const isLoggedin = useStoreState((state) => state.isLoggedin);
  return (
    <AppStack.Navigator headerMode="none">
      {!isLoggedin ? (
        <AppStack.Screen name="Landing" component={AuthStackScreen} />
      ) : (
        <AppStack.Screen name="Dashboard" component={DrawerScreen} />
      )}
    </AppStack.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppStackScreen />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
