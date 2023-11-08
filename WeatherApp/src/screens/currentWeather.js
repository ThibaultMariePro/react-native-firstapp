import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText'
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    highLowWrapper,
    highLow,
    description,
    message,
    temp,
    feels
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Weather App</Text>
        <Text>By Skyler White YO</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          msg1="High: 8"
          msg2="Low: 4"
          containerStyles={highLowWrapper}
          msg1Styles={highLow}
          msg2Styles={highLow}
        />
      </View>
      <View style={styles.bodyWrapper}>
        <RowText
          msg1={'clear'}
          msg2={weatherType['Clear'].message}
          containerStyles={highLowWrapper}
          msg1Styles={description}
          msg2Styles={message}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  wrapper: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  highLowWrapper: {
    color: 'black',
    fontSize: 20,
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'pink',
  },
  description: {
    color: 'black',
    fontSize: 48,
  },
  message: {
    color: 'black',
    fontSize: 30,
  }
})

export default CurrentWeather;





