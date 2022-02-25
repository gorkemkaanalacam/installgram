import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { useQuery } from 'react-query';
import { Context } from '../context';
import ListContent from '../constants/ListContent';
import GridContent from '../constants/GridContent';
import { TextInput } from '../components';

const width = Dimensions.get('screen').width;

export default HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [postData, setPostData] = useState([]);

    const { signOut } = useContext(Context).authContext;
    const { isLoading, isError, data, error } = useQuery('todos', () => fetch('https://621248e501ccdac07436ce1f.mockapi.io/api/v1/datas').then((res) => res.json()));

    useEffect(() => {
        setPostData(data);
    }, [data])

    useEffect(() => {
        const filteredData = data?.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
        setPostData(filteredData);
    }, [term])

    return (
        <View style={styles.container}>
            {
                isLoading ?
                    <ActivityIndicator />
                    :
                    <>
                        <View style={styles.textContainer}>
                            <TextInput placeholder='search' value={term} onChangeText={setTerm} />
                        </View>
                        {
                            term ?
                                <GridContent data={postData} />
                                :
                                <ListContent data={postData} />
                        }
                    </>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        padding: 20
    }
});
