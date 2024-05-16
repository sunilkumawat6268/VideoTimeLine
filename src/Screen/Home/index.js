import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  const handleGoogleLogin = () => {
    navigation.navigate('GoogleLogin');
  };

  return (
    <View style={styles.container}>
      <Button title="Google Login" onPress={handleGoogleLogin} />
    </View>
  );
};

export default Home;
