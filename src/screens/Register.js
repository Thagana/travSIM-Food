import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="First Name"
        onChangeText={(val) => setUsername(val)}
        leftIcon={<AntDesign name="user" size={24} color="black" />}
      />
      <Input
        onChangeText={(val) => setLastName(val)}
        placeholder="Last Name"
        leftIcon={<AntDesign name="user" size={24} color="black" />}
      />
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
    </View>
  );
};

export default RegisterRoute;
