import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <View>
      <Text>Hello in the Navigation </Text>
    </View>
  );
};

export default Navigation;
