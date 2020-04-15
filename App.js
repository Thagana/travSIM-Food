import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStore, StoreProvider } from 'easy-peasy';
// import Landing from './components/Landing';
import Store from './components/Store/model';
import Root from './Root';

const store = createStore(Store);

export default class App extends React.Component {
  render() {
    return (
        <StoreProvider store={store}>
          <Root />
        </StoreProvider>
    );
  }
}

