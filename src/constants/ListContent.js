import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

export default ListContent = ({ data }) => {
    const [playerId, setPlayerId] = useState('');

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.posterName}>{item.name}</Text>
                        {
                            item.post.type === 'image' ?
                                <Swiper showsButtons={false} style={styles.swiper}>
                                    {
                                        item.post.uri.map(item => {
                                            return (
                                                <FastImage style={styles.image} source={{ uri: item }} />
                                            )
                                        })
                                    }
                                </Swiper>
                                :

                                <TouchableWithoutFeedback onPress={() => item.id === playerId ? setPlayerId('') : setPlayerId(item.id)}>
                                    <Video source={{ uri: item.post.uri }}
                                        style={styles.backgroundVideo}
                                        paused={!(playerId === item.id)}
                                        repeat
                                        resizeMode='cover'
                                    />
                                </TouchableWithoutFeedback>
                        }
                    </View>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    posterName: {
        marginTop: 50,
        paddingHorizontal: 20,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#FFF'
    },
    backgroundVideo: {
        width: '100%',
        height: 400,
    },
    image: {
        width: '100%',
        height: 400,
    },
    swiper: {
        height: 350,
    }
});
