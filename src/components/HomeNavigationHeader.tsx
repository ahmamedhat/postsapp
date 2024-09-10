import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { Account, Feature, Twitter } from '../assets/icons';

const HomeNavigationHeader = () => {
  return (
    <SafeAreaView className="bg-background justify-around border-b-[0.3px] border-gray-800 h-14">
      <View className="flex-row justify-between px-2">
        <Account width={22} height={22} />
        <Twitter width={22} height={22} />
        <Feature width={22} height={22} />
      </View>
    </SafeAreaView>
  );
};

export default HomeNavigationHeader;
