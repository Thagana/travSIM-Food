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
import { v4 as uuidv4 } from "uuid";

import { useStoreState, useStoreActions } from "easy-peasy";

/* External Components */
import MenuItem from "./MenuItem";
import MasonryList from "react-native-masonry-list";

const Feed = ({ navigation }) => {
  const menu = useStoreState((state) => state.menu);
  const addItems = useStoreActions((action) => action.addItems);
  const handlePress = (data) => {
    navigation.navigate("More Info", { payload: data });
  };
  const addMoreImages = (data) => {
    addItems(data);
  };
  return (
    <MasonryList
      onPressImage={(id) => {
        handlePress(id);
      }}
      onEndReached={() => {
        const moreImages = {
          source: require("../assets/cuz_2.jpg"),
          dimensions: { width: 1080, height: 1970 },
          id: 2,
          product_id: uuidv4(),
          name: "The Fruit Cocktail Dustra",
          description:
            "The Fruit Cocktail Dustra is the second deneration best cocktail blend",
          rating: 3.5,
          price: 10,
          image: "https://picsum.photos/528",
          ingredients: ["Banna", "Apple", "Grapes", "Maize"],
        };

        addMoreImages(moreImages);
      }}
      images={menu}
    />
  );
};

export default Feed;
