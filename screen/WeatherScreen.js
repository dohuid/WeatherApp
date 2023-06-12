// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const[days, setDays] = useState([]);
const API_KEY = `baf7cdd5659d3b8989565471825a8ebd`;

const WeatherScreen = () => {
  return (
    <View style ={styles.container} style={styles.container}>
      <Text>날짜 넣기</Text>
      <Text>위치 넣기</Text>
      <Image style ={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/logo2.png')} />
      <Text>날씨 넣기</Text>
      <Text>온도 넣기</Text>
    </View>
  );
};

const GeoLocationAPI = ({

}) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                setLatitude(latitude);
                setLogitude(longitude);
            },
            error => { console.log(error.code, error.message); },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
        )
    }

    return (
        <View>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <TouchableOpacity onPress={() => geoLocation()}>
                <Text> Get GeoLocation </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default GeoLocationAPI;