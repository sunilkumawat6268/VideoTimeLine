import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';

const Root = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default Root;
