import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View , Text} from 'react-native';
import HomeScreen from './screens/HomeSreen';
import RestaurantScreen from './screens/RestaurantScreen';



const Stack = createNativeStackNavigator();

export default function Navigation()  {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Restaurante" component={RestaurantScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}