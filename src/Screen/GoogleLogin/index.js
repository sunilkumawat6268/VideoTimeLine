import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {styles} from './styles';

const GoogleLogin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '882597926798-d2gn7e11eu6kunrs36aet7ebes5jgegf.apps.googleusercontent.com',
    });
  }, []);
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World in the Google Login</Text>
      <TouchableOpacity
        onPress={handleGoogleSignIn}
        style={styles.googleLoginButton}>
        <Image
          source={require('../../assets/Images/googleImg.png')}
          style={styles.googleImage}
        />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;
