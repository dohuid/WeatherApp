// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from 'C:/Users/user/reactNative/Weather/screens/img/logo1.png';

const ClothScreen = () => {
  return (
    <View style={styles.container}>
      <Image style ={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/logo1.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEDED',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  ImageSize: {
    width: 60,
    height: 60,
  },
});

export default ClothScreen; 