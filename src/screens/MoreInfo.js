import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

const MoreInfo = (props) => {
  const [item, setItem] = useState(props.route.params.payload);
  console.log(item.image);
  console.log(item.name);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: "#fff",
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../assets/cuz_3.jpg")}
              style={{
                width: 430,
                height: 400,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#000",
                fontSize: 27,
              }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              borderColor: "#dd3e54",
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 20,
              backgroundColor: "rgba(221, 62, 84, 0.2)",
            }}
          >
            <Text
              style={{
                color: "#dd3e54",
                fontSize: 18,
              }}
            >
              R{item.price}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: "#dd3e54",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              by: Chef Samuel Mothwa
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#000",
              }}
            >
              {item.description}
            </Text>
          </View>
          <View>
            <Rating
              startingValue={item.rating}
              readonly
              style={{ paddingVertical: 10 }}
              ratingCount={5}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "#dd3e54",
              borderWidth: 1,
              paddingHorizontal: 40,
              paddingVertical: 6,
              borderRadius: 20,
              backgroundColor: "rgba(221, 62, 84, 0.2)",
            }}
          >
            <Text
              style={{
                color: "#dd3e54",
                fontSize: 20,
              }}
            >
              ORDER NOW
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: "#dd3e54",
                fontSize: 16,
              }}
            >
              Similar
            </Text>
          </View>
          <ScrollView horizontal>
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
        <View>
          <MapView
            style={{
              width: Dimensions.get("window").width,
              height: 200,
            }}
            initialRegion={{
              latitude: 28.041321,
              longitude: -26.2773,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MoreInfo;
