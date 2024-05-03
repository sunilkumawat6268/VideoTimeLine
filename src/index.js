import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Navigation from './Navigation';

const Root = () => {
  const [state, setState] = useState({
    videoData: [],
  });

  const handleSelectVideo = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(options, res => {
      console.log('!111111', res);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        onPress={handleSelectVideo}
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}>
        <Image
          source={require('./assets/Images/plus.png')}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </TouchableOpacity>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default Root;
