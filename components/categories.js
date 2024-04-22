import { View, Text } from "react-native"
import React from "react"
import { ScrollView, TouchableOpacity } from "react-native-web"
import { categories } from "../constants"

export default function Categories () {
    return (
        <View className="mt-4">
        <ScrollView
            horizontal
            showHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
        >
            {
                categories.map((category, index)=> {
                    return(
                        <View key = {index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                                className="p-1 rounded-full shadow bg-gray-200">
                                <Image style = {{width: 45, height: 45}}
                                    source={category.name} />
                                    <Text className="text-sm">{category.name}</Text>
                                </TouchableOpacity>
                            </View>
                    )
                })
            }
        </ScrollView>
        </View>
    )
}