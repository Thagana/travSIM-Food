import * as React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Banner,
  Avatar,
  Card,
  Title,
  Paragraph,
  DataTable,
  Caption,
} from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default class Profile extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return <SafeAreaView></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});
