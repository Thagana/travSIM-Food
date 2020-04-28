import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { useStoreState, useStoreActions, action } from "easy-peasy";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const user = useStoreState((state) => state.User);
  const loggin = useStoreActions((action) => action.login);
  const handlelogin = () => {
    const user = {
      email: email,
      password: password,
    };
    if (email === user.email && password === user.password) {
      loggin();
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="Email"
        onChangeText={(val) => setEmail(val)}
        leftIcon={<AntDesign name="mail" size={24} color="black" />}
      />
      <Input
        placeholder="Password"
        onChangeText={(val) => setPassword(val)}
        secureTextEntry
        leftIcon={<AntDesign name="key" size={24} color="black" />}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#dd3e54",
          paddingHorizontal: 100,
          paddingVertical: 10,
          borderRadius: 20,
          marginVertical: 7,
        }}
        onPress={() => {
          handlelogin();
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
