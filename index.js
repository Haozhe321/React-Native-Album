//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Header from './src/components/header'; //specify path as there might be other Header
import AlbumList from './src/components/AlbumList';
//Create a Component
//a component is javascript fn that returns some amt of jsx
//react renders it to the screen
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

//Render it to device
//render an application called album.
//2nd argument is a function that returns a component
AppRegistry.registerComponent('album', () => App);
