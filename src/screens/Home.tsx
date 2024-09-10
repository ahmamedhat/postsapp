import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationScreensNavigationProp } from '../navigation/types';

const Home = () => {
  const navigation = useNavigation<RootNavigationScreensNavigationProp>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Post')}>
        <Text>Go to Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
