import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentWeather from './src/screens/currentWeather';
import UpcomingWeather from './src/screens/upcomingWeather';
import OurChild from './src/components/OurChild';
import City from './src/screens/City';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <UpcomingWeather /> */}
      {/* <OurChild message="Hello World" /> */}
      {/* <OurChild message="OLA YO FUCK" /> */}
      {/* <OurChild message="I'M SKYLER WHIIIIIIIIIITE" /> */}
      <City/>
    </View > 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;