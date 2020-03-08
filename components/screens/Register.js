import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const RegisterRoute = () => {
  const [password,setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Register</Text>
        </View>
      </View>
      <View>
          <TextInput
              label='Email'
              value={username}
              onChangeText={username => setUsername( username )}
            />
      </View>
      <View>
          <TextInput
              label='Password'
              value={password}
              onChangeText={password => setPassword( password )}
            />
      </View>
    </View>
  )
}

export default RegisterRoute;


const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})