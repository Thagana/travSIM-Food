import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <View>
          <Text>Dashboard Screen</Text>
          <Text>Admin</Text>
          <Text>Orders</Text>
      </View>
    );
  }
}

