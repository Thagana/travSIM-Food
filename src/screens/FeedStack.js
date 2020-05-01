import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Share,
  Alert,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import { useStoreState } from "easy-peasy";

/* External Components */
import MenuItem from "./MenuItem";
import MasonryList from "react-native-masonry-list";

const Feed = ({ navigation }) => {
  const menu = useStoreState((state) => state.menu);
  const handlePress = (data) => {
    navigation.navigate("More Info", { payload: data });
  };
  return (
    <MasonryList
      onPressImage={(id) => {
        handlePress(id);
      }}
      images={menu}
    />
  );
};

export default Feed;
