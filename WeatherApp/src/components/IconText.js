import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { textTheme, container } = styles;
    const { iconName, iconColor, bodyText, bodyTextStyles } = props; 
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    textTheme: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default IconText;