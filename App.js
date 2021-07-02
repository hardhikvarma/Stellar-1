
import React from 'react';
import { Text, View } from 'react-native';
import DailyPicScreen from "./screens/DailyPicScreen";
import SpaceCraftsScreen from "./screens/SpaceCraftsScreen";
import StarMapScreen from './screens/StarMapScreen';
import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

const Stack= createStackNavigator();

export default function App() {
   return ( 
   <NavigationContainer> 
   <Stack.Navigator initialRouteName="Home" 
   screenOptions={{ headerShown: false
   }}> 
   <Stack.Screen name="Home" component={HomeScreen} 
   /> 
   <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} 
   /> 
   <Stack.Screen name="StarMap" component={StarMapScreen} 
   /> 
   <Stack.Screen name="DailyPicScreen" component={DailyPicScreen} 
   /> 
   </Stack.Navigator> 
   </NavigationContainer> 
   ); 
  } 

  export default App;



