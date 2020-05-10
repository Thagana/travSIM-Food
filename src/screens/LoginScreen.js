import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
} from "react-native";
import { Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { useStoreState, useStoreActions, action } from "easy-peasy";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const user = useStoreState((state) => state.User);
  const loggin = useStoreActions((action) => action.login);
  const handlelogin = async () => {
    const user = {
      email: email,
      password: password,
    };
    if (email === user.email && password === user.password) {
      const tokenKey = "@key";
      try {
        await AsyncStorage.setItem(tokenKey, "#1234");
      } catch (error) {
        console.log(error);
      }
      loggin();
    }
  };
  return (
    <ImageBackground
      source={require("../assets/cuz_6.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="Email"
        placeholderTextColor="#fff"
        onChangeText={(val) => setEmail(val)}
        inputStyle={{
          paddingHorizontal: 10,
        }}
        leftIcon={<AntDesign name="mail" size={24} color="#fff" />}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#fff"
        inputStyle={{
          paddingHorizontal: 10,
        }}
        onChangeText={(val) => setPassword(val)}
        secureTextEntry
        leftIcon={<AntDesign name="key" size={24} color="#fff" />}
      />
      <TouchableOpacity
        style={{
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text
          style={{
            color: "#dd3e54",
            fontWeight: "bold",
          }}
        >
          Don't have an account?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#dd3e54",
          paddingHorizontal: 100,
          paddingVertical: 10,
          borderRadius: 20,
          marginVertical: 18,
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
    </ImageBackground>
  );
};

export default LoginScreen;
