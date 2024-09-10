import { View } from 'react-native';
import React from 'react';
import { Twitter } from '../assets/icons';

const Splash = () => {
  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Twitter width={120} height={120} />
    </View>
  );
};

export default Splash;
