import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Post } from '../screens';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
