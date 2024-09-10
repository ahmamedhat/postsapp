import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Comment, Heart, Retweet } from '../assets/icons';

const PostInteractionSection = () => {
  const generateDummyNumber = () => Math.floor(Math.random() * 100) + 1;

  return (
    <View className="flex-row justify-between mt-4">
      <TouchableOpacity className="flex-row space-x-1 justify-center items-center">
        <Comment width={12} height={12} stroke={'white'} />
        <Text className="text-white">{generateDummyNumber()}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row space-x-1 justify-center items-center">
        <Retweet width={14} height={14} stroke={'white'} />
        <Text className="text-white">{generateDummyNumber()}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row space-x-1 justify-center items-center">
        <Heart width={12} height={12} stroke={'#FE8E86'} />
        <Text className="text-white">{generateDummyNumber()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostInteractionSection;
