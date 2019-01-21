//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component
//a component is javascript fn that returns some amt of jsx
//react renders it to the screen
const App = () => (
    <Text> Some text </Text>
);

//Render it to device
//render an application called album.
//2nd argument is a function that returns a component
AppRegistry.registerComponent('album', () => App);
