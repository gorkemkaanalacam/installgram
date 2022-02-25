import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './actionTypes';

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case RESTORE_TOKEN:
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case SIGN_IN:
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case SIGN_OUT:
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }
            dispatch({ type: RESTORE_TOKEN, token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async (data) => {
                // We can send data to server and we receive a token

                await AsyncStorage.setItem('userToken', 'dummy-auth-token');
                dispatch({ type: SIGN_IN, token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: SIGN_OUT }),
        }),
        []
    );

    return (
        <Context.Provider value={{ authContext, state }}>
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
