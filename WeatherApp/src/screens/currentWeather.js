import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText'
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    highLowWrapper,
    highLow,
    description,
    message,
    tempStyles,
    feels
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white" 
        />
        <Text>Weather App</Text>
        <Text>By Skyler White YO</Text>
        <Text style={tempStyles}>
          {`${temp}°`}
        </Text>
        <Text style={feels}>
          {`Feels like ${feels_like}`}
          </Text>
        <RowText
          msg1={`High: ${temp_max}° `}
          msg2={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          msg1Styles={highLow}
          msg2Styles={highLow}
        />
      </View>
      <View style={styles.bodyWrapper}>
        <RowText
          msg1={weather[0]?.description}
          msg2={weatherType[weatherCondition]?.message}
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
    flex: 2,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
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





