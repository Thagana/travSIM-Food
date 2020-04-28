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
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

/* External Components */
import MenuItem from "./MenuItem";
import MasonryList from "react-native-masonry-list";

export default class App extends React.Component {
  state = {
    menu_items: [
      {
        source: require("../assets/cuz_1.jpg"),
        dimensions: { width: 1080, height: 1820 },
        id: 1,
      },
      {
        source: require("../assets/cuz_2.jpg"),
        dimensions: { width: 1080, height: 1970 },
        id: 2,
      },
      {
        source: require("../assets/cuz_3.jpg"),
        dimensions: { width: 1080, height: 1620 },
      },
      {
        source: require("../assets/cuz_4.jpg"),
        dimensions: { width: 1080, height: 1820 },
        id: 3,
      },
      {
        url: "https://picsum.photos/900",
        id: 4,
      },
      {
        URL: "https://picsum.photos/800",
        id: 5,
      },
      {
        URL: "https://picsum.photos/700",
        id: 6,
      },
      {
        uri: "https://picsum.photos/400",
        id: 7,
      },
      {
        uri: "https://picsum.photos/400",
        id: 8,
      },
    ],
  };

  addMoreImages(newImages) {
    this.setState({
      menu_items: this.state.menu_items.concat(newImages),
    });
  }
  render() {
    const { menu_items } = this.state;
    return (
      <MasonryList
        onPressImage={(id) => {
          console.log(id.id);
        }}
        images={menu_items}
        // Version *2.14.0 update
        onEndReached={() => {
          const more = [
            {
              uri: "https://picsum.photos/100",
            },
            {
              uri: "https://picsum.photos/200",
            },
            {
              uri: "https://picsum.photos/300",
            },
          ];
          this.addMoreImages(more);
        }}
      />
    );
  }
}
