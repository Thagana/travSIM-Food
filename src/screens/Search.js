import React, { useState } from "react";
import { View, Text, Platform, ScrollView, Image } from "react-native";
import { SearchBar } from "react-native-elements";
const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <View
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
      <View>
        <Text>Recommended</Text>
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              marginVertical: 3,
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{ uri: "https://picsum.photos/400" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Breakfst</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "#fff",
              marginVertical: 2,
              marginHorizontal: 4,
            }}
          >
            <Image
              source={{ uri: "https://picsum.photos/500" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Lunch</Text>
            </View>
          </View>
          <View>
            <Image
              source={{ uri: "https://picsum.photos/400" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Wedding</Text>
            </View>
          </View>
          <View>
            <Image
              source={{ uri: "https://picsum.photos/400" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Funeral</Text>
            </View>
          </View>
          <View>
            <Image
              source={{ uri: "https://picsum.photos/400" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Funeral</Text>
            </View>
          </View>
          <View>
            <Image
              source={{ uri: "https://picsum.photos/400" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginVertical: 2,
                marginHorizontal: 4,
              }}
            />
            <View>
              <Text>Funeral</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
