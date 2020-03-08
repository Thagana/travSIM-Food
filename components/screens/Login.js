import React, { useState } from 'react';
import { View, Text, StyleSheet, TouableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginRoute = (props) => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text>Login</Text>
        </View>
      </View>
      <View>
        <TextInput
          label="Email"
          value={username}
          type="flat"
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View>
        <TextInput
          label="Password"
          value={password}
          type="flat"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        <Button onPress={() => console.log(props)}
          type="outlined"
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default LoginRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    alignItem: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 10,
  }
});
