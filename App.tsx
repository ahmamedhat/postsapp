import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import Config from 'react-native-config';
import RootNavigation from './src/navigation/root';
import { store } from './src/redux/store';

function App(): React.JSX.Element {
  console.log('app config', Config.BASE_URL);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar barStyle={'light-content'} />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
