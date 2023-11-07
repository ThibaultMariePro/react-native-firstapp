import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2022-08-30 12:00:00",
        main: {
            "temp_max": 8.55,
            "temp_min": 7.48,
        },
        weather: "Sunny"
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            "temp_max": 8.55,
            "temp_min": 7.48,
        },
        weather: "Clear"
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            "temp_max": 8.55,
            "temp_min": 7.48,
        },
        weather: "Clear"
    },

];

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    const {container, image} = styles; 

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/cloudsEtheral1280.jpg')}
                style={image}
            >
                <Text>UpcomingWeather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_txt}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'red', height: 2 }} />}
                />
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        width: '100',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
    },


})

export default UpcomingWeather;