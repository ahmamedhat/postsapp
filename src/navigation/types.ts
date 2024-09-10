import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootNavigationParamList = {
  Home: undefined;
  Post: undefined;
};

export type RootNavigationScreensNavigationProp =
  NativeStackNavigationProp<RootNavigationParamList>;
