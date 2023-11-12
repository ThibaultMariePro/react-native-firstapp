import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';
import { useGetWeather } from './src/hooks/useGetWeather';
import OurButton from './src/demo/OurButton';
import Counter from './src/demo/Counter';

const App = () => {
  const { container } = styles;
  const [isLoading, errorMsg, weather] = useGetWeather()

  console.log(isLoading, errorMsg, weather)

  // if (weather && weather.list && !isLoading) {
  //   return (
  //     <NavigationContainer>
  //       <Tabs weather={weather} />
  //     </NavigationContainer>
  //   )
  // }

  return (
    <View style={container}>
      {/* <OurButton /> */}
      {/* <Counter/> */}
      {errorMsg ?
        (
          <ErrorItem />
          ) : (
          <ActivityIndicator
            size={'large'}
            color={'red'}
          />
        )}
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