import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Root from './src';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />
      <Root />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
