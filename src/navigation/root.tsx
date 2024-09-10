import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Post, Splash } from '../screens';
import { HomeNavigationHeader } from '../components';
import { RootNavigationParamList } from './types';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

function RootNavigation() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Stack.Navigator>
      {isReady ? (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <HomeNavigationHeader />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#121212',
              },
              headerTitleStyle: {
                color: '#ffffff',
              },
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigation;
