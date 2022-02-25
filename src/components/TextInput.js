import React from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput as RNTextInput } from "react-native"

export default TextInput = ({ value, placeholder, onChangeText }) => {
    return (
        <View style={style.container}>
            <RNTextInput style={style.textInput} value={value} placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        borderColor: '#3a64fc',
        backgroundColor: '#FFF',
        borderWidth: 1,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5
    },
    textInput: {
        color: '#000',
    }
});