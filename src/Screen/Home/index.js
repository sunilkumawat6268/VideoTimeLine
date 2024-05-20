import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  const handleGoogleLogin = () => {
    navigation.navigate('GoogleLogin');
  };

  const handleQRCodeScanner = () => {
    navigation.navigate('QRCodeScanner');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Button title="Google Login" onPress={handleGoogleLogin} />
      </View>
      <View style={styles.buttonView}>
        <Button title="QR Code Scanner" onPress={handleQRCodeScanner} />
      </View>
    </View>
  );
};

export default Home;
