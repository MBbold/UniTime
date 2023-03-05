/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigator/Stack';
import {SplashProvider} from './src/provider/SplashContext';
function App(): JSX.Element {
  return (
    <SplashProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SplashProvider>
  );
}

export default App;
