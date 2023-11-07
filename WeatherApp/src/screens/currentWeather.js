import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Weather App</Text>
        <Text>By Skyler White YO</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 80</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect tshirt weather</Text>

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
  },
  highLow: {
    color: 'black',
    fontSize: 20,
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





