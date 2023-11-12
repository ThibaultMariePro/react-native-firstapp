import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({weatherData}) => {
    const {
        container,
        imageLayout,
        cityname,
        countryname,
        citytext,
        populationWrapper,
        populationText,
        riseset,
        risesettext,
        rowLayout
    } = styles
    const {city, country, population, sunrise, sunset} = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city640.jpg')}
                style={imageLayout}>
                <Text style={[cityname, citytext]}>{city}</Text>
                <Text style={[countryname, citytext]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName="user"
                        iconColor="red"
                        bodyText={`Population : ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseset, rowLayout]}>
                    <IconText
                        iconName="sunrise"
                        iconColor="orange"
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyles={risesettext}
                    />
                    <IconText
                        iconName="sunset"
                        iconColor="pink"
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyles={risesettext}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    imageLayout: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    cityname: {
        fontSize: 50,
        top: 100,
    },
    countryname: {
        fontSize: 30,
        top: 160,
    },
    citytext: {
        color: '#fff',
        fontWeight: 'bold',
        position: 'absolute',
        left: 20,
    },
    populationWrapper: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        marginTop: 120,
    },
    populationText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
    },
    riseset: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 10,
    },
    risesettext: {
        color: 'darkorange',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City