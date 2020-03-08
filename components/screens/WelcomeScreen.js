import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Login from './Login';
import Register from './Register';
import { Headline, Button } from 'react-native-paper';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Headline>travSIM Food</Headline>
      </View>
      <View>
        <Button onPress={() => props.navigation.navigate('Dashboard')}>
          <Text>Login</Text>
        </Button>
      </View>
      <View>
        <Button onPress={() => alert('Register')}>
          <Text>Register</Text>
        </Button>
      </View>
    </View>
  )
}


export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center'
  }
});
