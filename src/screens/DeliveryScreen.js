import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

//Constants
import { featured } from "../constants";

//Nav
import { useNavigation } from "@react-navigation/native";

//React Native Maps
import MapView, { Marker } from "react-native-maps";

//Theme
import { themeColors } from "../theme";

//React Native Feather
import * as Icon from "react-native-feather";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Slices
import { selectRestaurant } from "../slices/restaurantSlice";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //console.log(restaurant.lat, restaurant.lng);

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Tahmini Varış Süresi
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Dakika
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Siparişiniz yola çıktı!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../../assets/images/deliveryGuy.png")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Ömer Gündoğdu</Text>
            <Text className="font-semibold text-white">Kuryeniz</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                strokeWidth={1}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X strokeWidth={4} stroke={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
