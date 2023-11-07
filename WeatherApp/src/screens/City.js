import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const City = () => {
    const {container} = styles
    return (
        <SafeAreaView style={container}>
            <Text>City</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0

    }
})

export default City