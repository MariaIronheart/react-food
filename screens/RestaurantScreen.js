import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View , Text} from 'react-native';


export default function RestaurantScreen () {
    const {params} = useRoute();
    let item = params;
    console.log('Restaurant: ',item);
    return (
        <View>
            <Text>RestaurantScreen</Text>
        </View>
    )
}