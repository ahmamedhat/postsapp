import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { Comment, Post, User } from './types';

const api = createApi({
  reducerPath: 'api',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
  }),
  endpoints: build => ({
    getUsers: build.query<User[], void>({
      query() {
        return {
          url: 'users',
          method: 'GET',
        };
      },
    }),
    getPosts: build.query<Post[], void>({
      query() {
        return {
          url: 'posts',
          method: 'GET',
        };
      },
    }),
    getPostComments: build.query<Comment[], { postId: number }>({
      query(arg) {
        const { postId } = arg;
        return {
          url: `posts/${postId}/comments`,
          method: 'GET',
        };
      },
    }),
    getUserDetails: build.query<User, { userId: number }>({
      query(arg) {
        const { userId } = arg;
        return {
          url: `users/${userId}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export default api;

export const { useGetPostsQuery, useGetUserDetailsQuery } = api;
