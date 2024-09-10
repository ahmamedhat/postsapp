import { SafeAreaView, ActivityIndicator } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { useGetPostsQuery } from '../redux/api';
import { PostCard } from '../components';

const Home = () => {
  const { isLoading, data } = useGetPostsQuery();

  return (
    <SafeAreaView className="flex-1 bg-background">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlashList
          data={data}
          renderItem={({ item }) => <PostCard {...item} />}
          estimatedItemSize={200}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
