import { Text, ScrollView, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { PostScreenProps } from '../navigation/types';
import { UserIcon } from '../assets/icons';
import { PostInteractionSection } from '../components';
import { useGetUserDetailsQuery } from '../redux/api';

const Post = ({ route }: PostScreenProps) => {
  const { post } = route.params;
  const { isLoading, data: user } = useGetUserDetailsQuery({ userId: 7395709 });
  return (
    <View className="bg-background flex-1">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View className="py-2 px-4 justify-between">
            <View className="flex-row space-x-2 items-center mb-4">
              <UserIcon width={68} height={68} />
              <View className="">
                <Text className="text-white font-semibold">{user?.name}</Text>
                <Text className="text-gray-200">
                  @{user?.email.split('@')[0]}
                </Text>
              </View>
            </View>
            <View className="">
              <View className="mb-2">
                <Text className="text-white text-xl mb-2">{post.title}</Text>
                <Text className="text-white text-xl">{post.body}</Text>
              </View>
              <PostInteractionSection />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Post;
