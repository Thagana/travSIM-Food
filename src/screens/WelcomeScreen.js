import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { Headline, Button } from "react-native-paper";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("screen");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar hidden={true} />
      <Swiper autoplay={true}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/cuz_4.jpg")}
            style={{
              width: width,
              height: height,
            }}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/cuz_2.jpg")}
            style={{
              width: width,
              height: height,
            }}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/cuz_3.jpg")}
            style={{
              width: width,
              height: height,
            }}
          />
        </View>
      </Swiper>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 200,
          marginLeft: 20,
          height: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ffd79d",
            paddingHorizontal: 40,
            borderRadius: 20,
            paddingVertical: 8,
            margin: 6,
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 20,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="SignUpButton"
          style={{
            backgroundColor: "#ffd79d",
            paddingHorizontal: 40,
            borderRadius: 20,
            paddingVertical: 8,
            margin: 6,
          }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
