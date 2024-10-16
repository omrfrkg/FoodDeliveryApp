import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

//Constants
import { featured } from "../constants";

//Theme
import { themeColors } from "../theme";

//Nav
import { useNavigation } from "@react-navigation/native";

//React Native Feather
import * as Icon from "react-native-feather";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Slices
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";
import { urlFor } from "../../sanity";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFree = 20;
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }

      return group;
    }, {});

    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Sepetiniz</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Tahmini süre 20-30 dakika</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Değiştir
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {cartItems.map((item, index) => (
          <View
            key={index}
            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
          >
            <Text className="font-bold" style={{ color: themeColors.text }}>
              1 x
            </Text>
            <Image
              className="h-14 w-14 rounded-full"
              source={{ uri: urlFor(item.image).url() }}
            />
            <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
            <Text className="font-semibold text-base">{item.price} TL</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              onPress={() => dispatch(removeFromCart({ id: item._id }))}
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Ara toplam</Text>
          <Text className="text-gray-700">{cartTotal} TL</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Getirme ücreti</Text>
          <Text className="text-gray-700">{deliveryFree} TL</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Toplam Tutar</Text>
          <Text className="text-gray-700 font-extrabold">
            {deliveryFree + cartTotal} TL
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPrepairing")}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Satın Al
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
