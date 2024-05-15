import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View , Text, TextInput} from 'react-native';
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { ScrollView } from 'react-native';
import Categories from '../components/categories';
import { featured } from '../constants';
import { res } from '../constants';
import { odio } from '../constants';
import FeaturedRow from '../components/featuredRow';



export default function HomeScreen () {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content"/>
            {/*Search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2"> 
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" widht="25" stroke="gray"/>
                    <TextInput placehodler="Restaurantes" className="ml-2 flex-1"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" widht="20" stroke="gray"/>
                    <Text className="text-gray-600">São Paulo, SP</Text>
                    </View>
                </View>

                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainersStyle={{
                paddingBottom: 20
            }}
            >
            <Categories/>

            {/*Featured*/}
            <View className="mt-5">
            {
                [featured, res, odio].map((item, index)=>{
                    return (
                        <FeaturedRow
                            key={index}
                            title={item.title}
                            restaurants={item.restaurants}
                            description={item.description}
                        />
                    )
                })
            }

            </View>


            </ScrollView>

        </SafeAreaView>
    )
}