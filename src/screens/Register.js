import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { useStoreState, useStoreActions } from "easy-peasy";

const RegisterRoute = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [firstName, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const setUser = useStoreActions((action) => action.setUser);

  const handleregister = () => {
    const user = {
      firstname: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    setUser(user);
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      source={require("../assets/cuz_7.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="First Name"
        placeholderTextColor="#fff"
        inputStyle={{
          paddingHorizontal: 10,
        }}
        onChangeText={(val) => setUsername(val)}
        leftIcon={<AntDesign name="user" size={24} color="#fff" />}
      />
      <Input
        placeholderTextColor="#fff"
        onChangeText={(val) => setLastName(val)}
        placeholder="Last Name"
        inputStyle={{
          paddingHorizontal: 10,
        }}
        leftIcon={<AntDesign name="user" size={24} color="#fff" />}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="#fff"
        inputStyle={{
          paddingHorizontal: 10,
        }}
        onChangeText={(val) => setEmail(val)}
        leftIcon={<AntDesign name="mail" size={24} color="#fff" />}
      />
      <Input
        placeholder="Password"
        onChangeText={(val) => setPassword(val)}
        inputStyle={{
          paddingHorizontal: 10,
        }}
        secureTextEntry
        placeholderTextColor="#fff"
        leftIcon={<AntDesign name="key" size={24} color="#fff" />}
      />
      <TouchableOpacity
        style={{
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text
          style={{
            color: "#dd3e54",
            fontWeight: "bold",
          }}
        >
          Already have an account?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#dd3e54",
          paddingHorizontal: 100,
          paddingVertical: 10,
          borderRadius: 20,
          marginVertical: 10,
        }}
        onPress={() => {
          handleregister();
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

export default RegisterRoute;
