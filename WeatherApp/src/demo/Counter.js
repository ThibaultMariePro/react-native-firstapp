import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {

    const { container, title } = styles;

    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)
    
    useEffect(() => {
        console.log(`value is ${count}`) 
        return () => {
            console.log('useEffect clean up')
        }
    }, [count]) // only run when count changes

    return (
        <View style={container}>
            <Text style={title}>{`count ${count}`}</Text>
            <Button
                color={'red'}
                title={'increase'}
                onPress={() => setCount(count + 1)} />
            <Button
                color={'green'}
                title={'decrease'}
                onPress={() => setCount(count - 1)} />
            <Text style={title}>{`count ${newCount}`}</Text>
            <Button
                color={'red'}
                title={'increase nc'}
                onPress={() => setNewCount(newCount + 1)} />
            <Button
                color={'green'}
                title={'decrease nc'}
                onPress={() => setNewCount(newCount - 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    }
})

export default Counter;
