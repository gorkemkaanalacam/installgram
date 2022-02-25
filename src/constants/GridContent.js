import React, { } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

const width = Dimensions.get('screen').width;

export default GridContent = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                data.map((item) => {
                    return (
                        item.post.type === 'image' ?
                            <FastImage style={styles.image} source={{ uri: item.post.uri[0] }} />
                            :
                            <Video source={{ uri: item.post.uri }}
                                style={styles.backgroundVideo}
                                repeat
                                resizeMode='cover'
                            />
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    backgroundVideo: {
        width: width / 3,
        height: width / 3,
        backgroundColor: '#000'
    },
    image: {
        width: width / 3,
        height: width / 3,
        backgroundColor: '#000'
    },
});
