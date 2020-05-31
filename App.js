import { Router, Stack, Scene } from "react-native-router-flux";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/HomeScreen";

const App = () => (
    <Router>
        <Scene key="root">

            <Scene
                key="HomeScreen"
                type="replace"
                title="Xbox Game Pass"
                hideNavBar={true}
                component={HomeScreen}
                initial
            />

        </Scene>
    </Router>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#3F51B5',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '900'
  }
})
export default App;
