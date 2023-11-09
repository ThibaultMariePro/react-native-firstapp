import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//418d98a374fc55f3122e1a0aae143b91

const App = () => {
  const { container } = styles;
  const [isLoading, errorMsg, weather] = useGetWeather()

  console.log(isLoading, errorMsg, weather)

  if(weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  if (isLoading) {
    return (
      <View style={container}>
        <ActivityIndicator
          size={'large'}
          color={'blue'}
        />
      </View>
    )
  }

  return (
    <View style={container}>
      <ActivityIndicator
        size={'large'}
        color={'red'}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default App;