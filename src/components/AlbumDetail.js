import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = ({ record }) => {
    const { title, artist, thumbnail_image, image } = record;
    return (
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle}>
                    <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style = {styles.headerTextStyle}>{title} </Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
