/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Button } from 'react-native';
import HomeScreen from './src/Component/HomeScreen';
const App = () => {
  return (
     <>
      <StatusBar barStyle="dark-content"/>
      <HomeScreen/>
     </>
  );
};

export default App;
