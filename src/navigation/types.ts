import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Post } from '../redux/types';

export type RootNavigationParamList = {
  Home: undefined;
  Post: { post: Post };
  Splash: { post: Post };
};

export type RootNavigationScreensNavigationProp =
  NativeStackNavigationProp<RootNavigationParamList>;

export type PostScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  'Post'
>;
