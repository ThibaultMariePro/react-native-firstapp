import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const OurButton = () => {
    const { container, buttonText } = styles
    const onPress = () => {
        console.log('hello')
    }
    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Text style={buttonText}> Hello </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 8, //only on android
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export default OurButton;