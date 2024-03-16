import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Checkout} from './views/index.js';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}