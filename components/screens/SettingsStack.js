import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MySwitch from './MySwitch';
import { useStoreState } from 'easy-peasy';

export default function SettingStack() {
  const isDark = useStoreState(state => state.isDark);

    return (
      <View>
          <View>
              <View>
                  <Text>Dark Mode</Text>
                  <Text> { isDark ? "On": "Off" } </Text>
              </View>
              <View>
                <MySwitch />
              </View>
          </View>
          <View>
            <Text>View Privacy and sata sharing Policies</Text>
          </View>
      </View>
    );
}

