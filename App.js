/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Products from './src/components/products';

function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#f5f5f5',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#162f69'} />
      <Products />
    </SafeAreaView>
  );
}

export default App;
