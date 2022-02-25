import React, { createContext, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from '../components';
import { Context } from '../context';

export default SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(Context).authContext;

    return (
        <View style={style.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        margin: 20
    }
});