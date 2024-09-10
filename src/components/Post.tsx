import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Post as PostType } from '../redux/types';
import { UserIcon } from '../assets/icons';
import { RootNavigationScreensNavigationProp } from '../navigation/types';
import PostInteractionSection from './PostInteractionSection';

const Post = (post: PostType) => {
  const navigation = useNavigation<RootNavigationScreensNavigationProp>();

  const onPostClick = () => {
    navigation.navigate('Post', { post });
  };

  return (
    <Pressable
      onPress={onPostClick}
      className="flex-row py-2 px-2 justify-between border-gray-800 border-b-[0.5px]">
      <View className="w-[14%]">
        <UserIcon width={48} height={48} />
      </View>
      <View className="w-[82%] ">
        <View className="flex-row justify-between mb-2">
          <Text className="text-white w-[86%]">{post.title}</Text>
          <Text className="text-white">13m</Text>
        </View>
        <Text className="text-white">{post.body}</Text>
        <PostInteractionSection />
      </View>
    </Pressable>
  );
};

export default Post;
