import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default SplashScreen = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
