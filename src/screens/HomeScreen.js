import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

//React Native Feather
import * as Icon from "react-native-feather";

//Theme
import { themeColors } from "../theme";

//Components
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";

//Constants
import { featured } from "../constants";

//API
import { getFeaturedRestaurants } from "../services/api";

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  });
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={"dark-content"} />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={"25"} width={"25"} stroke={"gray"} />
          <TextInput placeholder="Restaurantlar" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={"20"} width={"20"} stroke={"gray"} />
            <Text className="text-gray-600">Atakum, SAMSUN</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={"20"}
            width={"20"}
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {featuredRestaurants.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
