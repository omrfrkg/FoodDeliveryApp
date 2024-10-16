import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";

//Constants
import { categories } from "../constants";

//API
import { getCategories } from "../services/api";

//Sanity
import { urlFor } from "../../sanity";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={"p-1 rounded-full shadow bg-gray-200 " + btnClass}
                onPress={() => setActiveCategory(category._id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  //source={category.image}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
