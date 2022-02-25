import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native"

export default Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <Text style={style.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create({
    container: {
        backgroundColor: '#3a64fc',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
    }
});