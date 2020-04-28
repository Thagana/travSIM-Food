import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons';

export default class IconComponent extends React.Component {
  render() {
    return (
      <View style={styles.iconPos}>
          <Icon name="md-menu" size={30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconPos: {
    padding: 10,
    margin: 10
  }
})