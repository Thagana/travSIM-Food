import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
  {
    id: 1,
    name: "Funeral",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Wedding",
    image: "https://picsum.photos/300",
  },
  {
    id: 3,
    name: "Functions",
    image: "https://picsum.photos/400",
  },
  {
    id: 4,
    name: "Meetings",
    image: "https://picsum.photos/500",
  },
  {
    id: 5,
    name: "Parties",
    image: "https://picsum.photos/500",
  },
  {
    id: 6,
    name: "Funeral",
    image: "https://picsum.photos/500",
  },
];
const Card = ({ name, image }) => (
  <View
    style={{
      backgroundColor: "#fff",
      borderRadius: 20,
      marginVertical: 3,
      marginHorizontal: 5,
    }}
  >
    <Image
      source={{ uri: image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 20,
        marginVertical: 2,
        marginHorizontal: 4,
      }}
    />
    <View>
      <Text>{name}</Text>
    </View>
  </View>
);
const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View>
        <SearchBar
          platform={Platform.OS === "ios" ? "ios" : "android"}
          placeholder="Search"
          placeholderTextColor="#000"
          value={term}
          onChangeText={(val) => setTerm(val)}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Recommended
        </Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Card name={item.name} image={item.image} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
