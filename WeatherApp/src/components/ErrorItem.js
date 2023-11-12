import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
    const {
        container,
        errorMessage,
        errorIcon
    } = styles
    return (
        <View style={container}>
            <Feather
                name={'frown'}
                size={100}
                color={'white'}
                style={errorIcon}
            />
            <Text style={errorMessage}>Something went wrong</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    errorIcon: {
        marginBottom: 20,
    }
})

export default ErrorItem;