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
  AsyncStorage,
} from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useStoreState, createStore, StoreProvider } from "easy-peasy";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import STORE from "./src/Store/model";
const store = createStore(STORE);

import WelcomeScreen from "./src/screens/WelcomeScreen";
import Dashboard from "./src/screens/DashboardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUp from "./src/screens/Register";
import FeedScreen from "./src/screens/FeedStack";
import ProfileScreen from "./src/screens/ProfileStack";
import SearchScreen from "./src/screens/Search";
import Cartigory from "./src/screens/Cartigory";
import MoreInfo from "./src/screens/MoreInfo";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Explore" component={FeedScreen} />
      <HomeStack.Screen name="More Info" component={MoreInfo} />
    </HomeStack.Navigator>
  );
};

const AppTabs = createBottomTabNavigator();
const AppTabsScreeen = () => {
  return (
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "App") {
            iconName = "explore";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Profile") {
            iconName = "account-circle";
          } else if (route.name === "Cartigory") {
            iconName = "list";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <AppTabs.Screen name="App" component={HomeStackScreen} />
      <AppTabs.Screen name="Cartigory" component={Cartigory} />
      <AppTabs.Screen name="Search" component={SearchScreen} />
      <AppTabs.Screen name="Profile" component={ProfileScreen} />
    </AppTabs.Navigator>
  );
};

const FeedStack = createStackNavigator();
const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
      headerMode="none"
    >
      <FeedStack.Screen name="Explore" component={AppTabsScreeen} />
    </FeedStack.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={FeedStackScreen} />
    </Drawer.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = (props) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTransparent: true,
        title: "",
        headerTitleAlign: "center",
      }}
    >
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const getToken = async () => {
  try {
    const token = AsyncStorage.getItem("@key");
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
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
