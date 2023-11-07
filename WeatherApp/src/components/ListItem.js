import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = styles
    return (
        <View style={item}>
            <Feather name="sun" size={50} color="white" />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 24,
        color: 'white',
    },
    temp: {
        fontSize: 24,
        color: 'white',
    },
})

export default ListItem;