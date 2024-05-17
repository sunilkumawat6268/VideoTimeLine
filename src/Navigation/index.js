import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      {Routes?.map((item, index) => (
        <Stack.Screen key={item.name} {...item} />
      ))}
    </Stack.Navigator>
  );
};

export default Navigation;
