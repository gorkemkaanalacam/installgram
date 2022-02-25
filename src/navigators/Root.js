import React, { useContext } from 'react';
import { Button, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import { Context } from '../context';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient()

export default Root = () => {
    const { state } = useContext(Context);
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading ? (
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : state.userToken == null ? (
                        <Stack.Screen
                            name="SignIn"
                            component={SignInScreen}
                            options={{
                                title: 'Sign in',
                                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                            }}
                        />
                    ) : (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
